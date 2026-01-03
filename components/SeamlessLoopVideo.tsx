"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type VideoSource = {
  src: string;
  type: string;
};

type Props = {
  sources: VideoSource[];
  className?: string;
  style?: React.CSSProperties;
  /** Crossfade length in ms */
  crossfadeMs?: number;
  /** Opacity applied to the active video layer (0..1). */
  activeOpacity?: number;
};

/**
 * Seamless background loop by crossfading between two identical <video> elements.
 * This avoids the "hard restart" look when the underlying asset isn't perfectly loopable.
 */
export default function SeamlessLoopVideo({
  sources,
  className,
  style,
  crossfadeMs = 500,
  activeOpacity = 0.6,
}: Props) {
  const videoRefs = [useRef<HTMLVideoElement | null>(null), useRef<HTMLVideoElement | null>(null)];
  const [activeIdx, setActiveIdx] = useState<0 | 1>(0);
  const isCrossfadingRef = useRef(false);

  const activeStyle = useMemo(
    () => ({ ...style, opacity: activeOpacity }),
    [style, activeOpacity]
  );

  const inactiveStyle = useMemo(() => ({ ...style, opacity: 0 }), [style]);

  // Start first video on mount.
  useEffect(() => {
    const v0 = videoRefs[0].current;
    if (!v0) return;
    v0.currentTime = 0;
    v0.play().catch(() => {});
  }, []);

  // Crossfade loop.
  useEffect(() => {
    let raf = 0;

    const tick = () => {
      const current = videoRefs[activeIdx].current;
      const next = videoRefs[activeIdx === 0 ? 1 : 0].current;

      if (current && next && !isCrossfadingRef.current) {
        const duration = current.duration;
        if (Number.isFinite(duration) && duration > 0) {
          const remaining = duration - current.currentTime;
          const threshold = Math.max(0.12, crossfadeMs / 1000);

          if (remaining <= threshold) {
            isCrossfadingRef.current = true;

            // Start the next video from the beginning.
            try {
              next.currentTime = 0;
            } catch {
              // ignore
            }
            next.play().catch(() => {});

            const old = current;
            const nextIdx: 0 | 1 = activeIdx === 0 ? 1 : 0;
            setActiveIdx(nextIdx);

            window.setTimeout(() => {
              old.pause();
              try {
                old.currentTime = 0;
              } catch {
                // ignore
              }
              isCrossfadingRef.current = false;
            }, crossfadeMs);
          }
        }
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [activeIdx, crossfadeMs]);

  return (
    <>
      {[0, 1].map((i) => {
        const isActive = i === activeIdx;
        return (
          <video
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            ref={(el) => {
              videoRefs[i].current = el;
            }}
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            className={[
              className ?? "",
              "transition-opacity will-change-[opacity]",
              crossfadeMs ? `duration-[${crossfadeMs}ms]` : "",
              "ease-linear",
            ].join(" ")}
            style={isActive ? activeStyle : inactiveStyle}
          >
            {sources.map((s) => (
              <source key={`${s.src}-${s.type}`} src={s.src} type={s.type} />
            ))}
          </video>
        );
      })}
    </>
  );
}



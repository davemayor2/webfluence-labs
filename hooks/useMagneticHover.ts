import { useState, useRef, useCallback } from "react";

interface UseMagneticHoverOptions {
  maxDistance?: number;
  easing?: number;
}

export function useMagneticHover(options: UseMagneticHoverOptions = {}) {
  const { maxDistance = 6, easing = 0.15 } = options;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const cappedDistance = Math.min(distance, maxDistance);

      const angle = Math.atan2(deltaY, deltaX);
      const cappedX = Math.cos(angle) * cappedDistance;
      const cappedY = Math.sin(angle) * cappedDistance;

      setPosition((prev) => ({
        x: prev.x + (cappedX - prev.x) * easing,
        y: prev.y + (cappedY - prev.y) * easing,
      }));
    },
    [maxDistance, easing]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 && position.y === 0 ? "transform 0.3s ease-out" : "none",
  };

  return {
    ref: buttonRef as React.RefObject<any>,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style,
  };
}

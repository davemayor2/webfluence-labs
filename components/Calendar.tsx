"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function Calendar() {
  useEffect(() => {
    // Initialize Cal.com embed using their initialization pattern
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        if (!a.q) a.q = [];
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            api.q = api.q || [];
            const namespace = ar[1];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Wait for script to load, then initialize
    const initCalendar = () => {
      if (window.Cal) {
        window.Cal("init", "30min", { origin: "https://app.cal.com" });

        setTimeout(() => {
          if (window.Cal?.ns?.["30min"]) {
            window.Cal.ns["30min"]("inline", {
              elementOrSelector: "#my-cal-inline-30min",
              config: { layout: "month_view" },
              calLink: "heykumarnitish/30min",
            });

            window.Cal.ns["30min"]("ui", {
              hideEventTypeDetails: false,
              layout: "month_view",
            });
          }
        }, 100);
      } else {
        setTimeout(initCalendar, 50);
      }
    };

    initCalendar();
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-8 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-site-container">
          <div className="bg-[#0B0B0B] border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div
              id="my-cal-inline-30min"
              style={{
                width: "100%",
                height: "600px",
                overflow: "auto",
                minHeight: "600px",
              }}
              className="cal-inline-wrapper"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


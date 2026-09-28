"use client";

import { useEffect } from "react";

interface CalendlyWidgetProps {
  url: string;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: document.getElementById("calendly-inline-widget"),
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div
      id="calendly-inline-widget"
      className="min-w-[320px] h-[700px] w-full"
    />
  );
}

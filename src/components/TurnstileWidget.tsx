"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: any) => string;
      remove: (widgetId: string) => void;
    };
  }
}

type Props = {
  siteKey: string;
  onToken: (token: string | null) => void;
};

const TurnstileWidget = ({ siteKey, onToken }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [widgetId, setWidgetId] = useState<string | null>(null);

  const renderWidget = () => {
    if (!ref.current || !window.turnstile) return;
    if (widgetId) return;

    const id = window.turnstile.render(ref.current, {
      sitekey: siteKey,
      theme: "light",
      callback: (token: string) => onToken(token),
      "expired-callback": () => onToken(null),
      "error-callback": () => onToken(null),
    });

    setWidgetId(id);
  };

  useEffect(() => {
    renderWidget();

    const t = setInterval(() => {
      if (!widgetId) renderWidget();
    }, 250);

    return () => {
      clearInterval(t);
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey, widgetId]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div ref={ref} />
    </>
  );
};

export default TurnstileWidget;

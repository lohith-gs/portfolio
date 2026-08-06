"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

/**
 * Swaps the tab favicon to match the active mode:
 * blue { } braces for Work, the >_ prompt for Fun.
 */
export function FaviconSwitcher() {
  const { theme } = useTheme();

  useEffect(() => {
    const href = theme === "fun" ? "/icon-fun.svg" : "/icon-work.svg";
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = href;
  }, [theme]);

  return null;
}

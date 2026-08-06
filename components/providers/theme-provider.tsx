"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Drives the Work / Fun duality. next-themes writes the chosen mode to the
 * `data-mode` attribute on <html>, which flips every semantic CSS token.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-mode"
      defaultTheme="work"
      enableSystem={false}
      themes={["work", "fun"]}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}

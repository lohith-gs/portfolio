import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { FaviconSwitcher } from "@/components/favicon-switcher";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "Sri Lohith Gelli · Senior Full Stack Engineer";
const description =
  "Senior Full Stack Engineer (React, Next.js, TypeScript, Node). I build web apps for work, and developer tools for fun: DevLens, tan(AI) and Git City. Open to remote roles & relocation.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://gslohith.netlify.app"),
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: { url: "/icon-work.svg", type: "image/svg+xml" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <ThemeProvider>
          <FaviconSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

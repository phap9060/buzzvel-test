import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/shared/config/site";
import "./globals.css";

// Only the weights used by the design are loaded, self-hosted by next/font.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f9f8f3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // scroll-pt keeps anchored sections clear of the sticky header
      className={`${inter.variable} ${jakarta.variable} scroll-pt-18 scroll-smooth antialiased motion-reduce:scroll-auto`}
    >
      {/* Site-wide defaults: surface, text, focus ring and reduced motion. */}
      <body className="flex min-h-dvh flex-col bg-cream font-sans text-ink motion-reduce:**:transition-none! [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-2 [&_:focus-visible]:outline-brand">
        {children}
      </body>
    </html>
  );
}

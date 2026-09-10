import { ReactLenis } from "lenis/react";
// Self-hosted Jost & Manrope (variable-weight woff2, latin + cyrillic
// subsets) via Fontsource. We'd normally reach for next/font/google here —
// it self-hosts too, but it fetches the font files from
// fonts.googleapis.com at BUILD time, and that host is blocked by this
// sandbox's egress policy. Fontsource ships the identical open-font-license
// files as an ordinary npm package (npm's registry isn't blocked), so this
// import gives the same end result: real @font-face rules bundled into the
// build, zero runtime requests to Google. On a normal host with open
// internet you could swap this back for next/font/google if you prefer.
import "@fontsource-variable/jost";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata = {
  title: "ASBIS Team 5 — Каталог смартфонов",
  description:
    "Официальный дистрибьютор смартфонов в Узбекистане: Apple, Xiaomi, Honor, Nokia, itel, Blackview, Prestigio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="min-h-svh antialiased">
        {/* `root` mode makes Lenis take over the whole window's scrolling —
            this is the inertial/smooth scroll you noticed on the reference
            site. Every anchor link and `element.scrollIntoView` on the page
            automatically inherits the smoothing, no extra wiring needed. */}
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}

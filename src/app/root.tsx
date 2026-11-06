/* eslint-disable react-refresh/only-export-components */
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { site } from "@/constants/site";
import "./app.css";

export function meta() {
  return [
    { title: `${site.name} — ${site.tagline}` },
    { name: "description", content: site.description },
    { name: "theme-color", content: "#0a0b0f" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="relative flex min-h-svh flex-col">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-full bg-gold px-5 py-2 text-night focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        ข้ามไปยังเนื้อหา
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

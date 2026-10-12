import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/nunito";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} · Job Hunt Journey`,
    template: `%s · ${profile.name}`,
  },
  description: `${profile.headline}: career journey and job hunt dashboard.`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef1f8" },
    { media: "(prefers-color-scheme: dark)", color: "#161a2c" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh">
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 pt-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

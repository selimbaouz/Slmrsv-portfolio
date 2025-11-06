import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider"
import React from "react";
import LayoutClient from "@/components/LayoutClient";

export const metadata: Metadata = {
  title: {
    default: "Selim Baouz | Multidisciplinary Developer: Shopify, SaaS & Headless Solutions",
    template: "%s | Selim Baouz",
  },
  description:
    "I'm Selim Baouz, a multidisciplinary developer crafting custom Shopify stores, SaaS solutions, and Canva Apps. With 7+ years of experience, I blend code, design, and user experience to build high-performance applications tailored to your business needs.",
  keywords: [
    "Selim Baouz",
    "Multidisciplinary developer",
    "Shopify developer",
    "Liquid",
    "Hydrogen",
    "Headless Shopify",
    "Next.js developer",
    "Custom Shopify stores",
    "SaaS solutions",
    "Canva apps",
    "UI/UX",
    "High-performance apps",
    "Web development",
    "E-commerce",
    "Shopify apps",
    "React developer",
    "Headless commerce",
  ],
  authors: [{ name: "Selim Baouz" }],
  creator: "Selim Baouz",
  publisher: "Selim Baouz",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://selimbaouz.com",
    siteName: "Selim Baouz",
    title:
      "Selim Baouz – Multidisciplinary Shopify & SaaS Developer",
    description:
      "Selim Baouz specializes in custom Shopify stores, modern SaaS solutions, and Canva app development. Creating seamless digital experiences where code, design and real user needs meet.",
    images: [
      {
        url: "https://selimbaouz.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Selim Baouz - Multidisciplinary Developer, Shopify & SaaS Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@selimbaouz",
    creator: "@selimbaouz",
    title:
      "Selim Baouz | Multidisciplinary Shopify, SaaS & Headless Developer",
    description:
      "Experienced developer building custom Shopify stores, SaaS applications, and Canva Apps — specialist in headless architectures and user-first experiences.",
    images: ["https://selimbaouz.com/images/og-image.webp"],
  },
  verification: {
    google: "VeUQ003CQJEmqI8Jhat7AsydV1Lf4NOuzEaViRaR5BQ",
  },
  alternates: {
    canonical: "https://selimbaouz.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
      <LayoutClient>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <SpeedInsights />
        <Analytics />
          <div className={`min-h-[100dvh] flex-1 flex flex-col relative font-montserrat`}>{children}</div>  
        </ThemeProvider>
      </LayoutClient>
  );
}

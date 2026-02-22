import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider"
import React from "react";
import LayoutClient from "@/components/LayoutClient";

export const metadata: Metadata = {
  title: {
    default: "Selimmersive Studio | Multidisciplinary Developer: Shopify, SaaS & Headless Solutions",
    template: "%s | Selimmersive Studio",
  },
  description:
    "I'm Selim Baouz, a multidisciplinary developer crafting custom Shopify stores, SaaS solutions, and Canva Apps. With 7+ years of experience, I blend code, design, and user experience to build high-performance applications tailored to your business needs.",
  keywords: [
    "Selim Baouz",
    "Selimmersive Studio",
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
    url: "https://selimmersive.com",
    siteName: "Selimmersive Studio",
    title: "Selimmersive Studio",
    description: "Selimmersive Studio is a multidisciplinary studio that specializes in custom Shopify stores, modern SaaS solutions, and Canva app development. Creating seamless digital experiences where code, design and real user needs meet.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@selimbaouz",
    creator: "@selimbaouz",
    title:
      "Selim Baouz | Multidisciplinary Shopify, SaaS & Headless Developer",
    description:
      "Experienced developer building custom Shopify stores, SaaS applications, and Canva Apps — specialist in headless architectures and user-first experiences.",
    images: ["https://selimmersive.com/images/og-image.webp"],
  },
  verification: {
    google: "VeUQ003CQJEmqI8Jhat7AsydV1Lf4NOuzEaViRaR5BQ",
  },
  alternates: {
    canonical: "https://selimmersive.com",
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

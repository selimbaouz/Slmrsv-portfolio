import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider"
import React from "react";
import LayoutClient from "@/components/LayoutClient";

export const metadata: Metadata = {
  title: {
    default: "Shopify Developer | Liquid, Hydrogen & Headless (Next.js) | Selim Baouz",
    template: "%s | Selim Baouz",
  },
  description:
    "I build custom, high-performance and pixel-perfect Shopify stores, specializing in Liquid, Hydrogen, and headless architectures with Next.js to deliver tailored e-commerce solutions.",
  keywords: [
    "Shopify developer",
    "Liquid",
    "Hydrogen",
    "Headless commerce",
    "Headless Shopify",
    "Next.js developer",
    "Custom Shopify stores",
    "E-commerce development",
    "High-performance web",
    "Pixel-perfect design",
    "Shopify themes",
    "Shopify apps",
    "React developer",
    "SaaS development",
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
      "Shopify Developer | Liquid, Hydrogen & Headless (Next.js) - Custom, high-performance stores]",
    description:
      "Specialized in building custom, pixel-perfect Shopify e-commerce experiences using advanced headless techniques with Next.js and Shopify Hydrogen.",
    images: [
      {
        url: "https://selimbaouz.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Selim Baouz - Shopify Developer and Headless Commerce Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@selimbaouz",
    creator: "@selimbaouz",
    title:
      "Shopify Developer | Liquid, Hydrogen & Headless (Next.js) | Custom high-performance stores",
    description:
      "Expert in Shopify development, specializing in Liquid, Hydrogen, and headless commerce architectures with Next.js.",
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

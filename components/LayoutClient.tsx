"use client";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import useMouseFollower from "@/animations/useMouseFollower";
import Head from "next/head";
import CircleMouse from "./CircleMouse";

const montserrat = Montserrat({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
  variable: "--font-ms",
});

const LayoutClient = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useMouseFollower();

  return (
    <html
      lang="en"
      className="h-full"
      suppressHydrationWarning
    >
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={cn(montserrat.variable, "relative bg-background font-sans antialiased")}>
        <CircleMouse />
        {children}
      </body>
    </html>
  );
};

export default LayoutClient;


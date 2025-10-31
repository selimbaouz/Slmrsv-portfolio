"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { useIsHydrated } from "@/hook/useIsHydrated";
import Portfolio from '@/public/images/gif.gif'
import Image from "next/image";
import NavBarDesktop from "./navigations/NavBarDesktop";

const words = [
  "Stores", 
  "Themes", 
  "Solutions",
  "Custom",
  "Headless", 
  "Experiences",
];

const HeaderPage = () => {
  const isHydrated = useIsHydrated();
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHydrated) return;

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, isHydrated]);

  if (!isHydrated) {
    return null;
  }

  return (
    <header
      id="home"
      className={cn(
        "overflow-hidden relative size-full grid grid-rows-2 justify-start items-end",
        "xl:grid-cols-2 xl:items-end xl:grid-rows-1 xl:h-[100dvh] xl:px-20 xl:py-14"
      )}
    >
      <div className="lg:flex lg:flex-col lg:justify-between lg:h-full">
         <NavBarDesktop />
        <div
          className={cn(
            "p-6 space-y-6",
            "xl:px-0"
          )}
        >
          <h1
            className={cn(
              "text-[45px] leading-10 sm:text-[50px] sm:leading-12 bigTitle",
              "md:text-6xl md:leading-16",
              "xl:text-[80px] xl:leading-[95px]",
              "whitespace-pre-wrap",
              "text-foreground text-left"
            )}
          >
            I create
            <br />
            <div className="pt-1 lg:pt-2">
              <span className="font-bold uppercase md:text-[85px] md:leading-16 lg:text-[110px] lg:leading-24 xl:leading-[60px]">
                E-commerce <br />{words[index]}
              </span>
            </div>
          </h1>
          <div className="border w-full border-white" />
            <div className="pb-2  md:pb-6 lg:pb-10 xl:pb-0">
                <div className="flex items-center gap-2 italic">
                  <p className="font-bold text-sm lg:text-lg">Shopify <span className="font-light">Developer</span></p>
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col justify-end size-full">
        <Image 
          src={Portfolio.src} 
          alt="Portfolio Partner" 
          className="w-full h-[430px] object-cover md:w-screen md:h-full xl:h-[97%] xl:w-[47%] bg-gray-200/30 xl:rounded-3xl xl:absolute xl:top-4 xl:right-4" 
          width={Portfolio.width} 
          height={Portfolio.height} 
        />
      </div>
    </header>
  );
};

export default HeaderPage;

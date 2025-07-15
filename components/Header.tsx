"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { useIsHydrated } from "@/hook/useIsHydrated";
import Canva from '@/public/images/Canva.png'
import Portfolio from '@/public/images/gif.gif'
import Shopify from '@/public/images/shopify-partner.png'
import Image from "next/image";
import NavBarDesktop from "./navigations/NavBarDesktop";

const words = [
  "Ecommerce", 
  "SaaS", 
  "Products", 
  "Apps",
  "Experiences",
  "Solutions"
];

const HeaderPage = () => {
  const isHydrated = useIsHydrated();
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHydrated) return;

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

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
        "overflow-hidden relative size-full lg:h-[100dvh] grid grid-rows-2 justify-start lg:px-20 lg:py-14 items-end",
        "md:gap-10",
        "lg:grid-cols-2 lg:items-end lg:grid-rows-1"
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
              "text-[50px] px-2 leading-12 bigTitle",
              "md:text-8xl md:px-0 md:leading-20",
              "lg:text-[100px]",
              "xl:text-[100px] xl:leading-[105px]",
              "whitespace-pre-wrap",
              "text-foreground text-left"
            )}
          >
            I create
            <br />
            <div className="pt-1 lg:pt-2">
              <span className="font-bold uppercase xl:text-[120px] xl:leading-[80px]">
                Immersive <br />{words[index]}
              </span>
            </div>
          </h1>
          <div className="border w-full border-white" />
            <div className="pb-2 lg:pb-0 flex items-center gap-2 lg:gap-4">
                <Image src={Canva.src} alt="Canva Partner" className="w-auto h-9 lg:h-14 rounded-full" width={Canva.width} height={Canva.height} />
                <Image src={Shopify.src} alt="Shopify Partner" className="w-auto h-9 lg:h-14" width={Shopify.width} height={Shopify.height} />
            </div>
        </div>
      </div>
      <div className="flex flex-col justify-end h-full">
        <Image 
          src={Portfolio.src} 
          alt="Portfolio Partner" 
          className="w-full h-[430px] object-cover xl:h-[97%] xl:w-[47%] bg-gray-200/30 lg:rounded-3xl lg:absolute lg:top-4 lg:right-4" 
          width={Portfolio.width} 
          height={Portfolio.height} 
        />
      </div>
    </header>
  );
};

export default HeaderPage;

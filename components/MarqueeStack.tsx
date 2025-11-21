"use client";
import { brandsData } from "@/data/work";
import { useIsHydrated } from "@/hook/useIsHydrated";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Image from "next/image";
import { Marquee } from "./ui/marquee";

interface MarqueeStackProps {
  reverse?: boolean;
  title?: boolean;
}
const MarqueeStack: FC<MarqueeStackProps> = ({
  reverse,
  title
}) => {
  const isHydrated = useIsHydrated();

  const renderIcon = (data: typeof brandsData[0], index: number) => (
    <Image 
      key={index} 
      src={data.image} 
      alt={data.alt} 
      width={1080} 
      height={1080} 
      className="max-w-[70px] h-auto object-cover sm:max-w-[80px] lg:max-w-[100px]" 
    />
  );

  if (!isHydrated) {
    return null;
  }
  
  return (
    <div className={cn("relative mx-auto w-full z-10 opacity-50")}>
      <div className="flex flex-col justify-center items-center w-full h-full overflow-x-hidden">
        <div className={cn("relative z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden", "max-w-xs", "xs:max-w-sm", "md:max-w-2xl", "lg:max-w-4xl", "xl:max-w-7xl")}>
          <Marquee pauseOnHover className={cn("[--duration:28s]", title && "[--duration:60s]")} reverse={reverse}>
            <div className={cn("flex items-center gap-4 px-4", "sm:gap-12 sm:px-6", "xl:gap-12 xl:px-4"
            )}>
              {brandsData.map(renderIcon)}
            </div>
          </Marquee>
          {/* Gradient fade left */}
          <div className={cn("pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-24 xl:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10")} />
          {/* Gradient fade right */}
          <div className={cn("pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 md:w-24 xl:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10")} />
        </div>
              
    
        <div className={cn("absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,background)]")} />
      </div>
    </div>
  );
};

export default MarqueeStack;
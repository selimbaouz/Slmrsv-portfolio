import { Suspense } from "react";
import { worksData } from "@/data/work";
import Works from "@/components/Works";
import { cn } from "@/lib/utils";
import { IoArrowBackSharp } from "react-icons/io5";
import Link from "next/link";

export default async function WorksPage() {
  return (
    <Suspense>
      <div className={cn("sticky top-4 ml-4 h-full z-[150]")}>
         <Link
          href=".."
          className={cn(
            "rounded-full w-max bg-black bg-blend-exclusion shadow-md p-2 flex items-center justify-center cursor-pointer",
            "hover:bg-white hover:border hover:border-black group hover:gap-4"
          )}
        >
          <IoArrowBackSharp className={cn("text-white group-hover:text-black", "lg:text-xl")} />
        </Link>
      </div>
      <div className="space-y-24 py-24 lg:py-32 lg:space-y-44 whitespace-pre-line">
        <Works works={worksData} />
      </div>
    </Suspense>
  );
}

import { worksBySlugData, worksData } from "@/data/work";
import { Suspense } from "react";
import Loading from "./loading";
import Cases from "@/components/Cases";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";

export default async function CasesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cases = worksBySlugData.find((work) => work?.slug === slug);
  const currentIndex = worksData?.map(work => work.slug).indexOf(slug);

  const previousProjectSlug = worksData?.[currentIndex! - 1];
  const nextProjectSlug = worksData?.[currentIndex! + 1];

  return (
    <main>     
      <Suspense fallback={<Loading />}>
        <div className={cn("sticky top-4 ml-4 h-full z-[150]")}>
          <Link
            href="/works"
            className={cn(
              "rounded-full w-max bg-black shadow-md p-2 bg-blend-exclusion flex items-center justify-center cursor-pointer",
              "hover:bg-white hover:border hover:border-black group hover:gap-4"
            )}
          >
            <IoArrowBackSharp className={cn("text-white group-hover:text-black", "lg:text-xl")} />
          </Link>
        </div>
        <Cases 
          cases={cases ?? null} 
          previousProjectSlug={previousProjectSlug} 
          nextProjectSlug={nextProjectSlug} 
        />
      </Suspense>
    </main>
  );
}

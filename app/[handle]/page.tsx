import LegalPage from "@/components/LegalPage";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import { IoArrowBackSharp } from "react-icons/io5";

 type Props = {
  params: Promise<{ handle: string }>
}

export default async function Legals (props: Props) {
  const params = await props.params;
  return (
    <Suspense>
      <div className={cn("sticky top-4 ml-4 h-full z-[150]")}>
         <Link
          href=".."
          className={cn(
            "rounded-full w-max bg-gradient-to-r from-[#5738F4] to-[#7D2AE8] hover:bg-gradient-to-r text-white shadow-md p-2 flex items-center justify-center cursor-pointer",
            "hover:from-white hover:to-white hover:text-black group hover:gap-4"
          )}
        >
          <IoArrowBackSharp className={cn("text-white group-hover:text-black", "lg:text-xl")} />
        </Link>
      </div>
        <div className="py-20 lg:py-44 space-y-24 lg:space-y-44 xl:px-20 max-w-screen-3xl whitespace-pre-line mx-auto">
            <LegalPage handle={params.handle} />
        </div>
    </Suspense>
  );
}

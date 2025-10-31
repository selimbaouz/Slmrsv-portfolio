"use client";
import { Suspense } from "react";
import { JsonLd } from 'react-schemaorg';
import Header from "@/components/Header";
import NavBarMobile from "@/components/navigations/NavBarMobile";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/work";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
const pathname = usePathname();
  <>
    <JsonLd
      item={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "selimbaouz",
        url: "https://selimbaouz.com",
        logo: "https://selimbaouz.com/images/Logo.webp",
        description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance.",
        sameAs: [
          "https://twitter.com/selimbaouz",
          "https://github.com/selimbaouz",
          "https://linkedin.com/selimbaouz",
          "https://medium.com/@selimbaouz",
          "https://pinterest.com/selimbaouz",
          "https://facebook.com/selimbaouz",
        ]
      }}
    /></>;
  
  return (
    <Suspense>
          <div className={cn("sticky top-0 z-[150]")}>
            <NavBarMobile />
          </div>
        <div className="bg-[#111] flex flex-col">
          <Header />
        </div>
        <ul className="font-medium p-6 flex gap-4 items-center">
          {navLinks.slice(1).map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className={cn("text-white/60 text-[13px] font-semibold hover:underline", link.href === pathname && "text-white")}>
              {link.label}
              </Link>
            </li>
          ))}
        </ul>
    </Suspense>
  );
}

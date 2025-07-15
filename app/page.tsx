import { Suspense } from "react";
import { JsonLd } from 'react-schemaorg';
import Header from "@/components/Header";
import NavBarMobile from "@/components/navigations/NavBarMobile";
import { cn } from "@/lib/utils";
/* import { worksData } from "@/data/work";
import { articlesData } from "@/data/articles";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import News from "@/components/News";
import About from "@/components/About"; */

export default function Home() {

  <>
    <JsonLd
      item={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "selimbaouz",
        url: "https://selimbaouz.com",
        logo: "https://selimbaouz.com/images/sejiux.webp",
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
        <div className="bg-black flex flex-col">
          <Header />
        {/*   <About />
          <Works works={worksData} />
          <News articles={articlesData} />
          <Footer /> */}
        </div>
    </Suspense>
  );
}

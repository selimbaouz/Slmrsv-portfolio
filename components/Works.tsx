"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import { WorksData } from "@/types/types";
import { AnimatedTitleResponsive } from "./AnimatedTitle";
import { ProjectItem } from "./ProjectItem";

const Works = ({ works }: { works: WorksData[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const center = window.innerHeight / 2;
      let closest = 0;
      let closestDistance = Infinity;

      projectRefs.current.forEach((el, i) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = Math.abs(center - elCenter);
          if (distance < closestDistance) {
            closest = i;
            closestDistance = distance;
          }
        }
      });

      setActiveIndex(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <div ref={containerRef} className="relative">

        {/* Background dynamique */}
        <motion.div
          className="fixed inset-0 z-0 transition-colors duration-500"
          style={{
            backgroundColor: works[activeIndex].backgroundColor || "#000",
          }}
        />

        {/* TITRE FIXÉ EN HAUT AVEC FOND COLORÉ */}
        <div className="fixed top-0 left-0 right-0 z-20 pointer-events-none">
          <AnimatedTitleResponsive
            key={works[activeIndex].slug}
            title={works[activeIndex].title}
            color={works[activeIndex].color}
          />
        </div>

        {/* PROJETS */}
        <div className="relative z-10 space-y-20 py-44 lg:py-0">
          {works.map((work, i) => {
            const refCallback = (el: HTMLDivElement | null) => {
              projectRefs.current[i] = el;
            };

            return (
              <ProjectItem
                key={work.slug}
                work={work}
                refCb={refCallback}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Works;

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { WorksData } from "@/types/types";
import { forwardRef, useRef, useImperativeHandle } from "react";
import Link from "next/link";

interface ProjectItemProps {
  work: WorksData;
  refCb: (el: HTMLDivElement | null) => void;
}

// On utilise forwardRef pour connecter la ref externe à l'élément motion.div
export const ProjectItem = forwardRef<HTMLDivElement, ProjectItemProps>(
  function ProjectItem({ work, refCb }, ref) {
    const localRef = useRef<HTMLDivElement | null>(null);

    // Permet à la ref externe d'accéder à l'élément local
    useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

    // Callback: synchronise la ref pour le parent (activeIndex, etc.)
    const innerRef = (node: HTMLDivElement | null) => {
      localRef.current = node;
      refCb(node);
    };

    // Correction ESLint/TS : on passe bien un refObj de type {current: HTMLDivElement | null}
    const { scrollYProgress } = useScroll({
      target: localRef as React.RefObject<HTMLDivElement>,
      offset: ["start 80%", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);

    return (
      <motion.div
        ref={innerRef}
        className="flex flex-col cursor-pointer items-center transition-all duration-700"
        style={{ y, scale, opacity: 1 }}
      >
        <Link href={`/works/${work.slug}`}>
          <Image
            src={work.image}
            alt={work.title}
            width={1000}
            height={600}
            className="rounded-xl shadow-2xl"
          />
      </Link>
      </motion.div>
    );
  }
);

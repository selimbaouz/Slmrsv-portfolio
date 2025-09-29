import { motion } from "framer-motion";
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

    return (
      <motion.div
        ref={innerRef}
        className="flex flex-col cursor-pointer items-center transition-all duration-700"
        style={{ opacity: 1 }}
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

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks, socialLinks } from "@/data/work";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

// ✅ Animation du conteneur (menu complet)
const menuVariants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
  exit: {
    y: "100%",
    transition: { duration: 0.3 },
  },
};

// ✅ Animation pour chaque lien (fade + slide up)
const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // Bezier = easeOut
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // Bezier = easeOut
    },
  },
    exit: {
    opacity: 0,
  },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black text-white/50 z-50 space-y-4 flex flex-col items-center text-center px-6 lg:px-20 justify-center"
          key="mobile-menu"  
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          <motion.button
            onClick={onClose}
            className="absolute top-6 left-6 text-3xl text-black rounded-full bg-white p-1 hover:text-white/70 transition-colors cursor-pointer"
            variants={buttonVariants}
          >
            <HiX className="text-xl" />
          </motion.button>

          {navLinks.map((link) => (
            <motion.div key={link.href} variants={linkVariants}>
              <Link
                href={link.href}
                onClick={onClose}
                className={cn(
                  "text-3xl lg:text-6xl xl:text-8xl font-semibold tracking-wide hover:text-white transition-all",
                  link.href === pathname && "text-white"
                )}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <div className="absolute bottom-5 flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.div key={link.href} variants={linkVariants}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-lg font-medium tracking-wide hover:text-white transition-all",
                    link.href === pathname && "text-white"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

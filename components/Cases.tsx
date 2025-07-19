"use client";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Case, WorksData } from "@/types/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Container from "./Container";
import ImageLoader from "./ImageLoader";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Animation lettre à lettre spéciale pour le HERO/TITRE
function AnimatedLetters({ text = "", color = "#111", fontWeight = 800, fontSize = "clamp(2.2rem, 15vw, 13rem)", className = "", style = {} }) {
  if (!text) return null;
  const lines = text.split("\n");
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={text}
        className={cn("flex flex-col items-center justify-center w-full leading-[1] pointer-events-none select-none", className)}
        style={style}
      >
        {lines.map((line, lidx) => (
          <div
            key={lidx}
            className="flex flex-row flex-wrap justify-center w-full overflow-hidden"
            style={{
              gap: lines.length === 1 ? "clamp(0.7rem, 7vw, 5rem)" : "clamp(0.12em, 2vw, 1.3em)",
              marginBottom: (lidx < lines.length - 1 ? "clamp(1rem, 5vw, 3.5rem)" : undefined),
            }}
          >
            {[...line].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0, scale: 0.96 }}
                animate={{ y: "0%", opacity: 1, scale: 1 }}
                exit={{ y: "-100%", opacity: 0, scale: 1.08 }}
                transition={{ delay: i * 0.04 + lidx * 0.20, duration: 0.4 }}
                className="uppercase"
                style={{
                  display: "inline-block",
                  fontSize,
                  color,
                  fontWeight,
                  lineHeight: "0.8",
                  userSelect: "text",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

interface CasesProps {
  cases: Case;
  previousProjectSlug?: WorksData;
  nextProjectSlug?: WorksData;
}

const Cases = ({
  cases,
  previousProjectSlug,
  nextProjectSlug,
}: CasesProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Embla vertical for desktop
  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel({
    axis: "y",
    direction: "ltr",
    dragFree: false,
    loop: false,
  });

  // Embla horizontal for mobile
  const [emblaRefMobile] = useEmblaCarousel({
    axis: "x",
    direction: "ltr",
    dragFree: false,
    loop: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApiDesktop) return;
    setSelectedIndex(emblaApiDesktop.selectedScrollSnap());
  }, [emblaApiDesktop]);

  useEffect(() => {
    if (!emblaApiDesktop) return;
    emblaApiDesktop.on("select", onSelect);
    onSelect();
    return () => {
      emblaApiDesktop.off("select", onSelect);
    };
  }, [emblaApiDesktop, onSelect]);

  const handleThumbnailClick = (index: number) => {
    if (!emblaApiDesktop) return;
    emblaApiDesktop.scrollTo(index);
  };

  return (
    <Container>
      <div className="lg:overflow-hidden relative w-full h-[90vh] flex flex-col justify-center lg:justify-center items-center">
        <motion.div
          className="fixed inset-0 z-0 transition-colors duration-500"
          style={{
            backgroundColor: cases?.backgroundColor || "#000",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />

        {/* HERO Titre animé lettre à lettre */}
        <div className="fixed top-0 left-0 right-0 pointer-events-none flex justify-center items-start flex-wrap z-30">
          <AnimatedLetters
            text={cases?.title ?? ""}
            color={cases?.color ?? "#222"}
            fontWeight={800}
            fontSize="clamp(2.2rem, 15vw, 13rem)"
            className="font-bold text-center pt-4 px-1"
          />
        </div>

        {/* Thumbnails à gauche */}
        <div
          className={cn(
            "hidden lg:flex flex-col justify-center items-center gap-4",
            "absolute left-0 top-0 bottom-0 h-full px-4 z-20"
          )}
          style={{ minWidth: "60px" }}
        >
          {cases?.images?.map((image, index) => (
            <div key={index} className="rounded-lg cursor-pointer" onClick={() => handleThumbnailClick(index)}>
              <ImageLoader
                src={image.src ?? ""}
                alt="Thumbnail"
                className={cn(
                  "lg:w-auto w-full h-[44px] lg:size-14 object-cover",
                  "xl:w-full"
                )}
                width={image.width}
                height={image.height}
                style={{
                  border: selectedIndex === index ? `2px solid ${cases?.color}` : "none",
                  padding: "3px",
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-4 items-center z-50">

          {/* Desktop carousel */}
          <div
            ref={emblaRefDesktop}
            className="w-full mx-auto hidden lg:block"
            style={{
              maxHeight: "70vh",
              position: "relative",
              zIndex: 10,
              overflow: "hidden",
            }}
          >
            <div
              className="embla__container gap-4"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {cases?.images.map((img, index) => (
                <div
                  className="embla__slide flex-shrink-0 flex-grow-0"
                  key={index}
                  style={{ minHeight: "70vh", height: "70vh" }}
                >
                  <Image
                    src={img.src}
                    alt={`image of ${cases.title} project`}
                    width={1200}
                    height={750}
                    draggable={false}
                    priority={index === 0}
                    className={cn(
                      "object-cover mx-auto max-h-[70vh] w-auto rounded-xl"
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile carousel */}
          <div
            ref={emblaRefMobile}
            className="w-full mx-auto lg:hidden"
            style={{
              position: "relative",
              zIndex: 10,
              overflow: "hidden",
            }}
          >
            <div
              className="embla__container gap-4"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {cases?.images.map((img, index) => (
                <div
                  className="embla__slide flex-shrink-0 flex-grow-0"
                  key={index}
                  style={{ width: "100%", minWidth: "100%" }}
                >
                  <Image
                    src={img.src}
                    alt={`image of ${cases.title} project`}
                    width={1200}
                    height={1200}
                    draggable={false}
                    priority={index === 0}
                    className="object-cover mx-auto rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnails mobile */}
          <div
            className={cn(
              "flex justify-center items-center gap-2",
              "lg:hidden"
            )}
            style={{ minWidth: "60px" }}
          >
            {cases?.images?.map((image, index) => (
              <div key={index} className="rounded-lg cursor-pointer" onClick={() => handleThumbnailClick(index)}>
                <ImageLoader
                  src={image.src ?? ""}
                  alt="Thumbnail"
                  className={cn(
                    "w-full h-[35px] object-cover",
                  )}
                  width={image.width}
                  height={image.height}
                  style={{
                    border: selectedIndex === index ? `2px solid ${cases?.color}` : "none",
                    padding: "3px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Pagination + liens et content animé (fade simple, garde la liste ordinale) */}
          <div className="absolute bottom-0 w-full">
            <div
              style={{ color: cases?.color }}
              className="w-full grid grid-cols-3 items-center relative"
            >
              <div
                className={cn("flex items-center justify-start gap-2", {
                  invisible: !previousProjectSlug?.slug,
                })}
              >
                {previousProjectSlug?.slug && (
                  <Link
                    href={`/works/${previousProjectSlug.slug}`}
                    className="font-medium text-xs xl:text-sm"
                  >
                    <GoArrowLeft className="text-base lg:text-xl" />
                  </Link>
                )}
              </div>
              <div className="flex justify-center">
                <motion.p
                  className={cn("hidden lg:block max-w-xl text-sm font-medium leading-5 text-center py-4")}
                  style={{ color: cases?.color }}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                >
                  {cases?.content}
                </motion.p>
              </div>
              <div
                className={cn("flex items-center justify-end gap-2", {
                  invisible: !nextProjectSlug?.slug,
                })}
              >
                {nextProjectSlug?.slug && (
                  <Link
                    href={`/works/${nextProjectSlug.slug}`}
                    className="font-medium text-xs xl:text-sm"
                  >
                    <GoArrowRight className="text-base lg:text-xl" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Texte mobile content animé fade */}
          <motion.p
            className={cn("lg:hidden absolute bottom-0 text-xs font-medium leading-5 text-center py-4")}
            style={{ color: cases?.color }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.13 }}
          >
            {cases?.content}
          </motion.p>
        </div>

        {/* Infos à droite animées fade */}
        <div
          className={cn(
            "hidden lg:flex flex-col justify-center items-center gap-4",
            "absolute right-0 top-0 bottom-0 h-full px-4 z-20 max-w-sm"
          )}
          style={{ minWidth: "60px" }}
        >
          <ul
            className="text-sm text-right"
            style={{ color: cases?.color }}
          >
            <motion.li initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.18, duration: 0.60 }}>{cases?.category}</motion.li>
            <motion.li initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.22, duration: 0.60 }}>{cases?.date}</motion.li>
            <motion.li initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.26, duration: 0.60 }}>{cases?.construction}</motion.li>
            <motion.li initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.30, duration: 0.60 }}>{cases?.role}</motion.li>
            <motion.li initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.34, duration: 0.60 }}>
              {cases?.siteUrl && (
                <div className={cn("text-xs gap-2 mt-5 flex justify-end items-center hover:gap-4 cursor-pointer", "xl:text-lg")}>
                  <Link
                    href={cases?.siteUrl}
                    className={cn("font-medium text-sm", "duration-500 delay-75")}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: cases?.color }}
                  >
                    Launch
                  </Link>
                  <GoArrowRight className={cn("text-xs", "lg:text-lg")} />
                </div>
              )}
            </motion.li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Cases;

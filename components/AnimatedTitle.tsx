import { AnimatePresence, motion } from "framer-motion";

export const AnimatedTitleResponsive = ({
  title,
  color = "#111",
}: {
  title: string;
  color: string;
}) => {
  // Découpe selon les retours à la ligne (séparateur '\n' dans le titre)
  const lines = title.split('\n');

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          className="flex flex-col items-center justify-center w-full px-2 py-2"
          style={{
            lineHeight: 1, 
            textAlign: "center",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {lines.map((line, lidx) => (
            <div
              key={lidx}
              className="flex flex-row flex-wrap justify-center w-full overflow-hidden"
              style={{
                gap: lines.length === 1 ? "clamp(0.7rem, 7vw, 5rem)" : "clamp(0.12em, 2vw, 1.3em)",
                marginBottom: (lidx < lines.length - 1 
                      ? "clamp(1rem, 5vw, 3.5rem)" 
                      : undefined
                  ),
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
                    fontSize: "clamp(2.2rem, 15vw, 13rem)",
                    color,
                    fontWeight: 800,
                    lineHeight: "0.8",  
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
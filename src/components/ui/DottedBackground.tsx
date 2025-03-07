"use client";
import { motion } from "framer-motion";
import { Dotted } from "./Dotted";

export function DottedBackground({ children }: { children: React.ReactNode }) {
  return (
    <Dotted>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="py-24 px-4 max-w-4xl leading-relaxed lg:leading-snug mx-auto "
      >
        {children}
      </motion.h1>
    </Dotted>
  );
}

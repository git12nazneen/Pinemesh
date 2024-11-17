"use client";;
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const BlurIn = ({
  word,
  className,
  variant,
  duration = 1
}) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    (<motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-start text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-4xl md:leading-[3rem]",
        className
      )}>
      {word}
    </motion.h1>)
  );
};

export default BlurIn;
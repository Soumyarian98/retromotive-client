import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const SectionWrapper = (Component: React.FC, idName: string) => {
  return () => {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={staggerContainer({ delayChildren: 1, staggerChildren: 1 })}
        viewport={{ once: true, amount: 0.25 }}>
        <span id={idName} />
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;

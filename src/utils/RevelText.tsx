import React from "react";
import { motion } from "framer-motion";

const RevealText = ({
  text,
  overflowX,
  overflowY,
  duration,
}: {
  text: string;
  overflowY?: "hidden" | "visible";
  overflowX?: "hidden" | "visible";
  duration?: number;
}) => {
  const spacedText = text.replace(/ /g, "\u00A0");

  return (
    <motion.div
      initial={{ opacity: 0, overflowY }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {spacedText.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration ? duration : 0.5,
            ease: "easeOut",
            delay: index * 0.05,
          }}
          style={{ display: "inline-block" }}
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default RevealText;

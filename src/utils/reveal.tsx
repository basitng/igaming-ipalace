import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute top-[4px] bottom-[4px] right-0 left-0 bg-indigo-500 z-20"
        initial="hidden"
        animate={slideControls}
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
    </div>
  );
};

export default Reveal;

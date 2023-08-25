import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button, Typography } from "@mui/material";

interface AnimatedCardProps {
  title: string;
  n: number;
  content: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, n, content }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div className="mx-3 md:mx-10 my-8 cursor-pointer">
      <div
        onMouseMove={handleMouseMove}
        className="max-w-lg rounded-3xl relative group overflow-hidden border border-gray-700 bg-gray-900 p-8"
      >
        <motion.div
          className="absolute pointer-events-none inset-0 bg-white opacity-0 group-hover:opacity-100 duration-100"
          style={{
            background: useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px,rgb(14 165 233 / 0.10),  transparent 80%)`,
          }}
        />
        <div className="overflow-hidden">
          <h3 className="text-base font-semibold leading-7 text-sky-500 overflow-hidden">
            {title}
          </h3>
          <h3 className="mt-2 flex items-baseline gap-x-2 overflow-hidden">
            <span className="text-3xl font-bold tracking-light text-white/50 line-through overflow-hidden">
              Services
            </span>
          </h3>
          <div className="mt-2 gap-x-2 flex items-center">
            <Typography
              variant="h3"
              className="text-5xl font-bold tracking-light text-white"
            >
              0{n}
            </Typography>
            <div className="flex flex-col">
              <Typography className="text-base font-medium text-white">
                we care for you
              </Typography>
              <Typography className="text-base font-medium text-gray-400">
                Ultimate Support
              </Typography>
            </div>
          </div>
          <Typography className="mt-6 text-base leading-6 text-gray-300">
            {content}
          </Typography>

          <div className="mt-8">
            <form>
              <div className="mt-1 flex flex-col rounded-md shadow-sm lg:flex-row">
                <Button
                  variant="contained"
                  className="relative -ml-px mt-4 space-x-2 overflow-hidden rounded-md text-center w-full transition duration-300 ease-out h-11 text-white"
                >
                  <span>Request A Demo</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;

import { Box, Typography } from "@mui/material";
import React from "react";
import CountUp, { useCountUp } from "react-countup";

export default function Counter({ title }: { title: string }) {
  return (
    <Box className="flex group cursor-pointer justify-center bg-slate-700 items-center h-36 overflow-hidden  rounded-lg p-6 shadow-lg">
      <div className="text-center">
        <h3 className="text-gray-400 transition duration-300 group-hover:text-white md:text-xl text-2xl overflow-hidden">
          {title}
        </h3>
      </div>
    </Box>
  );
}

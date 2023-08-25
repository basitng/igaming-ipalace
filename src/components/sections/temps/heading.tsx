import { Typography } from "@mui/material";
import React from "react";

export default function Heading() {
  return (
    <div className={`w-full my-4`}>
      <h3 className="text-3xl font-bold leading-10 md:text-6xl w-full my-4 overflow-hidden text-gray-200">
        Innovative,
        <span className="text-indigo-500"> Fully-customizable </span> & Ready to
        <span className="text-indigo-500"> Launch</span>
      </h3>
      <p className="text-base md:text-lg text-gray-400">
        Our templates are fully responsive, so they’ll look great on any device,
        and they’re easy to customize. With just a few clicks, you can change
        colors, fonts, and images to match your brand’s style.
      </p>
    </div>
  );
}

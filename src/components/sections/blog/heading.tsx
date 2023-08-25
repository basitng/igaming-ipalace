import { Typography } from "@mui/material";
import React from "react";

export default function Heading() {
  return (
    <div className={`w-full my-4 text-center`}>
      <h3 className="text-3xl font-bold leading-8 md:text-6xl w-full my-4 overflow-hidden text-gray-200">
        Lastest <span className="text-yellow-500">Blog Post</span>
      </h3>
      <p className="text-base md:text-lg text-gray-400">
        From the latest product releases to updates in the industry, we aim to
        provide you with all the necessary information easily accessible to you.
      </p>
    </div>
  );
}

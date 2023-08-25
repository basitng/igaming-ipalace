import { Typography } from "@mui/material";
import React from "react";

export default function Heading() {
  return (
    <div className={`w-full my-4 text-center`}>
      <h3 className="text-3xl font-bold leading-10 md:text-6xl w-full my-4 overflow-hidden text-gray-200">
        Marketing & Bonus Campaigns{" "}
        <span className="text-yellow-500">to Attract and Engage Punters</span>
      </h3>
    </div>
  );
}

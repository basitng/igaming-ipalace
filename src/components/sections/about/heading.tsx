import { Typography } from "@mui/material";
import React from "react";

export default function Heading() {
  return (
    <div className={`w-full my-4 text-center`}>
      <h3 className="text-3xl font-[druk] leading-8 md:text-6xl w-full my-4 overflow-hidden text-gray-200">
        Crafting <span className="text-yellow-500">Unforgettable</span> Patron{" "}
        <span className="text-yellow-500">Experiences</span>
      </h3>
      <p className="text-base md:text-lg text-gray-400">
        Craft exceptional, lasting memories for your patrons through unique
        experiences that resonate. Elevate service, ambiance, and activities to
        forge strong connections, fostering loyalty and satisfaction.
      </p>
    </div>
  );
}

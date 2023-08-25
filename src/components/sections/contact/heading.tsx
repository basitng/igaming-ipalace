import { Typography } from "@mui/material";
import React from "react";

export default function Heading() {
  return (
    <div className={`w-full my-4`}>
      <h3 className="text-3xl font-bold leading-10 md:text-6xl w-full my-4 overflow-hidden text-gray-200">
        Need <span className="text-yellow-500">Clarification</span>,
        <span className="text-indigo-500">
          {" "}
          <span className="text-white">Or</span> Mean Business
        </span>{" "}
        Drop US a<span className="text-indigo-500"> Line</span>
      </h3>
      <Typography className="text-base md:text-lg text-gray-400">
        Our platform provides everything you need to create a professional and
        successful online betting business. With iGamingBook, you can easily
        create a website that reflects your brand and meets all your business
        needs
      </Typography>
    </div>
  );
}

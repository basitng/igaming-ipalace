import sideNav from "@/components/side-nav";
import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function FooterSection() {
  return (
    <div className="w-full md:justify-between justify-center flex-col md:flex-row flex items-center p-3">
      <div className="w-full">
        <Typography variant="h3" className="text-gray-400 text-3xl">
          Igaming Palace
        </Typography>
      </div>
      <div className="w-full md:text-left text-center mt-5 md:mt-0 md:w-3/5 flex flex-col md:flex-row justify-center md:justify-between space-y-3 md:space-y-0 md:space-x-6">
        {sideNav.map((path, index) => (
          <Link href={path.href} key={index} className="no-underline">
            <Typography
              variant="body2"
              color="white"
              className="text-gray-400 transition duration-200 hover:text-indigo-500"
            >
              {path.pathname}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
}

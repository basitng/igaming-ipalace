import { AppNav } from "@/components";
import { Box, Typography } from "@mui/material";
import React from "react";

const BlogDetail = () => {
  return (
    <Box>
      <AppNav />
      <div className="bg-[#252525] min-h-screen py-8">
        <div className="max-w-3xl my-24 mx-auto bg-transparent rounded-md overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/800x400"
            alt="Blog Title"
          />
          <div className="p-6">
            <Typography
              variant="h3"
              className="py-5 text-white font-semibold mb-4"
            >
              Blog Title
            </Typography>
            <Typography className="text-gray-400 pb-3">
              By John Doe | August 23, 2023
            </Typography>
            <div className="prose">
              <Typography className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed varius, sapien eu egestas luctus, justo nisi
                varius eros, vitae sodales ligula dolor eget neque. Pellentesque
                euismod eget felis eget ullamcorper. Integer aliquam eros ac dui
                vestibulum, eget dictum nulla auctor.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default BlogDetail;

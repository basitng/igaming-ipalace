import React from "react";
import BlogCard from "./card";
import { Box, Grid } from "@mui/material";
import Heading from "./heading";

export default function BlogSection() {
  const blogData = {
    title: "Sample Blog Post",
    author: "John Doe",
    date: "August 23, 2023",
    image: "https://via.placeholder.com/300x200",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor euismod dui, at dignissim erat efficitur in.",
  };

  return (
    <Box className="py-20 min-h-[80vh]" sx={{}}>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12} md={7} sm={12}>
          <Heading />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="px-2 md:px-10 py-10 md:py-20">
        <Grid item xs={12} md={4}>
          <BlogCard {...blogData} />
        </Grid>
      </Grid>
    </Box>
  );
}

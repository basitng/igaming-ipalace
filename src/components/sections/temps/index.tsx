import React from "react";
import Heading from "./heading";
import { Box, Grid } from "@mui/material";
import FancyBox from "./fancyBox";

export default function TemplateSections() {
  return (
    <Box className="py-20 min-h-[80vh]">
      <Grid
        container
        spacing={0}
        justifyContent={"flex-start"}
        className="px-2 md:px-20 py-10 md:py-20"
      >
        <Grid item xs={12} md={7} sm={12}>
          <Heading />
        </Grid>
        <Grid item xs={12} md={2.4}></Grid>
      </Grid>
      <Grid container spacing={5} className="px-2 md:px-20 py-10 md:py-16">
        <Grid item xs={12} md={4}>
          <FancyBox n={1} />
        </Grid>
        <Grid item xs={12} md={4}>
          <FancyBox n={2} />
        </Grid>
        <Grid item xs={12} md={4}>
          <FancyBox n={3} />
        </Grid>
        <Grid item xs={12} md={4}>
          <FancyBox n={4} />
        </Grid>
        <Grid item xs={12} md={4}>
          <FancyBox n={5} />
        </Grid>
        <Grid item xs={12} md={4}>
          <FancyBox n={6} />
        </Grid>
      </Grid>
    </Box>
  );
}

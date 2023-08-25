import { Box, Grid } from "@mui/material";
import React from "react";
import Heading from "./heading";
import Counter from "./counter";

export default function AboutSection() {
  return (
    <Box className="py-20 min-h-[80vh]" sx={{}}>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12} md={7} sm={12}>
          <Heading />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="px-2 md:px-10 py-10 md:py-20">
        <Grid item xs={12} md={2.4}>
          <Counter count={300} title={"Sports Covered"} />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Counter count={3000} title={"Casino Games"} />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Counter count={100} title={"Betting Market"} />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Counter count={12} title={"Languages"} />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Counter count={32} title={"Virtual Sports"} />
        </Grid>
      </Grid>
    </Box>
  );
}

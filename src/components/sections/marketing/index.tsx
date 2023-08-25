import { Box, Grid } from "@mui/material";
import React from "react";
import Heading from "./heading";
import AnimatedCard from "./card";

export default function MarketingSection() {
  return (
    <Box
      className="md:py-52 py:20  min-h-[100vh] relative"
      sx={{
        background: "url(/images/bg3.png)",
      }}
    >
      <div className="absolute w-full h-full bg-black/80 top-0"></div>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        sx={{ zIndex: 30, position: "relative" }}
      >
        <Grid item xs={12} md={7} sm={12}>
          <Heading />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <AnimatedCard
            content="Reach your target audience, enhance your global presence while
            acquiring high-quality leads that convert into customers with our
            marketing help support."
            n={1}
            title="Marketing Support"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AnimatedCard
            content="Slash costs and create rewarding experiences while maximizing engagement, boosting Punter retention, extending sessions with our myriad of bonus campaigns."
            n={2}
            title="Bonuses & Campaign"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AnimatedCard
            content="Eradicate roadblocks,neutralize speed bumps,and overcome everypossible hurdle whilecarrying out your operations with our 24/7customer support."
            n={3}
            title="Customer Support"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

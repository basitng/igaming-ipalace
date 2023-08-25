import { Box, Grid } from "@mui/material";
import React from "react";
import Heading from "./heading";
import Counter from "./counter";

export default function FeatureSection() {
  return (
    <Box
      className="md:py-52 py:20  min-h-[100vh]"
      sx={{
        background:
          "radial-gradient(6000px at 800px 200px, #191C18, #402060, #F3498780, #191C18)",
      }}
    >
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12} md={7} sm={12}>
          <Heading />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="px-2 md:px-10 py-10 md:py-20">
        <Grid item xs={12} md={3}>
          <Counter title={"Multiple Bet Types Supported"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Odds Management Tools"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Multiple Betting Markets Covered"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Pool Betting System"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"In-play/ Live Betting"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Risk Management Tool"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Real Time Result System"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Multi-tier Agent System"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Retail Bet Shop Solution"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Bet Slip Printing"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Comprehensive Admin Dashboard"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Multi-lingual Support"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Fiat & Cryptocurrency"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Cash-out"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"Bet Management & Monitoring Tools"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Counter title={"24/7 Customer Support"} />
        </Grid>
      </Grid>
    </Box>
  );
}

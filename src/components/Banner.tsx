import Reveal from "@/utils/reveal";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      className="px-4 md:px-20 py-28 md:py-10 w-full min-h-[110vh]"
      sx={{
        background:
          "radial-gradient(600px at 800px 200px, #191C18, #402060, #F34987, #191C18)",
      }}
    >
      <Grid item xs={12} md={6} sm={12}>
        <Reveal>
          <h3
            className="text-3xl font-[druk] md:text-[3rem]"
            style={{
              color: "#fff",
              fontWeight: "bold",

              lineHeight: "1.2",
              overflowY: "hidden",
            }}
          >
            Ready to launch B2B Sportsbook with{" "}
            <span
              style={{
                color: "#fff",
                fontWeight: "bold",
                WebkitTextStroke: "2px #FFF",
                WebkitTextFillColor: "transparent",
                overflowY: "hidden",
              }}
            >
              no revenue share
            </span>
          </h3>
        </Reveal>
        <Typography color="#fff" my={2}>
          Cleverly designed, technologically advanced B2B sportsbook that’s
          crafted with precision to offer high productivity, unbeatable
          performance, and unmatched betting experience.
        </Typography>
        <Button size="large" variant="contained" sx={{ my: 2 }} color="primary">
          Request a Demo
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src="/images/1.png" className="w-full h-full" />
      </Grid>
    </Grid>
  );
}

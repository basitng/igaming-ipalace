import React from "react";
import Heading from "./heading";
import { Box, Grid } from "@mui/material";
import Form from "./form";

export default function ContactSections() {
  return (
    <section id="contact">
      <Box
        className="py-20 min-h-[100vh]"
        sx={{
          background:
            "radial-gradient(3000px at 800px -100px, #191C18, #402060, #F3498790, #191C18)",
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent={"flex-start"}
          className="px-2 md:px-20 py-10 md:py-20"
        >
          <Grid item xs={12} md={7} sm={12}>
            <Heading />
          </Grid>
        </Grid>
        <Grid container className="px-2 md:px-20 py-3">
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

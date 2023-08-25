import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

export default function PartnersSection() {
  const companies = ["/images/b1.png", "/images/b2.svg"];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <Container>
        <Paper
          elevation={3}
          sx={{
            background: "#fff",
            width: "100%",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 className="md:text-4xl text-[1.45rem] font-[druk] text-center">
            Our <span className="text-yellow-500">Business</span>{" "}
            <span className="text-blue-500">Partners</span>
          </h3>
          <Typography
            variant="body1"
            paddingY={1}
            color="#b1bcc3"
            className="md:w-2/4 w-full"
            textAlign="center"
          >
            Every student of Tripple Royal global service have the chance to get
            offer from this great companies.{" "}
          </Typography>
          <Marquee play={true}>
            {companies.map((company, index) => (
              <img
                src={company}
                key={index}
                style={{
                  width: 150,
                  height: 150,
                  objectFit: "contain",
                  margin: "0px 10px",
                }}
                className="brand"
              />
            ))}
          </Marquee>
          <Marquee style={{ marginTop: "-50px" }} play={true} direction="right">
            {companies.map((company, index) => (
              <img
                src={company}
                key={index}
                className="brand"
                style={{
                  width: 150,
                  height: 150,
                  objectFit: "contain",
                  margin: "0px 10px",
                }}
              />
            ))}
          </Marquee>
        </Paper>
      </Container>
    </Box>
  );
}

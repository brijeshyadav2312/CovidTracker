import React from "react";
import Box from "@mui/material/Box";
import { Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import resourse from "../resources";

const About = () => {
  return (
    <Box sx={{ margin: "0 10rem" }}>
      <Box
        sx={{
          backgroundColor: "transparent",
          color: "white",
          padding: "1rem",
          textAlign: "center",
          border: "none",
        }}
      >
        <Typography
          variant="h3"
          sx={{ borderBottom: "3px solid", padding: "1rem" }}
        >
          PURPOSE
        </Typography>
        <Typography sx={{ padding: "1rem" }}>
          VACCOVID.LIVE is a comprehensive up-to-date Vaccine tracker, COVID-19
          tracker and Treatment tracker website which has been landed to inform
          people throughout the planet about the present novel coronavirus
          (COVID-19) pandemic. We accomplished this duty by providing the latest
          reliable data from several APIs. In VACCOVID you can also find the
          most relevant and up-to-date news about covid-19. We have tried to
          gather and illustrate the latest statistical data known about covid-19
          in tangible tables using evidence based and professional conceptual
          framework.
        </Typography>
      </Box>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: "white", padding: "2rem" }}
      >
        RESOURCES
      </Typography>
      <Box
        sx={{
          width: "fit-Content",
          padding: "2rem 1rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-evenly",
        }}
      >
        {resourse.map((elem, idx) => {
          return (
            <Card sx={{ display: "flex" }} key={idx}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#191B2F",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto", width: "300px" }}>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ color: "#1E9F64" }}
                  >
                    {elem.Title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white" }}
                    color="text.secondary"
                    component="div"
                  >
                    {elem.Description}
                  </Typography>
                </CardContent>
              </Box>
              <a href={elem.url}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={elem.image}
                  alt="Live from space album cover"
                />
              </a>
            </Card>
          );
        })}
        <Box
        sx={{
          backgroundColor: "transparent",
          color: "white",
          padding: "1rem",
          textAlign: "center",
          border: "none",
        }}
        >
          <Typography
          sx={{ borderBottom: "3px solid", padding: "1rem" }}
          variant='h3'
          >Features</Typography>
          <Typography
          sx={{padding: "1rem" }}
          >
            Covid-19 Tracker: We fetch and update covid-19 data every 5 minutes
            from 5 different APIs, which can help us to keep the tracker,
            up-to-date and accurate. We are honored to claim that we provide the
            essential COVID-19 statistical data of all 219 countries of the
            entire world separately. We also provide the coronavirus statistical
            data of all states of 23 countries which include United States of
            America, Canada, India, Australia, Brazil, Japan, Germany, France,
            United Kingdom, Netherlands, Italy, China, Chile, Colombia, Denmark,
            Mexico, Peru, Pakistan, Russia, Spain, Sweden, and Ukraine. (Special
            thanks to Postman company that provided all essential APIs for every
            covid-19 cases.)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

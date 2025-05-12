import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import CallToAction from "./CallToAction";
import Mission from "./Mission";
import { Container } from "@mui/material";
import Impact from "./Impact";
import GetInTouch from "./GetInTouch";

const About = () => {
  const { token } = useRouteLoaderData("token");

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      {/* Our Mission  */}
      <Mission />
      {/* Our Impact */}
      <Impact />
      {/* Get in Touch */}
      <GetInTouch />
      <CallToAction backgroundColor="text.primary" token={token} />
    </Container>
  );
};

export default About;

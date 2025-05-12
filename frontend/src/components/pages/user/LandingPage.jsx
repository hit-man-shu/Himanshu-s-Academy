import React from "react";
import Hero from "./Hero";
import { Container } from "@mui/material";
import Testimonial from "./Testimonial";
import Reviews from "./Reviews";
import CallToAction from "./CallToAction";
import { useRouteLoaderData } from "react-router-dom";

const LandingPage = () => {
  const { token } = useRouteLoaderData("token");

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: "linear-gradient(45deg, #f5f7fa 0%, #e4e8eb 100%)",
        }}
      >
        {/* Hero section  */}
        <Hero />
        {/* Testimonial  */}
        <Testimonial />
        {/* Review  */}
        <Reviews />
      </Container>
      {/* CallToAction */}
      <CallToAction token={token} />
    </>
  );
};

export default LandingPage;

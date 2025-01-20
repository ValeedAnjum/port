"use client";

import { Box, Grid } from "@mui/material";
import Shapes from "./shapes";
import NavbarHeader from "./navbar-header";
import Navbar from "./navbar";
import HeadlineImage from "./headline-image";
import Headings from "./headline-image/headings";
import { CalendlyPopup } from "./calendly/calendly";
import { useHero } from "./use-hero";

export const HeroSec = () => {
  const { meatingModel, openMeatingModel, closeMeatingModel } = useHero();
  return (
    <>
      <CalendlyPopup
        meatingModel={meatingModel}
        closeMeatingModel={closeMeatingModel}
      />
      <Grid
        container
        sx={{
          height: { sm: "auto", md: "100vh" },
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Shapes */}
        <Shapes />
        {/* Navbar Header and navbar */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Grid container justifyContent="center">
            <Grid
              item
              lg={9}
              sm={12}
              sx={{
                // border: "1px solid red",
                display: { xs: "none", md: "block" },
                p: 1,
              }}
            >
              <NavbarHeader />
            </Grid>
            <Grid
              item
              lg={9}
              xs={12}
              sx={
                {
                  // border: "1px solid red",
                }
              }
            >
              <Navbar openMeatingModel={openMeatingModel} />
              <Box sx={{ display: { sm: "block", md: "none" }, p: 2 }}>
                <Headings openMeatingModel={openMeatingModel} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Hero Text and Image */}
        <HeadlineImage openMeatingModel={openMeatingModel} />
      </Grid>
    </>
  );
};

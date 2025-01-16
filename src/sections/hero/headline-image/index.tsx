import { Box, Grid } from "@mui/material";
import React from "react";
import Headings from "./headings";

const HeadlineImage = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        zIndex: 1,
        p: "0 1rem",
        m: "0 1rem",
        display: { xs: "none", md: "block" },
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          item
          lg={9}
          sm={12}
          sx={
            {
              // border: "1px solid blue",
            }
          }
          container
        >
          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              // border: "1px solid black",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Headings />
          </Grid>
          <Grid
            item
            sm={6}
            sx={{
              display: { xs: "none", sm: "block" },
              height: "80vh",
              backgroundImage: "url(/port/assets//images/hero/hero-man-2.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeadlineImage;

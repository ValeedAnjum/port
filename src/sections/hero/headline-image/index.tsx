import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const HeadlineImage = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        position: "absolute",
        bottom: 0,
        width: "100%",
        zIndex: 1,
        p: "0 1rem",
        m: "0 1rem",
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          item
          sm={9}
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
            sx={{
              // border: "1px solid black",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={
                {
                  // border: "1px solid red",
                }
              }
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "text.secondary",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                FRONTEND ARCHITECT
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontSize: "72px", fontWeight: "700", color: "#1f1f1f" }}
              >
                Full-Stack Development & System Architecture
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", color: "text.secondary", mt: 2 }}
              >
                Specialized in building scalable frontend architectures and
                full-stack solutions using the MERN ecosystem. Experienced in
                designing robust component systems, state management patterns,
                and frontend architectures for enterprise-level applications.
              </Typography>
              <Stack direction="row" sx={{ mt: 2 }} gap={1}>
                <Button variant="accent">Download My Cv</Button>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            sm={6}
            sx={{
              height: "80vh",
              backgroundImage: "url(/port/assets//images/hero/hero-man-2.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeadlineImage;

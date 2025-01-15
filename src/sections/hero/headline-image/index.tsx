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
                  color: "#636D78",
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
                sx={{ fontSize: "18px", color: "#636D78", mt: 2 }}
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
              // border: "1px solid black",
              height: "80vh",
              backgroundImage: "url(/assets//images/hero/hero-man-2.png)", // Correct path
              backgroundSize: "cover", // Optional, adjust as needed
              backgroundRepeat: "no-repeat", // Optional, adjust as needed
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeadlineImage;

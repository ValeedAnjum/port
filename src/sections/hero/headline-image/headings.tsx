import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Headings = () => {
  return (
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
        sx={{
          fontWeight: 700,
          fontSize: {
            xl: "4.5rem",
            lg: "3.5rem",
            md: "1.5rem",
            sm: "1.2rem",
          },
          color: "text.primary",
        }}
      >
        Full-Stack Development & System Architecture
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: {
            lg: "1.125",
            xs: "1rem",
          },
          color: "text.secondary",
          mt: 2,
        }}
      >
        Specialized in building scalable frontend architectures and full-stack
        solutions using the MERN ecosystem. Experienced in designing robust
        component systems, state management patterns, and frontend architectures
        for enterprise-level applications.
      </Typography>
      <Stack direction="row" sx={{ mt: 2 }} gap={1}>
        <Button variant="accent">Download My Cv</Button>
      </Stack>
    </Box>
  );
};

export default Headings;

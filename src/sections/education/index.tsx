import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const PrimaryDegreeHeading = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "0.8rem", sm: "1rem", md: "1.8rem" },
        color: "text.primary",
        flexGrow: 1,
        fontWeight: "700",
      }}
    >
      {text}
    </Typography>
  );
};
const PrimaryDurationHeading = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
        color: "text.primary",
        fontWeight: "700",
      }}
    >
      {text}
    </Typography>
  );
};

const SecondaryDegreeHeading = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
        color: "text.secondary",
        flexGrow: 1,
      }}
    >
      {text}
    </Typography>
  );
};
const SecondaryDurationHeading = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
        color: "text.secondary",
      }}
    >
      {text}
    </Typography>
  );
};
export const EducationSec = () => {
  return (
    <Grid
      container
      sx={{ p: { xs: 2 }, backgroundColor: "hsl(0, 0%, 90%)" }}
      justifyContent={{ xs: "flex-start", md: "center" }}
      id="education-sec"
    >
      <Grid
        item
        md={9}
        sm={12}
        sx={
          {
            //   border: "1px solid red",
          }
        }
      >
        <Typography
          variant="h1"
          sx={{ color: "text.primary", textAlign: "center", pb: 2 }}
        >
          Education
        </Typography>
        <Stack
          sx={{
            backgroundColor: "white",
            border: "1px solid transparent",
            borderRadius: "0.2rem",
            p: 1,
            mb: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <PrimaryDegreeHeading text="Bachelor of Science in Computer Science" />
            <PrimaryDurationHeading text="4 Years" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <SecondaryDegreeHeading
              text="Khwaja Fareed University of Engineering & Information Technology
              (KFUEIT)"
            />
            <SecondaryDurationHeading text="2017 - 2021" />
          </Box>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "white",
            border: "1px solid transparent",
            borderRadius: "0.2rem",
            p: 1,
            mb: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <PrimaryDegreeHeading text="Intermediate in Computer Science" />
            <PrimaryDurationHeading text="2 Years" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <SecondaryDegreeHeading text="Punjab College Liaquatpur" />
            <SecondaryDurationHeading text="2014 - 2016" />
          </Box>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "white",
            border: "1px solid transparent",
            borderRadius: "0.2rem",
            p: 1,
            mb: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <PrimaryDegreeHeading text="Matriculation" />
            <PrimaryDurationHeading text="2 Years" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <SecondaryDegreeHeading text="Govt Higher Secondary School Khan Bela" />
            <SecondaryDurationHeading text="2010 - 2012" />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

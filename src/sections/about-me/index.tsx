import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import WebhookIcon from "@mui/icons-material/Webhook";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import WebIcon from "@mui/icons-material/Web";
const AboutCard = ({
  icon: Icon,
  primaryHeading,
  secondryHeading,
}: {
  icon: React.ElementType;
  primaryHeading: string;
  secondryHeading: string;
}) => {
  return (
    <>
      <Stack
        sx={{
          width: "60px",
          height: "58px",

          mr: 2,
          backgroundColor: "#f3f8ff",
          borderRadius: "4px",
        }}
      >
        <Icon sx={{ width: "100%", height: "100%", color: "#5044EB" }} />
      </Stack>
      <Stack direction="column">
        <Typography
          sx={{
            fontSize: "21px",
            color: "#5044EB",
            lineHeight: 1,
            fontWeight: "700",
          }}
        >
          {primaryHeading}
        </Typography>
        <Typography sx={{ fontSize: "21px", color: "#101010" }}>
          {secondryHeading}
        </Typography>
      </Stack>
    </>
  );
};
export const AboutMeSec = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={9} sx={{ m: 1, p: 2 }} container>
        <Grid item sm={6} sx={{ p: "2rem 2rem 0 0" }}>
          <Box
            sx={{
              height: "80vh",
              backgroundImage: "url(/assets//images/about/about.png)", // Correct path
              backgroundSize: "cover", // Optional, adjust as needed
              backgroundRepeat: "no-repeat", // Optional, adjust as needed
            }}
          />
        </Grid>

        <Grid
          item
          sm={6}
          container
          direction="column"
          sx={{ p: "2rem 2rem 0 0" }}
        >
          <Typography
            sx={{
              fontSize: "52px",
              fontWeight: "700",
              color: "#1f1f1f",
              lineHeight: 1,
            }}
          >
            Frontend Developer Specializing in React & Next.js
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", color: "#636D78", mt: 2 }}
          >
            Passionate MERN stack developer with expertise in building modern,
            responsive web applications. Specializing in React, Next.js, and
            full-stack JavaScript development. Committed to creating seamless
            user experiences with clean, maintainable code and optimal
            performance.
          </Typography>
          <Stack direction="row" gap={4} sx={{ m: "1rem 0" }}>
            <Stack direction="row">
              <AboutCard
                icon={WebIcon}
                primaryHeading="150+"
                secondryHeading="Web Applications"
              />
            </Stack>
            <Stack direction="row">
              <AboutCard
                icon={HistoryToggleOffIcon}
                primaryHeading="6+"
                secondryHeading="Years Of Experince"
              />
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ m: "1rem 0" }}>
            <AboutCard
              icon={WebhookIcon}
              primaryHeading="8+"
              secondryHeading=" SaaS Projects"
            />
          </Stack>
          <Stack direction="row" sx={{ mt: 2 }}>
            <Button variant="accent">Download CV</Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

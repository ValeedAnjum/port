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
        <Icon sx={{ width: "100%", height: "100%", color: "primary.main" }} />
      </Stack>
      <Stack direction="column">
        <Typography
          sx={{
            fontSize: "21px",
            color: "primary.main",
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
    <Grid container justifyContent="center" id="about-sec">
      <Grid item md={9} sm={12} sx={{ m: { xs: 0, md: 1 }, p: 2 }} container>
        <Grid
          item
          sm={6}
          sx={{
            p: { md: "2rem 2rem 0 0", xs: "0" },
            display: { md: "block", xs: "none" },
          }}
        >
          <Box
            sx={{
              height: "80vh",
              backgroundImage: "url(/assets//images/hero/hero-man-3.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>

        <Grid
          item
          md={6}
          sm={12}
          container
          direction="column"
          sx={{ p: { md: "2rem 2rem 0 0", xs: "0" } }}
        >
          <Typography
            sx={{
              fontSize: {
                xl: "3.25rem",
                lg: "2.25rem",
                md: "1rem",
              },
              fontWeight: "700",
              color: "#1f1f1f",
              lineHeight: 1,
            }}
          >
            Frontend Developer Specializing in React & Next.js
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", color: "text.secondary", mt: 2 }}
          >
            Passionate MERN stack developer with expertise in building modern,
            responsive web applications. Specializing in React, Next.js, and
            full-stack JavaScript development. Committed to creating seamless
            user experiences with clean, maintainable code and optimal
            performance.
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column" }}
            gap={4}
            sx={{ m: "1rem 0" }}
          >
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
            <Button
              variant="accent"
              href="https://www.linkedin.com/in/valeedanjum/"
              target="_blank"
            >
              Linked - In
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

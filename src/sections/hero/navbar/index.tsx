import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { Button, IconButton, Stack, Typography } from "@mui/material";

export default function Navbar() {
  const goToAbout = () => {
    const aboutSection = document.getElementById("about-sec");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box sx={{ flexGrow: 1, m: { xs: 0, md: 1 } }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          p: { xs: 0, md: 2 },
          borderRadius: { xs: "0", md: "12px" },
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              cursor: "pointer",
              fontSize: { lg: "2rem" },
              userSelect: "none",
            }}
          >
            Valeed.
          </Typography>
          <Stack
            direction="row"
            sx={{
              flexGrow: 1,
              pl: 2,
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button variant="main" disableRipple onClick={goToAbout}>
                About Me
              </Button>
              <Button variant="main" disableRipple>
                Skills
              </Button>
              <Button variant="main" disableRipple>
                Experince
              </Button>
              <Button variant="main" disableRipple>
                Work
              </Button>
            </Box>
          </Stack>
          <Stack direction="row">
            <Button
              variant="accent"
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              Contact Me
            </Button>
            <IconButton
              sx={{
                display: {
                  sm: "block",
                  md: "none",
                },
              }}
            >
              <FormatAlignJustifyIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

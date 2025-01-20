"use client";

import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

// Styled components
const SpinnerContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#e3f2fd",
}));

const IconWrapper = styled(Box)(() => ({
  position: "relative",
  width: 64,
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: "spin 1s linear infinite",
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  position: "absolute",
  color: theme.palette.primary.light,
}));

const StyledCameraIcon = styled(CameraAltIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: 32,
  height: 32,
}));

const LoadingText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
  animation: "pulse 1.5s ease-in-out infinite",
  "@keyframes pulse": {
    "0%, 100%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0.5,
    },
  },
}));

export const LoadingScreen = () => {
  return (
    <SpinnerContainer>
      <Box position="relative">
        <StyledCircularProgress
          size={64}
          thickness={4}
          variant="determinate"
          value={100}
        />
        <IconWrapper>
          <StyledCameraIcon />
        </IconWrapper>
      </Box>
      <LoadingText variant="h6">Loading...</LoadingText>
    </SpinnerContainer>
  );
};

"use client";

import { Box } from "@mui/material";
import { InlineWidget } from "react-calendly";

export const CalendlyPopup = ({
  meatingModel,
  closeMeatingModel,
}: {
  meatingModel: boolean;
  closeMeatingModel: () => void;
}) => {
  return (
    meatingModel && (
      <>
        <Box
          sx={{
            backgroundColor: "#00000057",
            width: "100%",
            height: "100vh",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 9,
          }}
          onClick={closeMeatingModel}
        />
        <Box
          sx={{
            border: "1px solid #0000004f",
            borderRadius: "4px",
            backgroundColor: "white",
            height: "80vh",
            width: "80%",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 10,
            p: 1,
            // overflow: "scroll",
          }}
        >
          <InlineWidget url="https://calendly.com/valeedanjumsiddiqui/meeting" />
        </Box>
      </>
    )
  );
};

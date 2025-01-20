import { Box } from "@mui/material";
import React from "react";

const Shapes = () => {
  return (
    <Box
      sx={{
        // border: "1px solid blue",
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
      {/* Left Area */}
      <Box
        sx={{
          //   border: "1px solid red",
          width: { xs: "100%", md: "50%" },
          height: "100%",
          top: "0",
          left: "0",
          position: "absolute",
          backgroundImage: "url(/assets//images/hero/hero-left-bg-1.png)", // Correct path
          backgroundSize: "cover", // Optional, adjust as needed
          backgroundRepeat: "no-repeat", // Optional, adjust as needed
        }}
      >
        {/* a samll dot in the top area*/}
        <Box
          sx={{
            position: "absolute",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#AEBBFF",
            top: "15%",
            left: "20%",
          }}
        />
        {/* a big circle in the bottom  */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            left: "10%",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 221, 253, 0.6)",
            bottom: "-70px",
          }}
        />

        {/* small circle at the end of left side */}
        <Box
          sx={{
            position: "absolute",
            width: "40px",
            height: "40px",
            bottom: "100px",
            right: "40px",
            backgroundColor: "#B6DCFD",
            borderRadius: "50%",
          }}
        />
      </Box>
      {/* Right Area */}
      <Box
        sx={{
          //   border: "1px solid black",
          display: { xs: "none", md: "block" },
          width: "50%",
          height: "100%",
          top: "0",
          right: "0",
          position: "absolute",
          backgroundImage: "url(/assets//images/hero/hero-right-bg-2.png)", // Correct path
          backgroundSize: "cover", // Optional, adjust as needed
          backgroundRepeat: "no-repeat", // Optional, adjust as needed
        }}
      />
    </Box>
  );
};

export default Shapes;

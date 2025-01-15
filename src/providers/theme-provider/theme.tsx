import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    main: true;
    accent: true;
  }
}
export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-albert-sans)",
  },

  palette: {
    primary: {
      main: colors.primary,
    },

    text: {
      primary: colors.textColor.primary,
      secondary: colors.textColor.secondary,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "main" },
          style: {
            position: "relative",
            color: colors.textColor.secondary,
            fontSize: "14px",
            fontWeight: "600",
            backgroundColor: "transparent",
            borderRadius: 0,
            overflow: "hidden", // Ensure no overflow during animation
            "&:hover": {
              color: colors.primary, // Text color on hover
              backgroundColor: "transparent",
            },
            "&::after": {
              content: '""', // Required for pseudo-element
              position: "absolute",
              bottom: 0,
              left: "50%", // Start at the center
              width: "0%", // Initial width
              height: "2px", // Border height
              backgroundColor: colors.primary, // Border color
              transition: "all 0.5s ease", // Smooth transition
              transform: "translateX(-50%)", // Center alignment
            },
            "&:hover::after": {
              width: "100%", // Expand to full width
            },
          },
        },
        {
          props: { variant: "accent" }, // Custom variant name
          style: {
            position: "relative", // Required for pseudo-element positioning
            fontSize: "14px",
            fontWeight: "bold",
            color: "white", // Ensures text remains visible
            borderRadius: "12px",
            backgroundColor: colors.primary, // Base background color
            padding: "19px 36px",
            overflow: "hidden", // Prevents pseudo-element overflow
            zIndex: 1, // Keeps text above pseudo-element
            "&::before": {
              content: '""', // Required for pseudo-element
              position: "absolute",
              top: "-100%", // Start below the button
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "black", // Hover background color
              zIndex: -1, // Places pseudo-element behind text
              transition: "top 0.5s ease", // Smooth animation
            },
            "&:hover::before": {
              top: "0%", // Moves the pseudo-element up to cover the button
            },
            "&:hover": {
              backgroundColor: colors.primary, // Keeps base background consistent
              color: "white", // Ensures text remains visible
            },
          },
        },
      ],
    },
  },
});

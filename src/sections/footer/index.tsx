import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const FooterSec = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", p: 2 }}>
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Made with
        <FavoriteIcon sx={{ color: "red" }} />
        in Pakistan.
      </Typography>
    </Box>
  );
};

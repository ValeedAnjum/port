import { Box, Grid, Stack, Typography } from "@mui/material";
import { skills } from "./static-data";

const CircularProgressBorder = ({
  percentage,
  label,
  skillName,
  color,
}: {
  percentage: number;
  label: string;
  skillName: string;
  color: string;
}) => {
  return (
    <Stack>
      <Box
        sx={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `conic-gradient(${color} ${percentage}%, transparent ${percentage}%)`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotate(-109deg)",
        }}
      >
        <Box
          sx={{
            width: "120px", // Inner circle width (adjust for thickness)
            height: "120px", // Inner circle height
            borderRadius: "50%",
            background: "white", // Inner circle background
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(109deg)",
          }}
        >
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            {label}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          mt: 2,
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        {skillName}
      </Typography>
    </Stack>
  );
};

export const SkillSec = () => {
  function generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }
  return (
    <Grid
      container
      sx={{ p: { xs: 2 } }}
      justifyContent={{ xs: "flex-start", md: "center" }}
    >
      <Grid item md={9} sm={12}>
        <Typography
          variant="h1"
          sx={{ color: "text.primary", textAlign: "center" }}
        >
          Professional Skills
        </Typography>
        <Stack direction="row" gap={1} sx={{ flexWrap: "wrap" }}>
          {skills.map(({ name, level }, index) => (
            <CircularProgressBorder
              key={index}
              percentage={level}
              label={`${level}%`}
              skillName={name}
              color={generateRandomColor()}
            />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

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
          width: { xs: "80px", sm: "150px" },
          height: { xs: "80px", sm: "150px" },
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
            width: { xs: "70px", sm: "120px" },
            height: { xs: "70px", sm: "120px" },
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
          fontSize: { xs: "0.8rem", md: "1rem" },
        }}
      >
        {skillName}
      </Typography>
    </Stack>
  );
};

export const SkillSec = () => {
  return (
    <Grid
      container
      sx={{ p: { xs: 2 } }}
      justifyContent={{ xs: "flex-start", md: "center" }}
    >
      <Grid item md={9} sm={12}>
        <Typography
          variant="h1"
          sx={{ color: "text.primary", textAlign: "center", pb: 2 }}
        >
          Professional Skills
        </Typography>
        <Stack
          direction="row"
          gap={1}
          sx={{
            flexWrap: "wrap",
            // border: "1px solid red",
            justifyContent: "center",
          }}
        >
          {skills.map(({ name, level, color }, index) => (
            <CircularProgressBorder
              key={index}
              percentage={level}
              label={`${level}%`}
              skillName={name}
              color={color}
            />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

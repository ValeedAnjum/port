import { Stack, Typography, StackProps } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";

interface IconTextProps extends StackProps {
  icon: SvgIconComponent;
  text: string;
  href?: string;
}

const IconWithText = ({ icon: Icon, text, ...rest }: IconTextProps) => {
  return (
    <Stack
      {...rest}
      direction="row"
      sx={{
        color: "text.primary",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon />
      <Typography
        sx={{
          fontSize: "0.875rem",
          fontWeight: "600",
          ml: "0.5rem",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

const NavbarHeader = () => {
  return (
    <Stack direction="row" gap={4}>
      <IconWithText
        icon={LocalPhoneIcon}
        text="+92 301 640 50 51"
        component="a"
        href="tel:+923016405051"
      />
      <IconWithText
        icon={FmdGoodIcon}
        text="Satellite Town, Rawalpindi, Pakistan."
      />
      <IconWithText
        icon={EmailIcon}
        text="valeedanjumsiddiqui@gmail.com"
        component="a"
        href="mailto:valeedanjumsiddiqui@gmail.com"
      />
    </Stack>
  );
};

export default NavbarHeader;

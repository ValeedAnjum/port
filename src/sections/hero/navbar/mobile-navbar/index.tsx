import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

interface MobileNavbarPorps {
  isOpen: boolean;
  toggleDrawer: (open: boolean) => void;
}
const MobileNavbar = ({ isOpen, toggleDrawer }: MobileNavbarPorps) => {
  return (
    <Drawer open={isOpen} anchor="right" onClose={() => toggleDrawer(false)}>
      <Box onClick={() => toggleDrawer(false)}>
        <List sx={{ width: "260px", p: "0" }}>
          <ListItemButton sx={{ p: "0", borderBottom: "1px solid #00000021" }}>
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
          </ListItemButton>
          <ListItemButton sx={{ p: "0", borderBottom: "1px solid #00000021" }}>
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileNavbar;

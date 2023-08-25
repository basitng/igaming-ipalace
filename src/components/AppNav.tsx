import {
  AppBar,
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import sideNav from "./side-nav";
import { Menu } from "@mui/icons-material";
import { indigo } from "@mui/material/colors";
import Link from "next/link";
import RequestDemoModal from "./modal";

export default function AppNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar elevation={0} sx={{ bgcolor: "#191C18" }}>
      <RequestDemoModal setIsOpen={setIsOpen} isOpen={isOpen} />
      <Toolbar className="w-full py-8">
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5" color="white">
            IgamingPalace
          </Typography>
          <Hidden smDown>
            <Stack spacing={2} direction="row">
              {sideNav.map((nav, index) => (
                <Link href={nav.href} key={index}>
                  <Button
                    onClick={nav.href == "" ? toggleModal : () => null}
                    variant={nav.href === "" ? "contained" : "text"}
                    sx={{ color: "#fff" }}
                  >
                    {nav.pathname}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              onClick={toggleDrawer(true)}
              size="large"
              sx={{ color: "#fff", bgcolor: `#3f51b5 !important` }}
            >
              <Menu color="inherit" />
            </IconButton>
          </Hidden>
        </Stack>
      </Toolbar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {sideNav.map((nav, index) => (
            <ListItemButton
              onClick={nav.href == "" ? toggleModal : () => null}
              key={index}
            >
              <ListItemText primary={nav.pathname} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

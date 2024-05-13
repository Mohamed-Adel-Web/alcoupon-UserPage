"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { NavigationSources } from "./NavigationLinks";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { categoryTypes } from "../types";
import logo from "../../../public/images/logo/logo.png";
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  AllCategories: categoryTypes[];
};
const mainMenuNavigationSources: { title: string; href: string }[] =
  NavigationSources;
function MainMenuDrawer({ open, setOpen, AllCategories }: Props) {
  function handleDrawerClose() {
    setOpen(false);
  }

  const mainMenuNavigationLinks = (
    <Box sx={{ width: { xs: "100vw", md: "17vw" } }} role="presentation">
      <List>
        {mainMenuNavigationSources.map((link, index) => (
          <Link
            href={`${link.href}`}
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            <ListItem
              sx={{
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
              key={index}
              disablePadding
            >
              <ListItemButton>
                <ListItemText
                  primary={link.title}
                  primaryTypographyProps={{
                    color: "black",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        {AllCategories.map((category, index) => (
          <Link
            href={`${category.name_en}/${category.id}`}
            style={{ textDecoration: "none", color: "#000" }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={category.name_en}
                  primaryTypographyProps={{
                    color: "black",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer open={open} onClose={handleDrawerClose}>
        <Box
          className={"DrawerHeader"}
          sx={{
            padding: "1rem 0.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image src={logo} width={160} height={41} alt="logo" />{" "}
          </Typography>
          <Tooltip
            title="Close"
            sx={{ color: "black", cursor: "pointer" }}
            onClick={handleDrawerClose}
          >
            <CloseRoundedIcon />
          </Tooltip>
        </Box>

        {mainMenuNavigationLinks}
      </Drawer>
    </div>
  );
}
export default MainMenuDrawer;

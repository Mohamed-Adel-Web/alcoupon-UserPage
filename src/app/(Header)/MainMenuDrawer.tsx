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
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  AllCategories: categoryTypes[];
  lang: string | null;
};
const mainMenuNavigationSources: {
  title_en: string;
  title_ar: string;
  href: string;
}[] = NavigationSources;
function MainMenuDrawer({ open, setOpen, AllCategories, lang }: Props) {
  function handleDrawerClose() {
    setOpen(false);
  }

  const mainMenuNavigationLinks = (
    <Box sx={{ width: { xs: "100vw", md: "17vw" } }} role="presentation">
      <List>
        {mainMenuNavigationSources.map((link, index) => (
          <Link
            href={
              index > 0
                ? `${link.href}?page=1&lang=${lang}`
                : `${link.href}?lang=${lang}`
            }
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            onClick={() => {
              setOpen(false);
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
                  primary={lang == "en" ? link.title_en : link.title_ar}
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
            href={`${category.name_en}/${category.id}?lang=${lang}`}
            style={{ textDecoration: "none", color: "#000" }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={lang == "en" ? category.name_en : category.name_ar}
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
            <Image src={""} width={160} height={41} alt="logo" />{" "}
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

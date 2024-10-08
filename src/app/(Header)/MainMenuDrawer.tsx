"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { NavigationSources } from "./NavigationLinks";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { categoryTypes } from "../types";

type Props = {
  open: boolean;
  handleMainMenuClose: () => void;
  AllCategories: categoryTypes[];
  lang: string | null;
};

const mainMenuNavigationSources: {
  title_en: string;
  title_ar: string;
  href: string;
}[] = NavigationSources;

const MainMenuDrawer: React.FC<Props> = ({
  open,
  handleMainMenuClose,
  AllCategories,
  lang,
}) => {
  const mainMenuNavigationLinks = React.useMemo(
    () => (
      <Box sx={{ width: { xs: "100vw", md: "17vw" } }} role="presentation">
        <List>
          {mainMenuNavigationSources.map((link, index) => (
            <Link
              key={index}
              href={
                index > 0
                  ? `${link.href}?page=1&lang=${lang}`
                  : `${link.href}?lang=${lang}`
              }
              prefetch={true}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
              onClick={handleMainMenuClose}
            >
              <ListItem
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText
                    primary={lang === "en" ? link.title_en : link.title_ar}
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
              key={index}
              href={`/${category.name_en}/${category.id}?lang=${lang}`}
              style={{ textDecoration: "none", color: "#000" }}
              prefetch={true}
              onClick={handleMainMenuClose}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={
                      lang === "en" ? category.name_en : category.name_ar
                    }
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
    ),
    [mainMenuNavigationSources, AllCategories, lang, handleMainMenuClose]
  );

  return (
    <div>
      <Drawer open={open} onClose={handleMainMenuClose}>
        <Box
          className="DrawerHeader"
          sx={{
            padding: "1rem 0.5rem",
            display: "flex",
            backgroundColor: "black",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href={`/?lang=${lang}`}>
            <Typography
              variant="h6"
              noWrap
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
              {lang === "en" ? (
                <Image
                  src={"/images/logo/Logo_En.svg"}
                  width={151}
                  height={51}
                  alt="Logo"
                />
              ) : (
                <Image
                  src={"/images/logo/Logo_Ar.svg"}
                  width={151}
                  height={51}
                  alt="Logo"
                />
              )}
            </Typography>
          </Link>
          <CloseRoundedIcon
            sx={{ color: "white", cursor: "pointer", marginX: "0.5rem" }}
            onClick={handleMainMenuClose}
          />
        </Box>

        {mainMenuNavigationLinks}
      </Drawer>
    </div>
  );
};

export default React.memo(MainMenuDrawer);

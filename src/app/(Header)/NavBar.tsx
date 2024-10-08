"use client";
import React, { useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Tooltip } from "@mui/material";
import MainMenuDrawer from "./MainMenuDrawer";
import { categoryTypes } from "../types";
import SearchModal from "./SearchModal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import SearchList from "./SeachList";
function Header({ AllCategories }: { AllCategories: categoryTypes[] }) {
  const [openMainMenu, setMainMenuOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<string | null>("ar");
  const [showSearchList, setShowSearchList] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentSearchParams = useSearchParams();
  const handleSearchOpen = useCallback(() => {
    setSearchOpen(true);
  }, []);

  const handleSearchClose = useCallback(() => {
    setSearchOpen(false);
  }, []);

  useEffect(() => {
    setLang(currentSearchParams.get("lang"));
  }, [currentSearchParams]);

  const handleSearchListClose = useCallback(() => {
    setShowSearchList(false);
  }, []);
  useEffect(() => {
    if (lang === "ar") {
      document.body.dir = "rtl";
      document.body.className = "rtl";
    } else if (lang === "en") {
      document.body.dir = "ltr";
      document.body.className = "ltr";
    }
  }, [lang]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (searchInput.length > 1) {
        router.push(`/searchStore/${searchInput}?lang=${lang}`);
        setSearchInput("");
      }
    },
    [searchInput, lang, router]
  );

  const handleLangChange = useCallback(() => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    const updatedSearchParams = new URLSearchParams(
      currentSearchParams.toString()
    );
    updatedSearchParams.set("lang", newLang);
    router.push(pathname + "?" + updatedSearchParams.toString());
  }, [lang, currentSearchParams, pathname, router]);
  const handleMainMenuOpen = useCallback(() => {
    setMainMenuOpen(true);
  }, []);
  const handleMainMenuClose = useCallback(() => {
    setMainMenuOpen(false);
  }, []);
  return (
    <nav
      style={{
        position: "sticky",
        top: "0",
        zIndex: "2",
        background: "#212121",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Logo */}
          <Link href={`/?lang=${lang}`} prefetch={true}>
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
                  loading="eager"
                />
              ) : (
                <Image
                  src={"/images/logo/Logo_Ar.svg"}
                  width={151}
                  height={51}
                  alt="Logo"
                  loading="eager"
                />
              )}
            </Typography>
          </Link>
          {/* Logo */}

          {/* search bar */}
          <Box sx={{ position: "relative" }}>
            {" "}
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: { md: "flex", xs: " none" },
                alignItems: "center",
                width: 600,
              }}
              onSubmit={handleSubmit}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={
                  lang === "en"
                    ? "Search stores, coupons and discounts"
                    : "ابحث عن المتاجر، الكوبونات، والخصومات"
                }
                inputProps={{
                  "aria-label": "Search stores, coupons and discounts",
                }}
                value={searchInput}
                onChange={(event) => {
                  setSearchInput(event.target.value);
                  setShowSearchList(true);
                }}
              />
              <Button
                type="submit"
                sx={{ p: "7px", backgroundColor: "#E9ECEF", color: "black" }}
                aria-label="search"
              >
                <SearchIcon />
              </Button>
            </Paper>
            {showSearchList && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%",
                }}
              >
                <SearchList
                  lang={lang}
                  searchInput={searchInput}
                  onClose={handleSearchListClose}
                  setSearchInput={setSearchInput}
                />
              </Box>
            )}{" "}
          </Box>

          {/* search bar */}

          {/* languageControl */}

          {/* languageControl */}
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip
              title={
                lang == "en"
                  ? `اذهب الي اللغة العربية`
                  : `Go to english Language`
              }
              onClick={handleLangChange}
              sx={{
                cursor: "pointer",
                color: "white",
                fontSize: "1.5rem",
                lineHeight: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "0.5rem",
                mt: "0.4rem",
              }}
            >
              <Typography> {lang === "en" ? "AR" : "EN"}</Typography>
            </Tooltip>
            {/* Search in small Screen */}
            <Tooltip
              title="Search"
              sx={{ color: "white", display: { xs: "flex", md: "none" } }}
              onClick={handleSearchOpen}
            >
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <SearchModal
              lang={lang}
              open={searchOpen}
              handleSearchClose={handleSearchClose}
            />
            {/* Search in small Screen */}
            {/* main menu in small screen */}
            <Tooltip
              title="Main menu"
              sx={{ color: "white", display: { xs: "flex", md: "none" } }}
              onClick={handleMainMenuOpen}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            {/* main menu in small screen */}
          </Typography>
        </Toolbar>
      </Container>
      <MainMenuDrawer
        open={openMainMenu}
        handleMainMenuClose={handleMainMenuClose}
        AllCategories={AllCategories}
        lang={lang}
      />
    </nav>
  );
}

export default React.memo(Header);

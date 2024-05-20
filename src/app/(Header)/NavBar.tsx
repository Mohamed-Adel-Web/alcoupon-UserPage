"use client";
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
import { useEffect, useMemo, useState } from "react";
import MainMenuDrawer from "./MainMenuDrawer";
import { categoryTypes } from "../types";
import SearchModal from "./SearchModal";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
function Header({ AllCategories }: { AllCategories: categoryTypes[] }) {
  const [openMainMenu, setMainMenuOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<string | null>("ar");
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentSearchParams = useSearchParams();
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };
  useEffect(() => {
    setLang(currentSearchParams.get("lang"));
  }, []);
  useMemo(() => {
    if (lang == "ar") {
      document.body.dir = "rtl";
      document.body.className = "rtl";
    } else if (lang == "en") {
      document.body.dir = "ltr";
      document.body.className = "ltr";
    }
  }, [lang]);

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
              {lang == "en" ? (
                <img
                  src={"/images/logo/Logo_En.svg"}
                  width={151}
                  height={51}
                  alt="Picture of the author"
                />
              ) : (
                <img
                  src={"/images/logo/Logo_Ar.svg"}
                  width={151}
                  height={51}
                  alt="Picture of the author"
                />
              )}
            </Typography>
          </Link>
          {/* Logo */}

          {/* search bar */}
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: { md: "flex", xs: " none" },
              alignItems: "center",
              width: 600,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder={
                lang == "en"
                  ? `Search stores, coupons and discounts`
                  : `ابحث عن المتاجر، الكوبونات، والخصومات
`
              }
              inputProps={{
                "aria-label": "Search stores, coupons and discounts",
              }}
              value={searchInput}
              onChange={(event) => {
                setSearchInput(event.target.value);
              }}
            />
            <Button
              type="button"
              sx={{ p: "7px", backgroundColor: "#E9ECEF", color: "black" }}
              aria-label="search"
              onClick={() => {
                if (searchInput.length > 1) {
                  router.push(`/searchStore/${searchInput}?lang=${lang}`);
                  setSearchInput("");
                }
              }}
            >
              <SearchIcon />
            </Button>
          </Paper>
          {/* search bar */}

          <Box sx={{ display: "flex" }}>
            {/* languageControl */}
            <Tooltip title="Go to Arabic Interface" sx={{ color: "white" }}>
              <IconButton
                onClick={() => {
                  const newLang = lang === "ar" ? "en" : "ar";
                  setLang(newLang);
                  const updatedSearchParams = new URLSearchParams(
                    currentSearchParams.toString()
                  );
                  updatedSearchParams.set("lang", newLang);
                  router.push(pathname + "?" + updatedSearchParams.toString());
                }}
              >
                <LanguageIcon />
                {lang === "en" ? " عربي" : "English"}
              </IconButton>
            </Tooltip>
            {/* languageControl */}
            <Typography sx={{ display: { xs: "flex", md: "none" } }}>
              {/* Search in small Screen */}
              <Tooltip
                title="Search"
                sx={{ color: "black" }}
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
              {/* main menu in small screen  */}
              <Tooltip
                title="Main menu"
                sx={{ color: "white" }}
                onClick={() => {
                  setMainMenuOpen(true);
                }}
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
              {/* main menu in small screen  */}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
      <MainMenuDrawer
        open={openMainMenu}
        setOpen={setMainMenuOpen}
        AllCategories={AllCategories}
        lang={lang}
      />
    </nav>
  );
}
export default Header;

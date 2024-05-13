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
import { useEffect, useState } from "react";
import MainMenuDrawer from "./MainMenuDrawer";
import { categoryTypes } from "../types";
import logo from "../../../public/images/logo/logo.png";
import Cookies from "js-cookie";
import SearchModal from "./SearchModal";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
function Header({ AllCategories }: { AllCategories: categoryTypes[] }) {
  const [openMainMenu, setMainMenuOpen] = useState<boolean>(false);
  const [dir, setDir] = useState<string>("ltr");
  const [lang, setLang] = useState<string>("ar");
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const pathname = usePathname(); // let's get the pathname to make the component reusable - could be used anywhere in the project
  const router = useRouter();
  const currentSearchParams = useSearchParams();
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  useEffect(() => {
    document.body.dir = dir;
  }, [dir, lang]);
  return (
    <nav style={{ position: "sticky", top: "0", zIndex: "2" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Logo */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            <Image
              src={logo}
              width={180}
              height={51}
              alt="Picture of the author"
            />{" "}
          </Typography>
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
              placeholder="Search stores, coupons and discounts"
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
              sx={{ p: "7px", backgroundColor: "#E9ECEF", color: "#000" }}
              aria-label="search"
              onClick={() => {
                if (searchInput.length > 1) {
                  router.push(`/searchStore/${searchInput}`);
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
            <Tooltip title="Go to Arabic Interface" sx={{ color: "black" }}>
              <IconButton
                onClick={() => {
                  const newDir = dir === "ltr" ? "rtl" : "ltr";
                  setDir(newDir);
                  const newLang = lang === "ar" ? "en" : "ar";
                  setLang(newLang);
                  const updatedSearchParams = new URLSearchParams(
                    currentSearchParams.toString()
                  );
                  updatedSearchParams.set("lang", lang);

                  router.push(pathname + "?" + updatedSearchParams.toString());
                }}
              >
                <LanguageIcon />
                {dir === "ltr" ? " عربي" : "English"}
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
                open={searchOpen}
                handleSearchClose={handleSearchClose}
              />
              {/* Search in small Screen */}
              {/* main menu in small screen  */}
              <Tooltip
                title="Main menu"
                sx={{ color: "" }}
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
      />
    </nav>
  );
}
export default Header;

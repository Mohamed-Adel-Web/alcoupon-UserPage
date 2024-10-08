"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { categoryTypes } from "../types";
import Link from "next/link";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const MoreNavigation: React.FC<{
  AllCategoriesData: categoryTypes[];
  lang: string | null;
}> = React.memo(({ AllCategoriesData, lang }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  const DynamicNavigationLinksList = React.useMemo(
    () =>
      AllCategoriesData.map((category, index) => {
        if (index >= 8) {
          return (
            <Link
              key={category.id}
              href={`/${category.name_en}/${category.id}?lang=${lang}`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
              prefetch={true}
            >
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                  lineHeight: "44px",
                  letterSpacing: "2px",
                  whiteSpace: "nowrap",
                  textTransform: "capitalize",
                }}
              >
                {lang === "en" ? category.name_en : category.name_ar}
              </MenuItem>
            </Link>
          );
        }
        return null;
      }),
    [AllCategoriesData, lang, handleClose]
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        sx={{
          padding: "0 0.4rem",
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "0.875rem",
          lineHeight: "44px",
          letterSpacing: "2px",
          whiteSpace: "nowrap",
          textTransform: "capitalize",
        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {lang === "en" ? "More" : "المزيد"}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {DynamicNavigationLinksList}
      </StyledMenu>
    </div>
  );
});

export default MoreNavigation;

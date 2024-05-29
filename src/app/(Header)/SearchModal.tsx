"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";

const SearchModal: React.FC<{ open: boolean, handleSearchClose: () => void, lang: string | null }> = React.memo(({ open, handleSearchClose, lang }) => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const router = useRouter();

  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchInput.length > 1) {
      router.push(`/searchStore/${searchInput}?lang=${lang}`);
      setSearchInput("");
      handleSearchClose();
    }
  }, [searchInput, lang, router, handleSearchClose]);

  const handleInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }, []);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleSearchClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            position: "absolute",
            top: "13px",
            backgroundColor: "transparent",
          },
          display: { xs: "block", md: "none" },
        }}
      >
        <IconButton
          aria-label="delete"
          size="large"
          sx={{ width: "fit-content", color: "white", fontWeight: "bold" }}
          onClick={handleSearchClose}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            alignItems: "center",
            width: "100%",
            display: "flex",
            border: "1px solid black",
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
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            sx={{ p: "7px", backgroundColor: "#E9ECEF", color: "#000" }}
            aria-label="search"
          >
            <SearchIcon />
          </Button>
        </Paper>
      </Dialog>
    </React.Fragment>
  );
});

export default SearchModal;

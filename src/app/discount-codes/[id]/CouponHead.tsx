import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HouseIcon from "@mui/icons-material/House";
import { StoreType } from "@/app/types";

type Props = {
  store: StoreType | null;
};

const CouponHead = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          margin: "1rem 0",
          border: "1px solid #dddddd",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            padding: "1rem 0",
            fontSize: "1rem",
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link href={"/"}>
            <HouseIcon sx={{ textDecoration: "none", color: "#0558A0" }} />
          </Link>
          <KeyboardArrowRightIcon />
          <Link
            href={"/discount-codes"}
            style={{ textDecoration: "none", color: "#0558A0" }}
          >
            ALL Stores
          </Link>
          <KeyboardArrowRightIcon />
          {props.store?.name_en}
        </Typography>

        <Typography sx={{ fontSize: "1.8125rem",}}>
        {props.store?.description_en} 
        </Typography>
      </Box>
    </>
  );
};

export default CouponHead;

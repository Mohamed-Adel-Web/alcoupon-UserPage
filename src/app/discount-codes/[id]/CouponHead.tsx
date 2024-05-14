import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HouseIcon from "@mui/icons-material/House";
import { Language, StoreType } from "@/app/types";

type Props = {
  store: StoreType | null;
  lang: Language;
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
          <Link href={`/?lang=${props.lang}`}>
            <HouseIcon sx={{ textDecoration: "none", color: "#0558A0" }} />
          </Link>
          {props.lang == "en" ? (
            <KeyboardArrowRightIcon />
          ) : (
            <KeyboardArrowLeftIcon />
          )}
          <Link
            href={`/discount-codes?lang=${props.lang}`}
            style={{ textDecoration: "none", color: "#0558A0" }}
          >
            {props.lang == "en" ? ` ALL Stores` : `جميع المتاجر`}
          </Link>
          {props.lang == "en" ? (
            <KeyboardArrowRightIcon />
          ) : (
            <KeyboardArrowLeftIcon />
          )}
          {props.lang == "en" ? props.store?.name_en : props.store?.name_ar}
        </Typography>

        <Typography sx={{ fontSize: "1.8125rem" }}>
          {props.lang == "en"
            ? props.store?.description_en
            : props.store?.description_ar}
        </Typography>
      </Box>
    </>
  );
};

export default CouponHead;

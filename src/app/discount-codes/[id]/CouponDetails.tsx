"use client";
import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useState, useCallback } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Language, couponType } from "@/app/types";

type Props = {
  coupon: couponType | null;
  lang: Language;
};

const copyText = (entryText: string) => {
  navigator.clipboard.writeText(entryText);
};

const CouponDetails: React.FC<Props> = React.memo(({ coupon, lang }) => {
  const [isCopied, setCopy] = useState<boolean>(false);

  const handleCopyClick = useCallback(() => {
    if (coupon?.code) {
      copyText(coupon.code);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 3000);
    }
  }, [coupon]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "1rem 0",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            border: "1px solid #dddddd",
            backgroundColor: "#F2F2F2",
            fontWeight: "bold",
            padding: "0.7rem 3rem",
            fontSize: "1.3125rem",
            cursor: "text",
          }}
        >
          {coupon?.code}
        </Typography>
        <Button
          variant="outlined"
          color="error"
          sx={{ fontWeight: "bold", padding: "0.9rem " }}
          onClick={handleCopyClick}
        >
          {lang === "en" ? "copy" : "نسخ"}
        </Button>
      </Box>
      {isCopied ? (
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "14px",
            color: "green",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DoneIcon sx={{ fontSize: "20px", fontWeight: "bold" }} />{" "}
          {lang === "en" ? "Copied" : "تم النسخ"}
        </Typography>
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "14px",
            color: "#0558A0",
          }}
        >
          {lang === "en"
            ? "Copy the code above and paste at checkout."
            : "انسخ الكود أعلاه والصقه عند الدفع."}
        </Typography>
      )}
    </>
  );
});

export default CouponDetails;

"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { couponType } from "@/app/types";
type Props = {
  coupon: couponType | null;
};
function copyText(entryText: string) {
  navigator.clipboard.writeText(entryText);
}
export default function CouponDetails(props: Props) {
  const [isCopied, setCopy] = useState<boolean>(false);
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
          {props.coupon?.code}
        </Typography>
        <Button
          variant="outlined"
          color="error"
          sx={{ fontWeight: "bold", padding: "0.9rem " }}
          onClick={() => {
            copyText(`${props.coupon?.code}`);
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 3000);
          }}
        >
          copy
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
          <DoneIcon sx={{ fontSize: "20px", fontWeight: "bold" }} /> Copied
        </Typography>
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "14px",
            color: "#0558A0",
          }}
        >
          Copy the code above and paste at checkout.
        </Typography>
      )}
    </>
  );
}

"use client";
import React, { useState, useCallback } from "react";
import { Snackbar, Alert, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type Props = {
  code: string;
  lang: string;
};

const CouponBoxText: React.FC<Props> = ({ code, lang }) => {
  const [open, setOpen] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setOpen(true);
  }, [code]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div
      className="coupon-box-text"
      style={{
        marginTop: "1rem",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        position: "relative",
      }}
    >
      <label htmlFor="discount_coupon_code" style={{ display: "none" }}>
        {lang === "en" ? "Discount Coupon Code" : "كود الخصم"}
      </label>
      <textarea
        id="discount_coupon_code"
        name="discount_coupon_code"
        className="couponCode"
        cols={100}
        rows={1}
        readOnly
        aria-readonly="true"
        autoComplete="off"
        onClick={handleCopy}
        style={{ cursor: "pointer", paddingRight: "30px" }}
        aria-label={lang === "en" ? "Discount Coupon Code" : "كود الخصم"}
      >
        {code}
      </textarea>
      <Tooltip title={lang === "en" ? "Click to copy" : "اضغط للنسخ"}>
        <IconButton
          onClick={handleCopy}
          sx={{
            position: "absolute",
            right: "5px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <ContentCopyIcon sx={{ fontSize: "16px" }} />
        </IconButton>
      </Tooltip>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {lang === "en" ? "Code copied" : "تم نسخ الكود"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default React.memo(CouponBoxText);

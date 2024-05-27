"use client";
import React, { useState } from "react";
import { Snackbar, Alert, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type Props = {
  code: string;
  lang: string;
};

const CouponBoxText: React.FC<Props> = ({ code, lang }) => {
  const [open, setOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <textarea
        name="discount_coupon_code"
        className="couponCode"
        cols={100}
        rows={1}
        readOnly
        contentEditable="false"
        autoComplete="off"
        onClick={handleCopy}
        style={{ cursor: "pointer", paddingRight: "30px" }}
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
          <ContentCopyIcon  sx={{fontSize:"16px"}}/>
        </IconButton>
      </Tooltip>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {lang === "en" ? "Code copied!" : "تم نسخ الكود!"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CouponBoxText;

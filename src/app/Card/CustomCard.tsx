import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import { StoreType, couponType } from "../types";
import Image from "next/image";
import Link from "next/link";
import CouponBoxText from "./CouponBoxText";

type Props = {
  type: "store" | "coupon";
  data: StoreType | couponType;
  lang: string;
};

export default function CustomCard({ type, data, lang }: Props) {
  const isCoupon = type === "coupon";
  const store = isCoupon ? (data as couponType).store : (data as StoreType);
  const altText =
    lang === "en"
      ? isCoupon
        ? (data as couponType).title_en
        : store.title_en
      : isCoupon
      ? (data as couponType).title_ar
      : store.title_ar;
  const renderStatusButton = (status: boolean | string) => {
    let isActive = true;
    if (typeof status === "string") {
      isActive = status === "active";
    } else if (typeof status === "boolean") {
      isActive = status;
    }
    const iconProps =
      lang === "en"
        ? { startIcon: isActive ? <GppGoodIcon /> : <GppBadIcon /> }
        : { endIcon: isActive ? <GppGoodIcon /> : <GppBadIcon /> };

    return (
      <Button
        component="label"
        color={isActive ? "success" : "error"}
        variant="text"
        sx={{ padding: "0", gap: "8px" }}
        tabIndex={-1}
        {...iconProps}
      >
        {lang === "en"
          ? isActive
            ? "Active"
            : "Inactive"
          : isActive
          ? "نشط"
          : "غير نشط"}
      </Button>
    );
  };

  return (
    <Card sx={{ padding: "1rem 0", textAlign: "start" }}>
      <Link
        href={`/discount-codes/${store.id}?lang=${lang}`}
        prefetch={true}
        style={{
          textDecoration: "none",
          display: "block",
          width: "100%",
        }}
      >
        <Image
          height={100}
          width={300}
          style={{
            width: "100%",
            height: "100px",
            objectFit: "contain",
          }}
          alt={altText}
          src={store.image}
          loading="eager"
        />
      </Link>
      <CardContent>
        <Typography
          component="div"
          sx={{ fontSize: "0.8rem", textTransform: "capitalize" }}
        >
          {lang === "en"
            ? `${store.name_en} Discount Code`
            : `اكواد خصم ${store.name_ar}`}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            margin: "0.5rem 0",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          {lang === "en"
            ? isCoupon
              ? (data as couponType).title_en
              : store.discount_en
            : isCoupon
            ? (data as couponType).title_ar
            : store.discount_ar}
          <WhatshotIcon sx={{ color: "#F3AE5A", margin: "0 0.5rem" }} />
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {isCoupon
            ? renderStatusButton((data as couponType).status)
            : renderStatusButton(store.status)}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: isCoupon ? "column" : "row" }}>
        <Link
          href={`/discount-codes/${store.id}?lang=${lang}`}
          prefetch={true}
          style={{
            textDecoration: "none",
            display: "block",
            width: "100%",
          }}
        >
          <Button
            size="small"
            variant="contained"
            fullWidth
            sx={{
              background:
                "linear-gradient(90deg, rgba(242,19,20,0.6895133053221288) 29%, rgba(244,147,30,0.7175245098039216) 72%)",
              color: "black",
              padding: "0.5rem",
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                background:
                  "linear-gradient(90deg, rgba(242,19,20,0.6895133053221288) 29%, rgba(244,147,30,0.7175245098039216) 72%)",
              },
            }}
          >
            {lang === "en" ? `Go to Store` : `اذهب الي المتجر`}
          </Button>
        </Link>
        {isCoupon && (
          <CouponBoxText lang={lang} code={(data as couponType).code} />
        )}
      </CardActions>
    </Card>
  );
}

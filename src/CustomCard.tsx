import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Link,
} from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import { StoreType, couponType } from "./app/types";
import Image from "next/image";

type Props = {
  type: "store" | "coupon";
  data: StoreType | couponType;
  lang: string;
};

export default function CustomCard({ type, data, lang }: Props) {
  const isCoupon = type === "coupon";
  const store = isCoupon ? (data as couponType).store : (data as StoreType);

  const renderStatusButton = (status: boolean | string) => {
    let isActive = true;
    if (typeof status === "string") {
      isActive = status === "active";
    } else if (typeof status === "boolean") {
      isActive = status;
    }
    return (
      <Button
        component="label"
        role={undefined}
        color={isActive ? "success" : "error"}
        variant="text"
        sx={{ padding: "0" }}
        tabIndex={-1}
        startIcon={isActive ? <GppGoodIcon /> : <GppBadIcon />}
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
      <Image
        height={100}
        width={300}
        style={{
          width: "100%",
          height: "100px",
          objectFit: "contain",
        }}
        alt="store image"
        src={store.image}
      />
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
          <div
            className="coupon-box-text"
            style={{
              marginTop: "1rem",
              marginRight: "auto",
              marginLeft: "auto",
              width: "100%",
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
            >
              {(data as couponType).code}
            </textarea>
          </div>
        )}
      </CardActions>
    </Card>
  );
}

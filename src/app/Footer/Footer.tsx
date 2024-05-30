"use client";
import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useSearchParams } from "next/navigation";
import { StoreType } from "../types";
import Image from "next/image";
import "./Footer.css";

const Footer: React.FC<{ stores: StoreType[] }> = React.memo(({ stores }) => {
  const searchParam = useSearchParams();
  const lang = searchParam.get("lang");

  const NavigationSources: {
    title_en: string;
    title_ar: string;
    href: string;
  }[] = [
    { title_en: "Home", title_ar: "الرئيسية", href: `/?lang=${lang}` },
    {
      title_en: "All Stores",
      title_ar: "جميع المتاجر",
      href: `/discount-codes?page=1&lang=${lang}`,
    },
    {
      title_en: "All coupons",
      title_ar: "جميع الكوبونات",
      href: `/hot-discount-coupons-deals?page=1&lang=${lang}`,
    },
  ];

  const NavigationLinksList = React.useMemo(
    () =>
      NavigationSources.map((link) => (
        <li style={{ margin: "1rem 0" }} key={link.title_en}>
          <Link
            href={`${link.href}`}
            prefetch={true}
            style={{
              padding: "0 0.4rem",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "0.9rem",
              lineHeight: "44px",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
              textTransform: "capitalize",
            }}
          >
            {lang === "en" ? link.title_en : link.title_ar}
          </Link>
        </li>
      )),
    [NavigationSources, lang]
  );

  const TopStoreData = stores?.slice(0, 6);

  const topStoresList = React.useMemo(
    () =>
      TopStoreData?.map((store) => (
        <li style={{ margin: "1rem 0" }} key={store.name_en}>
          <Link
            href={`/discount-codes/${store.id}?lang=${lang}`}
            prefetch={true}
            style={{
              padding: "0 0.4rem",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "0.9rem",
              lineHeight: "44px",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
              textTransform: "capitalize",
            }}
          >
            {lang === "en" ? store.name_en : store.name_ar}
          </Link>
        </li>
      )),
    [TopStoreData, lang]
  );

  return (
    <Box
      sx={{
        padding: "2rem 0rem",
        color: "white",
        border: "1px solid #dddddd",
        background: "black",
        marginTop: "2rem",
        textAlign: { xs: "center", md: "start" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid xs={12} md={6} lg={3}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#F6931E" }}
            >
              {lang === "en" ? "About Shop Coupons" : "عن كوبونات التسوق"}
            </Typography>
            <Typography
              variant="body2"
              sx={{ lineHeight: "2rem", margin: "1rem 0" }}
            >
              {lang === "en"
                ? "Shop Coupons is Saudi Arabia and GCC's largest platform for coupons and discount codes. It offers a range of features that help users save money and avail discounts and offers from various stores."
                : "كوبونات التسوق هي اكبر منصة كوبونات و اكواد خصم في المملكة العربية السعودية والخليج. تقدم مجموعة من المميزات التي تساعد المستخدمين على توفير المال والاستفادة من الخصومات الرائعه والعروض الحصريه من مختلف المتاجر."}
            </Typography>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#F6931E" }}
            >
              {lang === "en" ? "Feature sections" : "الأقسام المميزة"}
            </Typography>
            <ul>{NavigationLinksList}</ul>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#F6931E" }}
            >
              {lang === "en" ? "Top Stores" : "المتاجر المميزة"}
            </Typography>
            <ul>{topStoresList}</ul>
          </Grid>
          <Grid xs={12} md={6} lg={3} sx={{ textAlign: "center" }}>
            <Link href={`/?lang=${lang}`} prefetch={true}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {lang === "en" ? (
                  <Image
                    src={"/images/logo/Logo_En.svg"}
                    width={151}
                    height={51}
                    alt="Logo"
                    loading="eager"
                  />
                ) : (
                  <Image
                    src={"/images/logo/Logo_Ar.svg"}
                    width={151}
                    height={51}
                    alt="Logo"
                    loading="eager"
                  />
                )}
              </Typography>
            </Link>
            <Typography sx={{ fontWeight: "bold", margin: "1rem 0 " }}>
              {lang === "en" ? "Follow us" : "تابعونا"}
            </Typography>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
              className="icons"
            >
              <li>
                <Link
                  target="_blank"
                  href={
                    "https://www.instagram.com/shop.coupon/?igsh=dGJmc3Zpcm1ncTl6"
                  }
                  style={{ textDecoration: "none", color: "#F6931E" }}
                  className="icon-href"
                >
                  <InstagramIcon sx={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={
                    "https://twitter.com/i/flow/login?redirect_after_login=%2FShop_coupon_"
                  }
                  style={{ textDecoration: "none", color: "#F6931E" }}
                  className="icon-href"
                >
                  <TwitterIcon sx={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={
                    "https://www.facebook.com/shop.coupon.codes?mibextid=ZbWKwL"
                  }
                  style={{ textDecoration: "none", color: "#F6931E" }}
                  className="icon-href"
                >
                  <FacebookIcon sx={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://t.me/shop_couponz"}
                  style={{ textDecoration: "none", color: "#F6931E" }}
                  className="icon-href"
                >
                  <TelegramIcon sx={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={
                    "https://www.snapchat.com/add/shop_coupons?share_id=ApMe0YNX2TA&locale=en-US"
                  }
                  style={{ textDecoration: "none", color: "#F6931E" }}
                  className="icon-href"
                >
                  <i className="fa-brands fa-snapchat fa-2xl"></i>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://www.youtube.com/@shop-coupons"}
                  style={{ textDecoration: "none", color: "#F6931E" }}
                  className="icon-href"
                >
                  <i className="fa-brands fa-youtube fa-2xl"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.tiktok.com/@shopcoupons?_t=8k81TXP1Pd9&_r=1"
                  }
                  style={{ textDecoration: "none", color: "#F6931E" }}
                  className="icon-href"
                >
                  <i className="fa-brands fa-tiktok fa-2xl"></i>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid xs={12} sx={{ textAlign: "center", margin: "1rem 0" }}>
            {lang === "en"
              ? "Copyrights © 2024 All rights reserved by"
              : "جميع الحقوق محفوظة بواسطة "}
            <Link
              target="_blank"
              href={"https://kyanlabs.com/en"}
              style={{
                color: "#F6931E",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Kyanlabs
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

export default Footer;

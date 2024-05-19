"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import logo from "../../../public/images/logo/logo.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
const countries: string[] = [
  "Saudi Arabia",
  "UAE",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Qatar",
  "Egypt",
  "Jordan",
  "Morocco",
];

function Footer() {
  const searchParam = useSearchParams();
  const lang = searchParam.get("lang");
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "2rem 0rem",
        border: "1px solid #dddddd",
        marginTop: "2rem",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid xs={12} md={6} lg={2}>
            <Typography sx={{ fontWeight: "bold" }}>Changes Country</Typography>
            {/* <ul>{countryList}</ul> */}
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Typography sx={{ fontWeight: "bold" }}>
              Featured sections
            </Typography>
            {/* <ul>{featureSectionList}</ul> */}
          </Grid>
          <Grid xs={12} md={6} lg={5}>
            <Typography sx={{ fontWeight: "bold" }}>
              {/* Popular stores in {CountryData.countryName} */}
            </Typography>
            {/* <ul>{TopFooterList}</ul> */}
          </Grid>
          <Grid xs={12} md={6} lg={2} sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                justifyContent: "center",
              }}
            >
              <Image
                src={logo}
                width={151}
                height={51}
                alt="Picture of the author"
              />{" "}
            </Typography>
            <Typography sx={{ fontWeight: "bold", margin: "1rem 0 " }}>
              {lang == "en" ? `Follow us` : `تابعونا`}
            </Typography>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
              className="icons"
            >
              <li>
                <Link
                  href={
                    "https://www.instagram.com/shop.coupon/?igsh=dGJmc3Zpcm1ncTl6"
                  }
                  style={{
                    textDecoration: "none",
                    color: "red",
                  }}
                  className="icon-href"
                >
                  <InstagramIcon sx={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://twitter.com/i/flow/login?redirect_after_login=%2FShop_coupon_"
                  }
                  style={{ textDecoration: "none", color: "red" }}
                  className="icon-href"
                >
                  <TwitterIcon sx={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.facebook.com/shop.coupon.codes?mibextid=ZbWKwL"
                  }
                  style={{ textDecoration: "none", color: "red" }}
                  className="icon-href"
                >
                  <FacebookIcon sx={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://t.me/shop_couponz"}
                  style={{ textDecoration: "none", color: "red" }}
                  className="icon-href"
                >
                  <TelegramIcon sx={{ fontSize: "2rem" }} />
                </Link>
              </li>

              <li>
                <Link
                  href={
                    "https://www.snapchat.com/add/shop_coupons?share_id=ApMe0YNX2TA&locale=en-US"
                  }
                  style={{ textDecoration: "none", color: "red" }}
                  className="icon-href"
                >
                  <i className="fa-brands fa-snapchat fa-2xl"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.youtube.com/@shop-coupons"}
                  style={{ textDecoration: "none", color: "red" }}
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
                  style={{ textDecoration: "none", color: "red" }}
                  className="icon-href"
                >
                  <i className="fa-brands fa-tiktok fa-2xl"></i>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid xs={12} sx={{ textAlign: "center" }}>
            {lang == "en"
              ? `            Copyrights © 2024 All rights reserved by
`
              : `جميع الحقوق محفوظة بواسطة `}
            <Link
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
}
export default Footer;

import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { CountryData, CouponDate } from "../types";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import logo from "../../../public/images/logo/logo.png";
import Image from "next/image";
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
const countryList = countries.map((country) => {
  return (
    <li style={{ margin: "0.7rem 0" }}>
      <Link href={"/"} style={{ textDecoration: "none", color: "#0558A0" }}>
        {country}
      </Link>
    </li>
  );
});
const featureSection: string[] = [
  ` Stores in ${CountryData.countryName}  `,
  ` Special ${CountryData.countryName} deals `,
  `Shopping Blog in ${CountryData.countryName}`,
  `Al Coupon Sitemap `,
  `About Alcoupon in ${CountryData.countryName}`,
  ` How to use the discount coupon?`,
  ` Trendyol discount code `,
  ` Noon Coupon code `,
  ` Product reviews in ${CountryData.countryName} `,
  ` Sporter coupon `,
  ` Nice One Coupon in ${CountryData.countryName} `,
  ` Single's Day Offers `,
  ` Black Friday Sale `,
  ` White Friday Sale `,
  ` Noon Yellow Friday Sale `,
  ` Download Coupons Mobile App `,
  ` Privacy policy `,
];
const featureSectionList = featureSection.map((section) => {
  return (
    <li style={{ margin: "0.7rem 0" }}>
      <Link href={"/"} style={{ textDecoration: "none", color: "#0558A0" }}>
        {section}
      </Link>
    </li>
  );
});
const footerTopStore: string[] = [
  `Noon ${CountryData.countryName} store's Coupons and Promo Codes`,
  `Aliexpress Promo Codes, Coupon Codes & Discounts ${CountryData.countryName}`,
  `Amazon ${CountryData.countryName} Coupon Codes, Deals ${CouponDate.year}
`,
  `Farfetch Promo Codes and Latest Discount Code ${CouponDate.year}`,
  `Trendyol discount code ${CountryData.countryName} | Up to 50% OFF`,
  `Latest Namshi Coupon Codes & Discounts ${CouponDate.year}`,
  `Asos | Best Asos discount codes and offers ${CountryData.countryName}
`,
  `Latest Shein Discount Code & Coupons ${CouponDate.year}`,
];
const TopFooterList = footerTopStore.map((store) => {
  return (
    <li style={{ margin: "0.7rem 0" }}>
      <Link href={"/"} style={{ textDecoration: "none", color: "#0558A0" }}>
        {store}
      </Link>
    </li>
  );
});
function Footer() {
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
            <ul>{countryList}</ul>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Typography sx={{ fontWeight: "bold" }}>
              Featured sections
            </Typography>
            <ul>{featureSectionList}</ul>
          </Grid>
          <Grid xs={12} md={6} lg={5}>
            <Typography sx={{ fontWeight: "bold" }}>
              Popular stores in {CountryData.countryName}
            </Typography>
            <ul>{TopFooterList}</ul>
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
              Follow us
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
                  href={"https://www.instagram.com/shop.coupon/?igsh=dGJmc3Zpcm1ncTl6"}
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
                  href={"https://twitter.com/i/flow/login?redirect_after_login=%2FShop_coupon_"}
                  style={{ textDecoration: "none", color: "red" }}
                  className="icon-href"
                >
                  <TwitterIcon sx={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.facebook.com/shop.coupon.codes?mibextid=ZbWKwL"}
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
                  href={"https://www.snapchat.com/add/shop_coupons?share_id=ApMe0YNX2TA&locale=en-US"}
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
                  href={"https://www.tiktok.com/@shopcoupons?_t=8k81TXP1Pd9&_r=1"}
                  style={{ textDecoration: "none", color: "red" }}
                  className="icon-href"
                >
                  <i className="fa-brands fa-tiktok fa-2xl"></i>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid xs={12} sx={{ textAlign: "center" }}>
            Copyrights © 2024 All rights reserved by{" "}
            <Link
              href={"https://kyanlabs.com/en"}
              style={{ color: "#F6931E", textDecoration: "none" }}
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

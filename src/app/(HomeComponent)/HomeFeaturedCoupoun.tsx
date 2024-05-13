import { Box, Tooltip, Typography } from "@mui/material";
import { CouponDate, couponType } from "../types";
import { CountryData } from "../types";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { useFeaturedCoupons } from "./useFeaturedCoupon";
const secondaryHeadStyle = {
  width: "fit-content",
  fontSize: "0.8rem",
  fontWeight: "bold",
};

const storeBoxStyle = { margin: "1rem 0" };

function HomeRecentCoupon({ couponData }: { couponData: couponType[] }) {
  const couponList = couponData?.map((coupon) => {
    return (
      <Box sx={storeBoxStyle}>
        <Tooltip title={coupon.title_en}>
          <Link
            href={`discount-codes/${coupon.store.id}`}
            style={{
              fontSize: "14px",
              margin: "0.3rem 0",
              textDecoration: "none",
              color: "#0558A0",
            }}
          >
            {coupon.store.name_en}
          </Link>
        </Tooltip>
      </Box>
    );
  });
  const CouponCodeList = couponData?.map((coupon) => {
    return (
      <Box sx={storeBoxStyle}>
        {" "}
        <Tooltip title={"Coupon code"}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ width: "fit-content" }}
          >
            {coupon.code}
          </Typography>
        </Tooltip>
      </Box>
    );
  });
  const discountDetailsList = couponData?.map((coupon) => {
    return (
      <Box sx={storeBoxStyle}>
        <Tooltip
          title={`${CountryData.countryName} Discounts, Coupons & Promo Codes ${CouponDate.month}`}
        >
          <Link
            href={`discount-codes/${coupon.store.id}`}
            style={{
              fontSize: "14px",
              textDecoration: "none",
              color: "#0558A0",
            }}
          >
            {coupon.title_en}
          </Link>
        </Tooltip>
      </Box>
    );
  });

  const countryCities = CountryData.countryCities?.map(
    (city, i) => `${city}, `
  );
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1rem 2rem",
        margin: "2rem 0",
        border: "1px solid #dddddd",
      }}
    >
      <Typography variant="h6">
        {CountryData.countryName} Discounts, Coupons & Promo Codes{" "}
        {CouponDate.month} {CouponDate.year}
      </Typography>
      <Grid container spacing={2} sx={{ padding: "1rem 0" }}>
        <Grid xs={2}>
          <Tooltip
            title={`${CountryData.countryName} Discounts, Coupons & Promo Codes March 2024`}
          >
            <Typography sx={secondaryHeadStyle}>Online store</Typography>
          </Tooltip>
          {couponList}
        </Grid>
        <Grid xs={2}>
          <Tooltip
            title={`${CountryData.countryName} Discounts, Coupons & Promo Codes March 2024`}
          >
            <Typography sx={secondaryHeadStyle}>Coupon code</Typography>
          </Tooltip>
          {CouponCodeList}
        </Grid>
        <Grid xs={8}>
          <Tooltip
            title={`${CountryData.countryName} Discounts, Coupons & Promo Codes March 2024`}
          >
            <Typography sx={secondaryHeadStyle}>Discount details</Typography>
          </Tooltip>
          {discountDetailsList}
        </Grid>
      </Grid>
      <Typography variant="body2" color="text.secondary">
        All the promo codes and coupons listed are valid through March 2024. Get
        the lowest prices of the season with our exclusive discounts in all
        online shops shipping to all cities in {CountryData.countryName}{" "}
        including {countryCities}
        ... etc.:
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ margin: "1rem 0" }}
      >
        <Link
          style={{ textDecoration: "none", color: "#0558A0" }}
          href={"/discount-codes"}
        >
          see all offers{" "}
        </Link>
      </Typography>
    </Box>
  );
}
export default HomeRecentCoupon;

import { Box, Typography } from "@mui/material";

import { CountryData } from "../types";
function HomeDiscountAd() {
  const countryCities = CountryData.countryCities?.map(
    (city, i) => `${city}, `
  );

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1rem 2rem",
        margin: "1rem 0",
        border: "1px solid #dddddd",
      }}
    >
      <Typography variant="h5">
        Coupons and Discount Codes in {CountryData.countryName}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ padding: "1rem 0" }}
      >
        lore
        Al Coupon is the best renowned Arab coupons’ website, collecting
        hundreds of coupon codes and voucher coupons, in addition to offers and
        discounts valid for 2024. The website also assists you in learning how
        to use and apply coupons or promo codes, to save money while shopping
        online through any e-commerce website. All in just one place!
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Our goal at Al Coupon is to help you find the newest and latest coupon
        codes, promotional vouchers and discount codes, valid and tested for
        hundreds of local and international online stores that ship to{" "}
        {countryCities} ..etc.. Our team is working hard to check and update
        every coupon on a daily basis to help you save more on your purchases
        from your favorite shopping sites.
      </Typography>
    </Box>
  );
}
export default HomeDiscountAd;

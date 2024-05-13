import { Box, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CountryData, CouponDate, couponType } from "../types";
import { useCouponsData } from "./useGetCoupon";
export const metadata: Metadata = {
  title: "All stores coupon",
  description: `Get instant discounts on your online purchases with special discount coupons in ${CountryData.countryName} Find the best promo codes, deals and your favorite products.`,
};

export default async function Offers({
  searchParams,
}: {
  searchParams: { lang: string };
}) {
  const couponsData: couponType[] = await useCouponsData();
  const couponsList = couponsData?.map((coupon) => {
    return (
      <>
        <Grid xs={6} sm={4} md={3} lg={2} key={coupon.id}>
          <Box
            sx={{
              background: "white",
              border: "1px solid #dddddd",
              padding: "1rem",
              minHeight: "11.25rem",
            }}
          >
            <Link href={`discount-codes/${coupon.store.id}`}>
              <Tooltip title={coupon.store.description_en}>
                <img
                  width={100}
                  height={36}
                  style={{ height: "36px" }}
                  src={coupon.store.image}
                  alt="company-image"
                />
              </Tooltip>
            </Link>
            <Box
              className="coupon-box-text"
              sx={{ margin: "1rem auto", width: "100%" }}
            >
              <textarea
                name="discount_coupon_code"
                className="couponCode"
                cols={15}
                rows={1}
                readOnly
                contentEditable="false"
                autoComplete="off"
              >
                {coupon.code}
              </textarea>
            </Box>
            <Tooltip title={coupon.title_en}>
              <Typography
                variant="body2"
                color="text.secondary"
                className="promoCodeDiscount"
              >
                {searchParams.lang == "en" ? coupon.title_en : coupon.title_ar}
              </Typography>
            </Tooltip>
          </Box>
        </Grid>
      </>
    );
  });

  return (
    <Box sx={{ padding: "1rem 0" }}>
      <Typography variant="h4" sx={{ textAlign: "center", padding: "1rem 0" }}>
        Hot Discount Coupons for {CountryData.countryName} - Fall Offers{" "}
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          margin: "1rem 0",
          border: "1px solid #dddddd",
        }}
      >
        <Typography variant="h5">
          Fall Offers, Sale, Deals & Discounts all throughout {CouponDate.month}
          {CouponDate.year}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            padding: "1rem 0",
            fontSize: "1rem",
            fontWeight: "400",
          }}
        >
          A promo code can provide you with instant discounts in the form of
          percentages of the total order, for example 10% off the total cost of
          purchase, or fixed value reductions such as a 10 Egyptian pound
          discount on purchases worth 100 {CountryData.countryCurrency} , or
          free shipping to
          {CountryData.countryName}. However, finding active discount codes
          successfully can be difficult in some cases. For this reason, Al
          Coupon’s team checks every voucher code and their expiry dates
          everyday. If finding the best coupon while shopping from online stores
          and applying it is difficult for you, there is no need to worry; we
          will open the doors of knowledge for you and offer you all the advice
          you may need to transform from a beginner to an expert in using
          coupons and saving while shopping through the internet.
        </Typography>
      </Box>
      <Grid container spacing={0} sx={{ textAlign: "center" }}>
        {couponsList}
        {/* {offerCouponDataList} */}
        {/* {fetchStoresData.length} */}
      </Grid>
    </Box>
  );
}

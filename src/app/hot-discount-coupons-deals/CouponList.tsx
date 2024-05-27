import React from "react";
import { Box, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PaginationComponent from "../discount-codes/Pagination";
import { useCouponsData } from "../FetchData/useGetCoupon";
import { Language } from "../types";
import CustomCard from "../Card/CustomCard";

interface CouponListProps {
  lang: Language;
  page: number;
}

async function CouponList({ lang, page }: CouponListProps) {
  const { couponsData, last_page } = await useCouponsData(page);

  if (!couponsData) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#F3AD59" }} />
      </Box>
    );
  }

  const couponsList = couponsData.map((coupon) => (
    <Grid xs={12} sm={6} md={4} lg={3} key={coupon.id}>
      <CustomCard type="coupon" data={coupon} lang={lang} />
    </Grid>
  ));

  return (
    <>
      {couponsList}
      <PaginationComponent page={Number(page)} lastPage={last_page} />
    </>
  );
}

export default CouponList;

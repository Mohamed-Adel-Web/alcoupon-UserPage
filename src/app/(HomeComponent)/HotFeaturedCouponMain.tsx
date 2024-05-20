import {
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { Language, couponType } from "../types";
import CustomCard from "@/CustomCard";

function HotOffersMain({
  couponData,
  lang,
}: {
  couponData: couponType[];
  lang: Language;
}) {
  const offerCouponDataList = couponData?.map((coupon) => {
    return (
      <>
        <Grid xs={12} sm={6} md={4} lg={3} key={coupon.id}>
          <CustomCard type="coupon" data={coupon} lang={lang} />
        </Grid>
      </>
    );
  });
  return (
    <Box sx={{ margin: "1rem 0", textAlign: "center" }}>
      <Grid container spacing={0} sx={{ textAlign: "center" }}>
        {offerCouponDataList}
      </Grid>
    </Box>
  );
}
export default HotOffersMain;

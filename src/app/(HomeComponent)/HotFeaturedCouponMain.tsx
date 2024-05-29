import {
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Language} from "../types";
import CustomCard from "../Card/CustomCard";
import { useFeaturedCoupons } from "../FetchData/useFeaturedCoupon";

async function HotOffersMain({
  lang,
}: {
  lang: Language;
}) {
  const couponData = await useFeaturedCoupons();

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
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        {offerCouponDataList}
      </Grid>
    </Box>
  );
}
export default HotOffersMain;

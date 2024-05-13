import { Box, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { couponType } from "../types";

function HotOffersMain({ couponData }: { couponData: couponType[] }) {
  const offerCouponDataList = couponData?.map((coupon) => {
    return (
      <>
        <Grid xs={6} sm={4} md={3} lg={3}>
          <Box
            sx={{
              background: "white",
              border: "1px solid #dddddd",
              padding: "1rem",
              minHeight: "11.25rem",
            }}
          >
            <Link href={`discount-codes/${coupon.store.id}`} >
              <Tooltip title={coupon.title_en}>
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
                {coupon.title_en}
              </Typography>
            </Tooltip>
          </Box>
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

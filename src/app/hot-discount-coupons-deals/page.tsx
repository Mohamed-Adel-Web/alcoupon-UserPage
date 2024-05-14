import { Box, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {  Language, couponType } from "../types";
import { useCouponsData } from "./useGetCoupon";
export const metadata: Metadata = {
  title: "All stores coupon",
  description: `Get instant discounts on your online purchases with special discount coupons in  Find the best promo codes, deals and your favorite products.`,
};

export default async function Offers({
  searchParams,
}: {
  searchParams: { lang: Language };
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
            <Link
              href={`discount-codes/${coupon.store.id}?lang=${searchParams.lang}`}
            >
              <Tooltip
                title={
                  searchParams.lang == "en"
                    ? coupon.store.description_en
                    : coupon.store.description_ar
                }
              >
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
            <Tooltip
              title={
                searchParams.lang == "en" ? coupon.title_en : coupon.title_ar
              }
            >
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
        {searchParams.lang == "en"
          ? "Hot Coupon Deals"
          : "خصومات كوبونات حصرية"}
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
          {searchParams.lang == "en"
            ? "Offers, Sales, Deals, and Discounts are available year-round"
            : "العروض، التخفيضات، الصفقات، والخصومات متوفرة طوال العام"}
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
          {searchParams.lang == "en"
            ? `A promo code can offer instant discounts either as a percentage off
            your total order, like 10% off, or as fixed value reductions, such as
            a 10-pound discount on purchases of 100 pounds or more, or even free
            shipping. However, finding active discount codes can sometimes be
            challenging. For this reason, the team at Al Coupon checks every
            voucher code and their expiry dates daily. If you find it difficult to
            locate and apply the best coupon while shopping online, don't worry;
            we're here to guide you. We provide all the advice you need to evolve
            from a beginner to an expert in using coupons and saving money while
            shopping on the internet.`
            : " يمكن لرمز الترويج أن يقدم خصومات فورية إما على شكل نسبة مئوية من إجمالي طلبك، مثل خصم 10٪، أو كتخفيضات ذات قيمة ثابتة، مثل خصم 10 جنيهات على مشتريات بقيمة 100 جنيه أو أكثر، أو حتى الشحن المجاني. ومع ذلك، قد يكون العثور على أكواد خصم فعالة أمرًا صعبًا أحيانًا. لهذا السبب، يقوم فريق الكوبون بفحص كل كود قسيمة وتواريخ انتهاء صلاحيتها يوميًا. إذا كنت تجد صعوبة في العثور على أفضل كوبون وتطبيقه أثناء التسوق عبر الإنترنت، فلا داعي للقلق؛ نحن هنا لنرشدك. نحن نقدم كل النصائح التي تحتاجها للتحول من مبتدئ إلى خبير في استخدام الكوبونات وتوفير المال أثناء التسوق عبر الإنترنت."}
        </Typography>
      </Box>
      <Grid container spacing={0} sx={{ textAlign: "center" }}>
        {couponsList}
 
      </Grid>
    </Box>
  );
}

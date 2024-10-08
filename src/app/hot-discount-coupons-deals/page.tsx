import { Box, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import type { Metadata } from "next";
import { Language } from "../types";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import CouponList from "./CouponList";
export const generateMetadata = ({
  searchParams,
}: {
  searchParams: { lang: Language };
}): Metadata => {
  return searchParams?.lang === "en"
    ? {
        title:
          " Top Discount Codes & Coupons Saving Of Up To 90% - shops Coupons",
        description:
          "Save big with shops coupons, deals, and promos! Get discounts and exclusive offers from top brands on clothing, beauty, grocery, and more.",
        keywords:
          "Coupons, Discount codes, Promo codes, Vouchers, Coupon code, discount code, Coupon",
        openGraph: {
          images: ["/images/logo/Logo_En.svg"],
        },
      }
    : {
        title:
          "كوبونات التسوق - احدث اكواد الخصم وكوبونات التوفير حتى 90% لكل المتاجر",
        description:
          "وفر الكثير مع كوبونات التسوق والصفقات والعروض! احصل على خصومات وعروض حصرية من أفضل العلامات التجارية من الملابس والجمال والبقالة والمزيد.",
        keywords: " كوبون، كود خصم، كوبونات، اكواد خصم، كود توفير",
        openGraph: {
          images: ["/images/logo/Logo_Ar.svg"],
        },
      };
};
export default async function Offers({
  searchParams,
}: {
  searchParams: { lang: Language; page: number };
}) {
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
            a 10 SAR discount on purchases of 100 SAR or more, or even free
            shipping. However, finding active discount codes can sometimes be
            challenging. For this reason, the team at shops coupons checks every
            voucher code and their expiry dates daily. If you find it difficult to
            locate and apply the best coupon while Shopping online, don't worry;
            we're here to guide you. We provide all the advice you need to evolve
            from a beginner to an expert in using coupons and saving money while
            Shopping on the internet.`
            : " يمكن لرمز الترويج أن يقدم خصومات فورية إما على شكل نسبة مئوية من إجمالي طلبك، مثل خصم 10٪، أو كتخفيضات ذات قيمة ثابتة، مثل خصم 10 ريال على مشتريات بقيمة 100 ريال أو أكثر، أو حتى الشحن المجاني. ومع ذلك، قد يكون العثور على أكواد خصم فعالة أمرًا صعبًا أحيانًا. لهذا السبب، يقوم فريق كوبونات التسوق بفحص كل كود قسيمة وتواريخ انتهاء صلاحيتها يوميًا. إذا كنت تجد صعوبة في العثور على أفضل كوبون وتطبيقه أثناء التسوق عبر الإنترنت، فلا داعي للقلق؛ نحن هنا لنرشدك. نحن نقدم كل النصائح التي تحتاجها للتحول من مبتدئ إلى خبير في استخدام الكوبونات وتوفير المال أثناء التسوق عبر الإنترنت."}
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        <Suspense
          fallback={
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
          }
        >
          <CouponList lang={searchParams.lang} page={searchParams.page} />
        </Suspense>
      </Grid>
    </Box>
  );
}

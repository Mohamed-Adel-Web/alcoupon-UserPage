import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PaginationComponent from "../discount-codes/Pagination";
import Link from "next/link";
import type { Metadata } from "next";
import { Language, couponType } from "../types";
import { useCouponsData } from "../FetchData/useGetCoupon";
import { Suspense } from "react";
import CustomCard from "@/CustomCard";
export const metadata: Metadata = {
  title: "All stores coupon",
  description: `Get instant discounts on your online purchases with special discount coupons in  Find the best promo codes, deals and your favorite products.`,
};

export default async function Offers({
  searchParams,
}: {
  searchParams: { lang: Language; page: number };
}) {
  const { couponsData, last_page } = await useCouponsData(searchParams.page);
  const couponsList = couponsData?.map((coupon) => {
    return (
      <>
        <Grid xs={12} sm={6} md={4} lg={3} key={coupon.id}>
          <CustomCard type="coupon" data={coupon} lang={searchParams.lang} />
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
        <Suspense>
          <PaginationComponent
            page={Number(searchParams.page)}
            lastPage={last_page}
          />
        </Suspense>
      </Grid>
    </Box>
  );
}

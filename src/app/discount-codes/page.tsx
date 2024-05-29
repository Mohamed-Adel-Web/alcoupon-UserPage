import { Box, CircularProgress, Typography } from "@mui/material";
import type { Metadata } from "next";
import { Language } from "../types";
import Grid from "@mui/material/Unstable_Grid2";
import { Suspense } from "react";
import StoreList from "./StoreList";
export const generateMetadata = ({
  searchParams,
}: {
  searchParams: { lang: Language };
}): Metadata => {
  return searchParams?.lang === "en"
    ? {
        title:
          " Explore Top Online Stores for Latest Coupons and Deals - Shop Coupons",
        description:
          "Click here for a comprehensive list of online shopping sites and e-commerce stores featuring the latest coupons, discount codes, and deals.",
        keywords:
          "Coupons, Discount codes, Promo codes, Vouchers, Coupon code, discount code, Coupon, deals",
      }
    : {
        title:
          "كوبونات التسوق - استكشف افضل المتاجر عبر الإنترنت للحصول على احدث اكواد الخصم",
        description:
          "اضغط هنا للحصول على قائمة شاملة بمواقع التسوق عبر الإنترنت والمتاجر الإلكترونية التي تعرض أحدث القسائم واكواد الخصم وكوبونات التوفير والعروض.",
        keywords: "كوبون، كود خصم، كوبونات، اكواد خصم، كود توفير",
      };
};

export default async function ALLStores({
  searchParams,
}: {
  searchParams: { lang: Language; page: number };
}) {
  return (
    <>
      <Box sx={{ padding: "1rem 0" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", padding: "1rem 0" }}
        >
          {searchParams.lang == "en"
            ? "All Stores and deals"
            : "جميع المتاجر والعروض "}
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
              ? "Online Shopping Platforms: Top Discount Codes and Coupons"
              : "منصات التسوق الإلكتروني أفضل أكواد الخصم والكوبونات "}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ padding: "1rem 0", fontSize: "1rem", fontWeight: "400" }}
          >
            {searchParams.lang == "en"
              ? `   Our team at Shopcoupon.com diligently curates the latest coupon codes,
          discounts, and deals from top online shopping sites. The Middle East
          is rapidly becoming a hub for online stores and e-commerce platforms,
          offering a wide range of products that are just a click away and
          delivered to your doorstep with exceptional speed.`
              : `يعمل فريقنا في Shopcoupon.com بجد لتقديم أحدث أكواد الكوبونات والخصومات والعروض من أفضل مواقع التسوق الإلكتروني. أصبح الشرق الأوسط مركزًا سريع النمو للمتاجر الإلكترونية ومنصات التجارة الإلكترونية، حيث يمكن الحصول على مجموعة واسعة من المنتجات بنقرة واحدة فقط ويتم توصيلها إلى باب منزلك بسرعة فائقة `}
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
            <StoreList lang={searchParams.lang} page={searchParams.page} />
          </Suspense>
        </Grid>

        <Box
          sx={{
            backgroundColor: "white",
            padding: "1rem 2rem",
            margin: "1rem 0",
            border: "1px solid #dddddd",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "1rem" }}
          >
            {searchParams.lang == "en"
              ? `  Explore the ShopCoupon shopping guide, which features the top coupon
          codes, deals, and discounts from premier online shopping sites,
          including clothing retailers and Chinese shopping platforms. Learn how
          to place orders from any online site with our easy-to-follow guides.
          Check out our comprehensive list of online shopping sites and
          e-commerce stores that offer coupon codes, vouchers, as well as deals
          and discounts, and provide shipping services.`
              : `ستكشف دليل التسوق في ShopCoupon، الذي يتضمن أفضل أكواد الكوبونات والعروض والخصومات من أفضل مواقع التسوق الإلكتروني، بما في ذلك متاجر الملابس الإلكترونية ومواقع التسوق الصينية. تعلم كيفية تقديم الطلبات من أي موقع إلكتروني بسهولة مع أدلتنا العملية. تحقق من قائمتنا الشاملة لمواقع التسوق الإلكتروني ومتاجر التجارة الإلكترونية التي تقدم أكواد كوبونات وقسائم شراء، بالإضافة إلى العروض والخصومات وخدمات الشحن.`}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

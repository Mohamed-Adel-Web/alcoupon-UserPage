import HeroSection from "./(HeroSection)/HeroSection";
import HotFeaturedCouponHead from "./(HomeComponent)/HotFeaturedCouponHead";
import HotFeaturedCouponMain from "./(HomeComponent)/HotFeaturedCouponMain";
import HomeDiscountAd from "./(HomeComponent)/HomeDiscountAd";
import HomeFeatureStoreHead from "./(HomeComponent)/HomeFeatureStoreHead";
import HomeFeatureStoreMain from "./(HomeComponent)/HomaFeatureStoreMain";
import CouponInstruction from "./(HomeComponent)/CouponInstruction";

import useSwiperData from "./FetchData/useGetSwiper";
import { Metadata } from "next";
import { Language } from "./types";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

export const generateMetadata = ({
  searchParams,
}: {
  searchParams: { lang: Language };
}): Metadata => {
  const baseUrl = "https://shops-coupons.com";
  return searchParams?.lang === "en"
    ? {
        title: " Shops Coupons and Discount Codes in KSA & GCC",
        description:
          " Discover exclusive coupons and promo codes at our one-stop destination! Your ultimate destination for deals awaits; embrace discounts.",
        keywords:
          "Coupons, Discount codes, Promo codes, Vouchers, Coupon code, discount code, Coupon",
        openGraph: {
          images: [`${baseUrl}/images/logo/Logo_En.svg`],
        },
      }
    : {
        title: "كوبونات التسوق - بوابة اكواد خصم المتاجر في السعودية والخليج ",
        description:
          "اكتشف اكواد خصم وكوبونات المتاجر العالمية الحصرية في وجهتنا الاستثنائية! تنتظرك خصومات لا مثيل لها؛ اغتنم الصفقات الرائعة وفرص التوفير الكبير",
        keywords: "كوبون، كود خصم، كوبونات، اكواد خصم، كود توفير",
        openGraph: {
          images: [`${baseUrl}/images/logo/Logo_Ar.svg`],
        },
      };
};
export default async function Home({
  searchParams,
}: {
  searchParams: { lang: Language };
}) {
  const lang = searchParams.lang;
  const swiperData = await useSwiperData();
  return (
    <main>
      <HeroSection swiperData={swiperData} />
      <HotFeaturedCouponHead lang={lang} />
      <Suspense
        fallback={
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "#F3AD59" }} />
          </Box>
        }
      >
        <HotFeaturedCouponMain lang={lang} />
      </Suspense>
      <HomeDiscountAd lang={lang} />
      <HomeFeatureStoreHead lang={lang} />
      <Suspense
        fallback={
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "#F3AD59" }} />
          </Box>
        }
      >
        <HomeFeatureStoreMain lang={lang} />
      </Suspense>
      <CouponInstruction lang={lang} />
    </main>
  );
}

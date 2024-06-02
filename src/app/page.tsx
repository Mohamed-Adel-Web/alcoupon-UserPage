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

export const metadata = ({
  searchParams,
}: {
  searchParams: { lang: Language };
}): Metadata => {
  return searchParams?.lang === "en"
    ? {
        title: "Discover Coupons, Discount Codes, and Promo Codes in KSA & GCC",
        description:
          "Discover exclusive coupons, discount codes, and promo codes at our one-stop destination! Your ultimate destination for deals and discounts awaits.",
        keywords:
          "Coupons, Discount codes, Promo codes, Vouchers, Coupon code, discount code, Coupon",
        openGraph: {
          images: ["/images/logo/Logo_En.svg"],
        },
      }
    : {
        title: "اكتشف كوبونات التسوق وأكواد الخصم في السعودية والخليج",
        description:
          "اكتشف أكواد الخصم والكوبونات الحصرية في وجهتنا الاستثنائية! تنتظرك خصومات وصفقات رائعة؛ اغتنم فرص التوفير الكبير.",
        keywords: "كوبون، كود خصم، كوبونات، اكواد خصم، كود توفير",
        openGraph: {
          images: ["/images/logo/Logo_Ar.svg"],
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

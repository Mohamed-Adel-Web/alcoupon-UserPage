import HeroSection from "./(HeroSection)/HeroSection";
import HotFeaturedCouponHead from "./(HomeComponent)/HotFeaturedCouponHead";
import HotFeaturedCouponMain from "./(HomeComponent)/HotFeaturedCouponMain";
import HomeDiscountAd from "./(HomeComponent)/HomeDiscountAd";
import HomeFeatureStoreHead from "./(HomeComponent)/HomeFeatureStoreHead";
import HomeFeatureStoreMain from "./(HomeComponent)/HomaFeatureStoreMain";
import CouponInstruction from "./(HomeComponent)/CouponInstruction";
import { useFeaturedCoupons } from "./FetchData/useFeaturedCoupon";
import { useFeaturedStoresData } from "./FetchData/useFeatureStore";
import { Suspense } from "react";
import useSwiperData from "./FetchData/useGetSwiper";
import { Metadata } from "next";
import { Language } from "./types";

export const metadata = ({
  searchParams,
}: {
  searchParams: { lang: Language };
}): Metadata => {
  return searchParams?.lang === "en"
    ? {
        title: "Shop Coupons and Discount Codes in KSA & GCC",
        description:
          "Discover exclusive coupons and promo codes at our one-stop destination! Your ultimate destination for deals awaits; embrace discounts.",
        keywords:
          "Coupons, Discount codes, Promo codes, Vouchers, Coupon code, discount code, Coupon",
      }
    : {
        title: "كوبونات التسوق - بوابة اكواد خصم المتاجر في السعودية والخليج",
        description:
          "اكتشف اكواد خصم وكوبونات المتاجر العالمية الحصرية في وجهتنا الاستثنائية! تنتظرك خصومات لا مثيل لها؛ اغتنم الصفقات الرائعة وفرص التوفير الكبير",
        keywords: " كوبون، كود خصم، كوبونات، اكواد خصم، كود توفير",
      };
};
export default async function Home({
  searchParams,
}: {
  searchParams: { lang: Language };
}) {
  const lang = searchParams.lang;
  const couponData = await useFeaturedCoupons();
  const storesData = await useFeaturedStoresData();
  const swiperData = await useSwiperData();
  return (
    <main>
      <Suspense>
        <HeroSection storesData={storesData} swiperData={swiperData} />
      </Suspense>
      <HotFeaturedCouponHead lang={lang} />
      <HotFeaturedCouponMain couponData={couponData} lang={lang} />
      <HomeDiscountAd lang={lang} />
      <HomeFeatureStoreHead lang={lang} />
      <HomeFeatureStoreMain lang={lang} />
      <CouponInstruction lang={lang} />
    </main>
  );
}

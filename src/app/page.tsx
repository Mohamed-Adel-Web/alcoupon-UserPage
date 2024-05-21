import HeroSection from "./(HeroSection)/HeroSection";
import HotFeaturedCouponHead from "./(HomeComponent)/HotFeaturedCouponHead";
import HotFeaturedCouponMain from "./(HomeComponent)/HotFeaturedCouponMain";
import HomeDiscountAd from "./(HomeComponent)/HomeDiscountAd";
import HomeFeatureStoreHead from "./(HomeComponent)/HomeFeatureStoreHead";
import HomeFeatureStoreMain from "./(HomeComponent)/HomaFeatureStoreMain";
import CouponInstruction from "./(HomeComponent)/CouponInstruction";
import { useFeaturedCoupons } from "./FetchData/useFeaturedCoupon";
import { useFeaturedStoresData } from "./FetchData/useFeatureStore";
import { Language } from "./types";
import { Suspense } from "react";
import useSwiperData from "./FetchData/useGetSwiper";

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

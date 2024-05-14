import styles from "./page.module.css";
import HeroSection from "./(HeroSection)/HeroSection";
import HotFeaturedCouponHead from "./(HomeComponent)/HotFeaturedCouponHead";
import HotFeaturedCouponMain from "./(HomeComponent)/HotFeaturedCouponMain";
import HomeDiscountAd from "./(HomeComponent)/HomeDiscountAd";
import HomeFeatureStoreHead from "./(HomeComponent)/HomeFeatureStoreHead";
import HomeFeatureStoreMain from "./(HomeComponent)/HomaFeatureStoreMain";
import CouponInstruction from "./(HomeComponent)/CouponInstruction";
import { useFeaturedCoupons } from "./(HomeComponent)/useFeaturedCoupon";
import { useFeaturedStoresData } from "./(HomeComponent)/useFeatureStore";
import NavigationLinks from "./(Header)/NavigationLinks";
import Link from "next/link";
import { useGetLang } from "@/useGetLang/useGetLang";
import { Language } from "./types";

export default async function Home({
  searchParams,
}: {
  searchParams: { lang: Language };
}) {
  const lang = searchParams.lang;
  const couponData = await useFeaturedCoupons();
  const storesData = await useFeaturedStoresData();

  return (
    <main>
      <HeroSection storesData={storesData} />
      <HotFeaturedCouponHead lang={lang} />
      <HotFeaturedCouponMain couponData={couponData} lang={lang} />
      <HomeDiscountAd lang={lang} />
      <HomeFeatureStoreHead lang={lang} />
      <HomeFeatureStoreMain lang={lang} />
      <CouponInstruction lang={lang} />
    </main>
  );
}

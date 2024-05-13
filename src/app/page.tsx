import styles from "./page.module.css";
import HeroSection from "./(HeroSection)/HeroSection";
import HotFeaturedCouponHead from "./(HomeComponent)/HotFeaturedCouponHead";
import HotFeaturedCouponMain from "./(HomeComponent)/HotFeaturedCouponMain";
import HomeDiscountAd from "./(HomeComponent)/HomeDiscountAd";
import HomeFeatureStoreHead from "./(HomeComponent)/HomeFeatureStoreHead";
import HomeFeatureStoreMain from "./(HomeComponent)/HomaFeatureStoreMain";
import HomeFeaturedCoupoun from "./(HomeComponent)/HomeFeaturedCoupoun";
import CouponInstruction from "./(HomeComponent)/CouponInstruction";
import { useFeaturedCoupons } from "./(HomeComponent)/useFeaturedCoupon";
import { useFeaturedStoresData } from "./(HomeComponent)/useFeatureStore";
import NavigationLinks from "./(Header)/NavigationLinks";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: { lang: string };
}) {
  const couponData = await useFeaturedCoupons();
  const storesData = await useFeaturedStoresData();

  return (
    <main>
      <HeroSection storesData={storesData} />
      <HotFeaturedCouponHead />
      <HotFeaturedCouponMain couponData={couponData} />
      <HomeDiscountAd />
      <HomeFeatureStoreHead />
      <HomeFeatureStoreMain />
      <HomeFeaturedCoupoun couponData={couponData} />
      <CouponInstruction />
    </main>
  );
}

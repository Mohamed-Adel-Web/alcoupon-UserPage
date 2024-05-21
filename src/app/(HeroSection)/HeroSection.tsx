"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SwiperApp from "./Swiper";
import TopStoreCoupon from "./TopFiveStore";
import { StoreType, SwiperType } from "../types";
import { useSearchParams } from "next/navigation";

function HeroSection({
  storesData,
  swiperData,
}: {
  storesData: StoreType[];
  swiperData: SwiperType[];
}) {
  const searchParam = useSearchParams();
  const lang: string | null = searchParam?.get("lang");
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12} lg={10}>
            <SwiperApp swiperData={swiperData} />
          </Grid>
          <Grid xs={12} lg={2}>
            <TopStoreCoupon storesData={storesData} lang={lang} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default HeroSection;

"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SwiperApp from "./Swiper";
import TopStoreCoupon from "./TopFiveStore";
import { StoreType } from "../types";

function HeroSection({ storesData }: { storesData: StoreType[] }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12} lg={10}>
            <SwiperApp />
          </Grid>
          <Grid xs={12} lg={2}>
            <TopStoreCoupon storesData={storesData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default HeroSection;

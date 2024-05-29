"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SwiperApp from "./Swiper";
import { StoreType, SwiperType } from "../types";
import { useSearchParams } from "next/navigation";

const HeroSection: React.FC<{ swiperData: SwiperType[] }> = React.memo(
  ({ swiperData }) => {
    const searchParam = useSearchParams();
    const lang: string | null = searchParam?.get("lang");

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12} lg={12} sx={{ margin: "1rem 0" }}>
            <SwiperApp swiperData={swiperData} />
          </Grid>
        </Grid>
      </Box>
    );
  }
);

export default HeroSection;

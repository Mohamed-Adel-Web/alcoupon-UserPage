import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Language, categoryTypes } from "../types";
import { useGetStoreByCategory } from "../FetchData/useGetStoreByCategory";
import CustomCard from "../Card/CustomCard";
import { notFound } from "next/navigation";

interface CategoryListProps {
  lang: Language;
  id: string;
}

async function StoreListByCategory({ lang, id }: CategoryListProps) {
  const categoryData: categoryTypes | null = await useGetStoreByCategory(id);
  if (!categoryData) {
    notFound()
  }

  const storeList = categoryData?.stores?.map((store) => (
    <Grid xs={12} sm={6} md={4} lg={3} key={store.id}>
      <CustomCard type="store" data={store} lang={lang} />
    </Grid>
  ));

  return <>{storeList}</>;
}

export default StoreListByCategory;

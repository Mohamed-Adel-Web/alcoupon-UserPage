import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PaginationComponent from "../discount-codes/Pagination";
import { Language } from "../types";
import { useStoresData } from "../FetchData/useStoresData";
import CustomCard from "../Card/CustomCard";

interface StoreListProps {
  lang: Language;
  page: number;
}

async function StoreList({ lang, page }: StoreListProps) {
  const { storesData, last_page } = await useStoresData(page);

  if (!storesData) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#F3AD59" }} />
      </Box>
    );
  }

  const storeList = storesData.map((store) => (
    <Grid xs={12} sm={6} md={4} lg={3} key={store.id}>
      <CustomCard type="store" data={store} lang={lang} />
    </Grid>
  ));

  return (
    <>
      {storeList}
      <PaginationComponent page={Number(page)} lastPage={last_page} />
    </>
  );
}

export default StoreList;

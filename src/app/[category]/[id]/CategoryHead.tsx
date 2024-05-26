import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { Language, categoryTypes } from "@/app/types";
import { useGetStoreByCategory } from "@/app/FetchData/useGetStoreByCategory";
interface CategoryListProps {
  lang: Language;
  id: string;
}
async function CategoryHead({ lang, id }: CategoryListProps) {
  const categoryData: categoryTypes| null = await useGetStoreByCategory(id);
  if (!categoryData) {
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

  return (
    <Typography
      variant="h4"
      sx={{
        textAlign: "center",
        padding: "1rem 0",
        textTransform: "capitalize",
      }}
    >
      {lang == "en"
        ? `All Stores for ${categoryData?.name_en} category`
        : `جميع المتاجر لفئة ${categoryData?.name_ar}`}
    </Typography>
  );
}

export default CategoryHead;

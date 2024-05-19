"use client";
import Container from "@mui/material/Container";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useGetCategories } from "./useGetCategory";
import MoreNavigation from "./MoreNavigation";
import { Language, categoryTypes } from "../types";
import { useSearchParams } from "next/navigation";
export const NavigationSources: {
  title_en: string;
  title_ar: string;
  href: string;
}[] = [
  { title_en: "Home", title_ar: "الرئيسية", href: "/" },
  { title_en: "All Stores", title_ar: "جميع المتاجر", href: "/discount-codes" },

  {
    title_en: "All coupons",
    title_ar: "جميع الكوبونات",
    href: "/hot-discount-coupons-deals",
  },
];

function NavigationLinks({
  AllCategoriesData,
}: {
  AllCategoriesData: categoryTypes[];
}) {
  const searchParam = useSearchParams();
  const lang: string | null = searchParam?.get("lang");
  const NavigationSources: {
    title_en: string;
    title_ar: string;
    href: string;
  }[] = [
    { title_en: "Home", title_ar: "الرئيسية", href: `/?lang=${lang}` },
    {
      title_en: "All Stores",
      title_ar: "جميع المتاجر",
      href: `/discount-codes?page=1&lang=${lang}`,
    },

    {
      title_en: "All coupons",
      title_ar: "جميع الكوبونات",
      href: `/hot-discount-coupons-deals?page=1&lang=${lang}`,
    },
  ];

  const NavigationLinksList = NavigationSources.map((link) => {
    return (
      <Link
        href={`${link.href}`}
        style={{
          padding: "0 0.4rem",
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "0.875rem",
          lineHeight: "44px",
          letterSpacing: "2px",
          whiteSpace: "nowrap",
          textTransform: "capitalize",
        }}
      >
        {lang == "en" ? link.title_en : link.title_ar}
      </Link>
    );
  });
  const DynamicNavigationLinksList = AllCategoriesData.map(
    (category, index) => {
      if (index < 8) {
        return (
          <Link
            href={`/${category.name_en}/${category.id}?lang=${lang}`}
            style={{
              padding: "0 0.4rem",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "0.875rem",
              lineHeight: "44px",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
              textTransform: "capitalize",
            }}
          >
            {lang == "en" ? category.name_en : category.name_ar}
          </Link>
        );
      }
    }
  );

  return (
    <Box sx={{ display: { md: "block", xs: "none", color: "white" } }}>
      <Paper
        elevation={3}
        sx={{
          background:
            " linear-gradient(90deg, rgba(242,19,20,0.6895133053221288) 29%, rgba(244,147,30,0.7175245098039216) 72%)",
        }}
      >
        <Container maxWidth="lg" sx={{ display: "flex" }}>
          {NavigationLinksList}
          {DynamicNavigationLinksList}
          <MoreNavigation AllCategoriesData={AllCategoriesData} lang={lang} />
        </Container>
      </Paper>
    </Box>
  );
}
export default NavigationLinks;

"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import MoreNavigation from "./MoreNavigation";
import { categoryTypes } from "../types";
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

const NavigationLinks: React.FC<{ AllCategoriesData: categoryTypes[] }> =
  React.memo(({ AllCategoriesData }) => {
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

    const NavigationLinksList = React.useMemo(
      () =>
        NavigationSources.map((link) => (
          <Link
            key={link.href}
            href={`${link.href}`}
            prefetch={true}
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
            {lang === "en" ? link.title_en : link.title_ar}
          </Link>
        )),
      [NavigationSources, lang]
    );

    const DynamicNavigationLinksList = React.useMemo(
      () =>
        AllCategoriesData.map((category, index) => {
          if (index < 8) {
            return (
              <Link
                key={category.id}
                href={`/${category.name_en}/${category.id}?lang=${lang}`}
                prefetch={true}
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
                {lang === "en" ? category.name_en : category.name_ar}
              </Link>
            );
          }
          return null;
        }),
      [AllCategoriesData, lang]
    );

    return (
      <Box sx={{ display: { md: "block", xs: "none", color: "white" } }}>
        <Paper
          elevation={3}
          sx={{
            background:
              "linear-gradient(90deg, rgba(242,19,20,0.6895133053221288) 29%, rgba(244,147,30,0.7175245098039216) 72%)",
          }}
        >
          <Container maxWidth="lg" sx={{ display: "flex" }}>
            {NavigationLinksList}
            {DynamicNavigationLinksList}
            {DynamicNavigationLinksList.length >= 8 && (
              <MoreNavigation
                AllCategoriesData={AllCategoriesData}
                lang={lang}
              />
            )}
          </Container>
        </Paper>
      </Box>
    );
  });

export default NavigationLinks;

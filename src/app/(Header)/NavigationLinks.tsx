import Container from "@mui/material/Container";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useGetCategories } from "./useGetCategory";
import MoreNavigation from "./MoreNavigation";
export const NavigationSources: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "All Stores", href: "/discount-codes" },

  {
    title: "All coupons",
    href: "/hot-discount-coupons-deals",
  },
];

async function NavigationLinks() {
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
        {link.title}
      </Link>
    );
  });
  const AllCategoriesData = await useGetCategories();
  const DynamicNavigationLinksList = AllCategoriesData.map(
    (category, index) => {
      if (index < 8) {
        return (
          <Link
            href={`/${category.name_en}/${category.id}`}
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
            {category.name_en}
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
          <MoreNavigation AllCategoriesData={AllCategoriesData} />
        </Container>
      </Paper>
    </Box>
  );
}
export default NavigationLinks;

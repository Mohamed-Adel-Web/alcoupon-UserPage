import { Box, Typography, Tooltip } from "@mui/material";
import type { Metadata } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { CountryData, CouponDate, categoryTypes } from "@/app/types";
import { useGetStoreByCategory } from "./useGetStoreByCategory";
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {

  
  const categoryData: categoryTypes | null = await useGetStoreByCategory(
    params?.id
  );
  return {
    title: `${categoryData?.meta_title_en}`,
    description: `${categoryData?.meta_description_en}`,
    keywords: `${categoryData?.meta_keyword_en}`,
  };
};

export default async function categoryPage({
  params,
}: {
  params: { id: string };
}) {
  const categoryData: categoryTypes | null = await useGetStoreByCategory(
    params.id
  );

  const allStoreDataList = categoryData?.stores?.map((store) => {
    return (
      <Grid xs={6} sm={4} md={3} lg={3} key={store.name_en}>
        <Link
          href={`/discount-codes/${store.id}`}
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              background: "white",
              border: "1px solid #dddddd",
              padding: "1rem",
              minHeight: "14rem",
            }}
          >
            <Tooltip title={store.description_en}>
              <img
                loading="lazy"
                width={100}
                height={36}
                style={{ height: "36px" }}
                src={store.image}
                alt="company image"
              />
            </Tooltip>
            <Typography
              variant="body2"
              className="storeDiscount"
              sx={{ padding: "1rem 0 ", color: "#b53d3d" }}
            >
              {store.title_en}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="storeName"
            >
              {store.name_en}
            </Typography>
          </Box>
        </Link>
      </Grid>
    );
  });
  return (
    <Box sx={{ padding: "1rem 0" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          padding: "1rem 0",
          textTransform: "capitalize",
        }}
      >
        All Stores for {categoryData?.name_en} category
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          margin: "1rem 0",
          border: "1px solid #dddddd",
        }}
      >
        <Typography variant="h5">
          Online shopping sites, Best Discount Codes & Coupons {CouponDate.year}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ padding: "1rem 0", fontSize: "1rem", fontWeight: "400" }}
        >
          Our team at Alcoupon.com works hard to offer you the latest coupon
          codes, discounts and deals of the best online shopping sites that ship
          to {CountryData.countryName}. The Middle East is currently the fastest
          growing center for online stores and online shopping sites, such as,
          {/* {TopHeadStoreList}and other international and local shopping sites.. */}
          Everything is now available with just a click, and can be delivered at
          record speed to your doorstep.
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        {allStoreDataList}
      </Grid>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          margin: "1rem 0",
          border: "1px solid #dddddd",
        }}
      >
        <Typography variant="h5">
          5 reasons why shoppers from {CountryData.countryName} love online
          shopping:
        </Typography>
        {/* <ol style={{ padding: "1rem 2rem" }}>{topReasonList}</ol> */}
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          margin: "1rem 0",
          border: "1px solid #dddddd",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1rem" }}
        >
          Browse Alcoupon’s shopping guide, which contains the top coupon codes,
          deals and discounts of the best online shopping sites such as clothing
          online shops, Chinese shopping sites and hot-to guides to learn how to
          place an order from any online site. Check out the list of online
          shopping sites & e-commerce stores that offer coupon codes & vouchers,
          in addition to deals & discounts & shipping to{" "}
          {CountryData.countryName}
        </Typography>
      </Box>
    </Box>
  );
}

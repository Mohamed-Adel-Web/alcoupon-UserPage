import { Box, Typography, Tooltip } from "@mui/material";
import type { Metadata } from "next";
import { StoreType, CountryData, CouponDate } from "../types";
import Grid from "@mui/material/Unstable_Grid2";
import { useStoresData } from "./useStoresData";
import Link from "next/link";
export const metadata: Metadata = {
  title: "All store discount",
  description: `Click here for all the online shopping sites and various e-commerce stores offering the latest coupons, discount codes, as well as deals & offers!`,
};

const countryCities = CountryData.countryCities?.map((city, i) => `${city}, `);

// const TopHeadStore = TopStoresData.filter((store, index) => {
//   return index < 6;
// });
// const TopHeadStoreList = TopHeadStore.map((store, index) => {
//   return `${store.storeName}, `;
// });

// const topReason: { title: string; description: string }[] = [
//   {
//     title: "Ease and convenience when shopping online:",
//     description:
//       "Convenience is the #1 advantage!! You can shop at any time while sitting at home comfortably, with as simple as a push of a button and place your order within a few minutes, with the need to look for a parking spot or stand in queues to pay. You have the option of shopping online at any moment of the day, 7 days a week. ",
//   },
//   {
//     title: "More options and a wider range of products:",
//     description:
//       "And that’s the truth, online shopping websites have more variety and a bigger collection of products online than in-store! You can find any brand or almost any product you are looking for easily, due to the availability of the many amazing options when shopping online.",
//   },
//   {
//     title:
//       "Deals, coupons codes and discounts offered only to online shoppers:",
//     description: ` Browse our coupon site, we make sure to provide you with the latest promo codes and exclusive vouchers, tested and updated on a daily basis. Additionally, you can always find good offers and better prices online, due to the fact that products are shipped directly to your city from the manufacturer or seller without the involvement of intermediaries. Make sure you get free shipping to any of the major cities in ${CountryData.countryName}: ${countryCities}... etc.. `,
//   },
//   {
//     title: "Price comparison done quick and with ease:",
//     description:
//       "Researching and price comparing different products from different online shopping stores is much easier online. It’s also easier to find better deals over the internet as many online shopping websites offer discount codes and coupons, you can compare different products and find the cheapest price for the right product.",
//   },
//   {
//     title:
//       "Product customer reviews and feedback about the website and it’s services:",
//     description:
//       "if you are looking for the best mobile for example, you can read consumer reviews of more than one mobile to make the right choice. You can also search for a first-hand experience of most products, ratings and reviews on shopping sites and services. If you don't know if you should buy a new laptop, read the reviews to see if other people who have bought it liked it. When you buy in-store, you won't get ratings from people who have purchased the same item before you and learn from their experience.",
//   },
// ];
// const topReasonList = topReason.map((reason) => {
//   return (
//     <li style={{ margin: "0.5rem 0", lineHeight: "1.6rem" }}>
//       <strong>{reason.title}</strong>
//       {reason.description}
//     </li>
//   );
// });
export default async function ALLStores({
  searchParams,
}: {
  searchParams: { lang: string };
}) {
  const storesData: StoreType[] = await useStoresData();
  const allStoreDataList = storesData?.map((store) => {
    return (
      <Grid xs={6} sm={4} md={3} lg={3} key={store.name_en}>
        <Link
          href={`discount-codes/${store.id}`}
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
                width={120}
                height={46}
                style={{ height: "40px" }}
                src={store.image}
                alt="company image"
              />
            </Tooltip>
            <Typography
              variant="body2"
              className="storeDiscount"
              sx={{ padding: "1rem 0 ", color: "#b53d3d" }}
            >
              {searchParams.lang == "en" ? store.title_en : store.title_ar}
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
      <Typography variant="h4" sx={{ textAlign: "center", padding: "1rem 0" }}>
        All Stores and deals for {CountryData.countryName} stores
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

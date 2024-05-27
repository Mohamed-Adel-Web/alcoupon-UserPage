import { Language, StoreType } from "@/app/types";
import useSearchStoresData from "../../FetchData/useSearchStoresData";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import { Metadata } from "next";
import CustomCard from "@/app/Card/CustomCard";

export const generateMetadata = ({
  searchParams,
}: {
  searchParams: { lang: Language };
}): Metadata => {
  return searchParams?.lang === "en"
    ? {
        title:
          " Explore Top Online Stores for Latest Coupons and Deals - Shop Coupons",
        description:
          "Click here for a comprehensive list of online shopping sites and e-commerce stores featuring the latest coupons, discount codes, and deals.",
        keywords:
          "Coupons, Discount codes, Promo codes, Vouchers, Coupon code, discount code, Coupon, deals",
      }
    : {
        title:
          "كوبونات التسوق - استكشف افضل المتاجر عبر الإنترنت للحصول على احدث اكواد الخصم",
        description:
          "اضغط هنا للحصول على قائمة شاملة بمواقع التسوق عبر الإنترنت والمتاجر الإلكترونية التي تعرض أحدث القسائم واكواد الخصم وكوبونات التوفير والعروض.",
        keywords: "كوبون، كود خصم، كوبونات، اكواد خصم، كود توفير",
      };
};

export default async function name({
  params,
  searchParams,
}: {
  searchParams: { lang: Language };
  params: { store: string };
}) {
  const storesData: StoreType[] = await useSearchStoresData(params.store);

  const allStoreDataList = storesData?.map((store) => {
    return (
      <Grid xs={12} sm={6} md={4} lg={3} key={store.name_en}>
        <CustomCard type="store" data={store} lang={searchParams.lang} />
      </Grid>
    );
  });
  return (
    <Box sx={{ margin: "1rem 0", textAlign: "center" }}>
      {" "}
      {storesData ? (
        <Grid container spacing={2} sx={{ textAlign: "center" }}>
          {allStoreDataList}
        </Grid>
      ) : (
        <Typography
          variant="h3"
          sx={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "capitalize",
            fontWeight: "bold",
            color: "#F25858",
          }}
        >
          {searchParams.lang == "en"
            ? `no store match this Nama
`
            : `لا يوجد متجر بهذا الأسم `}
        </Typography>
      )}{" "}
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import CouponHead from "./CouponHead";
import CouponRight from "./CouponRight";
import TelegramIcon from "@mui/icons-material/Telegram";
import CouponDetails from "./CouponDetails";
import { Metadata } from "next";
import { Language, ProductType, StoreType } from "@/app/types";
import CouponFlags from "./CouponFlags";
import { useSingleStoreData } from "../../FetchData/useGetSingleStore";
import { couponType } from "@/app/types";
export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { lang: Language };
}): Promise<Metadata> => {
  const storeData: StoreType | null = await useSingleStoreData(params.id);

  return searchParams?.lang === "ar"
    ? {
        title: `${storeData?.meta.meta_title_ar}`,
        description: `${storeData?.meta.meta_description_ar}`,
        keywords: `${storeData?.meta.meta_keyword_ar}`,
      }
    : {
        title: `${storeData?.meta.meta_title_en}`,
        description: `${storeData?.meta.meta_description_en}`,
        keywords: `${storeData?.meta.meta_keyword_en}`,
      };
};

export default async function couponDetails({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { lang: Language };
}) {
  const storeData: StoreType | null = await useSingleStoreData(params.id);
  const coupons: couponType[] | undefined = storeData?.coupons;
  const descriptionEn = storeData?.description_en || "";
  const descriptionAr = storeData?.description_ar || "";
  const couponsList = coupons?.map((coupon) => {
    return (
      <Box
        sx={{
          backgroundColor: "white",
          border: "1px solid #dddddd",
          overflow: "hidden",
          margin: "1rem 0",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            lg={2}
            xs={12}
            sx={{
              border: "1px solid #dddddd",
              padding: "1rem 1.5rem",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              flexDirection: { lg: "column", xs: "row" },
              justifyContent: "space-between",
            }}
          >
            {searchParams.lang == "en" ? coupon.title_en : coupon.title_ar}
            <Typography sx={{ color: "#B53D3D" }}>
              {searchParams.lang == "en" ? "Coupon" : "كود خصم"}
            </Typography>
          </Grid>
          <Grid lg={10} xs={12} sx={{ padding: "1rem 1.5rem" }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "1.3125rem", marginBottom: "1rem" }}
            >
              {searchParams.lang == "en" ? coupon.title_en : coupon.title_ar}
            </Typography>
            <Box>
              <Grid container spacing={2}>
                <Grid
                  xs={12}
                  lg={6}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", lg: "left" },
                    alignItems: "flex-start",
                  }}
                >
                  {/* {flags} */}
                  <CouponFlags
                    flagCode={coupon.flag_code}
                    lang={searchParams.lang}
                  />
                </Grid>
                <Grid xs={12} lg={6}>
                  <CouponDetails coupon={coupon} lang={searchParams.lang} />
                  <Link
                    href={
                      searchParams.lang == "en"
                        ? `${storeData?.link_en}`
                        : `${storeData?.link_ar}`
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "1rem 0",
                      textDecoration: "none",
                      color: "#0558A0",
                      fontSize: "14px",
                    }}
                  >
                    {searchParams.lang == "en"
                      ? `Go to ${storeData?.name_en} website`
                      : `اذهب الي متجر ${storeData?.name_ar}`}
                    <TelegramIcon />
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  });
  const products: ProductType[] | undefined = storeData?.products;
  const productList = products?.map((product) => {
    return (
      <Box
        sx={{
          backgroundColor: "white",
          border: "1px solid #dddddd",
          overflow: "hidden",
          margin: "1rem 0",
          padding: "1rem 1.5rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <img
              src={product.image}
              alt="product-image"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textTransform: "capitalize" }}
            >
              {searchParams.lang == "en" ? product.title_en : product.title_ar}
            </Typography>
            <Typography
              sx={{ margin: "1rem 0" }}
              color="text.secondary"
              component={"p"}
            >
              {searchParams.lang == "en"
                ? product.description_en
                : product.description_ar}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { md: "flex-start", xs: "center" },
              }}
            >
              <Link
                href={
                  searchParams.lang == "en" ? product.link_en : product.link_ar
                }
                target="blank"
                style={{
                  textDecoration: "none",
                  padding: "1rem 2rem ",
                  width: "fit-content",
                  backgroundColor: "#B53D3D",
                  color: "white",
                  display: "block",
                  borderRadius: "1rem",
                }}
              >
                {searchParams.lang == "en"
                  ? `Go To Product`
                  : `اذهب الي المنتج`}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  });
  return (
    <Box sx={{ padding: "1rem 0" }}>
      <Grid container spacing={2}>
        <Grid lg={8} xs={12} sx={{ textWrap: "wrap" }}>
          <Box>
            <CouponHead store={storeData} lang={searchParams.lang} />
          </Box>
          {couponsList}
          {productList}
          <Box
            sx={{
              backgroundColor: "white",
              padding: "1rem 2rem",
              margin: "1rem 0",
              border: "1px solid #dddddd",
            }}
          >
            {searchParams.lang == "en" ? (
              <div dangerouslySetInnerHTML={{ __html: descriptionEn }}></div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: descriptionAr }}></div>
            )}
          </Box>
        </Grid>
        <Grid lg={4} xs={12}>
          <CouponRight store={storeData} lang={searchParams.lang} />
        </Grid>
      </Grid>
    </Box>
  );
}

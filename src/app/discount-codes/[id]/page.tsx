import { Box, Button, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import CouponHead from "./CouponHead";
import CouponRight from "./CouponRight";
import TelegramIcon from "@mui/icons-material/Telegram";
import CouponDetails from "./CouponDetails";
import { Metadata } from "next";
import { ProductType, StoreType } from "@/app/types";
import CouponFlags from "./CouponFlags";
import { useSingleStoreData } from "./useGetSingleStore";
import { couponType } from "@/app/types";
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const storeData: StoreType | null = await useSingleStoreData(params.id);

  return {
    title: `${storeData?.meta.meta_title_en}`,
    description: `${storeData?.meta.meta_description_en}`,
    keywords: `${storeData?.meta.meta_keyword_en}`,
  };
};

export default async function couponDetails({
  params,
}: {
  params: { id: string };
}) {

  const storeData: StoreType | null = await useSingleStoreData(params.id);
  const coupons: couponType[] | undefined = storeData?.coupons;
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
            {coupon.title_en}
            <Typography sx={{ color: "#B53D3D" }}>Coupon</Typography>
          </Grid>
          <Grid lg={10} xs={12} sx={{ padding: "1rem 1.5rem" }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "1.3125rem", marginBottom: "1rem" }}
            >
              {coupon.title_en}
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
                  <CouponFlags flagCode={coupon.flag_code} />
                </Grid>
                <Grid xs={12} lg={6}>
                  <CouponDetails coupon={coupon} />
                  <Link
                    href={`${storeData?.link_en}`}
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
                    Go to {storeData?.name_en} website <TelegramIcon />
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
              {product.title_en}
            </Typography>
            <Typography
              sx={{ margin: "1rem 0" }}
              color="text.secondary"
              component={"p"}
            >
              {product.description_en} Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Perferendis harum corrupti iste quidem
              voluptatum. Consectetur quia illum, ea ad facilis assumenda!
              Nulla, iusto aspernatur fugiat voluptatum aut ullam facere
              recusandae?
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { md: "flex-start", xs: "center" },
              }}
            >
              <Link
                href={product.link_en}
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
                Go To Product
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
            <CouponHead store={storeData} />
          </Box>
          {couponsList}
          {productList}
        </Grid>
        <Grid lg={4} xs={12}>
          <CouponRight store={storeData} />
        </Grid>
      </Grid>
    </Box>
  );
}

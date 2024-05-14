import { Language, StoreType } from "@/app/types";
import useSearchStoresData from "./useSearchStoresData";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography, Tooltip } from "@mui/material";

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
      <Grid xs={6} sm={4} md={3} lg={3} key={store.name_en}>
        <Link
          href={`discount-codes/${store.id}?lang=${searchParams.lang}`}
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
            <Tooltip
              title={
                searchParams.lang == "en"
                  ? store.description_en
                  : store.description_ar
              }
            >
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
              {searchParams.lang == "en" ? store.name_en : store.name_ar}
            </Typography>
          </Box>
        </Link>
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

import { Box, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import { useFeaturedStoresData } from "./useFeatureStore";
import { Language, StoreType } from "../types";
async function HomeAllStoreMain({ lang }: { lang: Language }) {
  const featureStoresData: StoreType[] = await useFeaturedStoresData();
  const allStoreDataList = featureStoresData?.map((store) => {
    return (
      <Grid xs={6} sm={4} md={3} lg={3}>
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
            <Tooltip
              title={lang == "en" ? store.description_en : store.description_ar}
            >
              <img
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
              {lang == "en" ? store.title_en : store.title_ar}
            </Typography>
            <Tooltip
              title={lang == "en" ? store.description_en : store.description_ar}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                className="storeName"
              >
                {lang == "en" ? store.name_en : store.name_ar}
              </Typography>
            </Tooltip>
          </Box>
        </Link>
      </Grid>
    );
  });
  return (
    <Box sx={{ margin: "1rem 0", textAlign: "center" }}>
      <Grid container spacing={2}>
        {allStoreDataList}
      </Grid>
    </Box>
  );
}
export default HomeAllStoreMain;

import { Box, Tooltip } from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { StoreType } from "../types";

function TopStoreCoupon({
  storesData,
  lang,
}: {
  storesData: StoreType[];
  lang: string | null;
}) {
  const TopHeroStore = storesData.filter((store, index) => {
    return index < 6;
  });
  const TopStoreDataList = TopHeroStore.map((store) => {
    return (
      <Grid
        xs={6}
        md={4}
        lg={12}
        sx={{
          background: "white",
          textAlign: "center ",
          border: "1px solid #dddddd",
          padding: "0.5rem 2rem",
        }}
      >
        <Link href={`discount-codes/${store.id}?lang=${lang}`}>
          <Tooltip
            title={lang == "en" ? store.description_en : store.description_ar}
            sx={{ display: "block", widthL: "100%" }}
          >
            <img
              width={100}
              style={{ height: "40px" }}
              src={store.image}
              alt="store image"
            />
          </Tooltip>
        </Link>
      </Grid>
    );
  });
  return (
    <Grid container spacing={0}>
      {TopStoreDataList}
    </Grid>
  );
}
export default TopStoreCoupon;

import {
  Box,

} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useFeaturedStoresData } from "../FetchData/useFeatureStore";
import { Language, StoreType } from "../types";
import CustomCard from "../Card/CustomCard";
async function HomeAllStoreMain({ lang }: { lang: Language }) {
  const featureStoresData: StoreType[] = await useFeaturedStoresData();
  const allStoreDataList = featureStoresData?.map((store) => {
    return (
      <Grid xs={12} sm={6} md={4} lg={3} justifyContent={"center"}>
        <CustomCard type="store" data={store} lang={lang} />
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

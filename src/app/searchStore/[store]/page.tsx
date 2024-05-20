import { Language, StoreType } from "@/app/types";
import useSearchStoresData from "../../FetchData/useSearchStoresData";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Typography,
  Tooltip,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CustomCard from "@/CustomCard";

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

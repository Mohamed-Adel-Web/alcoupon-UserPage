import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import {  Language } from "../types";
function HotOffersHead({ lang }: { lang: Language }) {
  return (
    <Box sx={{ margin: "1rem 0" }}>
      <Typography variant="h6" sx={{ padding: "1rem 0" }}>
        {lang == "en"
          ? "Online discount codes and Coupons"
          : "أكواد خصم وقسائم شراء عبر الإنترنت"}
        <Link
          href={"/hot-discount-coupons-deals"}
          style={{
            textDecoration: "none",
            color: "#F3AD59",
            margin: "1rem ",
            fontWeight: "bold",
            display: "inline-block",
            textTransform: "capitalize",
          }}
        >
          {lang == "en" ? " See all offers" : "مشاهدة جميع العروض"}
        </Link>
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12} sx={{ display: { xs: "none", md: "block" } }}>
            <Image
              width={1000}
              height={120}
              style={{ width: "100%" }}
              src={"/images/Offers/BannerOffers.jpg"}
              alt="Picture of the author"
            />
          </Grid>
          <Grid xs={12} sx={{ display: { xs: "block", md: "none" } }}>
            <Image
              width={1000}
              height={200}
              style={{ width: "100%" }}
              src={"/images/Offers/BannerOfferSmallScreen.png"}
              alt="Picture of the author"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default HotOffersHead;

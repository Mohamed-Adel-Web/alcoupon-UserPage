import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import { CountryData } from "../types";
function HotOffersHead() {
  return (
    <Box sx={{ margin: "1rem 0" }}>
      <Typography variant="h6" sx={{ padding: "1rem 0" }}>
        Online discount codes and Coupons in {CountryData.countryName}{" "}
        <Link
          href={"/hot-discount-coupons-deals"}
          style={{
            textDecoration: "none",
            color: "#F3AD59",
            marginLeft: "1rem",
            fontWeight: "bold",
            display: "inline-block",
            textTransform: "capitalize",
          }}
        >
          See all offers
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

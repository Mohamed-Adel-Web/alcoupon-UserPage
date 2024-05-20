import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import {  Language } from "../types";
function HotOffersHead({ lang }: { lang: Language }) {
  return (
    <Box sx={{ margin: "0.5rem 0" }}>
      <Typography variant="h6" sx={{ padding: "1rem 0" }}>
        {lang == "en"
          ? "Online discount codes and Coupons"
          : "أكواد خصم وقسائم شراء عبر الإنترنت"}
        <Link
          href={`/hot-discount-coupons-deals?page=1&lang=${lang}`}
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
  
    </Box>
  );
}
export default HotOffersHead;

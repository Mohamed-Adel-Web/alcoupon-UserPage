import { Box, Typography } from "@mui/material";

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
          prefetch={true}
          style={{
            textDecoration: "none",
            color: "#F3AD59",
            margin: "1rem ",
            fontWeight: "bold",
            display: "inline-block",
            textTransform: "capitalize",
          }}
        >
          {lang == "en" ? " See all Coupons" : "مشاهدة جميع الكوبونات"}
        </Link>
      </Typography>
  
    </Box>
  );
}
export default HotOffersHead;

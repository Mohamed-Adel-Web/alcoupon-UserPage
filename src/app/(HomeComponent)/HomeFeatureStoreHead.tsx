import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { Language } from "../types";

function HomeAllStoreHead({ lang }: { lang: Language }) {
  return (
    <Box sx={{ display: "block" }}>
      <Typography variant="h6" sx={{ padding: "1rem 0" }}>
        {lang == "en" ? "Featured Stores Offers" : "عروض المتاجر المميزة"}
        <Link
          href={`/discount-codes?page=1&lang=${lang}`}
          style={{
            textDecoration: "none",
            color: "#F3AD59",
            margin: "1rem",
            fontWeight: "bold",
            display: "inline-block",
            textTransform: "capitalize",
          }}
        >
          {lang == "en" ? " See all offers" :"مشاهدة جميع المتاجر"}
        </Link>
      </Typography>
    </Box>
  );
}
export default HomeAllStoreHead;

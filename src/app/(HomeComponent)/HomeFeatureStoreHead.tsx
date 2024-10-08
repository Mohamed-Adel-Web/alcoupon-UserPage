import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { Language } from "../types";
function HomeAllStoreHead({ lang }: { lang: Language }) {
  return (
    <Box sx={{ display: "block" }}>
      <Typography variant="h2" sx={{ padding: "1rem 0", fontSize: "1.5rem" }}>
        {lang == "en" ? "Featured Stores Offers" : "عروض المتاجر المميزة"}
        <Link
          prefetch={true}
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
          {lang == "en" ? " See all Stores" : "مشاهدة جميع المتاجر"}
        </Link>
      </Typography>
    </Box>
  );
}
export default HomeAllStoreHead;

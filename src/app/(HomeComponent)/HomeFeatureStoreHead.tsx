import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { CountryData } from "../types";

function HomeAllStoreHead() {
  return (
    <Box sx={{ display: "block" }}>
      <Typography variant="h6" sx={{ padding: "1rem 0" }}>
        Featured Stores in {CountryData.countryName}
        <Link
          href={"/discount-codes"}
          style={{
            textDecoration: "none",
            color: "#F3AD59",
            marginLeft: "1rem",
            fontWeight: "bold",
            display: "inline-block",
            textTransform: "capitalize",
          }}
        >
          See all stores
        </Link>
      </Typography>
    </Box>
  );
}
export default HomeAllStoreHead;

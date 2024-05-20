import { Language } from "@/app/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type flag = {
  code: string;
  image: string;
};
const flags: flag[] = [
  {
    code: "EG",
    image: "/Images/flags/egypt-flag-png-large.png",
  },
  {
    code: "SA",
    image: "/Images/flags/saudi-arabia-flag-png-large.png",
  },
  {
    code: "QA",
    image: "/Images/flags/qatar-flag-png-large.png",
  },
  {
    code: "OM",
    image: "/Images/flags/oman-flag-png-large.png",
  },
  {
    code: "KW",
    image: "/Images/flags/kuwait-flag-png-large.png",
  },
  {
    code: "AE",
    image: "/Images/flags/united-arab-emirates-flag-png-large.png",
  },
  {
    code: "BH",
    image: "/Images/flags/flag-jpg-xl-13-2048x1229.jpg",
  },
  {
    code: "WW",
    image: "/Images/flags/globe_14061916.png",
  },
];
export default function CouponFlags({
  flagCode,
  lang,
}: {
  flagCode: string;
  lang: Language;
}) {
  const couponCountry = flags.filter((flag) => {
    return flag.code === flagCode;
  });
  const couponCountryList = couponCountry.map((country) => {
    return (
      <img
        src={country.image}
        style={{ borderRadius: "50%" }}
        width={30}
        height={30}
        alt="flag image"
      />
    );
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          padding: "0.5rem 0",
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "#B53D3D",
        }}
      >
        {" "}
        {lang=="en" ?"available in":"متاح في"}
      </Typography>
      <Box>{couponCountryList}</Box>
    </Box>
  );
}

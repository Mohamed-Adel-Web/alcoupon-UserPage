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
    image: "/images/flags/eg.svg",
  },
  {
    code: "SA",
    image: "/images/flags/sa.svg",
  },
  {
    code: "QA",
    image: "/images/flags/qa.svg",
  },
  {
    code: "OM",
    image: "/images/flags/om.svg",
  },
  {
    code: "KW",
    image: "/images/flags/kw.svg",
  },
  {
    code: "AE",
    image: "/images/flags/ae.svg",
  },
  {
    code: "BH",
    image: "/images/flags/bh.svg",
  },
  {
    code: "WW",
    image: "/images/flags/ww.svg",
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
      <Image
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

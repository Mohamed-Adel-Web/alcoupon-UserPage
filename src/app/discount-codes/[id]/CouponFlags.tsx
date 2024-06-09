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
  flagCode: string[];
  lang: Language;
}) {
  const couponCountryList = flagCode?.map((code) => {
    const flag = flags.find((f) => f.code === code);
    return (
      flag && (
        <Image
          key={flag.code}
          src={flag.image}
          style={{ borderRadius: "50%", margin: "0.5rem" }}
          width={30}
          height={30}
          alt={`${flag.code} flag`}
          loading="eager"
        />
      )
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
        {lang == "en" ? "available in" : "متاح في"}
      </Typography>
      <Box> {couponCountryList}</Box>
    </Box>
  );
}

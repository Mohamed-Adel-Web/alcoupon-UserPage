import { Language, StoreType } from "@/app/types";
import { Box, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
type Props = {
  store: StoreType | null;
  lang: Language;
};

const CouponRight = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          margin: "1rem 0",
          border: "1px solid #dddddd",
          textAlign: " center",
        }}
      >
        <Link
          href={
            props.lang == "en"
              ? `${props.store?.link_en}`
              : `${props.store?.link_ar}`
          }
        >
          <Tooltip
            title={
              props.lang == "en"
                ? `${props.store?.name_en}`
                : `${props.store?.name_ar}`
            }
          >
            <img
              src={`${props.store?.image}`}
              style={{ width: "210px" }}
              alt="store image"
            />
          </Tooltip>
        </Link>
        <Typography variant="h6" sx={{ color: "#B53D3D", margin: "1rem 0" }}>
          {props.lang == "en"
            ? props.store?.description_en
            : props.store?.description_ar}
        </Typography>
        <Link
          href={
            props.lang == "en"
              ? `${props.store?.link_en}`
              : `${props.store?.link_ar}`
          }
          target="blank"
          style={{
            padding: "1rem 4rem ",
            width: "fit-content",
            backgroundColor: "#B53D3D",
            textDecoration: "none",
            color: "white",
            borderRadius: "2rem",
            margin: "1rem auto",
            display: "block",
          }}
        >
          {props.lang == "en" ? `Shop Now` : `تسوق الان`}
        </Link>
      </Box>{" "}
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          margin: "1rem 0",
          border: "1px solid #dddddd",
          textAlign: " center",
        }}
      >
        {props.lang == "en" ? props.store?.about_en : props.store?.about_ar}
      </Box>
    </>
  );
};

export default CouponRight;

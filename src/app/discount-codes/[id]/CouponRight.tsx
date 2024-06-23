import { Language, StoreType } from "@/app/types";
import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import UserRegister from "./UsersRegister";
type Props = {
  store: StoreType | null;
  lang: Language;
};

const CouponRight = (props: Props) => {
  const aboutEn = props.store?.about_en || "";
  const aboutAr = props.store?.about_ar || "";
  const altText =
    props.lang === "en" ? props.store?.title_en : props.store?.title_ar;
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
          target="_blank"
        >
          <Tooltip
            title={
              props.lang == "en"
                ? `${props.store?.name_en}`
                : `${props.store?.name_ar}`
            }
          >
            <Image
              width={210}
              height={210}
              src={`${props.store?.image}`}
              alt={`${altText}`}
              loading="eager"
            />
          </Tooltip>
        </Link>
        <Typography variant="h6" sx={{ color: "#B53D3D", margin: "1rem 0" }}>
          {props.lang == "en"
            ? props.store?.discount_en
            : props.store?.discount_ar}
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
            background:
              " linear-gradient(90deg, rgba(242,19,20,0.6895133053221288) 29%, rgba(244,147,30,0.7175245098039216) 72%)",
            textDecoration: "none",
            color: "Black",
            fontWeight: "bold",
            borderRadius: "2rem",
            margin: "1rem auto",
            display: "block",
          }}
        >
          {props.lang == "en" ? `shops Now` : `تسوق الان`}
        </Link>
      </Box>{" "}
      <UserRegister lang={props.lang} />
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          margin: "1rem 0",
          border: "1px solid #dddddd",
          textAlign: "start",
        }}
      >
        {props.lang == "en" ? (
          <div dangerouslySetInnerHTML={{ __html: aboutEn }}></div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: aboutAr }}></div>
        )}
      </Box>
    </>
  );
};

export default CouponRight;

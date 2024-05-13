import { StoreType } from "@/app/types";
import { Box, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
type Props = {
  store: StoreType | null;
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
        <Link href={`${props.store?.link_en}`}>
          <Tooltip title={`${props.store?.name_en}`}>
            <img
              src={`${props.store?.image}`}
              style={{ width: "210px" }}
              alt="store image"
            />
          </Tooltip>
        </Link>
        <Typography variant="h6" sx={{ color: "#B53D3D", margin: "1rem 0" }}>
          {props.store?.description_en}
        </Typography>
        <Link
          href={`${props.store?.link_en}`}
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
          Shop Now
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
        {props.store?.about_en}
      </Box>
    </>
  );
};

export default CouponRight;

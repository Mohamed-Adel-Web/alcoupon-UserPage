import {
  Box,
  Typography,
  Tooltip,
  CardMedia,
  Card,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import type { Metadata } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { Language, categoryTypes } from "@/app/types";
import { useGetStoreByCategory } from "../../FetchData/useGetStoreByCategory";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CustomCard from "@/CustomCard";
export const generateMetadata = async ({
  params,
  searchParams,
}: {
  searchParams: { lang: Language };
  params: { id: string };
}): Promise<Metadata> => {
  const categoryData: categoryTypes | null = await useGetStoreByCategory(
    params?.id
  );
  return searchParams?.lang === "ar"
    ? {
        title: `${categoryData?.meta_title_ar}`,
        description: `${categoryData?.meta_description_ar}`,
        keywords: `${categoryData?.meta_keyword_ar}`,
      }
    : {
        title: `${categoryData?.meta_title_en}`,
        description: `${categoryData?.meta_description_en}`,
        keywords: `${categoryData?.meta_keyword_en}`,
      };
};

export default async function categoryPage({
  params,
  searchParams,
}: {
  searchParams: { lang: Language };
  params: { id: string };
}) {
  const categoryData: categoryTypes | null = await useGetStoreByCategory(
    params.id
  );

  const allStoreDataList = categoryData?.stores?.map((store) => {
    return (
      <Grid xs={12} sm={6} md={4} lg={3} key={store.name_en}>
        <CustomCard data={store} type="store" lang={searchParams.lang} />
      </Grid>
    );
  });
  return (
    <Box sx={{ padding: "1rem 0" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          padding: "1rem 0",
          textTransform: "capitalize",
        }}
      >
        {searchParams.lang == "en"
          ? `All Stores for ${categoryData?.name_en} category`
          : `جميع المتاجر لفئة ${categoryData?.name_ar}`}
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          margin: "1rem 0",
          border: "1px solid #dddddd",
        }}
      >
        <Typography variant="h5">
          {searchParams.lang == "en"
            ? "Online Shopping Platforms: Top Discount Codes and Coupons"
            : "منصات التسوق الإلكتروني أفضل أكواد الخصم والكوبونات "}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ padding: "1rem 0", fontSize: "1rem", fontWeight: "400" }}
        >
          {searchParams.lang == "en"
            ? `   Our team at Shopcoupon.com diligently curates the latest coupon codes,
        discounts, and deals from top online shopping sites. The Middle East
        is rapidly becoming a hub for online stores and e-commerce platforms,
        offering a wide range of products that are just a click away and
        delivered to your doorstep with exceptional speed.`
            : `يعمل فريقنا في Shopcoupon.com بجد لتقديم أحدث أكواد الكوبونات والخصومات والعروض من أفضل مواقع التسوق الإلكتروني. أصبح الشرق الأوسط مركزًا سريع النمو للمتاجر الإلكترونية ومنصات التجارة الإلكترونية، حيث يمكن الحصول على مجموعة واسعة من المنتجات بنقرة واحدة فقط ويتم توصيلها إلى باب منزلك بسرعة فائقة `}
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        {allStoreDataList}
      </Grid>

      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          margin: "1rem 0",
          border: "1px solid #dddddd",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1rem" }}
        >
          {searchParams.lang == "en"
            ? `  Explore the ShopCoupon shopping guide, which features the top coupon
        codes, deals, and discounts from premier online shopping sites,
        including clothing retailers and Chinese shopping platforms. Learn how
        to place orders from any online site with our easy-to-follow guides.
        Check out our comprehensive list of online shopping sites and
        e-commerce stores that offer coupon codes, vouchers, as well as deals
        and discounts, and provide shipping services.`
            : `ستكشف دليل التسوق في ShopCoupon، الذي يتضمن أفضل أكواد الكوبونات والعروض والخصومات من أفضل مواقع التسوق الإلكتروني، بما في ذلك متاجر الملابس الإلكترونية ومواقع التسوق الصينية. تعلم كيفية تقديم الطلبات من أي موقع إلكتروني بسهولة مع أدلتنا العملية. تحقق من قائمتنا الشاملة لمواقع التسوق الإلكتروني ومتاجر التجارة الإلكترونية التي تقدم أكواد كوبونات وقسائم شراء، بالإضافة إلى العروض والخصومات وخدمات الشحن.`}
        </Typography>
      </Box>
    </Box>
  );
}

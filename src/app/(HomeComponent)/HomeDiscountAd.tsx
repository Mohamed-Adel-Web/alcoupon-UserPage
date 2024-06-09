import { Box, Typography } from "@mui/material";
import { Language } from "../types";
function HomeDiscountAd({ lang }: { lang: Language }) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1rem 2rem",
        margin: "1rem 0",
        border: "1px solid #dddddd",
      }}
    >
      <Typography variant="h5">
        {lang == "en"
          ? `Coupons and Discount Codes Online`
          : `كوبونات وأكواد خصم عبر الإنترنت
`}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ padding: "1rem 0" }}
      >
        {lang == "en"
          ? `Shops Coupons is a top-tier website for coupons, gathering an extensive
        array of coupon codes, voucher coupons, along with numerous offers and
        discounts valid for the current year. The site also guides you on how to
        effectively use and apply coupons or promo codes, enabling you to save
        money while Shopping online through various e-commerce platforms—all
        conveniently available in one place!`
          : `يعد موقع كوبونات التسوق من المواقع الرائدة في مجال الكوبونات، حيث يجمع مجموعة واسعة من أكواد الكوبونات وقسائم الخصم، إلى جانب العديد من العروض والتخفيضات السارية للعام الحالي. يوفر الموقع أيضًا إرشادات حول كيفية استخدام وتطبيق الكوبونات أو أكواد الخصم بفعالية، مما يمكنك من توفير المال أثناء التسوق عبر الإنترنت من خلال منصات التجارة الإلكترونية المختلفة—كل ذلك متاحًا في مكان واحد!`}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {lang == "en"
          ? ` Our goal at Shops Coupons is to assist you in discovering the freshest and
        most recent coupon codes, promotional vouchers, and discount codes, all
        valid and tested for a multitude of local and international online
        retailers. Our dedicated team is committed to regularly checking and
        updating every coupon to ensure you get the best savings on purchases
        from your preferred Shopping websites.`
          : `هدفنا في كوبونات التسوق هو مساعدتك على اكتشاف أحدث وأجدد أكواد الكوبونات، وقسائم الترويج، وأكواد الخصم، كلها صالحة ومختبرة لعدد كبير من المتاجر الإلكترونية المحلية والدولية. يلتزم فريقنا بفحص وتحديث كل كوبون بانتظام لضمان حصولك على أفضل التوفيرات في مشترياتك من مواقع التسوق المفضلة لديك. `}
      </Typography>
    </Box>
  );
}
export default HomeDiscountAd;

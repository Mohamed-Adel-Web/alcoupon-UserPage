import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { Language } from "../types";
import Image from "next/image";
function CouponInstruction({ lang }: { lang: Language }) {
  return (
    <Grid container spacing={4}>
      <Grid xs={12} lg={6}>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "1rem 2.5rem",
            border: "1px solid #dddddd",
            minHeight: "600px",
          }}
        >
          <Typography sx={{ fontSize: "1.3rem" }}>
            {lang == "en"
              ? ` Here's everything you need to understand about leveraging online
            coupon codes and discounts:`
              : `إليك كل ما تحتاج لمعرفته حول استخدام أكواد الكوبونات والخصومات عبر الإنترنت`}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ paddingTop: "1rem", lineHeight: "1.5rem" }}
          >
            {lang == "en"
              ? ` A promotional code can grant you instant savings, either by reducing
            a percentage of your total order, like taking a certain percentage
            off your purchase cost, or by offering a specific amount off when
            you spend a set minimum, as well as providing free shipping.
            However, it can sometimes be challenging to find active codes that
            work. That's why the team at ShopCoupon diligently verifies each
            coupon code daily and checks their expiration dates.`
              : `يمكن أن يوفر لك رمز ترويجي تخفيضات فورية، إما بتقليل نسبة معينة من إجمالي طلبك، مثل خصم نسبة مؤية معينة من تكلفة شرائك، أو بتقديم خصم محدد عند إنفاق حد أدنى معين، بالإضافة إلى توفير الشحن المجاني. ومع ذلك، قد يكون من الصعب في بعض الأحيان العثور على أكواد خصم نشطة وفعالة. لذلك، يقوم فريق الكوبون بالتحقق بعناية من كل رمز كوبون يوميًا ويفحص تواريخ انتهاء صلاحيتها.`}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ padding: "1rem 0", lineHeight: "1.5rem" }}
          >
            {lang == "en"
              ? `While shopping online, you might have noticed a "Coupon Code" box that appears before you complete the checkout process. Many online stores regularly offer promotional codes to their customers.`
              : `أثناء التسوق عبر الإنترنت، ربما لاحظت مربع "رمز الكوبون" الذي يظهر قبل إتمام الدفع. بعض المتاجر الإلكترونية توفر بشكل مستمر أكواد ترويجية لعملائها.

              `}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: "1.5rem" }}
          >
            {lang == "en"
              ? `If you find it difficult to discover and apply the best coupons while shopping from online stores, there's no need to worry; we're here to help. We will provide you with all the necessary advice to transition from a beginner to an expert in using coupons, enabling you to master the art of saving while shopping online.
`
              : `إذا وجدت صعوبة في اكتشاف وتطبيق أفضل الكوبونات أثناء التسوق من المتاجر الإلكترونية، فلا داعي للقلق؛ نحن هنا لمساعدتك. سنقدم لك كل النصائح الضرورية للانتقال من مبتدئ إلى متسوق خبير، مما يمكنك من إتقان فن استخدام الكوبونات وتعظيم وفوراتك عبر الإنترنت.`}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} lg={6}>
        <Box
          sx={{
            backgroundColor: "white",
            border: "1px solid #dddddd",
            minHeight: "600px",
          }}
        >
          <Image
            width={600}
            height={200}
            src={"/images/CouponInstruction/instruction.svg"}
            alt="coupon instruction image"
          />
          <Box sx={{ padding: "1rem 2rem" }}>
            <Typography
              sx={{
                fontSize: "1.3rem",
                padding: "1rem 0",
              }}
            >
              {lang == `en`
                ? `How to find the right promo code:`
                : `كيفية العثور على الرمز الترويجي المناسب:
`}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: "1.5rem" }}
            >
              {lang == `en`
                ? `First, you need to locate a coupon code or discount voucher and understand how to apply it. Simply open a coupon website to search for a recent and valid discount coupon for the store you wish to shop from and start saving. The coupons might offer a certain percentage or amount off your total, or alter your shipping costs by either eliminating or reducing them.

`
                : `أولاً، تحتاج إلى البحث عن رمز كوبون أو قسيمة خصم وفهم كيفية تطبيقها. كل ما عليك فعله هو فتح موقع ويب للكوبونات للبحث عن كوبون خصم صالح وحديث للمتجر الذي ترغب في التسوق منه وابدأ في التوفير. قد توفر الكوبونات نسبة معينة أو مبلغًا من إجمالي مشترياتك، أو تغير تكاليف الشحن الخاصة بك إما بإزالتها أو تخفيضها.

                `}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ padding: "1rem 0", lineHeight: "1.5rem" }}
            >
              {lang == "en"
                ? `The offers could be applicable site-wide or valid only on specific products or categories. In some cases, the coupons might require that your total purchase exceeds a certain limit, so it's important to regularly check the terms and conditions as they vary from one store to another.
`
                : `قد تكون العروض قابلة للتطبيق على جميع المنتجات في الموقع، أو صالحة فقط لمنتجات أو فئات معينة. في بعض الحالات، قد تتطلب الكوبونات أن تتجاوز مشترياتك حدًا معينًا، لذا من المهم التحقق من الشروط والأحكام بانتظام حيث تختلف من متجر لآخر.
                `}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "1rem 2rem",
            border: "1px solid #dddddd",
          }}
        >
          <Typography variant="h6">
            <Link href="/" style={{ textDecoration: "none", color: "#0558A0" }}>
              {lang == "en"
                ? ` How to use the promotional coupon?     `
                : `كيفية استخدام الكوبون الترويجي؟`}
            </Link>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ padding: "1rem 0" }}
          >
            {lang == "en"
              ? ` Once you locate the right discount coupon, you'll see details such
              as the discount amount (either a percentage or a fixed value), the
              expiration date of the coupon, terms and conditions, and the
              discount code itself. To access the promo code, click on "Reveal
              Coupon." This action will open the retailer's website in a new
              window and display the code.`
              : `بعد العثور على كوبون الخصم المناسب، ستظهر لك التفاصيل التالية: قيمة الخصم (كنسبة مئوية أو مبلغ ثابت)، تاريخ انتهاء صلاحية الكوبون، الشروط والأحكام، ورمز الخصم. لكشف رمز العرض الترويجي، انقر على "كشف الكوبون". هذا الإجراء سيفتح موقع التسوق في نافذة جديدة ويعرض الرمز.`}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} lg={4}>
        <Box
          sx={{
            padding: "1rem 2rem",
            backgroundColor: "white",
            border: "1px solid #dddddd",
            minHeight: "630px",
          }}
        >
          <img
            src={"/images/CouponInstruction/step-1.png"}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto" }}
            alt="coupon instruction image"
          />
          <strong
            style={{
              fontSize: "1.2rem",
              display: "block",
              paddingTop: "1rem ",
            }}
          >
            {lang == "en"
              ? `Here’s how to properly apply a promotional code during online shopping.
`
              : ` كيفية تطبيق رمز ترويجي بشكل صحيح أثناء التسوق عبر الإنترنت`}
          </strong>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: "1.5rem", padding: "1rem 0" }}
          >
            {lang === "en"
              ? `Before completing your purchase, we recommend all online shoppers follow this guide for a seamless shopping experience. Ensure that the voucher code is entered accurately. Typically, these codes are composed of uppercase English letters and can be case-sensitive, meaning they might not work if inputted in lowercase. When copying and pasting the discount code from our website, make sure no extra spaces are included at the beginning or end of the code, as this could trigger an error message.


`
              : `قبل إتمام عملية الشراء، ننصح جميع المتسوقين عبر الإنترنت باتباع هذا الدليل لتجربة تسوق سلسة. تأكد من إدخال رمز القسيمة بدقة. عادةً ما تتكون هذه الرموز من حروف إنجليزية كبيرة وقد تكون حساسة لحالة الأحرف، مما يعني أنها قد لا تعمل إذا تم إدخالها بأحرف صغيرة. عند نسخ ولصق رمز الخصم من موقعنا، تأكد من عدم وجود مسافات إضافية في بداية أو نهاية الرمز، حيث قد يؤدي ذلك إلى ظهور رسالة خطأ.






`}
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid xs={12} lg={4}>
        <Box
          sx={{
            padding: "1rem 2rem",
            backgroundColor: "white",
            border: "1px solid #dddddd",
            minHeight: "630px",
          }}
        >
          <img
            src={"/images/CouponInstruction/step-2.png"}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto" }}
            alt="coupon instruction image"
          />
          <strong
            style={{
              fontSize: "1.2rem",
              display: "block",
              paddingTop: "1rem ",
            }}
          >
            {lang == "en"
              ? `How to apply the voucher code
`
              : `كيفية تطبيق رمز القسيمة `}
          </strong>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: "1.5rem", padding: "1rem 0" }}
          >
            {lang == `en`
              ? `To apply a voucher code, start by finishing your shopping and adding items to your cart. Once you've copied a coupon code, paste it into the designated field during the checkout process and apply it. This will update your total to reflect the discount. After applying the discount, you can proceed with payment in your local currency and complete your order for shipping to major cities.

`
              : `لتطبيق رمز القسيمة، ابدأ بإنهاء تسوقك وإضافة المنتجات إلى عربة التسوق الخاصة بك. بعد نسخ رمز الكوبون، الصقه في الحقل المخصص خلال عملية الدفع وطبقه. سيؤدي ذلك إلى تحديث إجمالي الفاتورة ليعكس الخصم. بعد تطبيق الخصم، يمكنك المتابعة بالدفع بعملتك المحلية وإتمام طلبك للشحن إلى المدن الرئيسية.

              `}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: "1.5rem" }}
          >
            {lang == `en`
              ? `Make sure to apply your voucher code by typing it or pasting it into the coupon code box during checkout. Hit the apply button to activate the discount. Be mindful to locate this box, which might appear at various stages of the checkout, and ensure not to accidentally confirm your purchase before entering the code.

              `
              : `تأكد من تطبيق رمز القسيمة بكتابته أو لصقه في مربع رمز الكوبون أثناء الدفع. اضغط على زر التطبيق لتفعيل الخصم. انتبه لتحديد مكان هذا المربع، والذي قد يظهر في مراحل مختلفة من عملية الدفع، وتأكد من عدم تأكيد طلبك بالخطأ قبل إدخال الرمز.






`}
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid xs={12} lg={4}>
        <Box
          sx={{
            padding: "1rem 2rem",
            backgroundColor: "white",
            border: "1px solid #dddddd",
            minHeight: "630px",
          }}
        >
          <img
            src={"/images/CouponInstruction/step-1.png"}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto" }}
            alt="coupon instruction image"
          />
          <strong
            style={{
              fontSize: "1.2rem",
              display: "block",
              paddingTop: "1rem ",
            }}
          >
            {lang == "en"
              ? `            Make sure you meet the minimum order value
`
              : `تأكد من أن طلبك يفي بالقيمة الدنيا المطلوبة لتطبيق الخصم.  `}
          </strong>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: "1.5rem", padding: "1rem 0" }}
          >
            {lang == "en"
              ? `Many promotional vouchers have a minimum order value requirement. This means your order must meet or exceed a specific amount before the discount can be activated. The minimum value is calculated based on the actual cost of the items in your purchase, excluding any immediate discounts, and does not cover extra charges like taxes or shipping.






`
              : `العديد من قسائم الترويج تتطلب قيمة طلب دنيا. هذا يعني أن طلبك يجب أن يكون مساويًا أو يتجاوز مبلغًا معينًا قبل أن تتمكن من تفعيل الخصم. تُحسب القيمة الدنيا بناءً على التكلفة الفعلية للعناصر في طلبك بعد أي خصومات فورية، ولا تشمل النفقات الإضافية مثل الضرائب أو الشحن.
              `}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
export default CouponInstruction;

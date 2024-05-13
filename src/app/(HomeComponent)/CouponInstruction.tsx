import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import { CountryData } from "../types";
import { CouponDate } from "../types";
function CouponInstruction() {
  const countryCities = CountryData.countryCities?.map(
    (city, i) => `${city}, `
  );
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
            Everything you need to know about using online coupon codes &
            discounts in {CouponDate.year}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ paddingTop: "1rem", lineHeight: "1.5rem" }}
          >
            A promo code can provide you with instant discounts in the form of
            percentages of the total order, for example 10% off the total cost
            of purchase, or fixed value reductions such as a 10{" "}
            {CountryData.countryCurrency}
            discount on purchases worth 100 {CountryData.countryCurrency}, or
            free shipping. However, finding active discount codes successfully
            can be difficult in some cases. For this reason, Al Coupon’s team
            checks every voucher code and their expiry CouponDate s everyday.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ padding: "1rem 0", lineHeight: "1.5rem" }}
          >
            You probably have noticed while shopping on the internet the “Coupon
            Code” box that appears before checking out. A few online shops known
            for continuously providing promo codes are: Shein, Noon.com and
            Ounass.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: "1.5rem" }}
          >
            If finding the best coupon while shopping from online stores and
            applying it is difficult for you, there is no need to worry; we will
            open the doors of knowledge for you and offer you all the advice you
            may need to transform from a beginner to an expert in using coupons
            and saving while shopping through the internet.
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
            src={"/images/CouponInstruction/couponInstruction.jpg"}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto" }}
            alt="coupon instruction image"
          />
          <Box sx={{ padding: "1rem 2rem" }}>
            <Typography
              sx={{
                fontSize: "1.3rem",
                padding: "1rem 0",
              }}
            >
              How to find the right promo code:
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: "1.5rem" }}
            >
              First, you will need to search and get a coupon code or discount
              voucher and learn how to apply it. All you have to do, is open Al
              Coupon’s website Egypt to search for a recent and valid discount
              coupon for the store you wish to shop from and start saving now.
              The coupons could discount a certain percentage or amount in
              Egyptian pound off of your total, or change your shipping expenses
              either by removing or reducing them
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ padding: "1rem 0", lineHeight: "1.5rem" }}
            >
              The offers could be applied site-wide, or could be valid on
              certain products or categories only. In some cases, the coupons
              require that your total exceeds a certain limit, so you should
              check the terms and conditions regularly as they differ from one
              store to another.
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
              How to use the promotional coupon?
            </Link>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ padding: "1rem 0" }}
          >
            After finding the suitable discount coupon, you will find the
            following details: the discount value (as a percentage or a fixed
            amount in {CountryData.countryCurrency}), expiry CouponDate of the
            coupon/offer, any terms and conditions, and the discount code. To
            reveal the promo code, simply click on "Reveal Coupon" which will
            direct you to the shopping site in a new window and reveal the code.
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
          <Image
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
            How to enter the coupon correctly
          </strong>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: "1.5rem", padding: "1rem 0" }}
          >
            We recommend that all online shoppers from Egypt check this guide
            out before checking out to have a smooth shopping experience. Make
            sure you write or paste the voucher code correctly. Most codes have
            capital English letters and at times are case-sensitive, thus they
            may not be valid if entered as small letters. If you copy the
            discount code provided on our website and paste it, check that there
            are no empty spaces before or after the code, otherwise an error
            message could appear.
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
          <Image
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
            How to apply the voucher code
          </strong>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: "1.5rem", padding: "1rem 0" }}
          >
            After finding and copying a coupon code, finish shopping and adding
            products to your shopping cart, paste the code in the correct field
            and apply it to reveal your total after the discount. After that you
            are ready to proceed to pay in your local currency (Egyptian pound)
            and place your order to be shipped to all the main cities (
            {countryCities}
            ... etc.) in {CountryData.countryName}.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: "1.5rem" }}
          >
            You can apply it to your order by writing or copying and pasting it
            in the coupon code box, then click on the button to apply it. This
            box can be found at different stages during the checkout process.
            Just be careful not to confirm your order by mistake before entering
            the code.
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
          <Image
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
            Make sure you meet the minimum order value
          </strong>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: "1.5rem", padding: "1rem 0" }}
          >
            Many promotional vouchers require a minimum order value. This means
            that your order should be equal to or exceed a certain amount before
            you can activate the discount. The minimum order applies only on the
            actual cost of an item in your purchase, after any immediate
            discounts, and does not include additional expenses such as taxes or
            shipping.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
export default CouponInstruction;

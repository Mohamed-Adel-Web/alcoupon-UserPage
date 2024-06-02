import "./styles/all.min.css";
import "./styles/globals.css";
import Container from "@mui/material/Container";
import { useGetCategories } from "./FetchData/useGetCategory";
import { useFeaturedStoresData } from "./FetchData/useFeatureStore";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./(Header)/NavBar"), {
  ssr: true,
});
const NavigationLinks = dynamic(() => import("./(Header)/NavigationLinks"), {
  ssr: true,
});
const Footer = dynamic(() => import("./Footer/Footer"), {
  ssr: true,
});
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "coupons Stores",
  name: "shop coupon",
  url: "https://www.shop-coupons.com",
  logo: "/images/logo/Logo_En.svg",
  sameAs: [
    "https://www.facebook.com/shop.coupon.codes?mibextid=ZbWKwL",
    "https://twitter.com/i/flow/login?redirect_after_login=%2FShop_coupon_",
    "https://www.instagram.com/shop.coupon/?igsh=dGJmc3Zpcm1ncTl6",
    "https://www.snapchat.com/add/shop_coupons?share_id=ApMe0YNX2TA&locale=en-US",
    "https://www.youtube.com/@shop-coupons",
    "https://www.tiktok.com/@shopcoupons?_t=8k81TXP1Pd9&_r=1",
    "https://t.me/shop_couponz",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "01024856345",
    contactType: "Customer Service",
    areaServed: "EG",
    availableLanguage: ["English", "Arabic"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const AllCategories = await useGetCategories();
  const AllStores = await useFeaturedStoresData();

  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/title/favicon.ico"
        />
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11459696307"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11459696307');
            `,
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-137368123-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-137368123-1');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NavBar AllCategories={AllCategories} />
        <NavigationLinks AllCategoriesData={AllCategories} />
        <Container maxWidth="lg" sx={{ textAlign: "start" }}>
          {children}
        </Container>
        <footer>
          <Footer stores={AllStores} />
        </footer>
      </body>
    </html>
  );
}

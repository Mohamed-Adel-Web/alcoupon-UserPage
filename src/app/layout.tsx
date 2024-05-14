import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/all.min.css";
import "./styles/globals.css";
import Container from "@mui/material/Container";
import Footer from "./Footer/Footer";
import NavBar from "./(Header)/NavBar";
import NavigationLinks from "./(Header)/NavigationLinks";
import { useGetCategories } from "./(Header)/useGetCategory";
import { useGetLang } from "@/useGetLang/useGetLang";
import { useSearchParams } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al Coupon - Egypt Online Stores Discount Codes",

  description:
    "Searching for the best coupon codes for Arab & international online stores? Al Coupon offers you the latest promo codes & discounts, valid in Egypt",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const AllCategories = await useGetCategories();
  const lang = await useGetLang();

  return (
    <html lang={lang}>
      <head>
        {" "}
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/title/favicon.ico"
        />
      </head>
      <body className={inter.className}>
        <NavBar AllCategories={AllCategories} />
        <NavigationLinks  AllCategoriesData={AllCategories} />
        <Container
          maxWidth="lg"
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          {children}
        </Container>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

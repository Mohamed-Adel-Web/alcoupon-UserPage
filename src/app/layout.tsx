import "./styles/all.min.css";
import "./styles/globals.css";
import Container from "@mui/material/Container";
import { useGetCategories } from "./FetchData/useGetCategory";
import { useFeaturedStoresData } from "./FetchData/useFeatureStore";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("./(Header)/NavBar"), {
  ssr: true,
});
const NavigationLinks = dynamic(() => import("./(Header)/NavigationLinks"),{
  ssr: true,
});
const Footer = dynamic(() => import("./Footer/Footer"),{
  ssr: true,
});
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
      </head>
      <body>
        <NavBar AllCategories={AllCategories} />
          <NavigationLinks AllCategoriesData={AllCategories} />
        <Container
          maxWidth="lg"
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          {children}
        </Container>
        <footer>
            <Footer stores={AllStores} />
        </footer>
      </body>
    </html>
  );
}

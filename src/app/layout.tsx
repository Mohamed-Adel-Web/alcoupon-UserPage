import "./styles/all.min.css";
import "./styles/globals.css";
import Container from "@mui/material/Container";
import Footer from "./Footer/Footer";
import NavBar from "./(Header)/NavBar";
import NavigationLinks from "./(Header)/NavigationLinks";
import { useGetCategories } from "./FetchData/useGetCategory";
import { Suspense } from "react";
import { useFeaturedStoresData } from "./FetchData/useFeatureStore";


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
        <Suspense>
          <NavBar AllCategories={AllCategories} />
        </Suspense>
        <Suspense>
          <NavigationLinks AllCategoriesData={AllCategories} />
        </Suspense>

        <Container
          maxWidth="lg"
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          {children}
        </Container>
        <footer>
          <Suspense>
            <Footer stores={AllStores} />
          </Suspense>
        </footer>
      </body>
    </html>
  );
}

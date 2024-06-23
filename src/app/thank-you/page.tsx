"use client";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default function ThankYou() {
  const searchParam = useSearchParams();
  const lang = searchParam.get("lang");

  useEffect(() => {
    const timer = setTimeout(() => {
      window.history.back();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const message =
    lang === "ar"
      ? {
          title: "شكراً لك!",
          body: "شكراً لاشتراكك في موقعنا. ستتلقى أفضل عروضنا قريباً.",
        }
      : {
          title: "Thank You!",
          body: "Thank you for subscribing to our site. You will receive our best offers soon.",
        };

  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: "url('https://source.unsplash.com/random/1920x1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: 4,
        animation: `${fadeIn} 2s ease-in-out`,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
          fontWeight: "bold",
          marginBottom: 2,
          color: "black",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {message.title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          marginBottom: 2,
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          color: "black",
        }}
      >
        {message.body}
      </Typography>
    </Box>
  );
}

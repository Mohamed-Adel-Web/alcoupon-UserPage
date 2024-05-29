"use client";
import React, { useMemo, useState, useCallback } from "react";
import { Grid, Pagination, PaginationItem } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

const toArabicNumber = (num: number) => {
  return num
    .toString()
    .split("")
    .map((digit) => arabicNumbers[Number(digit)])
    .join("");
};

const PaginationComponent: React.FC<{
  page: number;
  lastPage: number | undefined;
}> = React.memo(({ page, lastPage }) => {
  const [pageNumber, setPage] = useState(page);
  const [lang, setLang] = useState<string | null>();
  const router = useRouter();
  const searchParams = useSearchParams();

  useMemo(() => {
    setPage(page);
  }, [page]);

  useMemo(() => {
    setLang(searchParams.get("lang"));
  }, [searchParams]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      router.push(`?page=${page}&lang=${lang}`);
    },
    [router, lang]
  );

  const isArabic = lang === "ar";

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Pagination
          page={pageNumber}
          count={lastPage}
          color="primary"
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: isArabic ? FaChevronRight : FaChevronLeft,
                next: isArabic ? FaChevronLeft : FaChevronRight,
              }}
              {...item}
              page={
                item.page !== null && item.page !== undefined && isArabic
                  ? toArabicNumber(item.page)
                  : item.page
              }
            />
          )}
          sx={{ padding: "0.8rem", borderRadius: "10px" }}
        />
      </Grid>
    </Grid>
  );
});

export default PaginationComponent;

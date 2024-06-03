"use client";
import { Paper, List, ListItem, Typography, Box } from "@mui/material";
import useSearchStoresData from "../FetchData/useSearchStoresData";
import { StoreType } from "../types";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import React from "react";
import { debounce } from "lodash";
import Link from "next/link";

const SearchList = ({
  searchInput,
  lang,
  onClose,
}: {
  searchInput: string;
  lang: string | null;
  onClose: () => void;
}) => {
  const [storesData, setStoresData] = useState<StoreType[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const fetchData = useCallback(
    debounce(async (input: string) => {
      if (input.length > 1) {
        const data = await useSearchStoresData(input);
        setStoresData(data);
      } else {
        setStoresData([]);
      }
    }, 300),
    []
  );

  useEffect(() => {
    fetchData(searchInput);
  }, [searchInput, fetchData]);

  if (storesData?.length === 0) return null;

  return (
    <Paper
      ref={containerRef}
      sx={{
        maxHeight: "350px",
        overflow: "auto",
        zIndex: 3,
      }}
    >
      <List>
        {storesData?.map((store: StoreType) => (
          <MemoizedListItem key={store.id} store={store} lang={lang} onClose={onClose} />
        ))}
      </List>
    </Paper>
  );
};

const ListItemComponent = ({
  store,
  lang,
  onClose,
}: {
  store: StoreType;
  lang: string | null;
  onClose: () => void;
}) => (
  <Link
    href={`/discount-codes/${store.id}?lang=${lang}`}
    prefetch={true}
    style={{ textDecoration: "none", color: "Black" }}
    onClick={onClose}
  >
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #e0e0e0", // Border between list items
        "&:hover": {
          backgroundColor: "#f5f5f5", // Hover color
        },
        padding: 2,
      }}
    >
      <Box sx={{ flexShrink: 0, mx: 2 }}>
        <Image
          src={store?.image}
          alt={lang === "en" ? store?.title_en : store?.title_ar}
          width={70}
          height={70}
        />
      </Box>
      <Box>
        <Typography variant="h6">
          {lang === "en" ? store?.name_en : store?.name_ar}
        </Typography>
        <Typography variant="body2">
          {lang === "en" ? store?.discount_en : store?.discount_ar}
        </Typography>
      </Box>
    </ListItem>
  </Link>
);

const MemoizedListItem = React.memo(ListItemComponent);

export default SearchList;

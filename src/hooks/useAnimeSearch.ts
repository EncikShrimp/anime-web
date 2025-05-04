// src/hooks/useAnimeSearch.ts
import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "./useDebounce";
import { searchAnime, fetchPopularAnime, Anime } from "@/api/jikan";

export function useAnimeSearch(initialPageSize = 10) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 250);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [results, setResults] = useState<Anime[]>([]);
  const [lastPage, setLastPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset search back to popular
  const reset = useCallback(() => {
    setQuery("");
    setPage(1);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      setResults([]);

      try {
        const res = debouncedQuery
          ? await searchAnime(debouncedQuery, page, pageSize)
          : await fetchPopularAnime(page, pageSize);

        if (cancelled) return;

        setResults(res.data);
        setLastPage(res.pagination.last_visible_page);
        setTotalItems(res.pagination.items.total);
      } catch (err: any) {
        if (!cancelled) setError(err.message || "Failed to fetch");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, page, pageSize]);

  return {
    query,
    setQuery,
    page,
    setPage,
    pageSize,
    setPageSize,
    results,
    lastPage,
    totalItems,
    loading,
    error,
    reset,
  };
}

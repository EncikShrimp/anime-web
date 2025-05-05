import { useCallback, useEffect, useState } from "react";
import { useAnimeSearch } from "@/hooks/useAnimeSearch";
import { useFeaturedAnime } from "@/hooks/useFeaturedAnime";
import {
  Pagination,
  LoadingSpinner,
  FeaturedAnimeHero,
  SearchHeader,
  SearchResults,
  ErrorDisplay,
} from "@/components";

const SearchPage: React.FC = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const {
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
  } = useAnimeSearch(20);
  const featuredAnime = useFeaturedAnime(results, query);

  const onReset = useCallback(() => {
    reset();
  }, [reset]);

  const handlePageChange = useCallback(
    (newPage: number) => {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [setPage]
  );

  const handlePageSizeChange = useCallback(
    (size: number) => {
      setPageSize(size);
      setPage(1);
    },
    [setPageSize, setPage]
  );

  const handleSetQuery = useCallback(
    (newQuery: string) => {
      setIsInitialLoad(false);
      setQuery(newQuery);
    },
    [setQuery]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!loading && isInitialLoad && results.length > 0) {
      setIsInitialLoad(false);
    }
  }, [loading, results, isInitialLoad]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      {featuredAnime && !loading && (
        <FeaturedAnimeHero featuredAnime={featuredAnime} />
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search controls */}
        {(!loading || !isInitialLoad) && (
          <SearchHeader
            query={query}
            setQuery={handleSetQuery}
            onReset={onReset}
          />
        )}

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center min-h-[50vh]">
            <LoadingSpinner />
          </div>
        )}

        {/* Error state */}
        {error && <ErrorDisplay message={error} />}

        {/* Content state */}
        {!loading && !error && (
          <>
            <SearchResults
              results={results}
              query={query}
              totalItems={totalItems}
            />

            {lastPage > 1 && (
              <div className="mt-12">
                <Pagination
                  current={page}
                  total={lastPage}
                  pageSize={pageSize}
                  totalItems={totalItems}
                  onPageChange={handlePageChange}
                  onPageSizeChange={handlePageSizeChange}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

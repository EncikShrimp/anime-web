import { useCallback } from "react";
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      {featuredAnime && !loading && (
        <FeaturedAnimeHero featuredAnime={featuredAnime} />
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search controls */}
        <SearchHeader query={query} setQuery={setQuery} onReset={onReset} />

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

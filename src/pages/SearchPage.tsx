"use client";
import { useCallback, useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import AnimeCard from "@/components/AnimeCard/AnimeCard";
import Pagination from "@/components/Pagination/Pagination";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useAnimeSearch } from "@/hooks/useAnimeSearch";
import { Button } from "@/components/ui/button";

export default function SearchPage() {
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

  const onReset = useCallback(() => {
    reset();
  }, [reset]);

  const [featuredAnime, setFeaturedAnime] = useState<any>(null);

  useEffect(() => {
    if (results.length > 0 && !query) {
      const randomIndex = Math.floor(
        Math.random() * Math.min(5, results.length)
      );
      setFeaturedAnime(results[randomIndex]);
    }
  }, [results, query]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section when no search query and we have a featured anime */}
      {!query && featuredAnime && !loading && (
        <div className="relative w-full h-[70vh] mb-8">
          <div className="absolute inset-0">
            <img
              src={
                featuredAnime.images.jpg.large_image_url ||
                featuredAnime.images.jpg.image_url
              }
              alt={featuredAnime.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              {featuredAnime.title}
            </h1>
            {featuredAnime.score && (
              <div className="flex items-center mb-4">
                <span className="bg-primary text-white px-2 py-0.5 text-sm font-medium rounded">
                  {featuredAnime.score} ★
                </span>
                {featuredAnime.year && (
                  <span className="ml-2 text-white/80 text-sm">
                    {featuredAnime.year}
                  </span>
                )}
              </div>
            )}
            {featuredAnime.synopsis && (
              <p className="text-white/90 max-w-xl line-clamp-3 mb-4">
                {featuredAnime.synopsis}
              </p>
            )}
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-2"
              onClick={() =>
                (window.location.href = `/anime/${featuredAnime.mal_id}`)
              }
            >
              View Details
            </Button>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <SearchBar value={query} onChange={setQuery} />
          <Button
            variant="outline"
            disabled={!query}
            onClick={onReset}
            className="cursor-pointer"
          >
            Reset
          </Button>
        </div>

        {loading && <LoadingSpinner />}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-white/90">
              {query ? `Search results for "${query}"` : "Popular Anime"}
            </h2>

            {results.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-center text-xl text-white/70">
                  {query
                    ? `No anime found for "${query}"`
                    : "No popular anime available."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {results.map((anime) => (
                  <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
              </div>
            )}

            {lastPage > 1 && (
              <div className="mt-12">
                <Pagination
                  current={page}
                  total={lastPage}
                  pageSize={pageSize}
                  totalItems={totalItems}
                  onPageChange={setPage}
                  onPageSizeChange={(sz) => {
                    setPageSize(sz);
                    setPage(1);
                  }}
                />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

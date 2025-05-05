import { useState, useEffect } from "react";
import { Anime } from "@/types/api";

export function useFeaturedAnime(
  results: Anime[],
  query: string
): Anime | null {
  const [featuredAnime, setFeaturedAnime] = useState<Anime | null>(null);

  useEffect(() => {
    if (results.length > 0 && !query) {
      const randomIndex = Math.floor(
        Math.random() * Math.min(5, results.length)
      );
      setFeaturedAnime(results[randomIndex]);
    } else if (query) {
      setFeaturedAnime(null);
    }
  }, [results, query]);

  return featuredAnime;
}

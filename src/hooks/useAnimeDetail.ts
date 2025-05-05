import { useState, useEffect } from "react";
import { getAnimeById } from "@/api/jikan";
import { AnimeDetail } from "@/types/types";

export function useAnimeDetail(id: string | undefined) {
  const [anime, setAnime] = useState<AnimeDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    let cancelled = false;

    async function fetchDetail() {
      setLoading(true);
      setError(null);

      try {
        const data = await getAnimeById(id);
        if (!cancelled) setAnime(data);
      } catch (err: any) {
        if (!cancelled) {
          setError(err.message === "NOT_FOUND" ? "NOT_FOUND" : err.message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchDetail();
    return () => {
      cancelled = true;
    };
  }, [id]);

  return { anime, loading, error };
}

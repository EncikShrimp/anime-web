import { useEffect } from "react";
import { AnimeDetail } from "@/types/api";
import { updateMetadata } from "@/lib/meta";

export function useAnimeMetadata(
  anime: AnimeDetail | null,
  defaultTitle = "AniWatch"
) {
  useEffect(() => {
    if (anime) {
      updateMetadata({
        title: `${anime.title} | ${defaultTitle}`,
        description:
          anime.synopsis?.substring(0, 160) ||
          `Details about ${anime.title} anime`,
        image:
          anime.images?.webp?.large_image_url || anime.images?.jpg?.image_url,
        canonical: `${window.location.origin}/anime/${anime.mal_id}`,
      });

      document.title = `${anime.title} | ${defaultTitle}`;
    }

    return () => {
      updateMetadata({});
      document.title = defaultTitle;
    };
  }, [anime, defaultTitle]);
}

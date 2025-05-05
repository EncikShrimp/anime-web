import { useParams } from "react-router";
import { useEffect } from "react";
import { useAnimeDetail } from "@/hooks/useAnimeDetail";
import { useAnimeMetadata } from "@/hooks/useAnimeMetadata";
import {
  LoadingSpinner,
  AnimeNotFound,
  HeroSection,
  AnimePoster,
  AnimeInfo,
  ErrorDisplay,
} from "@/components";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { anime, loading, error } = useAnimeDetail(id);
  useAnimeMetadata(anime);

  if (error === "NOT_FOUND") {
    return <AnimeNotFound />;
  }

  useEffect(() => {
    window.scrollTo(0, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Loading state */}
      {loading && (
        <div className="flex justify-center items-center min-h-[50vh]">
          <LoadingSpinner />
        </div>
      )}

      {/* Error state */}
      {error && error !== "NOT_FOUND" && (
        <ErrorDisplay
          message={`Failed to load anime details: ${error}`}
          showHomeButton={true}
        />
      )}

      {/* Content state */}
      {anime && !loading && !error && (
        <>
          <HeroSection anime={anime} />
          <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-10">
            <div className="flex flex-col md:flex-row">
              <AnimePoster anime={anime} />
              <AnimeInfo anime={anime} />
            </div>
          </div>
          <div className="h-16"></div>
        </>
      )}
    </div>
  );
};

export default DetailPage;

import { useParams, useNavigate, Link } from "react-router";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useAnimeDetail } from "@/hooks/useAnimeDetail";
import Lottie from "lottie-react";
import notFoundAnimation from "@/assets/lottie/404.json";

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { anime, loading, error } = useAnimeDetail(id);

  if (loading) return <LoadingSpinner />;

  if (error === "NOT_FOUND")
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <div className="w-l h-l">
          <Lottie animationData={notFoundAnimation} loop />
        </div>
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6"
        >
          <Link to="/">Back</Link>
        </Button>{" "}
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center py-16 space-y-4">
        <p className="text-red-500">Error: {error}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );

  if (!anime && !loading && !error) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <div className="absolute inset-0">
          <img
            src={anime!.images.webp.large_image_url}
            alt={anime!.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="outline"
            className="bg-background/30 backdrop-blur-sm border-white/20"
            onClick={() => navigate(-1)}
          >
            ← Back
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
            {anime!.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            {anime!.score && (
              <div className="flex items-center">
                <span className="bg-primary text-white px-2 py-1 rounded font-medium">
                  {anime!.score} ★
                </span>
              </div>
            )}

            {anime!.year && (
              <span className="text-white/80">{anime!.year}</span>
            )}

            {anime!.rating && (
              <span className="text-white/80 border border-white/20 px-2 py-1 rounded text-sm">
                {anime!.rating}
              </span>
            )}

            {anime!.status && (
              <span className="text-white/80">{anime!.status}</span>
            )}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Synopsis */}
            <section>
              <h3 className="text-2xl font-medium mb-4 text-white">Synopsis</h3>
              <p className="text-white/80 leading-relaxed">{anime!.synopsis}</p>
            </section>

            {/* Additional Info */}
            {anime!.background && (
              <section>
                <h3 className="text-2xl font-medium mb-4 text-white">
                  Background
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {anime!.background}
                </p>
              </section>
            )}

            {/* Genres */}
            {anime!.genres && anime!.genres.length > 0 && (
              <section>
                <h3 className="text-2xl font-medium mb-4 text-white">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {anime!.genres.map((genre) => (
                    <span
                      key={genre.mal_id}
                      className="px-3 py-1 bg-muted text-white/80 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-8">
            {/* Poster and Stats */}
            <div className="poster-hover overflow-hidden rounded-lg">
              <img
                src={anime!.images.jpg.image_url}
                alt={anime!.title}
                className="w-full rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Score", value: anime!.score || "N/A" },
                  {
                    label: "Rank",
                    value: anime!.rank ? `#${anime!.rank}` : "N/A",
                  },
                  {
                    label: "Popularity",
                    value: anime!.popularity ? `#${anime!.popularity}` : "N/A",
                  },
                  {
                    label: "Members",
                    value: anime!.members
                      ? anime!.members.toLocaleString()
                      : "N/A",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-card p-4 rounded-lg border border-border/30"
                  >
                    <p className="text-sm text-white/60">{stat.label}</p>
                    <p className="text-xl font-semibold text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional metadata */}
              <div className="space-y-3">
                {anime!.type && (
                  <div className="flex justify-between">
                    <span className="text-white/60">Type</span>
                    <span className="text-white">{anime!.type}</span>
                  </div>
                )}
                {anime!.episodes && (
                  <div className="flex justify-between">
                    <span className="text-white/60">Episodes</span>
                    <span className="text-white">{anime!.episodes}</span>
                  </div>
                )}
                {anime!.duration && (
                  <div className="flex justify-between">
                    <span className="text-white/60">Duration</span>
                    <span className="text-white">{anime!.duration}</span>
                  </div>
                )}
                {anime!.season && (
                  <div className="flex justify-between">
                    <span className="text-white/60">Season</span>
                    <span className="text-white capitalize">{`${
                      anime!.season
                    } ${anime!.year || ""}`}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

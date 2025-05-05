import { Anime } from "@/types/types";
import { Button } from "@/components/ui/button";

interface Props {
  featuredAnime: Anime;
}

const FeaturedAnimeHero: React.FC<Props> = ({ featuredAnime }) => {
  if (!featuredAnime) return null;

  return (
    <div className="relative w-full h-[70vh] mb-8">
      <div className="absolute inset-0">
        <img
          src={
            featuredAnime.images.jpg.large_image_url ||
            featuredAnime.images.jpg.image_url
          }
          alt={featuredAnime.title}
          className="w-full h-full object-center object-cover "
          loading="eager"
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
  );
};

export default FeaturedAnimeHero;

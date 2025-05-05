import React, { useCallback, useState } from "react";
import { AnimeDetail } from "@/types/api";
import { Button } from "@/components/ui/button";
import StatItem from "./StatItem";
import { useNavigate } from "react-router";

interface Props {
  anime: AnimeDetail;
}

const AnimePoster: React.FC<Props> = ({ anime }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div className="md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        <img
          src={
            anime.images?.webp?.large_image_url || anime.images?.jpg?.image_url
          }
          alt={anime.title}
          className="w-full h-auto object-cover"
          loading="eager"
          onLoad={handleImageLoad}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
        )}
      </div>

      <div className="mt-6 space-y-4">
        {anime.score && (
          <div className="flex items-center">
            <div className="bg-primary text-white px-3 py-1 rounded-md font-bold text-xl">
              {anime.score} <span className="text-sm">/ 10</span>
            </div>
            <span className="ml-2 text-sm text-gray-300">Score</span>
          </div>
        )}

        <div className="flex flex-wrap">
          <StatItem label="Rank" value={`#${anime.rank || "N/A"}`} icon="🏆" />
          <StatItem
            label="Popularity"
            value={`#${anime.popularity || "N/A"}`}
            icon="📈"
          />
        </div>

        <div className="flex flex-wrap">
          <StatItem label="Type" value={anime.type || "N/A"} icon="📺" />
          <StatItem
            label="Episodes"
            value={anime.episodes || "N/A"}
            icon="🎬"
          />
        </div>

        <div className="flex flex-wrap">
          <StatItem
            label="Season"
            value={
              anime.season?.charAt(0).toUpperCase() + anime.season?.slice(1) ||
              "N/A"
            }
            icon="🗓️"
          />
          <StatItem label="Year" value={anime.year || "N/A"} icon="📅" />
        </div>

        <div>
          <StatItem label="Status" value={anime.status || "N/A"} icon="📊" />
        </div>

        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="w-full mt-4"
        >
          Back to Search
        </Button>
      </div>
    </div>
  );
};

export default AnimePoster;

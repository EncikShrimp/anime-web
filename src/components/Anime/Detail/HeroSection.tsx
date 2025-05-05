import React, { useCallback, useState } from "react";
import { AnimeDetail } from "@/types/api";

interface Props {
  anime: AnimeDetail;
}

const HeroSection: React.FC<Props> = ({ anime }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const imageUrl =
    anime.images?.webp?.large_image_url || anime.images?.jpg?.image_url;

  return (
    <div className="relative w-full h-[40vh] md:h-[50vh]">
      <div className="absolute inset-0">
        <div
          className={`w-full h-full bg-cover bg-center transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <img
        src={imageUrl}
        alt={anime.title}
        className="hidden"
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default HeroSection;

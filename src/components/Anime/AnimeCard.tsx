import { Anime } from "@/types/types";
import { useNavigate } from "react-router";

interface Props {
  anime: Anime;
}

const AnimeCard: React.FC<Props> = ({ anime }) => {
  const navigate = useNavigate();

  return (
    <div
      className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:z-10 cursor-pointer relative overflow-hidden rounded-md"
      onClick={() => navigate(`/anime/${anime.mal_id}`)}
    >
      <div className="aspect-[2/3] relative group">
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <div>
            <h3 className="text-sm font-medium line-clamp-2 text-white">
              {anime.title}
            </h3>
            {anime.score && (
              <div className="flex items-center mt-1">
                <span className="text-primary font-medium text-xs">
                  {anime.score}
                </span>
                <span className="ml-1 text-xs">★</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;

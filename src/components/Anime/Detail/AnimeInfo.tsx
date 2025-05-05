import { AnimeDetail } from "@/types/types";
import GenreTag from "@/components/Anime/GenreTag";

interface Props {
  anime: AnimeDetail;
}

const AnimeInfo: React.FC<Props> = ({ anime }) => {
  return (
    <div className="md:w-2/3 lg:w-3/4 md:pl-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        {anime.title}
      </h1>

      {anime.genres && anime.genres.length > 0 && (
        <div className="mb-6 mt-4">
          <p className="text-sm text-gray-400 mb-2">Genres:</p>
          <div className="flex flex-wrap">
            {anime.genres.map((genre) => (
              <GenreTag key={genre.mal_id} genre={genre} />
            ))}
          </div>
        </div>
      )}

      {anime.synopsis && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Synopsis</h2>
          <p className="leading-relaxed text-gray-300">{anime.synopsis}</p>
        </div>
      )}

      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Information</h3>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-gray-400">Duration:</span>{" "}
                <span>{anime.duration || "Unknown"}</span>
              </p>
              <p className="text-sm">
                <span className="text-gray-400">Rating:</span>{" "}
                <span>{anime.rating || "Unknown"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {anime.background && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Background</h2>
          <p className="leading-relaxed text-gray-300">{anime.background}</p>
        </div>
      )}
    </div>
  );
};

export default AnimeInfo;

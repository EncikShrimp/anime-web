import { memo } from "react";
import { Anime } from "@/types/api";
import { AnimeCard } from "@/components/Anime";
import NoResultsFound from "./NoResultsFound";

interface Props {
  results: Anime[];
  query: string;
  totalItems: number;
}

const MemoizedAnimeCard = memo(AnimeCard);

const SearchResults: React.FC<Props> = ({ results, query, totalItems }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-white/90">
        {query ? `Search results for "${query}"` : "Popular Anime"}
        {totalItems > 0 && query && (
          <span className="text-sm font-normal text-white/50 ml-2">
            ({totalItems} results)
          </span>
        )}
      </h2>

      {results.length === 0 ? (
        <NoResultsFound query={query} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {results.map((anime) => (
            <MemoizedAnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResults;

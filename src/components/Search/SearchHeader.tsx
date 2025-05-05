import SearchBar from "./SearchBar";
import { Button } from "@/components/ui/button";

interface Props {
  query: string;
  setQuery: (query: string) => void;
  onReset: () => void;
}

const SearchHeader: React.FC<Props> = ({ query, setQuery, onReset }) => {
  return (
    <div className="flex items-center space-x-2 mb-8">
      <SearchBar value={query} onChange={setQuery} />
      <Button
        variant="outline"
        disabled={!query}
        onClick={onReset}
        className="cursor-pointer"
        aria-label="Reset search"
      >
        Reset
      </Button>
    </div>
  );
};

export default SearchHeader;

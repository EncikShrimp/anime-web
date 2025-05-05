interface Props {
  query: string;
}

const NoResultsFound: React.FC<Props> = ({ query }) => (
  <div className="flex flex-col items-center justify-center py-16">
    <div className="text-4xl mb-4">🔍</div>
    <p className="text-center text-xl text-white/70">
      {query ? `No anime found for "${query}"` : "No popular anime available."}
    </p>
    {query && (
      <p className="text-center text-sm text-white/50 mt-2 max-w-md">
        Try using different keywords or check your spelling
      </p>
    )}
  </div>
);

export default NoResultsFound;

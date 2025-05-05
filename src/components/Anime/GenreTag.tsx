interface Props {
  genre: { mal_id: number; name: string };
}

 const GenreTag: React.FC<Props> = ({ genre }) => (
  <span
    key={genre.mal_id}
    className="inline-block bg-primary/50 text-primary-foreground px-2 py-1 rounded-md text-xs font-medium mr-2 mb-2"
  >
    {genre.name}
  </span>
);

export default GenreTag;
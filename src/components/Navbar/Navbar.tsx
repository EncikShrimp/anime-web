import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30 shadow-sm">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary text-2xl font-bold tracking-tight">
            AniWatch
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

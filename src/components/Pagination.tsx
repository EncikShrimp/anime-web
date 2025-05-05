import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  current: number;
  total: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (p: number) => void;
  onPageSizeChange: (size: number) => void;
}

const Pagination: React.FC<Props> = ({
  current,
  total,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) => {
  const pages: (number | "…")[] = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
      pages.push(i);
    } else if (
      (i === current - 2 && i > 2) ||
      (i === current + 2 && i < total - 1)
    ) {
      pages.push("…");
    }
  }

  const startItem = (current - 1) * pageSize + 1;
  const endItem = Math.min(current * pageSize, totalItems);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 py-8">
      <div className="text-sm text-white/70">
        Showing {startItem}-{endItem} of {totalItems} results
      </div>

      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="sm"
          className="border-border/30 bg-card/50 hover:bg-card text-white"
          disabled={current === 1}
          onClick={() => onPageChange(current - 1)}
        >
          ‹
        </Button>

        {pages.map((p, idx) =>
          p === "…" ? (
            <span key={`dot${idx}`} className="px-2 text-white/70">
              …
            </span>
          ) : (
            <Button
              key={p}
              size="sm"
              variant={p === current ? "default" : "outline"}
              className={
                p === current
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "border-border/30 bg-card/50 hover:bg-card text-white"
              }
              onClick={() => onPageChange(p)}
            >
              {p}
            </Button>
          )
        )}

        <Button
          variant="outline"
          size="sm"
          className="border-border/30 bg-card/50 hover:bg-card text-white"
          disabled={current === total}
          onClick={() => onPageChange(current + 1)}
        >
          ›
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-white/70">Show</span>
        <Select
          value={pageSize.toString()}
          onValueChange={(val) => onPageSizeChange(parseInt(val))}
        >
          <SelectTrigger className="w-20 h-8 border-border/30 bg-card/50 text-white">
            <SelectValue placeholder={pageSize} />
          </SelectTrigger>
          <SelectContent className="bg-card border-border/30">
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm text-white/70">per page</span>
      </div>
    </div>
  );
};

export default Pagination;

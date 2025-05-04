"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (newVal: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="relative flex-1 max-w-xl">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 text-muted-foreground" />
      <Input
        placeholder="Search anime..."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        className="w-full pl-10 bg-muted/50 border-muted focus:border-primary focus:ring-primary/30"
      />
    </div>
  );
};

export default SearchBar;

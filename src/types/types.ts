export interface Anime {
  mal_id: number;
  title: string;
  score: number;
  year: number;
  synopsis: string;
  popularity: number;
  type: string;
  episodes: number;
  status: string;
  season: string;
  rank: number;
  genres: { mal_id: number; name: string }[];
  duration: string;
  rating: string;
  members: number;
  background: string;
  images: {
    jpg: { image_url: string; large_image_url: string };
    webp: { large_image_url: string };
  };
}

export interface Pagination {
  last_visible_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface SearchResult {
  data: Anime[];
  pagination: Pagination;
}

export interface AnimeDetail {
  mal_id: number;
  title: string;
  images: {
    jpg: { image_url: string };
    webp: { large_image_url: string };
  };
  synopsis: string;
  score: number;
  rank: number;
  popularity: number;
  members: number;
  year: number;
  rating: string;
  status: string;
  background: string;
  genres: { mal_id: number; name: string }[];
  type: string;
  episodes: number;
  duration: string;
  season: string;
}

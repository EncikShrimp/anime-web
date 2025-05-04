export interface Anime {
  mal_id: number;
  title: string;
  score: number;
  images: {
    jpg: { image_url: string };
  };
}

export interface Pagination {
  last_visible_page: number;
  items: {
    count: number; // items on this page
    total: number; // total matching items
    per_page: number; // your limit
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
  // you can add more fields here if you like, e.g.:
  // episodes: number;
  // duration: string;
  // genres: { mal_id: number; name: string }[];
  // trailer: { youtube_id: string; url: string };
}

export async function getAnimeById(
  id: string | undefined
): Promise<AnimeDetail> {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  if (res.status === 404) {
    throw new Error("NOT_FOUND");
  }
  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  // Jikan wraps the detail in a `data` property
  const json = (await res.json()) as { data: AnimeDetail };
  return json.data;
}

export async function searchAnime(
  query: string,
  page: number,
  limit: number
): Promise<SearchResult> {
  const res = await fetch(
    `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(
      query
    )}&page=${page}&limit=${limit}`
  );
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return res.json();
}

export async function fetchPopularAnime(
  page: number,
  limit: number
): Promise<SearchResult> {
  const res = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=${page}&limit=${limit}`
  );
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return res.json();
}

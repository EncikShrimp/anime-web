import { AnimeDetail, SearchResult } from "@/types/types";

const API_DELAY = 300;
let lastRequestTime = 0;

async function makeJikanRequest(url: string, retries = 3): Promise<any> {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;

  if (timeSinceLastRequest < API_DELAY) {
    await new Promise((resolve) =>
      setTimeout(resolve, API_DELAY - timeSinceLastRequest)
    );
  }

  lastRequestTime = Date.now();

  try {
    const response = await fetch(url);

    if (response.status === 429 && retries > 0) {
      console.log(`Rate limited, retrying in ${API_DELAY * 2}ms...`);
      await new Promise((resolve) => setTimeout(resolve, API_DELAY * 2));
      return makeJikanRequest(url, retries - 1);
    }

    if (response.status === 404) {
      throw new Error("NOT_FOUND");
    }

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (
      retries > 0 &&
      error instanceof Error &&
      !error.message.includes("NOT_FOUND")
    ) {
      console.log(`Request failed, retrying (${retries} attempts left)...`);
      await new Promise((resolve) => setTimeout(resolve, API_DELAY));
      return makeJikanRequest(url, retries - 1);
    }
    throw error;
  }
}

export async function getAnimeById(
  id: string | undefined
): Promise<AnimeDetail> {
  if (!id) throw new Error("ID is required");

  const json = await makeJikanRequest(`https://api.jikan.moe/v4/anime/${id}`);
  return json.data;
}

export async function searchAnime(
  query: string,
  page: number,
  limit: number
): Promise<SearchResult> {
  return makeJikanRequest(
    `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(
      query
    )}&page=${page}&limit=${limit}`
  );
}

export async function fetchPopularAnime(
  page: number,
  limit: number
): Promise<SearchResult> {
  return makeJikanRequest(
    `https://api.jikan.moe/v4/top/anime?page=${page}&limit=${limit}`
  );
}

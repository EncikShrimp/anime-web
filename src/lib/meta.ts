interface Props {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

export function updateMetadata({
  title = "AniWatch",
  description = "Discover and explore anime with our comprehensive database powered by Jikan API",
  image = "/og-image.png",
  canonical,
}: Props): void {
  document.title = title;
  updateMetaTag("description", description);
  updateMetaTag("og:title", title);
  updateMetaTag("og:description", description);
  updateMetaTag("og:image", image);
  updateMetaTag("twitter:card", "summary_large_image");
  updateMetaTag("twitter:title", title);
  updateMetaTag("twitter:description", description);
  updateMetaTag("twitter:image", image);

  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }
}

function updateMetaTag(name: string, content: string): void {
  let meta = document.querySelector(
    `meta[name="${name}"], meta[property="${name}"]`
  );
  if (!meta) {
    meta = document.createElement("meta");
    if (name.startsWith("og:") || name.startsWith("twitter:")) {
      meta.setAttribute("property", name);
    } else {
      meta.setAttribute("name", name);
    }
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

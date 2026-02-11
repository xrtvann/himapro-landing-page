import { useEffect } from "react";

/**
 * SEO Component for managing meta tags
 * Usage: <SEO title="..." description="..." keywords="..." />
 */
export default function SEO({
  title = "Himapro - Organisasi Mahasiswa Probolinggo",
  description = "Wadah kolaborasi mahasiswa Probolinggo di seluruh Indonesia untuk membangun daerah melalui inovasi dan aksi nyata",
  keywords = "himapro, mahasiswa probolinggo, organisasi mahasiswa, probolinggo",
  image = "https://himapro-landing-page.vercel.app/og-image.jpg",
  url = typeof window !== "undefined"
    ? window.location.href
    : "https://himapro-landing-page.vercel.app",
  type = "website",
  author = "Himapro",
  robots = "index, follow",
}) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Function to update or create meta tag
    const updateMetaTag = (attribute, key, content) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("name", "author", author);
    updateMetaTag("name", "robots", robots);

    // Open Graph
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", image);
    updateMetaTag("property", "og:url", url);
    updateMetaTag("property", "og:type", type);

    // Twitter
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", image);
    updateMetaTag("name", "twitter:url", url);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, keywords, image, url, type, author, robots]);

  return null; // This component doesn't render anything
}

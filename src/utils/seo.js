/**
 * SEO Utilities for Himapro Website
 * Functions to help with SEO optimization
 */

/**
 * Generate meta tags dynamically
 * @param {Object} config - SEO configuration
 * @returns {void}
 */
export const updateMetaTags = (config) => {
  const {
    title = "Himapro - Organisasi Mahasiswa Probolinggo",
    description = "Wadah kolaborasi mahasiswa Probolinggo di seluruh Indonesia",
    keywords = "himapro, mahasiswa probolinggo, organisasi mahasiswa",
    image = "https://himapro-landing-page.vercel.app/og-image.jpg",
    url = window.location.href,
  } = config;

  // Update title
  document.title = title;

  // Update or create meta tags
  updateMetaTag("name", "description", description);
  updateMetaTag("name", "keywords", keywords);
  updateMetaTag("property", "og:title", title);
  updateMetaTag("property", "og:description", description);
  updateMetaTag("property", "og:image", image);
  updateMetaTag("property", "og:url", url);
  updateMetaTag("name", "twitter:title", title);
  updateMetaTag("name", "twitter:description", description);
  updateMetaTag("name", "twitter:image", image);
  updateMetaTag("name", "twitter:url", url);
};

/**
 * Helper function to update meta tag
 */
const updateMetaTag = (attribute, key, content) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

/**
 * Generate structured data for different page types
 * @param {string} type - Type of structured data
 * @param {Object} data - Data object
 * @returns {void}
 */
export const addStructuredData = (type, data) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";

  let structuredData = {};

  switch (type) {
    case "article":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        ...data,
      };
      break;
    case "event":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Event",
        ...data,
      };
      break;
    case "breadcrumb":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        ...data,
      };
      break;
    default:
      structuredData = data;
  }

  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

/**
 * Update canonical URL
 * @param {string} url - Canonical URL
 */
export const updateCanonicalUrl = (url) => {
  let linkElement = document.querySelector('link[rel="canonical"]');

  if (!linkElement) {
    linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "canonical");
    document.head.appendChild(linkElement);
  }

  linkElement.setAttribute("href", url);
};

/**
 * Preload critical resources
 * @param {Array} resources - Array of resource objects {href, as, type}
 */
export const preloadResources = (resources) => {
  resources.forEach((resource) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
    document.head.appendChild(link);
  });
};

/**
 * Track page views for analytics
 * @param {string} page - Page name
 */
export const trackPageView = (page) => {
  // Add Google Analytics or other analytics tracking here
  if (typeof gtag !== "undefined") {
    gtag("config", "GA_MEASUREMENT_ID", {
      page_path: page,
    });
  }
};

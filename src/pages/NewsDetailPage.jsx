import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getNewsById } from "../utils/newsData";
import { Reveal } from "../components/common/Reveal";
import SEO from "../components/common/SEO";

export default function NewsDetailPage() {
  const { id } = useParams();
  const news = getNewsById(id);

  // If news not found, redirect to home
  if (!news) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO
        title={`${news.title} - Himapro`}
        description={news.snippet}
        keywords={`himapro, berita, ${news.category}, ${news.title}`}
      />

      <main className="min-h-screen bg-background-light dark:bg-background-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6 bg-gradient-primary">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="mb-6">
                <Link
                  to="/#berita"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                  <span>Kembali ke Berita</span>
                </Link>
              </div>

              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  {news.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {news.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">
                    calendar_today
                  </span>
                  <span>{news.date}</span>
                </div>
                <span className="text-white/50">•</span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">
                    person
                  </span>
                  <span>{news.author}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured Image */}
        {news.image && (
          <section className="px-6 -mt-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={`/${news.image}`}
                    alt={news.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div
                  className="news-content text-gray-700 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />
              </article>
            </Reveal>

            {/* Share Section */}
            <Reveal>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">
                  Bagikan Artikel
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: news.title,
                          text: news.snippet,
                          url: window.location.href,
                        });
                      }
                    }}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">
                      share
                    </span>
                    <span>Bagikan</span>
                  </button>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    <span>Facebook</span>
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(news.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors inline-flex items-center gap-2"
                  >
                    <span>Twitter</span>
                  </a>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(news.title + " - " + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Back to News */}
            <Reveal>
              <div className="mt-12 text-center">
                <Link
                  to="/#berita"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                  <span>Kembali ke Semua Berita</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

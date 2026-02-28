import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/common/Reveal";
import SEO from "../components/common/SEO";
import { newsData } from "../utils/newsData";

export default function BeritaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Get unique categories
  const categories = [
    "Semua",
    ...new Set(newsData.map((item) => item.category)),
  ];

  // Filter news by category
  const filteredNews =
    selectedCategory === "Semua"
      ? newsData
      : newsData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <SEO
        title="Berita - Himapro"
        description="Dapatkan informasi terbaru mengenai kegiatan, program kerja, dan pencapaian Himpunan Mahasiswa Probolinggo (Himapro)"
        keywords="berita himapro, informasi himapro, kegiatan mahasiswa probolinggo, news himapro"
      />

      <main className="min-h-screen">
        {/* Professional Hero Section */}
        <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28 px-6 overflow-hidden">
          {/* Subtle geometric pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
              }}
            ></div>
          </div>

          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <Reveal>
              <nav className="flex items-center space-x-2 text-sm mb-8 text-gray-400">
                <a href="/" className="hover:text-white transition-colors">
                  Beranda
                </a>
                <span>/</span>
                <span className="text-white">Berita & Informasi</span>
              </nav>
            </Reveal>

            <Reveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Main content */}
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                    <span className="text-primary text-sm font-semibold tracking-wide">
                      BERITA & INFORMASI HIMAPRO
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Berita <span className="text-primary">Terkini</span>
                  </h1>

                  <div className="h-1 w-24 bg-primary mb-6"></div>

                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    Ikuti perkembangan terbaru, kegiatan, dan pencapaian
                    Himpunan Mahasiswa Probolinggo di seluruh Indonesia.
                  </p>

                  {/* Key stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        {newsData.length}
                      </div>
                      <div className="text-sm text-gray-400">Total Berita</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        {categories.length - 1}
                      </div>
                      <div className="text-sm text-gray-400">Kategori</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        2026
                      </div>
                      <div className="text-sm text-gray-400">Tahun Aktif</div>
                    </div>
                  </div>
                </div>

                {/* Right side - Visual element */}
                <div className="flex justify-center md:block mt-8 md:mt-0">
                  <div className="relative">
                    {/* Decorative cards */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-56 h-56 md:w-64 md:h-64 bg-black/10 backdrop-blur-xl rounded-3xl border border-primary/20 transform rotate-6"></div>
                    </div>
                    <div className="relative z-10 w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-black/20 to-black/5 backdrop-blur-xl rounded-3xl border border-primary/30 p-6 md:p-8 flex items-center justify-center mx-auto">
                      <div className="text-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <svg
                            className="w-16 h-16 md:w-20 md:h-20 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                        </div>
                        <div className="text-white text-base md:text-lg font-semibold">
                          Update Terkini Himapro
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* News Section */}
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <Reveal>
              <div className="mb-12">
                <div className="text-center mb-8">
                  <p className="text-primary font-bold tracking-wider text-sm uppercase mb-3">
                    Filter Kategori
                  </p>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    Jelajahi Berita
                  </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-primary text-white shadow-lg shadow-primary/30"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 border border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* News Grid */}
            {filteredNews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((item, index) => (
                  <Reveal key={item.id}>
                    <div className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover:-translate-y-2">
                      {/* Image */}
                      <div className="h-56 overflow-hidden relative bg-gray-200 dark:bg-gray-700">
                        <img
                          src={
                            item.image
                              ? `/${item.image}`
                              : `https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop`
                          }
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src =
                              "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop";
                          }}
                        />
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Date */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <span className="material-symbols-outlined text-base">
                            calendar_today
                          </span>
                          <span>{item.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        {/* Snippet */}
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow leading-relaxed">
                          {item.snippet}
                        </p>

                        {/* Read More Link */}
                        <Link
                          to={`/news/${item.id}`}
                          className="text-primary font-semibold hover:underline inline-flex items-center gap-1 mt-auto group-hover:gap-2 transition-all"
                        >
                          Baca Selengkapnya
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <div className="text-center py-16">
                  <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                    <span className="material-symbols-outlined text-6xl text-gray-400 mb-4 block">
                      article
                    </span>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">
                      Tidak Ada Berita
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Belum ada berita untuk kategori ini.
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>



        {/* CTA Section */}

      </main>
    </>
  );
}

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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-white py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <Reveal>
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Berita & Informasi
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Ikuti perkembangan dan aktivitas terkini Himapro
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Reveal>
                <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {newsData.length}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">
                    Total Berita
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {categories.length - 1}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">
                    Kategori
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-2">
                    2026
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">
                    Tahun Aktif
                  </p>
                </div>
              </Reveal>
            </div>
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

        {/* Newsletter Section */}
        <section className="py-24 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                  <span className="material-symbols-outlined text-6xl mb-6 block">
                    mail
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Dapatkan Update Terbaru
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Ikuti media sosial kami untuk mendapatkan informasi dan
                    berita terkini tentang kegiatan Himapro
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="#"
                      className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined">link</span>
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined">link</span>
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined">link</span>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ada Informasi yang Ingin Dibagikan?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Jika kamu memiliki informasi atau berita menarik tentang
                kegiatan mahasiswa Probolinggo, jangan ragu untuk berbagi dengan
                kami!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#kontak"
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
                >
                  Hubungi Kami
                </a>
                <a
                  href="/tentang-kami"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 inline-block"
                >
                  Tentang Himapro
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

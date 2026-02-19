import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../common/Reveal";
import { newsData } from "../../utils/newsData";

export default function News() {
  return (
    <section
      className="py-24 px-6 bg-background-light dark:bg-background-dark"
      id="berita"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <div className="flex flex-col items-center">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-3">
                Berita Terbaru
              </h2>
              <h3 className="text-4xl font-bold mb-4 dark:text-white">
                Informasi Terkini
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Dapatkan informasi terbaru mengenai kegiatan, program kerja, dan
                pencapaian Himapro.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <Reveal key={item.id}>
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image || "https://placehold.net/default.png"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="material-symbols-outlined text-base">
                      calendar_today
                    </span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 dark:text-white text-gray-800 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                    {item.snippet}
                  </p>
                  <Link
                    to={`/news/${item.id}`}
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1 mt-auto"
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

        <div className="text-center mt-12">
          <Link
            to="/berita"
            className="btn-primary inline-flex items-center gap-2"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
}

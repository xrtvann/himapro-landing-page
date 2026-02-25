import React from "react";
import { Reveal } from "../common/Reveal";

export default function About() {
  return (
    <section
      className="py-24 px-6 bg-background-light dark:bg-background-dark overflow-hidden"
      id="tentang-kami"
      aria-labelledby="tentang-kami-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Reveal>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="Mahasiswa Himapro berdiskusi dan berkolaborasi dalam kegiatan organisasi"
                  className="rounded-2xl shadow-2xl mt-8 aspect-square object-cover"
                  src="images/sertijab2025.jpeg"
                  loading="lazy"
                />
                <img
                  alt="Proyek pengabdian masyarakat Himapro di Probolinggo"
                  className="rounded-2xl shadow-2xl aspect-square object-cover"
                  src="images/sertijab2026.webp"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-primary font-bold tracking-wider text-sm uppercase mb-3">
                Tentang Kami
              </p>
              <h2
                id="tentang-kami-heading"
                className="text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
              >
                Membangun Jembatan Inovasi untuk Masa Depan Probolinggo
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                <span className="font-bold text-gray-900 dark:text-white">
                  Himapro
                </span>{" "}
                adalah organisasi inklusif yang menjadi wadah pemersatu bagi
                seluruh mahasiswa asal Probolinggo. Kami percaya bahwa setiap
                mahasiswa memiliki potensi besar untuk menjadi agen perubahan
                bagi daerahnya melalui sinergi dan kolaborasi yang
                berkelanjutan.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      diversity_3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 dark:text-white">
                      Visi Inklusif
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Mewujudkan sinergi antar mahasiswa Probolinggo yang
                      progresif dan berdampak luas melalui wadah Himapro.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      volunteer_activism
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 dark:text-white">
                      Misi Berkelanjutan
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Menjalankan program pengabdian masyarakat yang terukur dan
                      berorientasi solusi di bawah naungan Himapro.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

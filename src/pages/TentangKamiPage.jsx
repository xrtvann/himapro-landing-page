import React from "react";
import { Reveal } from "../components/common/Reveal";
import SEO from "../components/common/SEO";
import About from "../components/sections/About";

export default function TentangKamiPage() {
  return (
    <>
      <SEO
        title="Tentang Kami - Himapro"
        description="Himapro adalah organisasi inklusif yang menjadi wadah pemersatu bagi seluruh mahasiswa asal Probolinggo untuk membangun jembatan inovasi bagi masa depan daerah."
        keywords="tentang himapro, organisasi mahasiswa probolinggo, visi misi himapro, sejarah himapro"
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
                  Tentang Kami
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Membangun Jembatan Inovasi untuk Masa Depan Probolinggo
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About Section - Reusing existing component */}
        <About />

        {/* Sejarah Section */}
        <section className="py-24 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <p className="text-primary font-bold tracking-wider text-sm uppercase mb-3">
                  Perjalanan Kami
                </p>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Sejarah Himapro
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                  Dari mimpi sederhana hingga menjadi wadah kolaborasi mahasiswa
                  Probolinggo di seluruh Indonesia
                </p>
              </div>
            </Reveal>

            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

              <div className="space-y-12">
                {/* Timeline Item 1 */}
                <Reveal>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="md:text-right">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                        <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-semibold mb-4">
                          Fase Awal
                        </span>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                          Lahirnya Visi Bersama
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Himapro lahir dari kebutuhan untuk menyatukan
                          mahasiswa Probolinggo yang tersebar di berbagai
                          perguruan tinggi di Indonesia. Berawal dari diskusi
                          kecil, visi untuk membangun wadah kolaborasi mulai
                          terbentuk.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                </Reveal>

                {/* Timeline Item 2 */}
                <Reveal>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="hidden md:block"></div>
                    <div>
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                        <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-semibold mb-4">
                          Pengembangan
                        </span>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                          Ekspansi dan Konsolidasi
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Himapro berkembang dengan menjalin jejaring antar
                          mahasiswa dari berbagai kampus. Program-program
                          konkret mulai diluncurkan untuk memberikan dampak
                          nyata bagi Probolinggo.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Timeline Item 3 */}
                <Reveal>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="md:text-right">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                        <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-semibold mb-4">
                          Masa Kini
                        </span>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                          Aksi Nyata untuk Probolinggo
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Kini, Himapro terus berkomitmen menjalankan
                          program-program inovatif yang berdampak, dari
                          pengabdian masyarakat hingga pengembangan SDM
                          mahasiswa Probolinggo.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Nilai-Nilai Section */}
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <p className="text-primary font-bold tracking-wider text-sm uppercase mb-3">
                  Prinsip Kami
                </p>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Nilai-Nilai Himapro
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                  Nilai-nilai yang menjadi fondasi dalam setiap langkah dan
                  kegiatan kami
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Nilai 1 */}
              <Reveal>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      groups
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Inklusivitas
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Terbuka untuk semua mahasiswa Probolinggo tanpa memandang
                    latar belakang kampus, jurusan, atau organisasi lain.
                  </p>
                </div>
              </Reveal>

              {/* Nilai 2 */}
              <Reveal>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      lightbulb
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Inovasi
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Mendorong kreativitas dan solusi inovatif untuk menghadapi
                    tantangan dan membangun Probolinggo yang lebih baik.
                  </p>
                </div>
              </Reveal>

              {/* Nilai 3 */}
              <Reveal>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      handshake
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Kolaborasi
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Membangun sinergi antar mahasiswa untuk menciptakan dampak
                    yang lebih besar melalui kerja sama yang solid.
                  </p>
                </div>
              </Reveal>

              {/* Nilai 4 */}
              <Reveal>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      favorite
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Pengabdian
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Berkomitmen untuk memberikan kontribusi nyata bagi
                    masyarakat Probolinggo melalui program-program yang terukur.
                  </p>
                </div>
              </Reveal>

              {/* Nilai 5 */}
              <Reveal>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      trending_up
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Progresivitas
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Terus bergerak maju dengan semangat perbaikan berkelanjutan
                    dan adaptasi terhadap perkembangan zaman.
                  </p>
                </div>
              </Reveal>

              {/* Nilai 6 */}
              <Reveal>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      verified
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Integritas
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Menjunjung tinggi kejujuran, transparansi, dan akuntabilitas
                    dalam setiap kegiatan organisasi.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Struktur Organisasi Section */}
        <section className="py-24 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <p className="text-primary font-bold tracking-wider text-sm uppercase mb-3">
                  Tim Kami
                </p>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Struktur Organisasi
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                  Himapro dikelola oleh tim yang berdedikasi untuk kemajuan
                  bersama
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Divisi 1 */}
              <Reveal>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 mb-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4 block">
                      account_circle
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Ketua Umum
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Memimpin dan mengkoordinasi seluruh kegiatan organisasi
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Divisi 2 */}
              <Reveal>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 mb-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4 block">
                      person_outline
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Wakil Ketua
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Mendukung ketua dalam koordinasi dan pengawasan program
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Divisi 3 */}
              <Reveal>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 mb-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4 block">
                      description
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Sekretaris
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Mengelola administrasi dan dokumentasi organisasi
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Divisi 4 */}
              <Reveal>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 mb-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4 block">
                      account_balance_wallet
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Bendahara
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Mengelola keuangan dan pelaporan finansial
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="mt-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Serta berbagai divisi dan koordinator program yang bekerja
                  sama untuk mewujudkan visi dan misi Himapro
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bergabunglah Bersama Kami
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Mari bersama-sama membangun Probolinggo yang lebih baik melalui
                kolaborasi dan inovasi
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#kontak"
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
                >
                  Hubungi Kami
                </a>
                <a
                  href="/#programs"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 inline-block"
                >
                  Lihat Program Kami
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

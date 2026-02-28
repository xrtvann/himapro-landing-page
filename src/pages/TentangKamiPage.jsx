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
                <span className="text-white">Tentang Kami</span>
              </nav>
            </Reveal>

            <Reveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Main content */}
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                    <span className="text-primary text-sm font-semibold tracking-wide">
                      HIMPUNAN MAHASISWA PROBOLINGGO
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Tentang <span className="text-primary">Himapro</span>
                  </h1>

                  <div className="h-1 w-24 bg-primary mb-6"></div>

                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    Organisasi mahasiswa yang menghubungkan putra-putri
                    Probolinggo untuk berkontribusi dalam membangun masa depan
                    daerah yang lebih baik.
                  </p>

                  {/* Key stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        2015
                      </div>
                      <div className="text-sm text-gray-400">Tahun Berdiri</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        23+
                      </div>
                      <div className="text-sm text-gray-400">Anggota Aktif</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        50+
                      </div>
                      <div className="text-sm text-gray-400">Program</div>
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
                        <img
                          src="/images/logo128px.ico"
                          alt="Logo Himapro"
                          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 object-contain"
                        />
                        <div className="text-white text-base md:text-lg font-semibold">
                          Bersatu Dalam Perbedaan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About Section - Reusing existing component */}
        <About />

        {/* Sejarah Section */}
        <section className="py-24 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-7xl flex flex-col items-center mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <p className="text-primary font-bold tracking-wider text-sm uppercase mb-3">
                  Tim Kami
                </p>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Struktur Organisasi
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                  Struktur kepemimpinan yang solid untuk menjalankan visi dan
                  misi Himapro
                </p>
              </div>
            </Reveal>

            {/* Organizational Chart - Pyramid Structure */}
            <div className="space-y-0 w-full flex flex-col items-center relative px-4">
              {/* Top Leadership - Narrowest (1 person) */}
              <Reveal>
                <div className="flex flex-col items-center relative w-full mb-4 md:mb-0">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 sm:p-6 border border-primary/30 w-full max-w-xs sm:w-64 text-center shadow-lg relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                        account_circle
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      Ketua Umum
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Memimpin dan mengkoordinasi seluruh kegiatan organisasi
                    </p>
                  </div>
                  {/* Vertical line from chairman */}
                  <div className="w-0.5 h-6 lg:h-8 bg-primary/30 mt-0"></div>
                </div>
              </Reveal>

              {/* Second Tier - Medium Width (3 people) */}
              <Reveal>
                <div className="relative w-full flex flex-col items-center mb-4 lg:mb-0">
                  {/* Connection lines for second tier - Desktop only pyramid structure */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 max-w-3xl h-8 hidden lg:block">
                    {/* Horizontal line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/30"></div>
                    {/* Three vertical lines down to positions */}
                    <div className="absolute top-0 left-0 w-0.5 h-8 bg-primary/30"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary/30"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-8 bg-primary/30"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl relative z-10 pt-0 lg:pt-8 px-4 sm:px-0">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-5 border border-primary/20 text-center shadow-md">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                          person_outline
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900 dark:text-white">
                        Wakil Ketua
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        Mendukung ketua dalam koordinasi
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-5 border border-primary/20 text-center shadow-md">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                          description
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900 dark:text-white">
                        Sekretaris
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        Mengelola administrasi organisasi
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-5 border border-primary/20 text-center shadow-md sm:col-span-2 md:col-span-1 max-w-xs sm:max-w-none mx-auto sm:mx-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                          account_balance_wallet
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900 dark:text-white">
                        Bendahara
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        Mengelola keuangan organisasi
                      </p>
                    </div>
                  </div>

                  {/* Vertical line down to divisions */}
                  <div className="w-0.5 h-6 lg:h-8 bg-primary/30 mt-4 lg:mt-0"></div>
                </div>
              </Reveal>

              {/* Divisions - Widest (4 divisions) */}
              <Reveal>
                <div className="relative w-full flex flex-col items-center">
                  {/* Connection lines for divisions - Desktop only pyramid structure */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[76%] max-w-5xl h-8 hidden lg:block">
                    {/* Horizontal line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/30"></div>
                    {/* Four vertical lines down to divisions */}
                    <div className="absolute top-0 left-[0%] w-0.5 h-8 bg-primary/30"></div>
                    <div className="absolute top-0 left-[33%] w-0.5 h-8 bg-primary/30"></div>
                    <div className="absolute top-0 left-[66.5%] w-0.5 h-8 bg-primary/30"></div>
                    <div className="absolute top-0 left-[100%] w-0.5 h-8 bg-primary/30"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl relative z-10 pt-0 lg:pt-8 px-4 sm:px-0">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                          campaign
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold mb-1 text-gray-900 dark:text-white">
                        Divisi Keorganisasian
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        Pengelolaan internal organisasi
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                          groups
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold mb-1 text-gray-900 dark:text-white">
                        Divisi PSDM
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        Pengembangan sumber daya manusia dan pelatihan anggota
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                          lightbulb
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold mb-1 text-gray-900 dark:text-white">
                        Divisi Sosmas
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        Perencanaan dan pelaksanaan kegiatan sosial dan
                        masyarakat
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                          camera_alt
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold mb-1 text-gray-900 dark:text-white">
                        Divisi Kominfo
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        Pengelolaan komunikasi dan informasi organisasi
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
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



      </main>
    </>
  );
}

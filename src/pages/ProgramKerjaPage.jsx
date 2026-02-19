import React from "react";
import { Reveal } from "../components/common/Reveal";
import SEO from "../components/common/SEO";
import Programs from "../components/sections/Programs";

export default function ProgramKerjaPage() {
  return (
    <>
      <SEO
        title="Program Kerja - Himapro"
        description="Program kerja Himapro mencakup Goes to Campus, Social Services, dan Annual Gathering untuk membangun Probolinggo melalui pendidikan, sosial, dan solidaritas."
        keywords="program kerja himapro, goes to campus, social services, annual gathering, program mahasiswa probolinggo"
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
                  Program Kerja
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Aksi Nyata untuk Membangun Probolinggo yang Lebih Baik
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <p className="text-primary font-bold tracking-wider text-sm uppercase mb-3">
                  Inovasi & Kolaborasi
                </p>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Program Unggulan Himapro
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                  Himapro berkomitmen menjalankan program-program strategis yang
                  memberikan dampak nyata bagi pendidikan, sosial, dan
                  pengembangan potensi Probolinggo melalui kolaborasi dan
                  inovasi.
                </p>
              </div>
            </Reveal>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Reveal>
                <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-2">3+</div>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">
                    Program Unggulan
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-2">
                    100+
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">
                    Peserta Terlibat
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">
                    Sekolah Terjangkau
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Programs Section - Reusing existing component */}
        <Programs />

        {/* Detailed Programs Section */}
        <section className="py-24 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto space-y-24">
            {/* Goes to Campus Detail */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
                    <img
                      src="/images/goes-to-campus.jpg"
                      alt="Program Goes to Campus Himapro di sekolah"
                      className="rounded-2xl shadow-2xl w-full aspect-video object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop";
                      }}
                    />
                  </div>
                </div>
              </Reveal>

              <div className="order-1 lg:order-2">
                <Reveal>
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <span className="material-symbols-outlined text-primary inline-block mr-2 align-middle">
                      school
                    </span>
                    <span className="text-primary font-bold text-sm">
                      PROGRAM PENDIDIKAN
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    Goes to Campus
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                    Program sosialisasi pendidikan tinggi yang bertujuan
                    memberikan motivasi dan informasi kepada siswa-siswi SMA/SMK
                    di Probolinggo tentang pentingnya melanjutkan pendidikan ke
                    jenjang perguruan tinggi.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
                          check_circle
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white">
                          Sosialisasi Kampus
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Memberikan informasi tentang berbagai pilihan
                          perguruan tinggi dan jurusan
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
                          check_circle
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white">
                          Motivasi & Tips
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Berbagi pengalaman dan tips sukses dalam menempuh
                          pendidikan tinggi
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
                          check_circle
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white">
                          Konsultasi Gratis
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Sesi tanya jawab dan konsultasi tentang pemilihan
                          jurusan dan kampus
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Social Services Detail */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Reveal>
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <span className="material-symbols-outlined text-primary inline-block mr-2 align-middle">
                      handshake
                    </span>
                    <span className="text-primary font-bold text-sm">
                      PROGRAM SOSIAL
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    Social Services
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                    Bentuk kepedulian nyata Himapro kepada masyarakat
                    Probolinggo melalui berbagai kegiatan bakti sosial, bantuan
                    kemanusiaan, dan pemberdayaan masyarakat.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
                          volunteer_activism
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white">
                          Bakti Sosial
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Kegiatan rutin bantuan untuk masyarakat kurang mampu
                          di Probolinggo
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
                          health_and_safety
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white">
                          Bantuan Darurat
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Respons cepat untuk bencana alam dan situasi darurat
                          lainnya
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
                          eco
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white">
                          Pemberdayaan Masyarakat
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Program pelatihan dan pemberdayaan untuk meningkatkan
                          ekonomi lokal
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal>
                <div>
                  <div className="relative">
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
                    <img
                      src="/images/social-services.jpg"
                      alt="Program Social Services Himapro"
                      className="rounded-2xl shadow-2xl w-full aspect-video object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop";
                      }}
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Annual Gathering Detail */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
                    <img
                      src="/images/annual-gathering.jpg"
                      alt="Annual Gathering Himapro"
                      className="rounded-2xl shadow-2xl w-full aspect-video object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop";
                      }}
                    />
                  </div>
                </div>
              </Reveal>

              <div className="order-1 lg:order-2">
                <Reveal>
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <span className="material-symbols-outlined text-primary inline-block mr-2 align-middle">
                      groups
                    </span>
                    <span className="text-primary font-bold text-sm">
                      PROGRAM NETWORKING
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    Annual Gathering
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                    Pertemuan tahunan yang mempertemukan seluruh anggota Himapro
                    dari berbagai kampus untuk memperkuat solidaritas, berbagi
                    pengalaman, dan membangun jejaring profesional.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
                          event
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white">
                          Silaturahmi Akbar
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Momen berkumpul dan mempererat tali persaudaraan antar
                          anggota
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
                          language
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white">
                          Networking Session
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Membangun jejaring profesional untuk pengembangan
                          karir dan kolaborasi
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
                          mic
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white">
                          Sharing Session
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Berbagi pengalaman, insight, dan best practices antar
                          anggota
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline/Roadmap Section */}
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <p className="text-primary font-bold tracking-wider text-sm uppercase mb-3">
                  Jadwal Kegiatan
                </p>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Timeline Program 2026
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                  Rangkaian kegiatan yang telah dan akan dilaksanakan sepanjang
                  tahun
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Q1 */}
              <Reveal>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                      <span className="text-primary font-bold">TRIWULAN 1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Jan - Mar
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                        check_circle
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Perencanaan program tahunan
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                        check_circle
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Rekrutmen anggota baru
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Q2 */}
              <Reveal>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                      <span className="text-primary font-bold">TRIWULAN 2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Apr - Jun
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                        schedule
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Goes to Campus fase 1
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                        schedule
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Social Services #1
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Q3 */}
              <Reveal>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                      <span className="text-primary font-bold">TRIWULAN 3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Jul - Sep
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                        schedule
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Annual Gathering 2026
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                        schedule
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Goes to Campus fase 2
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Mari Berkontribusi Bersama
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Ingin terlibat dalam program-program kami atau memiliki ide
                kolaborasi? Hubungi kami sekarang!
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

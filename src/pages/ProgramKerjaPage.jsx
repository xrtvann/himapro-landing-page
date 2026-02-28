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
                <span className="text-white">Program Kerja</span>
              </nav>
            </Reveal>

            <Reveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Main content */}
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                    <span className="text-primary text-sm font-semibold tracking-wide">
                      PROGRAM UNGGULAN HIMAPRO
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Program <span className="text-primary">Kerja</span>
                  </h1>

                  <div className="h-1 w-24 bg-primary mb-6"></div>

                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    Mewujudkan program strategis yang memberikan dampak nyata
                    melalui pendidikan, pemberdayaan sosial, dan penguatan
                    solidaritas mahasiswa Probolinggo.
                  </p>

                  {/* Key stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        8+
                      </div>
                      <div className="text-sm text-gray-400">
                        Program Kerja
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        23+
                      </div>
                      <div className="text-sm text-gray-400">Peserta Aktif</div>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
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
                          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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




      </main>
    </>
  );
}

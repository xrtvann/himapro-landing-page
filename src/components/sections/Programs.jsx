import React from 'react'
import { Reveal } from '../common/Reveal'

export default function Programs() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-surface-dark/30" id="program-kerja">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <div className="flex flex-col items-center">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-3">Program Kami</h2>
              <h3 className="text-4xl font-bold mb-4 dark:text-white">Aksi Nyata &amp; Kolaborasi</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Inisiatif strategis Himapro untuk mendukung pendidikan, sosial, dan pengembangan potensi daerah.
              </p>
            </div>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Reveal>
            <div className="glass-card rounded-2xl p-8 flex flex-col group h-full">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl">school</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 dark:text-white">Goes to Campus</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                Sosialisasi pendidikan tinggi ke berbagai sekolah menengah di Probolinggo untuk memotivasi siswa melanjutkan studi.
              </p>
              <a className="inline-flex items-center text-primary font-bold group-hover:gap-2 transition-all" href="#">
                Selengkapnya <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </a>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="glass-card rounded-2xl p-8 flex flex-col group border-primary/40 h-full">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-3xl">handshake</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 dark:text-white">Social Services</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                Bentuk kepedulian nyata melalui aksi kemanusiaan, bakti sosial, dan pemberdayaan masyarakat.
              </p>
              <a className="inline-flex items-center text-primary font-bold group-hover:gap-2 transition-all" href="#">
                Selengkapnya <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </a>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="glass-card rounded-2xl p-8 flex flex-col group h-full">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl">groups</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 dark:text-white">Annual Gathering</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                Momen silaturahmi akbar bagi seluruh anggota Himapro untuk memperkuat solidaritas dan jejaring profesional.
              </p>
              <a className="inline-flex items-center text-primary font-bold group-hover:gap-2 transition-all" href="#">
                Selengkapnya <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}


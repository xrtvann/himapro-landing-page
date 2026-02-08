import React from 'react'

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
          Siap Berkontribusi Bersama Kami?
        </h2>
        <p className="text-red-100 text-lg mb-12 max-w-2xl mx-auto">
          Jadilah bagian dari perubahan besar bersama Himapro. Temukan teman baru, kembangkan potensi, dan mari bangun Probolinggo lebih baik lagi.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl">
            Daftar Anggota Sekarang
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl font-bold text-lg transition-all">
            Hubungi Pengurus
          </button>
        </div>
      </div>
    </section>
  )
}

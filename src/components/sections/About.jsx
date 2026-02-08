import React from 'react'

export default function About() {
  return (
    <section className="py-24 px-6 bg-background-light dark:bg-background-dark" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                alt="Students Synergy" 
                className="rounded-2xl shadow-2xl mt-8" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-jQoJjGoc8yrH3UBhcO3loB_F-pq7gLAdYGLhrKxf34061nfVZMAS63tOXeklFdjoAfR6pyObcAj2oXUJM2EdkBln5uuM3IMtqLcfD5Gx7M9y44wen2TbbescEwh7pA6fpSP3vdVjfRyGGgVwO3r5eZwcHgmnlmtwdSwAwaEVNe4Ca3JskbNYIRYVu69JVYhGunPe05Zo81cz1oEvgFMY66BUdSliXdkB6cSLbOZH7vHb5MtVNh8VfT61cZFLb7HAVnOQJFp6aucM"
              />
              <img 
                alt="Community Project" 
                className="rounded-2xl shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRs-S83hGsjcPgB0h8m11bVM8_cBbZ3lomZbUbUBsCFqRY3yV5bNcrW-lFWODGJraSVTXBtC4UyGDVCPxl3RpknjofE_R94JI-FP-zeHIzBPDlsUs5AMs-5Ttxl-oUUOS05d6X4ebdG-d3RX1JUR9_arlqDBZxWxrWPxjNw4wXbLRksN8RhBFRWKcXoFOvyqVMVglKWR2EvmnZxqRc4RN1V_ejxNY_XH5cf8b1s2RmhFD7BRzXYcz079-l2D-ta9K2ScIstd_MBfJ8"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-3">Tentang Kami</h2>
            <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Membangun Jembatan Inovasi untuk Masa Depan Probolinggo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              <span className="font-bold text-gray-900 dark:text-white">Himapro</span> adalah organisasi inklusif yang menjadi wadah pemersatu bagi seluruh mahasiswa asal Probolinggo. Kami percaya bahwa setiap mahasiswa memiliki potensi besar untuk menjadi agen perubahan bagi daerahnya melalui sinergi dan kolaborasi yang berkelanjutan.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">diversity_3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 dark:text-white">Visi Inklusif</h4>
                  <p className="text-gray-600 dark:text-gray-400">Mewujudkan sinergi antar mahasiswa Probolinggo yang progresif dan berdampak luas melalui wadah Himapro.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">volunteer_activism</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 dark:text-white">Misi Berkelanjutan</h4>
                  <p className="text-gray-600 dark:text-gray-400">Menjalankan program pengabdian masyarakat yang terukur dan berorientasi solusi di bawah naungan Himapro.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

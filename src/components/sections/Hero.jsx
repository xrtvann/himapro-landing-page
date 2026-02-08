import React from 'react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background-dark z-10"></div>
        <img 
          alt="Mount Bromo" 
          className="w-full h-full object-cover scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGdjo4N6UgqKSN9pKu-LZNNOMAqo1hWDGp6aR0SfuwBqiG1mv-CM5AAzcow_HaHZF-efrOqBziChWMy1gxqOt8Z38VfCQ_VFhSw-X3nncZIg_7VHb5DUI8qvzH05PEEvGSREctQvwNOU6ahQ7zMu7J9-51yBQRIoZs5is0wCUfl6WBp2AbHYBgKm7nBRIIPLUUQSy7vMY-Sj0Js896grZ-MwCLPf1XZEKNmE8Xg6hgoY8e1WMV1B7DyvJKSJUEu3QE4OHRfkbw83sm"
        />
      </div>
      
      <div className="relative z-20 max-w-5xl px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/30">
          Organisasi Mahasiswa Daerah
        </span>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
          Sinergi Mahasiswa, <br/>
          <span className="text-primary text-glow">Kontribusi Nyata</span> <br/>
          untuk Probolinggo
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Wadah kolaborasi pemuda Probolinggo yang tergabung dalam <span className="text-white font-medium">Himapro</span>, tersebar di seluruh penjuru negeri untuk membangun tanah kelahiran melalui inovasi dan aksi nyata.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
            Mulai Berkontribusi
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <span className="material-symbols-outlined text-white opacity-50 text-3xl">expand_more</span>
      </div>
    </section>
  )
}

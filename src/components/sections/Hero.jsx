import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background-dark z-10"></div>
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5 }}
          alt="Pemandangan indah Gunung Bromo Probolinggo, menggambarkan keindahan alam daerah asal Himapro"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGdjo4N6UgqKSN9pKu-LZNNOMAqo1hWDGp6aR0SfuwBqiG1mv-CM5AAzcow_HaHZF-efrOqBziChWMy1gxqOt8Z38VfCQ_VFhSw-X3nncZIg_7VHb5DUI8qvzH05PEEvGSREctQvwNOU6ahQ7zMu7J9-51yBQRIoZs5is0wCUfl6WBp2AbHYBgKm7nBRIIPLUUQSy7vMY-Sj0Js896grZ-MwCLPf1XZEKNmE8Xg6hgoY8e1WMV1B7DyvJKSJUEu3QE4OHRfkbw83sm"
          loading="eager"
        />
      </div>

      <div className="relative z-20 max-w-5xl px-6 text-center mx-auto pt-[4vh] pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6 border border-primary/30">
            Organisasi Mahasiswa Daerah
          </span>
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
        >
          Sinergi Mahasiswa <br />
          <span className="text-primary text-glow">Kontribusi Nyata</span>{" "}
          <br />
          untuk Probolinggo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Wadah kolaborasi pemuda Probolinggo yang tergabung dalam{" "}
          <span className="text-white font-medium">Himapro</span>, tersebar di
          seluruh penjuru negeri untuk membangun tanah kelahiran melalui inovasi
          dan aksi nyata.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
            Mulai Berkontribusi
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
            Pelajari Lebih Lanjut
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-12 sm:mt-16"
        >
          <div className="animate-bounce">
            <span className="material-symbols-outlined text-white opacity-50 text-4xl">
              expand_more
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

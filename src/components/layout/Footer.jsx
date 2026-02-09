import React from 'react'
import { Reveal } from '../common/Reveal'

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal width="100%">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-1.5 rounded-md">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Himapro</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
                Himpunan Mahasiswa Probolinggo (Himapro) berkomitmen untuk menyatukan visi dan langkah mahasiswa demi kemajuan daerah tercinta.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-white text-xl">camera</span>
                </a>
                <a className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-white text-xl">share</span>
                </a>
                <a className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-white text-xl">mail</span>
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Tautan Cepat</h5>
              <ul className="space-y-4">
                <li><a className="text-gray-400 hover:text-primary transition-colors" href="#">Home</a></li>
                <li><a className="text-gray-400 hover:text-primary transition-colors" href="#">Tentang Kami</a></li>
                <li><a className="text-gray-400 hover:text-primary transition-colors" href="#">Program Kerja</a></li>
                <li><a className="text-gray-400 hover:text-primary transition-colors" href="#">Berita Terkini</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Kontak</h5>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
                  <span>Sekretariat Himapro, <br/>Jl. Suroyo No. 12, Probolinggo</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span className="material-symbols-outlined text-primary text-sm">phone</span>
                  <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span className="material-symbols-outlined text-primary text-sm">email</span>
                  <span>halo@himapro.org</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Himapro - Himpunan Mahasiswa Probolinggo. Dipersembahkan dengan semangat gotong royong.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}


import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../common/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      className="bg-background-dark border-t border-white/5 pt-16 pb-8 px-6"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal width="100%">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                {/* Footer Logo */}
                <div className="relative h-12 w-auto">
                  <img
                    src="/images/logo128px.ico"
                    alt="Himapro Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-white">Himapro</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
                Himpunan Mahasiswa Probolinggo (Himapro) berkomitmen untuk
                menyatukan visi dan langkah mahasiswa demi kemajuan daerah
                tercinta.
              </p>
              <div
                className="flex gap-4"
                role="list"
                aria-label="Social media links"
              >
                <a
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                  href="#"
                  aria-label="Instagram Himapro"
                >
                  <span
                    className="material-symbols-outlined text-white text-xl"
                    aria-hidden="true"
                  >
                    camera
                  </span>
                </a>
                <a
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                  href="#"
                  aria-label="Facebook Himapro"
                >
                  <span
                    className="material-symbols-outlined text-white text-xl"
                    aria-hidden="true"
                  >
                    share
                  </span>
                </a>
                <a
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                  href="mailto:polijehimapro@gmail.com"
                  aria-label="Email Himapro"
                >
                  <span
                    className="material-symbols-outlined text-white text-xl"
                    aria-hid
                    aria-labelledby="news-heading"
                    den="true"
                  >
                    mail
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h5
                id="news-heading"
                className="text-white font-bold mb-6 uppercase text-xs tracking-widest"
              >
                Tautan Cepat
              </h5>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary transition-colors"
                    to="/"
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors"
                    href="#tentang-kami"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors"
                    href="#program-kerja"
                  >
                    Program Kerja
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors"
                    href="#berita"
                  >
                    Berita
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
                Kontak
              </h5>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <a href="" className="flex items-center gap-3 text-gray-400">
                    <span className="material-symbols-outlined text-primary text-md">
                      email
                    </span>
                    <span>polijehimapro@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <a
                    className="flex items-center gap-3 text-gray-400"
                    href="https://www.instagram.com/himapro_polije/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-primary text-xl"
                    />
                    <span>@himapro_polije</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Himapro - Himpunan Mahasiswa Probolinggo. Regenerasi Tanpa
              Batas.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

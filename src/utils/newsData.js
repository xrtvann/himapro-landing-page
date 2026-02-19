export const newsData = [
  {
    id: 1,
    title: "Himapro Goes to School 2026",
    date: "15 Januari 2026",
    snippet:
      "Kegiatan sosialisasi perguruan tinggi ke SMA/SMK se-derajat di Kabupaten Probolinggo berjalan dengan lancar dan antusias tinggi.",
    image: null,
    content: `
      <p>Kegiatan sosialisasi perguruan tinggi ke SMA/SMK se-derajat di Kabupaten Probolinggo berjalan dengan lancar dan antusias tinggi dari para siswa.</p>
      
      <p>Program "Himapro Goes to School 2026" merupakan salah satu kegiatan rutin yang dilaksanakan setiap tahun oleh Himpunan Mahasiswa Program Studi. Kegiatan ini bertujuan untuk memberikan informasi tentang perguruan tinggi dan program studi yang tersedia kepada siswa-siswa SMA/SMK.</p>
      
      <h3>Rangkaian Kegiatan</h3>
      <p>Kegiatan ini meliputi beberapa agenda penting:</p>
      <ul>
        <li>Presentasi tentang program studi dan peluang karir</li>
        <li>Sesi tanya jawab dengan mahasiswa dan alumni</li>
        <li>Workshop dan demo praktik</li>
        <li>Pembagian informasi beasiswa dan fasilitas kampus</li>
      </ul>
      
      <h3>Antusiasme Peserta</h3>
      <p>Para siswa menunjukkan antusiasme yang tinggi dengan mengajukan berbagai pertanyaan terkait kehidupan kampus, program studi, dan prospek karir di masa depan. Kegiatan ini mendapat sambutan positif dari pihak sekolah dan diharapkan dapat membantu siswa dalam menentukan pilihan pendidikan tinggi mereka.</p>
      
      <p>Tim Himapro berharap kegiatan ini dapat terus berlanjut dan menjangkau lebih banyak sekolah di masa mendatang.</p>
    `,
    author: "Tim Himapro",
    category: "Kegiatan",
  },
  {
    id: 2,
    title: "Serah Terima Jabatan 2026",
    date: "15 Februari 2026",
    snippet:
      "Kegiatan serah terima jabatan pengurus Himapro 2026 berlangsung dengan sukses, menandai tonggak baru dalam perjalanan organisasi.",
    image: "images/sertijab2026.webp",
    content: `
      <p>Kegiatan serah terima jabatan pengurus Himpunan Mahasiswa Program Studi (Himapro) periode 2026 telah berlangsung dengan sukses pada tanggal 15 Februari 2026. Acara ini menandai pergantian estafet kepemimpinan dan awal dari babak baru dalam perjalanan organisasi.</p>
      
      <h3>Susunan Pengurus Baru</h3>
      <p>Pengurus baru periode 2026 terpilih melalui proses seleksi yang transparan dan demokratis. Mereka siap membawa Himapro ke arah yang lebih baik dengan berbagai program kerja inovatif yang telah dirancang.</p>
      
      <h3>Visi dan Misi</h3>
      <p>Pengurus periode 2026 mengusung visi untuk meningkatkan kualitas organisasi melalui:</p>
      <ul>
        <li>Peningkatan kapasitas anggota melalui pelatihan dan workshop</li>
        <li>Penguatan jaringan dan kemitraan dengan berbagai pihak</li>
        <li>Peningkatan kualitas kegiatan kemahasiswaan</li>
        <li>Digitalisasi sistem organisasi untuk efisiensi kerja</li>
      </ul>
      
      <h3>Harapan dan Target</h3>
      <p>Ketua Himapro periode 2026 menyampaikan komitmen untuk menjalankan amanat dengan sebaik-baiknya dan mengajak seluruh anggota untuk bersama-sama membangun organisasi yang lebih solid dan berprestasi.</p>
      
      <p>Acara serah terima jabatan dihadiri oleh perwakilan fakultas, dosen pembimbing, dan seluruh anggota Himapro. Kegiatan ditutup dengan foto bersama dan doa untuk kesuksesan pengurus baru.</p>
    `,
    author: "Tim Redaksi Himapro",
    category: "Organisasi",
  },
];

export const getNewsById = (id) => {
  return newsData.find((news) => news.id === parseInt(id));
};

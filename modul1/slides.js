/* ==========================================================================
   INTERACTIVE PRESENTATION ENGINE & DATASET (slides_modul1.js)
   Modul 1 Workshop: Etika AI, Open Data, & Penelusuran Semantik
   ========================================================================== */

// 1. SLIDE DATASET
const slideData = [
  {
    id: 1,
    title: "Etika AI & Penelusuran Semantik Cerdas",
    subtitle: "Modul 1: Akses E-Resources, Open Data, & AI Semantic Search",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1>Etika AI & Penelusuran<br>Semantik Cerdas</h1>
        <p class="subtitle">E-Resources UGM · Open Data Publik · Consensus AI · Semantic Scholar</p>
        <div class="cover-meta" style="margin-bottom: 20px;">
          <strong>Juvita Umar Hadinata</strong><br>
          Digital Library Staff | Academic Library FISIPOL UGM
        </div>
        <div style="font-size: 0.85rem; color: var(--accent-sky); font-weight: 500;">
          <i class="fa-solid fa-globe"></i> <a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a>
        </div>
      </div>
    `,
    discussionNote: "Gunakan slide ini sebagai penyambutan. Tanyakan kepada peserta, seberapa sering mereka frustrasi saat tidak bisa mengunduh jurnal secara gratis?",
    speakerNote: "Selamat datang di Modul 1. Hari ini kita akan merombak cara Anda mencari referensi. Kita mulai dari mengeksploitasi fasilitas yang sudah dibayarkan kampus, hingga menggunakan kecerdasan buatan untuk mempercepat pencarian.",
    referenceNote: "Panduan Etika Akademik Pemanfaatan AI Generatif UGM (2025)."
  },
  {
    id: 2,
    title: "Jangan Bayar Jurnal Pakai Uang Sendiri!",
    subtitle: "Bagian 1: Harta Karun Universitas | lib.ugm.ac.id",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-main);">
            UGM menghabiskan anggaran miliaran rupiah setiap tahunnya untuk melanggan pangkalan data premium internasional demi Anda.
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.95rem; margin-top: 10px;">
            <li><strong>Summon 2.0:</strong> Mesin pencari "Google" versi UGM. Mencari ke seluruh database jurnal langganan secara serentak.</li>
            <li><strong>OPAC (Katalog Cetak):</strong> Jangan lupakan buku fisik! Temukan lokasinya di rak perpustakaan.</li>
            <li><strong>Remote Access (EZProxy):</strong> Akses jurnal berbayar dari kos atau rumah menggunakan email <code>@mail.ugm.ac.id</code>.</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: rgba(59,130,246,0.1); border: 1px solid var(--accent-blue); border-radius: 8px; padding: 20px;">
            <h4 style="color: var(--accent-sky); margin-bottom: 10px;"><i class="fa-solid fa-star"></i> Menu "Layanan" Kritis</h4>
            <ul style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; padding-left: 20px;">
              <li style="margin-bottom: 8px;"><strong>Silang Layan:</strong> Pinjam buku dari fakultas lain tanpa harus ke sana.</li>
              <li style="margin-bottom: 8px;"><strong>Research Consultation:</strong> Konsultasi 1-on-1 dengan pustakawan pusat.</li>
              <li style="margin-bottom: 8px;"><strong>Panduan:</strong> Unduh PDF Manual Gaya Selingkung (APA/Harvard).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Ada yang masih menggunakan Sci-Hub atau bajakan? Mengapa mengambil risiko ilegal jika UGM sudah membelikannya secara resmi untuk Anda?",
    speakerNote: "Tekankan bahwa menggunakan EZProxy UGM bukan sekadar legalitas, tetapi juga terekam sebagai statistik penggunaan yang menentukan apakah langganan database tersebut akan dilanjutkan tahun depan atau diputus.",
    referenceNote: "Portal E-Resources Perpustakaan UGM."
  },
  {
    id: 3,
    title: "Cheat Sheet: Database Esensial FISIPOL",
    subtitle: "Fokuskan Waktu Anda Pada Database yang Tepat",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1rem; line-height: 1.5;">Daftar A-Z E-Resources UGM sangat panjang. Berikut adalah database langganan "Wajib Buka" bagi rumpun Ilmu Sosial & Ilmu Politik:</p>
        
        <table class="premium-table">
          <thead>
            <tr>
              <th>Nama Database</th>
              <th>Kekuatan Utama untuk FISIPOL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="color: var(--accent-cyan); font-weight: bold;">JSTOR & SAGE Journals</td>
              <td>Teori Sosiologi, Politik klasik, dan Humaniora. Kaya akan teks utuh.</td>
            </tr>
            <tr>
              <td style="color: var(--accent-cyan); font-weight: bold;">ProQuest (Social Science)</td>
              <td>Gudang Tesis dan Disertasi internasional. Cocok untuk mencari <em>State of the Art</em>.</td>
            </tr>
            <tr>
              <td style="color: var(--accent-cyan); font-weight: bold;">EBSCOhost (SocINDEX)</td>
              <td>Pusat jurnal ilmu sosial terapan terlengkap.</td>
            </tr>
            <tr>
              <td style="color: var(--accent-rose); font-weight: bold;">Scopus</td>
              <td><em>Bukan untuk mengunduh Full-text.</em> Gunakan ini murni untuk menambang tren riset dan analisis jejaring bibliometrik.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    discussionNote: "Di antara keempat database ini, mana yang namanya baru pertama kali Anda dengar hari ini?",
    speakerNote: "Berikan tips agar mahasiswa S1 memprioritaskan JSTOR, sedangkan S2/S3 memprioritaskan ProQuest Dissertations untuk memastikan topik riset mereka belum pernah diteliti sebelumnya.",
    referenceNote: "Analisis Penggunaan Database FISIPOL 2025."
  },
  {
    id: 4,
    title: "Navigasi Rumah Sendiri",
    subtitle: "digilib.fisipol.ugm.ac.id",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <h3 style="color: var(--accent-purple); font-size: 1.2rem; margin-bottom: 15px;">Koleksi Spesifik Fakultas</h3>
          <ul class="slide-list list-bullet" style="font-size: 0.9rem;">
            <li><strong>ETD FISIPOL:</strong> Intip skripsi/tesis kakak tingkat (standar kelulusan).</li>
            <li><strong>Koleksi Tandon:</strong> Buku wajib mata kuliah dosen Anda.</li>
            <li><strong>Arsip Koran Lama:</strong> Bukti pergerakan sosial historis masa lalu.</li>
          </ul>
          
          <h3 style="color: var(--accent-sky); font-size: 1.2rem; margin-top: 20px; margin-bottom: 15px;">Layanan Mandiri</h3>
          <ul class="slide-list list-bullet" style="font-size: 0.9rem;">
            <li>Formulir Pengecekan <strong>Turnitin</strong> Fakultas.</li>
            <li>Surat <strong>Bebas Pustaka</strong> FISIPOL.</li>
            <li><em>Booking</em> Ruang Diskusi / Mini Studio.</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--accent-emerald); padding: 15px; border-radius: 4px; font-size: 0.9rem;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;"><i class="fa-solid fa-chart-network"></i> Dasbor Bibliometrik Publikasi</h4>
            <p style="color: var(--text-muted); margin-bottom: 10px;">Fitur canggih untuk memetakan kepakaran dosen FISIPOL secara <em>real-time</em> berdasarkan rekam jejak jurnal mereka.</p>
            <p style="font-weight: 500;"><em>Gunakan fitur ini untuk mencari Dosen Pembimbing Skripsi/Tesis yang tepat sesuai topik Anda!</em></p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Berapa banyak dari Anda yang masih kesulitan mencari dosen pembimbing? Coba gunakan menu Dasbor Publikasi di web kita.",
    speakerNote: "Di sinilah Anda mempromosikan secara halus inovasi teknologi P005 (Dasbor Bibliometrik) yang telah kita bangun bersama. Ini adalah pameran inovasi fakultas.",
    referenceNote: "Sistem Informasi Manajemen Digilib FISIPOL (P005)."
  },
  {
    id: 5,
    title: "Tambang Data Publik & Pemerintah",
    subtitle: "Bagian 2: Open Data Regulasi & Demografi (Non-Jurnal)",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1rem; line-height: 1.5;">Anak Ilmu Sosial tidak bisa hidup hanya dari jurnal teoretis. Bukti empiris dari negara mutlak diperlukan. Berikut lokasi penambangannya:</p>
        
        <div class="stat-card-row" style="flex-wrap: wrap;">
          <div class="stat-card" style="min-width: 250px;">
            <div class="stat-val" style="font-size: 1.2rem; color: var(--accent-amber);">JDIHN</div>
            <div class="stat-lbl">Jaringan Dokumentasi Hukum</div>
            <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 5px;">UU, Perpres, Perda (Cek status "Dicabut/Berlaku")</div>
          </div>
          <div class="stat-card" style="min-width: 250px;">
            <div class="stat-val" style="font-size: 1.2rem; color: var(--accent-amber);">BPS</div>
            <div class="stat-lbl">Badan Pusat Statistik</div>
            <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 5px;">Data time-series, Sensus, Indeks Kemiskinan/IPM.</div>
          </div>
          <div class="stat-card" style="min-width: 250px;">
            <div class="stat-val" style="font-size: 1.2rem; color: var(--accent-amber);">data.go.id</div>
            <div class="stat-lbl">Satu Data Indonesia</div>
            <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 5px;">Open Dataset lintas kementerian (Format CSV/JSON)</div>
          </div>
        </div>
        
        <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 10px; font-size: 0.85rem; margin-top: 10px;">
          <strong style="color: var(--accent-rose);">Hak Akses (UU KIP):</strong> Jika data publik tidak tersedia di <em>website</em>, Anda berhak memintanya secara legal ke PPID (Pejabat Pengelola Informasi dan Dokumentasi) instansi terkait menggunakan surat riset dari FISIPOL.
        </div>
      </div>
    `,
    discussionNote: "Bagi yang risetnya mengambil topik kebijakan publik atau tata kelola negara, sudah pernah mengakses portal JDIH kementerian terkait?",
    speakerNote: "Bagian ini sangat krusial. Ajarkan perbedaan antara mengunduh Laporan PDF (Kecamatan dalam Angka) dengan mengunduh data mentah Excel dari BPS untuk diolah di SPSS.",
    referenceNote: "UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik."
  },
  {
    id: 6,
    title: "Mengapa Pencarian Tradisional Gagal?",
    subtitle: "Bagian 3: Jebakan Pencarian Leksikal",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            Sebelum era AI, pencarian jurnal menggunakan <strong>Pencarian Leksikal</strong> (mencocokkan kata secara eksak). 
          </p>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin-top: 10px;">
            <h4 style="color: var(--accent-sky); margin-bottom: 5px;">Studi Kasus:</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted);">Skenario: Anda mencari literatur tentang masalah kesehatan mental mahasiswa.</p>
            <p style="font-family: var(--font-code); color: var(--accent-rose); font-size: 0.85rem; margin-top: 10px;">Metode Lama (Boolean):<br><code>("Mental Health" OR "Depression") AND "University Student"</code></p>
          </div>
        </div>
        <div class="grid-col">
          <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid var(--accent-amber); padding: 20px; border-radius: 4px; font-size: 0.95rem; display: flex; flex-direction: column; justify-content: center; height: 100%;">
            <h4 style="color: var(--accent-amber); margin-bottom: 10px;"><i class="fa-solid fa-triangle-exclamation"></i> Masalah Fatal</h4>
            <p style="color: var(--text-muted); line-height: 1.6;">
              Banyak artikel bagus yang justru menggunakan istilah <strong>"Psychological Well-being in Higher Education"</strong>.
            </p>
            <p style="margin-top: 10px;">
              Karena kata yang digunakan berbeda (walau maknanya sama persis), mesin pencari tradisional (OPAC/Google biasa) akan <strong>melewatkan artikel tersebut</strong>.
            </p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Berapa jam biasanya Anda habiskan hanya untuk menebak-nebak sinonim kata kunci agar jurnal yang relevan muncul di halaman pertama pencarian?",
    speakerNote: "Di sinilah Anda menciptakan momen 'Aha!'. Tunjukkan bahwa mencari artikel pakai keyword kaku seperti mencari jarum di jerami jika kita salah menebak kata yang dipakai penulis aslinya.",
    referenceNote: "Dasar-Dasar Temu Kembali Informasi."
  },
  {
    id: 7,
    title: "Evolusi: Pencarian Semantik AI",
    subtitle: "Mencari Makna Konteks, Bukan Hanya Kata",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <p style="font-size:1.2rem; margin-bottom: 2rem;">Pencarian Semantik (*Semantic Search*) menggunakan model bahasa AI untuk <strong>memahami maksud (intent)</strong> di balik pertanyaan Anda.</p>
        
        <div style="display: flex; gap: 20px;">
          <div style="flex: 1; background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px;">
            <h4 style="color: var(--accent-rose); margin-bottom: 10px;"><i class="fa-solid fa-keyboard"></i> Cara Lama (Keyword)</h4>
            <p style="font-family: var(--font-code); font-size: 0.85rem; color: var(--text-muted);">"carbon tax" AND "industrial emission" AND "Indonesia"</p>
          </div>
          <div style="display: flex; align-items: center; color: var(--accent-sky); font-size: 1.5rem;">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div style="flex: 1; background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 8px; border: 1px solid var(--accent-blue);">
            <h4 style="color: var(--accent-sky); margin-bottom: 10px;"><i class="fa-solid fa-comments"></i> Cara Baru (Natural Language)</h4>
            <p style="font-family: var(--font-code); font-size: 0.85rem; color: var(--text-muted);">"Apakah penerapan pajak karbon terbukti berhasil mengurangi emisi pabrik industri di negara Asia Tenggara?"</p>
          </div>
        </div>
        
        <p style="margin-top: 2rem; font-size: 0.95rem; color: var(--accent-emerald); text-align: center;">
          <i class="fa-solid fa-check-circle"></i> AI membaca ribuan abstrak dan <strong>menyarikan jawaban (klaim)</strong> secara langsung.
        </p>
      </div>
    `,
    discussionNote: "Lebih mudah mana, merumuskan rumus operator AND/OR, atau bertanya langsung menggunakan bahasa manusia sehari-hari?",
    speakerNote: "Transisikan pola pikir peserta. Mulai hari ini, ajak mereka berbicara dengan mesin pencari literatur seperti berbicara dengan dosen/pakar yang memahami pertanyaan mereka.",
    referenceNote: "Pengantar Natural Language Processing (NLP) dalam Kepustakawanan."
  },
  {
    id: 8,
    title: "Senjata 1: Semantic Scholar",
    subtitle: "Bagian 4: Mesin AI Penelusuran | semanticscholar.org",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            <strong>Semantic Scholar</strong> adalah proyek nirlaba dari Allen Institute for AI. Jauh lebih cerdas dari Google Scholar tradisional.
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.9rem; margin-top: 15px;">
            <li><strong>Fitur TL;DR (Too Long; Didn't Read):</strong> AI secara otomatis meringkas seluruh teks abstrak yang panjang (300 kata) menjadi <strong>satu kalimat kesimpulan padat</strong>.</li>
            <li>Sangat menghemat waktu (*scanning*) saat Anda harus menyortir puluhan hasil pencarian jurnal.</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: #080c14; border: 1px solid var(--border-color); border-radius: 10px; padding: 20px; position: relative;">
            <div style="font-size: 0.8rem; color: var(--accent-purple); font-weight: bold; margin-bottom: 10px;">[Mockup Tampilan Hasil Semantic Scholar]</div>
            <h4 style="color: var(--accent-sky); margin-bottom: 5px; font-size: 0.9rem;">The Impact of Cash Transfers on Child Nutrition</h4>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 15px;">Author: John Doe et al. (2024)</p>
            <div style="background: rgba(236, 72, 153, 0.1); border-left: 3px solid var(--accent-pink); padding: 10px; font-size: 0.8rem;">
              <strong style="color: var(--accent-pink);">TL;DR:</strong> <em>Conditional cash transfers significantly improve child nutrition outcomes only when combined with mandatory health checkups.</em>
            </div>
            <p style="font-size: 0.7rem; color: var(--text-muted); margin-top: 10px; font-style: italic;">^ Anda tidak perlu membaca abstraknya untuk mengetahui hasil akhir riset ini!</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Berapa banyak abstrak bahasa Inggris yang bisa Anda baca dalam waktu 1 jam? Dengan fitur TL;DR, Anda bisa menyaring relevansi artikel 5 kali lebih cepat.",
    speakerNote: "Tekankan bahwa Semantic Scholar gratis dan sangat powerful. Fitur TL;DR adalah fitur pembunuh (killer feature) yang tidak dimiliki Google Scholar.",
    referenceNote: "Allen Institute for AI (AI2)."
  },
  {
    id: 9,
    title: "Senjata 2: Consensus.app",
    subtitle: "Mencari 'Kesepakatan Ilmuwan' dalam Satu Klik",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 20px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">
          <strong>Consensus AI</strong> tidak mencari *tautan website*, melainkan mengekstrak <strong>"Klaim Ilmiah"</strong> langsung dari jurnal <em>peer-reviewed</em>.
        </p>
        
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 12px; padding: 25px; font-size: 0.95rem;">
          <p style="color: var(--accent-cyan); font-weight: bold; margin-bottom: 10px;"><i class="fa-solid fa-wand-magic-sparkles"></i> Contoh Prompt Ajaib:</p>
          <p style="font-family: var(--font-code); background: #000; padding: 10px; border-radius: 4px; margin-bottom: 15px;">"Does social media algorithms increase political polarization in developing countries?"</p>
          
          <div style="display: flex; align-items: center; gap: 15px; background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px;">
            <div style="flex: 1;">
              <div style="height: 10px; background: #333; border-radius: 5px; overflow: hidden; display: flex;">
                <div style="width: 85%; background: var(--accent-emerald);"></div>
                <div style="width: 10%; background: var(--accent-amber);"></div>
                <div style="width: 5%; background: var(--accent-rose);"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--text-muted); margin-top: 5px;">
                <span>Yes (85%)</span>
                <span>Possibly (10%)</span>
                <span>No (5%)</span>
              </div>
            </div>
            <div style="font-weight: bold; color: var(--accent-emerald);">Consensus Meter</div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Consensus menghemat waktu Anda dari membaca 20 jurnal pro dan kontra, langsung memberikan persentase kubu mana yang secara ilmiah lebih kuat.",
    speakerNote: "Demo langsung Consensus. Ketik sebuah mitos yang populer di masyarakat atau hipotesis liar dari riset mahasiswa, lalu biarkan mesin Consensus membuktikan apakah sains mendukungnya atau menolaknya.",
    referenceNote: "Consensus.app Whitepaper."
  },
  {
    id: 10,
    title: "Formula Rahasia: Prompting Pencarian AI",
    subtitle: "Hindari Penggunaan Prompt ChatGPT Biasa",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <p style="font-size:1.1rem; margin-bottom: 1.5rem;">Menggunakan mesin pencari akademis (Consensus/Elicit) <strong>BERBEDA</strong> dengan mengobrol dengan ChatGPT. Gunakan formula yang tajam.</p>
        
        <div style="background: rgba(59, 130, 246, 0.1); border-left: 5px solid var(--accent-blue); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
          <h4 style="color: var(--accent-sky); margin-bottom: 0.5rem;">Formula Prompt Jurnal:</h4>
          <p style="font-family: var(--font-code); font-weight: bold; color: white;">[Topik / Pertanyaan Utama] + [Batas Region/Waktu] + [Syarat Jenis Metodologi]</p>
        </div>
        
        <div style="display: flex; gap: 15px; margin-top: 20px;">
          <div style="flex: 1; border: 1px solid var(--border-color); padding: 15px; border-radius: 8px;">
            <p style="color: var(--accent-rose); font-weight: bold;"><i class="fa-solid fa-xmark"></i> Kurang Tepat (ChatGPT Style)</p>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 10px;">"Tolong buatkan saya latar belakang tentang kemiskinan di desa."</p>
          </div>
          <div style="flex: 1; border: 1px solid var(--accent-emerald); background: rgba(16, 185, 129, 0.05); padding: 15px; border-radius: 8px;">
            <p style="color: var(--accent-emerald); font-weight: bold;"><i class="fa-solid fa-check"></i> Tepat Sasaran (Academic Search Style)</p>
            <p style="font-size: 0.85rem; color: var(--text-main); margin-top: 10px;">"What are the empirical impacts of unconditional cash transfers on rural poverty in Southeast Asia?"</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Mengapa kita tidak menyuruh AI 'menuliskan' tesisnya, tapi justru memberikan pertanyaan kritis (empirical impacts)?",
    speakerNote: "AI penelusuran (search engine) digunakan untuk mencari fakta, bukan untuk mengarang teks bebas. Format pertanyaan bahasa Inggris menghasilkan data paling akurat karena dominasi database internasional.",
    referenceNote: "Panduan Literasi AI - Modul UGM."
  },
  {
    id: 11,
    title: "Filter Kebohongan AI (Skeptisisme Sehat)",
    subtitle: "Bagian 5: Halusinasi Referensi & Integritas UGM (Hal. 8)",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <h3 style="color: var(--accent-rose); margin-bottom: 10px; font-size: 1.2rem;"><i class="fa-solid fa-triangle-exclamation"></i> Apa itu Halusinasi AI?</h3>
          <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">
            AI seperti ChatGPT (versi gratis) cenderung <strong>memalsukan data</strong> saat ia tidak tahu jawabannya. Ia bisa mengarang nama pengarang, tahun, dan judul jurnal yang terdengar sangat masuk akal, padahal <strong>JURNAL ITU TIDAK PERNAH ADA</strong> di dunia nyata.
          </p>
          <p style="font-size: 0.95rem; margin-top: 15px; color: white;">
            Hukuman untuk mencantumkan sitasi fiktif di skripsi/tesis UGM adalah <strong>indikasi pelanggaran etika akademik berat</strong>.
          </p>
        </div>
        <div class="grid-col">
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-emerald); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; justify-content: center; height: 100%;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 15px;">Protokol Triangulasi (Cross-Check):</h4>
            <ol style="font-size: 0.9rem; line-height: 1.8; color: var(--text-main); padding-left: 15px;">
              <li>Jika AI Generatif memberikan sebuah judul jurnal kepada Anda...</li>
              <li><strong>JANGAN</strong> langsung menyalinnya ke daftar pustaka Anda.</li>
              <li><em>Copy</em> judul tersebut, lalu tempel (*paste*) di kotak pencarian <strong>Scopus</strong>, <strong>DOAJ</strong>, atau <strong>Summon UGM</strong>.</li>
              <li>Jika jurnal itu benar-benar muncul dan dapat diunduh PDF-nya, maka aman digunakan.</li>
            </ol>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Ada yang pernah meminta ChatGPT mencarikan jurnal, lalu saat dicari di Google jurnal tersebut tidak bisa ditemukan? Itulah momen Anda terkena halusinasi AI.",
    speakerNote: "Berikan penekanan kuat di sini dengan nada tegas. Modul 1 ini tidak hanya mengajarkan kecepatan (efisiensi), tapi kewaspadaan (etika). Pustakawan adalah penjaga gawang validitas data akademik.",
    referenceNote: "Panduan Etika Akademik Pemanfaatan AI Generatif UGM (2025)."
  },
  {
    id: 12,
    title: "🖥️ Hands-On: Cek Fakta di Consensus",
    subtitle: "Lembar Kerja Praktik Mandiri (15 Menit)",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; line-height: 1.5; color: var(--accent-sky);"><strong>Skenario:</strong> Anda sedang menyusun proposal tentang "Pengaruh Bantuan Tunai (Cash Transfer) terhadap Tingkat Stunting".</p>
        
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
          <p><strong>Langkah 1:</strong> Buka <a href="https://consensus.app" target="_blank" style="color: var(--accent-sky);">consensus.app</a>. Ketik pertanyaan riset Anda dalam bahasa Inggris.</p>
          <p><strong>Langkah 2:</strong> Lihat indikator *Consensus Meter*. Apa kecenderungan jawaban sains (Yes/No)?</p>
          <p><strong>Langkah 3:</strong> Pilih 2 paper teratas. Salin judulnya.</p>
          <p><strong>Langkah 4:</strong> Lakukan triangulasi! Buka portal <strong>Summon lib.ugm.ac.id</strong> atau <strong>Scopus</strong> (via EZProxy), dan cari judul tersebut untuk memastikan validitasnya.</p>
        </div>
        
        <p style="font-size: 0.90rem; color: var(--accent-emerald); text-align: center; margin-top: 10px; font-weight: bold;">
          AI adalah asisten pemantik ide (Stimulator). Otoritas validasi terakhir tetap berada di tangan akal budi Anda!
        </p>
      </div>
    `,
    discussionNote: "Siapa yang berhasil menemukan paper terkait *cash transfer* dan *stunting* di Consensus, lalu berhasil mengunduh *full-text*-nya di EZProxy UGM?",
    speakerNote: "Keliling ruangan, pastikan koneksi internet stabil. Bantu mahasiswa merumuskan terjemahan pertanyaan mereka dari bahasa Indonesia ke kalimat bahasa Inggris yang saintifik.",
    referenceNote: "Perpustakaan FISIPOL UGM Workshop Sandbox."
  }
];

// 2. STATE MANAGEMENT
let currentSlideIndex = 0;

// 3. ENGINE INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initPresentation();
  setupEventHandlers();
});

function initPresentation() {
  renderSlide(currentSlideIndex);
  buildSlideDrawer();
}

function renderSlide(index) {
  const slide = slideData[index];
  const wrapper = document.getElementById("active-slide-wrapper");
  
  wrapper.innerHTML = "";
  
  // Inject Web Navigation khusus Modul 1
  let headerHtml = "";
  if (slide.layout !== "cover") {
    headerHtml = `
      <header class="mock-web-header">
        <div class="mock-web-brand"><i class="fa-solid fa-book-open-reader"></i> <span>DIGILIB <strong>FISIPOL</strong></span></div>
        <nav class="mock-web-nav">
          <button class="mock-web-link ${slide.id === 1 ? 'active' : ''}" onclick="jumpToSlide(1)">Home</button>
          <button class="mock-web-link ${slide.id > 1 && slide.id <= 4 ? 'active' : ''}" onclick="jumpToSlide(2)">1. Fasilitas Universitas</button>
          <button class="mock-web-link ${slide.id === 5 ? 'active' : ''}" onclick="jumpToSlide(5)">2. Open Data</button>
          <button class="mock-web-link ${slide.id === 6 ? 'active' : ''}" onclick="jumpToSlide(6)">3. Boolean Logic</button>
          <button class="mock-web-link ${slide.id > 6 && slide.id <= 10 ? 'active' : ''}" onclick="jumpToSlide(7)">4. Semantic AI</button>
          <button class="mock-web-link ${slide.id > 10 ? 'active' : ''}" onclick="jumpToSlide(11)">5. Etika Validasi</button>
        </nav>
      </header>
    `;
  }
  
  wrapper.innerHTML = `
    ${headerHtml}
    
    <div class="slide-header">
      <h2>${slide.title}</h2>
      ${slide.subtitle ? '<div class="slide-subtitle">' + slide.subtitle + '</div>' : ''}
    </div>
    
    <div class="slide-body">
      ${slide.content}
    </div>
    
    <div class="slide-footer">
      <span style="font-size:0.7rem;">Juvita Umar Hadinata (<a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a>)</span>
      <span>Slide ${slide.id} / ${slideData.length}</span>
    </div>
  `;
  
  document.getElementById("slide-indicator").innerText = slide.id + " / " + slideData.length;
  
  document.getElementById("discussion-note-box").innerHTML = slide.discussionNote || "Tidak ada catatan diskusi.";
  document.getElementById("speaker-note-box").innerHTML = slide.speakerNote || "Tidak ada catatan pembicara.";
  document.getElementById("reference-note-box").innerHTML = slide.referenceNote || "Modul UGM 2026.";
  
  // Highlight active item in drawer
  document.querySelectorAll(".drawer-item").forEach((el, idx) => {
    if (idx === index) el.classList.add("active");
    else el.classList.remove("active");
  });
}

function setupEventHandlers() {
  document.getElementById("btn-prev").addEventListener("click", prevSlide);
  document.getElementById("btn-next").addEventListener("click", nextSlide);
  document.getElementById("btn-drawer-toggle").addEventListener("click", toggleSlideDrawer);
  document.getElementById("btn-close-drawer").addEventListener("click", toggleSlideDrawer);
  document.getElementById("btn-notes-toggle").addEventListener("click", toggleNotesPanel);
  document.getElementById("btn-close-notes").addEventListener("click", toggleNotesPanel);
  document.getElementById("btn-fullscreen").addEventListener("click", toggleFullscreen);
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key.toLowerCase() === "f") {
      toggleFullscreen();
    }
  });
}

function nextSlide() {
  if (currentSlideIndex < slideData.length - 1) {
    currentSlideIndex++;
    renderSlide(currentSlideIndex);
  }
}

function jumpToSlide(slideNumber) {
  const index = slideNumber - 1;
  if (index >= 0 && index < slideData.length) {
    currentSlideIndex = index;
    renderSlide(currentSlideIndex);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderSlide(currentSlideIndex);
  }
}

function toggleSlideDrawer() {
  const drawer = document.getElementById("slide-drawer");
  drawer.classList.toggle("drawer-hidden");
}

function toggleNotesPanel() {
  const panel = document.getElementById("presenter-panel");
  panel.classList.toggle("hidden");
}

function toggleFullscreen() {
  const element = document.getElementById("presentation-area");
  if (!document.fullscreenElement) {
    element.requestFullscreen().catch(err => {
      console.error('Error attempting to enable fullscreen: ' + err.message);
    });
  } else {
    document.exitFullscreen();
  }
}

function buildSlideDrawer() {
  const listContainer = document.getElementById("drawer-list");
  listContainer.innerHTML = "";
  
  slideData.forEach((slide, idx) => {
    const item = document.createElement("div");
    item.className = "drawer-item";
    item.innerHTML = '<div class="drawer-item-num">Slide ' + slide.id + '</div>' +
                     '<div class="drawer-item-title">' + slide.title + '</div>';
    item.addEventListener("click", () => {
      currentSlideIndex = idx;
      renderSlide(currentSlideIndex);
      toggleSlideDrawer();
    });
    listContainer.appendChild(item);
  });
}

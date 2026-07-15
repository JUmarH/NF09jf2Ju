/* ==========================================================================
   INTERACTIVE PRESENTATION ENGINE & DATASET (slides_modul1.js)
   Modul 1 Workshop: Etika AI, Open Data, & Penelusuran Semantik
   ========================================================================== */

// 1. SLIDE DATASET
const slideData = [
  // --- PEMBUKAAN ---
  {
    id: 1,
    title: "Etika AI & Penelusuran Semantik Cerdas",
    subtitle: "Modul 1: Akses E-Resources, Open Data, & AI Semantic Search",
    layout: "cover",
    content: `
      
      <div class="header-logos">
        <div style="display: flex; align-items: center; gap: 12px; margin-right: 15px;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Logo_UGM.svg" class="ugm-logo" alt="UGM Logo" style="height: 50px; filter: brightness(0) invert(1);">
          <div style="color: white; font-weight: bold; font-family: 'Times New Roman', serif; font-size: 1.1rem; line-height: 1.1; display:flex; flex-direction: column;">
            <span>UNIVERSITAS</span>
            <span>GADJAH MADA</span>
          </div>
        </div>
        <div class="digilib-logo" style="display: flex; flex-direction: column; justify-content: center;"><div style="color: white; font-weight: 800; font-size: 1.2rem; letter-spacing: 1px;">DIGILIB<span style="color: var(--accent-sky); margin-left: 5px;">FISIPOL</span></div><div style="color: rgba(255,255,255,0.7); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">Fakultas Ilmu Sosial dan Ilmu Politik UGM</div></div>
      </div>
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
    title: "Tentang Pemateri",
    subtitle: "Juvita Umar Hadinata (Academic Library FISIPOL UGM)",
    layout: "custom-widget",
    content: `
      <div class="profile-card-container" style="background: rgba(30, 41, 59, 0.2); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 20px;">
        <div class="profile-card-photo" style="width: 150px; height: 150px; font-size: 4rem; margin: 0 auto; overflow: hidden; border: 4px solid var(--accent-sky);">
          <img src="https://github.com/jumarh.png" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <i class="fa-solid fa-user-tie" style="display: none; font-size: 4rem; line-height: 140px;"></i>
        </div>
        <div class="profile-card-info" style="text-align: center;">
          <div class="profile-card-name" style="font-size: 1.4rem;">Juvita Umar Hadinata</div>
          <div class="profile-card-title" style="font-size: 0.9rem; color: var(--accent-cyan);">Digital Library Staff | Academic Library FISIPOL UGM</div>
          <p style="font-size: 0.8rem; line-height: 1.4; color: var(--text-muted); max-width: 600px; margin: 5px auto;">
            Alumni Magister Manajemen Informasi dan Perpustakaan (MIP) UGM. Fokus pada pengembangan ekosistem data ilmiah, pengelolaan repositori digital (ETD), asisten penelusuran pustaka, dan penerapan AI untuk pendidikan di FISIPOL UGM.
          </p>
          <div class="profile-card-details" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 10px; font-size: 0.75rem;">
            <div class="profile-card-detail-item"><i class="fa-solid fa-envelope"></i> <span>juvitaumarhadinata@ugm.ac.id</span></div>
            <div class="profile-card-detail-item"><i class="fa-solid fa-globe"></i> <span><a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a></span></div>
            <div class="profile-card-detail-item"><i class="fa-solid fa-graduation-cap"></i> <span>Magister MIP UGM</span></div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Tidak ada pemandu diskusi untuk halaman biografi.",
    speakerNote: "Perkenalkan diri Anda secara profesional, sebutkan fokus pekerjaan Anda di perpustakaan digital FISIPOL UGM.",
    referenceNote: "Peta Kompetensi Staf Digilib FISIPOL (P008)."
  },
  {
    id: 3,
    title: "Mengapa Penelusuran Itu Penting?",
    subtitle: "Pondasi Kesuksesan Skripsi & Tesis Anda",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-main);">
            "Penelitian yang baik dimulai dari pertanyaan riset yang tajam, dan pertanyaan riset yang tajam <strong>hanya bisa lahir dari penelusuran literatur yang komprehensif</strong>."
          </p>
          <p style="font-size: 1rem; line-height: 1.5; color: var(--text-muted);">
            Kegagalan mahasiswa di meja ujian seringkali bukan karena mereka tidak pintar, melainkan karena:
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.9rem; margin-top: 5px;">
            <li>Menggunakan referensi usang (lebih dari 10 tahun).</li>
            <li>Topik riset ternyata sudah pernah diteliti orang lain persis sama.</li>
            <li>Hanya mengandalkan blog/website tidak kredibel.</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: rgba(244, 63, 94, 0.1); border-left: 4px solid var(--accent-rose); padding: 15px; border-radius: 8px; font-size: 0.95rem;">
            <h4 style="color: var(--accent-rose); margin-bottom: 10px;"><i class="fa-solid fa-triangle-exclamation"></i> Jebakan Tradisional</h4>
            <p style="color: #fecdd3;">Mengandalkan 100% pada Google Scholar dan Wikipedia akan membuat riset Anda kehilangan validitas akademis di mata dosen penguji internasional.</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Berapa banyak dari Anda yang pernah disuruh dosen merombak Bab 2 (Tinjauan Pustaka) karena dinilai kurang tajam atau referensinya kurang bereputasi?",
    speakerNote: "Bangun motivasi peserta. Literatur review bukan sekadar syarat formalitas, melainkan nyawa dari penelitian.",
    referenceNote: "Buku Pedoman Penulisan Skripsi FISIPOL."
  },
  {
    id: 4,
    title: "Apa Saja Agenda Kita Hari Ini?",
    subtitle: "Peta Perjalanan Workshop Modul 1",
    layout: "custom-widget",
    content: `
      <div class="search-agenda-container">
        <div class="search-agenda-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input class="search-agenda-input" type="text" value="Bagaimana cara cerdas mencari literatur dan data untuk riset?" readonly>
          <i class="fa-solid fa-microphone" style="color: var(--accent-blue);"></i>
        </div>
        <div class="search-agenda-dropdown">
          <div class="search-agenda-item" onclick="jumpToSlide(5)">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>Babak 1: <strong>Harta Karun Universitas</strong> — Fasilitas E-Resources UGM & FISIPOL</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(14)">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>Babak 2: <strong>Tambang Data Terbuka (Open Data)</strong> — Sumber Data Empiris Negara</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(20)">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>Babak 3: <strong>Kegagalan Metode Klasik</strong> — Keterbatasan Leksikal/Keyword</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(23)">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>Babak 4: <strong>Era Penelusuran Semantik AI</strong> — Mencari Berdasarkan 'Makna' Konteks</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(32)">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>Babak 5: <strong>Etika Validasi & Anti-Halusinasi</strong> — Batasan Penggunaan AI (Protokol UGM)</div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Ada materi yang paling Anda tunggu-tunggu hari ini? Biasanya mahasiswa sangat antusias dengan bagian ke-4 (AI).",
    speakerNote: "Jelaskan struktur presentasi agar mahasiswa tahu alur materi. Peta agenda ini dibuat interaktif untuk memicu minat visual.",
    referenceNote: "Kerangka Modul Workshop AI FISIPOL 2026."
  },

  // --- BAGIAN 1: HARTA KARUN UNIVERSITAS ---
  {
    id: 5,
    title: "Bagian 1: Harta Karun Universitas",
    subtitle: "Mengoptimalkan Infrastruktur Riset UGM",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-emerald);">Babak 1<br>Harta Karun Universitas</h1>
        <p class="subtitle">E-Resources lib.ugm.ac.id · EZProxy · Summon 2.0 · digilib.fisipol.ugm.ac.id</p>
      </div>
    `,
    discussionNote: "Mari kita mulai.",
    speakerNote: "Transisi ke materi fasilitas kampus.",
    referenceNote: "N/A"
  },
  {
    id: 6,
    title: "Jangan Bayar Jurnal Pakai Uang Sendiri!",
    subtitle: "Gerbang Utama: lib.ugm.ac.id",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-main);">
            UGM menghabiskan anggaran miliaran rupiah setiap tahunnya untuk melanggan pangkalan data premium internasional demi Anda.
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.95rem; margin-top: 10px;">
            <li>Mengapa harus bayar $30 (Rp450.000) per artikel jika kampus sudah membelikannya?</li>
            <li>Mengapa mengambil risiko ilegal (Sci-Hub) jika akses resminya sudah tersedia?</li>
          </ul>
        </div>
        <div class="grid-col" style="text-align: center;">
          <div style="background: rgba(59,130,246,0.1); border: 1px solid var(--accent-blue); border-radius: 8px; padding: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
            <i class="fa-solid fa-building-columns" style="font-size: 4rem; color: var(--accent-sky); margin-bottom: 20px;"></i>
            <h3 style="color: var(--accent-sky); margin-bottom: 10px;">lib.ugm.ac.id</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted);">Gerbang SSO Universitas Gadjah Mada menuju repositori pengetahuan global.</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Ada yang masih menggunakan Sci-Hub atau bajakan? Mengapa mengambil risiko ilegal jika UGM sudah membelikannya secara resmi untuk Anda?",
    speakerNote: "Tekankan bahwa menggunakan layanan UGM bukan sekadar legalitas, tetapi juga terekam sebagai statistik penggunaan yang menentukan apakah langganan database tersebut akan dilanjutkan tahun depan atau diputus.",
    referenceNote: "Portal E-Resources Perpustakaan UGM."
  },
  {
    id: 7,
    title: "Mesin Pencari 'One-Search': Summon 2.0",
    subtitle: "Mencari ke seluruh pangkalan data secara serentak",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="background: rgba(16, 185, 129, 0.1); border-left: 5px solid var(--accent-emerald); padding: 2rem; border-radius: 0.5rem; margin-bottom: 20px;">
          <h3 style="color: var(--accent-emerald); margin-bottom: 1rem;"><i class="fa-solid fa-magnifying-glass-plus"></i> Apa itu Summon?</h3>
          <p style="font-size: 1.2rem; line-height: 1.6;">Summon 2.0 adalah <em>Federated Discovery Service</em>. Bayangkan ini seperti Google, tetapi kotak pencariannya khusus mencari ke dalam <strong>SELURUH database jurnal berbayar</strong> yang dilanggan UGM secara bersamaan.</p>
        </div>
        <ul style="font-size: 1.1rem; line-height: 1.8;">
          <li>Tidak perlu membuka Springer, Elsevier, dan Taylor & Francis satu-satu.</li>
          <li>Sangat berguna untuk <strong>pencarian awal (exploratory search)</strong> ketika Anda belum tahu jurnal mana yang banyak memuat topik Anda.</li>
        </ul>
      </div>
    `,
    discussionNote: "Kapan sebaiknya kita menggunakan Summon dibandingkan mencari langsung ke ProQuest?",
    speakerNote: "Summon adalah alat terbaik bagi maba atau mereka yang baru mulai menyusun bab 1. Ini memperlebar jangkauan pencarian.",
    referenceNote: "Dokumentasi Summon 2.0 ExLibris."
  },
  {
    id: 8,
    title: "Jangan Lupakan Buku Fisik! (OPAC)",
    subtitle: "Online Public Access Catalog",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <h3 style="color: var(--accent-sky); margin-bottom: 15px;">Kenapa Buku Cetak Masih Penting?</h3>
          <p style="font-size: 0.95rem; line-height: 1.6;">Tidak semua ilmu (terutama teks-teks klasik Sosiologi dan Politik) tersedia dalam bentuk PDF atau *e-book* gratis.</p>
          <ul class="slide-list list-bullet" style="font-size: 0.9rem; margin-top: 10px;">
            <li>Buku babon (teori dasar) seringkali hanya ada fisiknya di perpus.</li>
            <li>Gunakan <strong>OPAC (opac.lib.ugm.ac.id)</strong> untuk mencari lokasi rak buku fisik sebelum Anda datang ke kampus.</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: rgba(30, 41, 59, 0.4); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
            <i class="fa-solid fa-book-atlas" style="font-size: 4rem; color: var(--accent-purple); margin-bottom: 15px;"></i>
            <h4 style="color: var(--accent-purple);">Koleksi Tandon</h4>
            <p style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 10px;">Buku-buku wajib mata kuliah (tandon) yang ada di Perpustakaan FISIPOL bisa dilacak lewat katalog daring.</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Berapa lama rata-rata waktu yang Anda habiskan mencari buku di rak perpustakaan karena tidak mengecek Call Number di OPAC terlebih dahulu?",
    speakerNote: "Ingatkan mahasiswa bahwa perpus UGM punya koleksi fisik raksasa. Jangan hanya jadi 'peneliti Google'.",
    referenceNote: "Sistem SLiMS UGM."
  },
  {
    id: 9,
    title: "Akses Jarak Jauh: EZProxy",
    subtitle: "Akses Jurnal dari Kos, Kafe, atau Rumah",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <p style="font-size:1.2rem; margin-bottom: 2rem;">Anda tidak perlu secara fisik berada di lingkungan UGM atau terkoneksi WiFi UGM (UGM-Hotspot) untuk bisa mengakses jurnal premium.</p>
        
        <div style="display: flex; gap: 20px; align-items: stretch;">
          <div style="flex: 1; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 20px; border-radius: 8px; display: flex; flex-direction: column; align-items: center;">
            <i class="fa-solid fa-house-laptop" style="font-size: 2.5rem; color: var(--accent-rose); margin-bottom: 15px;"></i>
            <h4 style="color: var(--accent-rose); margin-bottom: 10px;">Dari Rumah (Direct URL)</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); text-align: center;">Membuka sciencedirect.com langsung dari rumah akan diminta bayar (Paywall).</p>
          </div>
          <div style="display: flex; align-items: center; color: var(--accent-sky); font-size: 1.5rem;">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div style="flex: 1; background: rgba(59, 130, 246, 0.1); border: 1px solid var(--accent-blue); padding: 20px; border-radius: 8px; display: flex; flex-direction: column; align-items: center;">
            <i class="fa-solid fa-shield-halved" style="font-size: 2.5rem; color: var(--accent-sky); margin-bottom: 15px;"></i>
            <h4 style="color: var(--accent-sky); margin-bottom: 10px;">Melalui EZProxy</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); text-align: center;">Login via <strong>ezproxy.ugm.ac.id</strong> menggunakan email <code>@mail.ugm.ac.id</code>, sistem akan 'menipu' penerbit bahwa Anda sedang berada di jaringan kampus.</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Bagi mahasiswa baru, pastikan SSO dan email UGM Anda sudah aktif. Tanpa email kampus, Anda tidak bisa menggunakan EZProxy.",
    speakerNote: "EZProxy adalah tulang punggung riset saat pandemi dan pasca-pandemi. Pastikan seluruh peserta hafal URL-nya.",
    referenceNote: "EZProxy OCUP Panduan Akses."
  },
  {
    id: 10,
    title: "Layanan Kritis di lib.ugm.ac.id",
    subtitle: "Fitur Tersembunyi yang Jarang Dimanfaatkan",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <div class="stat-card-row" style="flex-wrap: wrap;">
          <div class="stat-card" style="min-width: 250px;">
            <div class="stat-val" style="font-size: 1.2rem; color: var(--accent-emerald);"><i class="fa-solid fa-truck-fast"></i> Silang Layan</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 10px; line-height: 1.5;">Buku yang Anda butuhkan ada di Fakultas Teknik? Anda bisa meminjamnya via Silang Layan tanpa harus jalan kaki ke sana. Buku akan diantar.</div>
          </div>
          <div class="stat-card" style="min-width: 250px;">
            <div class="stat-val" style="font-size: 1.2rem; color: var(--accent-purple);"><i class="fa-solid fa-user-doctor"></i> Research Consult</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 10px; line-height: 1.5;">Buntu cari literatur? *Booking* jadwal konsultasi *1-on-1* secara gratis dengan Pustakawan Referensi Pusat.</div>
          </div>
          <div class="stat-card" style="min-width: 250px;">
            <div class="stat-val" style="font-size: 1.2rem; color: var(--accent-sky);"><i class="fa-solid fa-file-pdf"></i> Repositori UGM</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 10px; line-height: 1.5;">Akses karya dosen di <em>repository.ugm.ac.id</em> dan karya seluruh mahasiswa UGM di <em>etd.repository.ugm.ac.id</em>.</div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Banyak mahasiswa telat lulus karena tidak berani bertanya. Fasilitas konsultasi riset ini gratis. Jangan sungkan memanfaatkannya.",
    speakerNote: "Sebarkan kesadaran (awareness) tentang layanan unggulan perpus pusat UGM.",
    referenceNote: "Layanan Perpustakaan Universitas Gadjah Mada."
  },
  {
    id: 11,
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
              <td>Teori Sosiologi, Politik klasik, dan Humaniora. Kaya akan teks utuh. Sangat pas untuk S1.</td>
            </tr>
            <tr>
              <td style="color: var(--accent-cyan); font-weight: bold;">ProQuest (Social Science)</td>
              <td>Gudang Tesis dan Disertasi internasional. Cocok untuk mencari <em>State of the Art</em> bagi S2/S3.</td>
            </tr>
            <tr>
              <td style="color: var(--accent-cyan); font-weight: bold;">EBSCOhost (SocINDEX)</td>
              <td>Pusat jurnal ilmu sosial terapan terlengkap.</td>
            </tr>
            <tr>
              <td style="color: var(--accent-rose); font-weight: bold;"><img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Scopus_logo.svg" class="brand-logo-inline" alt="Scopus"> & Web of Science</td>
              <td><em>Bukan untuk mengunduh Full-text.</em> Gunakan murni untuk menambang tren riset dan analisis jejaring bibliometrik.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    discussionNote: "Di antara database ini, mana yang namanya baru pertama kali Anda dengar hari ini?",
    speakerNote: "Berikan tips agar mahasiswa S1 memprioritaskan JSTOR, sedangkan S2/S3 memprioritaskan ProQuest Dissertations untuk memastikan topik riset mereka belum pernah diteliti sebelumnya.",
    referenceNote: "Analisis Penggunaan Database FISIPOL 2025."
  },
  {
    id: 12,
    title: "Eksplorasi Rumah Sendiri: digilib.fisipol.ugm.ac.id",
    subtitle: "Layanan Spesifik Tingkat Fakultas",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <h3 style="color: var(--accent-purple); font-size: 1.1rem; margin-bottom: 10px;"><i class="fa-solid fa-server"></i> Koleksi Spesifik FISIPOL</h3>
          <ul class="slide-list list-bullet" style="font-size: 0.85rem;">
            <li><strong>ETD FISIPOL Khusus:</strong> Intip skripsi/tesis kakak tingkat untuk melihat standar kelulusan dan format penulisan.</li>
            <li><strong>Arsip Koran Lama:</strong> Bukti pergerakan sosial historis (fisik/digital).</li>
          </ul>
          
          <h3 style="color: var(--accent-sky); font-size: 1.1rem; margin-top: 15px; margin-bottom: 10px;"><i class="fa-solid fa-list-check"></i> Layanan Mandiri Terpadu</h3>
          <ul class="slide-list list-bullet" style="font-size: 0.85rem;">
            <li>Pengajuan Pengecekan <strong>Turnitin</strong> Fakultas.</li>
            <li>Syarat pengajuan <strong>Bebas Pustaka</strong> FISIPOL.</li>
            <li>Booking Ruang Diskusi & Mini Studio.</li>
          </ul>
        </div>
        <div class="grid-col">
           <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
            <i class="fa-solid fa-graduation-cap" style="font-size: 3rem; color: var(--accent-emerald); margin-bottom: 15px;"></i>
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px; text-align: center;">Pojok Kelas Berbagi</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); text-align: center;">Portal khusus di web digilib untuk mengunduh modul PDF (termasuk materi ini), video tutorial, dan mendaftar sesi asistensi riset (1-on-1) dengan tim pustakawan fakultas.</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Sudah tahu kalau sebelum lulus Anda wajib mengurus dua Surat Bebas Pustaka (Fakultas dan Universitas)?",
    speakerNote: "Ini rumah kita. Mahasiswa FISIPOL wajib tahu isi rumahnya sendiri sebelum pergi mencari keluar.",
    referenceNote: "Sistem Informasi Manajemen Digilib FISIPOL."
  },
  {
    id: 13,
    title: "Dasbor Bibliometrik Publikasi Dosen",
    subtitle: "Inovasi Pengembangan Digital (P005)",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="text-align: center;">
        <h3 style="color: var(--accent-sky); margin-bottom: 1rem;"><i class="fa-solid fa-chart-network"></i> Strategi Memilih Dosen Pembimbing</h3>
        <p style="font-size: 1.1rem; line-height: 1.6; max-width: 800px; margin: 0 auto 2rem auto;">
          Perpustakaan FISIPOL telah mengembangkan <strong>Dasbor Publikasi Interaktif</strong> yang memetakan kepakaran seluruh dosen FISIPOL berdasarkan rekam jejak jurnal dan sitasi mereka di Scopus/Google Scholar.
        </p>
        
        <div style="display: flex; gap: 20px; justify-content: center; margin-bottom: 2rem;">
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-emerald); padding: 15px; border-radius: 8px; width: 300px;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;">Fitur Klaster Topik</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Lihat visualisasi kata kunci yang paling sering diteliti oleh seorang dosen dalam 5 tahun terakhir.</p>
          </div>
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-emerald); padding: 15px; border-radius: 8px; width: 300px;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;">Jejaring Kolaborasi</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Lihat dengan siapa dosen tersebut sering melakukan riset bersama.</p>
          </div>
        </div>
        
        <p style="font-style: italic; color: var(--accent-amber);">Gunakan alat intelijen ini untuk memverifikasi apakah proposal skripsi Anda selaras dengan fokus penelitian dosen yang Anda tuju!</p>
      </div>
    `,
    discussionNote: "Pernahkah proposal skripsi Anda ditolak calon pembimbing karena 'topik ini bukan bidang kepakaran saya'? Gunakan dasbor ini untuk mencegahnya.",
    speakerNote: "Pamerkan dengan bangga. Ini adalah inovasi sistem P005 (Dasbor Bibliometrik) hasil pengembangan mandiri staf FISIPOL.",
    referenceNote: "Proyek Sistem P005 - Dasbor Bibliometrik FISIPOL."
  },

  // --- BAGIAN 2: OPEN DATA ---
  {
    id: 14,
    title: "Bagian 2: Tambang Open Data Publik",
    subtitle: "Sumber Data Empiris, Demografi, & Regulasi Negara (Non-Jurnal)",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-amber);">Babak 2<br>Tambang Data Publik</h1>
        <p class="subtitle">JDIHN · BPS · Satu Data Indonesia · UU KIP</p>
      </div>
    `,
    discussionNote: "Tidak semua skripsi hanya menganalisis teori. Di mana mencari data mentah (empiris)?",
    speakerNote: "Transisi ke pencarian data empiris pemerintah. Anak FISIPOL butuh data kemiskinan, kebijakan, elektoral.",
    referenceNote: "N/A"
  },
  {
    id: 15,
    title: "Portal Regulasi Negara (JDIHN)",
    subtitle: "Mencari Produk Hukum secara Legal & Valid",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="display: flex; gap: 30px; align-items: center; justify-content: center; height: 100%;">
          <div style="flex: 1; text-align: right;">
            <i class="fa-solid fa-gavel" style="font-size: 6rem; color: var(--accent-amber);"></i>
          </div>
          <div style="flex: 2; text-align: left;">
            <h3 style="color: var(--accent-sky); margin-bottom: 10px;">Jaringan Dokumentasi dan Informasi Hukum Nasional (JDIHN)</h3>
            <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 15px;">Satu portal terpusat dari Kementerian Hukum dan HAM untuk melacak status ribuan Peraturan Presiden, Undang-Undang, hingga Peraturan Daerah.</p>
            <div style="background: rgba(244, 63, 94, 0.1); border-left: 4px solid var(--accent-rose); padding: 12px; border-radius: 4px; font-size: 0.9rem; color: #fecdd3;">
              <strong>Kritis:</strong> Selalu cek kolom Status! Pastikan Undang-Undang yang Anda analisis di bab pembahasan berstatus <strong>"Berlaku"</strong>, bukan <strong>"Dicabut"</strong>.
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 15px;">
              *Tips: Gunakan juga JDIH spesifik kementerian (misal JDIH Kemendagri) untuk mencari aturan teknis operasional.
            </p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Mahasiswa Kebijakan Publik, apa bahayanya mengutip Peraturan Pemerintah yang didapat dari Google tanpa mengecek status validitasnya di JDIH?",
    speakerNote: "Sangat penting. Mengutip UU yang sudah direvisi/dicabut (misal UU Cipta Kerja versi lama) bisa membuat skripsi mahasiswa dibongkar ulang saat sidang.",
    referenceNote: "Situs jdihn.go.id."
  },
  {
    id: 16,
    title: "Badan Pusat Statistik (BPS)",
    subtitle: "Surga Data Kuantitatif & Demografi Sosial",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.6; font-size: 1rem;">
            Analisis sosiologi kemiskinan atau pembangunan pedesaan membutuhkan data sekunder yang sahih dari otoritas statistik negara (bps.go.id).
          </p>
          <h4 style="color: var(--accent-sky); margin-top: 15px; margin-bottom: 5px;">Tingkat Kedalaman Akses:</h4>
          <ul class="slide-list list-bullet" style="font-size: 0.85rem;">
            <li><strong>Publikasi PDF:</strong> Seri "Kecamatan dalam Angka" atau "Provinsi dalam Angka". Cocok untuk kutipan deskriptif naratif.</li>
            <li><strong>Tabel Dinamis:</strong> Data time-series inflasi/IPM yang bisa dipotong tahunnya.</li>
            <li><strong>Raw Data (Mikrodata):</strong> Membutuhkan akses khusus (login) bagi mahasiswa yang butuh data Excel/CSV untuk diolah secara regresi di SPSS/Stata.</li>
          </ul>
        </div>
        <div class="grid-col">
           <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
            <i class="fa-solid fa-chart-column" style="font-size: 4rem; color: var(--accent-cyan); margin-bottom: 15px;"></i>
            <h4 style="color: var(--accent-cyan); margin-bottom: 10px; text-align: center;">Sensus & Susenas</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); text-align: center;">Gunakan hasil Survei Sosial Ekonomi Nasional (Susenas) untuk mendapatkan data tingkat makro tentang pendidikan, kesehatan, dan kesejahteraan rumah tangga.</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Berapa banyak dari Anda yang risetnya menggunakan metode campuran (Mixed-Method) atau Kuantitatif penuh?",
    speakerNote: "Ajarkan mahasiswa bedanya membaca laporan PDF BPS (untuk di-quote) vs memint data mentah CSV (untuk diolah sendiri statistiknya).",
    referenceNote: "Portal bps.go.id."
  },
  {
    id: 17,
    title: "Satu Data Indonesia & Data Elektoral",
    subtitle: "Integrasi Dataset Lintas Sektoral",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1; background: rgba(30, 41, 59, 0.4); padding: 20px; border-radius: 8px; border: 1px solid var(--border-color);">
          <h3 style="color:var(--accent-sky); margin-bottom:1rem;"><i class="fa-solid fa-server"></i> Satu Data (data.go.id)</h3>
          <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-main);">Portal tunggal penyedia <em>open dataset</em> dari seluruh kementerian, lembaga, dan pemerintah daerah. Hampir semua file berformat mesin (CSV/JSON/API) siap untuk analisis komputasional.</p>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 10px;">Cocok untuk mahasiswa Pembangunan Sosial (PSdK) dan Manajemen Kebijakan Publik (MKP).</p>
        </div>
        <div style="flex:1; background: rgba(30, 41, 59, 0.4); padding: 20px; border-radius: 8px; border: 1px solid var(--border-color);">
          <h3 style="color:var(--accent-purple); margin-bottom:1rem;"><i class="fa-solid fa-check-to-slot"></i> KPU & Bawaslu</h3>
          <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-main);">Otoritas penyelenggara pemilu memiliki sistem informasi yang memuat data rekapitulasi suara hingga sengketa pelanggaran administratif secara rinci per TPS.</p>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 10px;">Sangat wajib dikuasai oleh mahasiswa Ilmu Politik & Pemerintahan (DPP).</p>
        </div>
      </div>
    `,
    discussionNote: "Mahasiswa Politik (DPP), pernah mengakses portal info pemilu KPU untuk mencari rekapitulasi suara level desa?",
    speakerNote: "FISIPOL memiliki jurusan DPP dan PSdK. Slide ini disesuaikan (tailored) khusus untuk spesialisasi kajian departemen mereka.",
    referenceNote: "data.go.id & kpu.go.id"
  },
  {
    id: 18,
    title: "Hak Akses Data: Undang-Undang KIP",
    subtitle: "Birokrasi Meminta Data yang Tertutup",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; line-height: 1.5;">Tidak semua instansi negara mengunggah dataset-nya ke website (karena kurangnya digitalisasi). Apa yang harus Anda lakukan?</p>
        
        <div style="background: rgba(16, 185, 129, 0.1); border-left: 5px solid var(--accent-emerald); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
          <p><strong>1. Ketahui Hak Anda:</strong> UU No. 14 Tahun 2008 (Keterbukaan Informasi Publik) menjamin hak masyarakat (termasuk akademisi) untuk mendapatkan informasi negara secara terbuka.</p>
          <p><strong>2. Cari PPID Instansi:</strong> Cari <em>Pejabat Pengelola Informasi dan Dokumentasi (PPID)</em> pada kementerian/dinas terkait. Merekalah loket legal permintaan data.</p>
          <p><strong>3. Ajukan Surat Resmi:</strong> Bawa "Surat Pengantar Penelitian" resmi bertanda tangan dari Dekanat FISIPOL UGM sebagai bukti legalitas tujuan akademis.</p>
          <p><strong>4. Format Permintaan:</strong> Minta secara spesifik variabel yang Anda butuhkan dan formatnya (misal: "Saya minta tabel rekap alokasi dana desa tahun 2024 format Excel, bukan PDF").</p>
        </div>
      </div>
    `,
    discussionNote: "Siapa yang pernah kehabisan akal saat website pemerintah (*error/under construction*), lalu memutuskan mengganti topik skripsi? Jangan menyerah, kirim surat resmi!",
    speakerNote: "Beritahu mahasiswa bahwa jalanan di lapangan birokrasi tidak selalu semulus berselancar di Google. Pustakawan memandu mereka melewati labirin birokrasi ini.",
    referenceNote: "UU No. 14 Tahun 2008."
  },

  // --- BAGIAN 3: METODE TRADISIONAL VS AI ---
  {
    id: 19,
    title: "Bagian 3: Jebakan Pencarian Leksikal",
    subtitle: "Keterbatasan Boolean (AND, OR, NOT) di Era Big Data",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-rose);">Babak 3<br>Jebakan Leksikal</h1>
        <p class="subtitle">Mengapa Keyword Klasik Sering Gagal Menemukan Artikel Relevan?</p>
      </div>
    `,
    discussionNote: "Mari kita evaluasi cara Anda mencari jurnal di masa lalu.",
    speakerNote: "Transisi memasuki pergeseran paradigma dari sistem lama (keyword/Boolean) menuju pencarian masa depan (Semantik).",
    referenceNote: "N/A"
  },
  {
    id: 20,
    title: "Kilas Balik: Boolean Logic Dasar",
    subtitle: "Memahami Cara Kerja Mesin (Lama)",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <ul style="font-size:1.3rem; line-height:2; margin-bottom: 2rem;">
          <li><strong style="color:var(--accent-sky);">AND:</strong> Mempersempit hasil (A &cap; B) - Kedua syarat <strong>harus</strong> terpenuhi.</li>
          <li><strong style="color:var(--accent-cyan);">OR:</strong> Memperluas hasil (A &cup; B) - Berguna merangkum <strong>sinonim</strong>.</li>
          <li><strong style="color:#ef4444;">NOT:</strong> Mengecualikan kata kunci agar noise berkurang.</li>
          <li><strong style="color:#facc15;">"Tanda Kutip" :</strong> Pencarian Frasa Eksak (<em>Exact Phrase</em>).</li>
        </ul>
        <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px;">
           <p style="font-family: var(--font-code); color: var(--accent-amber); font-size: 1rem; text-align: center;">Contoh Query: <br><code>("Social Media" OR "Twitter") AND "Political Participation"</code></p>
        </div>
      </div>
    `,
    discussionNote: "Boolean Logic tidak mati, bahkan Anda tetap memerlukannya di Scopus. Namun, apakah itu cukup untuk 'menggali' makna jurnal?",
    speakerNote: "Jelaskan dengan singkat, tidak usah berlama-lama. Mahasiswa harus tahu sintaks dasar ini.",
    referenceNote: "Teori Dasar Temu Kembali Informasi."
  },
  {
    id: 21,
    title: "Studi Kasus: Mengapa Tradisional Gagal?",
    subtitle: "Batasan Pencocokan Karakter (Exact Match)",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            Pencarian <strong>Leksikal</strong> di OPAC/Google biasa hanya mencocokkan karakter teks (huruf demi huruf). 
          </p>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin-top: 10px;">
            <h4 style="color: var(--accent-sky); margin-bottom: 5px;">Contoh Skripsi:</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted);">Mencari literatur isu mahasiswa.</p>
            <p style="font-family: var(--font-code); color: var(--accent-rose); font-size: 0.85rem; margin-top: 10px;">Query:<br><code>("Mental Health" OR "Depression") AND "University Student"</code></p>
          </div>
        </div>
        <div class="grid-col">
          <div style="background: rgba(244, 63, 94, 0.1); border-left: 4px solid var(--accent-rose); padding: 20px; border-radius: 4px; font-size: 0.95rem; display: flex; flex-direction: column; justify-content: center; height: 100%;">
            <h4 style="color: var(--accent-rose); margin-bottom: 10px;"><i class="fa-solid fa-triangle-exclamation"></i> Artikel Bagus yang Terlewat</h4>
            <p style="color: var(--text-muted); line-height: 1.6;">
              Terdapat 1 paper dengan ribuan sitasi berjudul: <br><strong style="color: white;">"Psychological Well-being in Higher Education"</strong>.
            </p>
            <p style="margin-top: 10px;">
              Karena <em>'Psychological Well-being'</em> beda huruf dengan <em>'Mental Health'</em>, dan <em>'Higher Education'</em> beda huruf dengan <em>'University Student'</em>, mesin Leksikal tradisional <strong>gagal menemukan dan membuang artikel emas ini!</strong>
            </p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Berapa jam yang Anda buang hanya untuk menebak-nebak (trial-error) semua kemungkinan kombinasi sinonim agar jurnalnya muncul?",
    speakerNote: "Momen pencerahan. Tunjukkan betapa lelahnya mencari dengan mesin yang tidak mengerti konteks.",
    referenceNote: "Limitasi NLP Klasik (Bag of Words)."
  },

  // --- BAGIAN 4: ERA PENELUSURAN SEMANTIK AI ---
  {
    id: 22,
    title: "Bagian 4: Era Penelusuran Semantik AI",
    subtitle: "Mencari Berdasarkan 'Makna', Bukan Sekadar 'Kata'",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-sky);">Babak 4<br>Revolusi AI Semantik</h1>
        <p class="subtitle">Semantic Scholar · Consensus · Elicit · SciSpace</p>
      </div>
    `,
    discussionNote: "Selamat datang di masa depan penelitian literatur.",
    speakerNote: "Ajak audiens fokus. Ini adalah bagian inti teknis dari Modul 1.",
    referenceNote: "N/A"
  },
  {
    id: 23,
    title: "Transisi ke Natural Language",
    subtitle: "Berbicara dengan Mesin layaknya Dosen Pakar",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <p style="font-size:1.1rem; margin-bottom: 2rem; text-align: center;">AI Semantic Search menggunakan Model Bahasa Besar (LLM) untuk <strong>memahami maksud/konteks (intent)</strong> di balik pertanyaan Anda.</p>
        
        <div style="display: flex; gap: 20px; align-items: stretch;">
          <div style="flex: 1; background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; text-align: center;">
            <h4 style="color: var(--accent-rose); margin-bottom: 15px;"><i class="fa-solid fa-keyboard"></i> Cara Lama (Keyword kaku)</h4>
            <p style="font-family: var(--font-code); font-size: 0.9rem; color: var(--text-muted); background: #000; padding: 15px; border-radius: 5px;">"carbon tax" AND "industrial emission" AND "Indonesia"</p>
          </div>
          <div style="display: flex; align-items: center; color: var(--accent-sky); font-size: 1.5rem;">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div style="flex: 1; background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 8px; border: 1px solid var(--accent-blue); text-align: center;">
            <h4 style="color: var(--accent-sky); margin-bottom: 15px;"><i class="fa-solid fa-comments"></i> Cara Baru (Natural Language)</h4>
            <p style="font-family: var(--font-code); font-size: 0.9rem; color: var(--text-main); background: rgba(0,0,0,0.5); padding: 15px; border-radius: 5px;">"Apakah penerapan pajak karbon terbukti berhasil mengurangi emisi pabrik industri di negara Asia Tenggara secara empiris?"</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Lebih mudah mana, merumuskan rumus operator AND/OR, atau bertanya langsung menggunakan bahasa manusia?",
    speakerNote: "Mulai hari ini, ajak mereka berbicara dengan mesin pencari literatur seperti berdiskusi hangat dengan dosen pembimbing.",
    referenceNote: "Semantic Search Architecture Concept."
  },
  {
    id: 24,
    title: "Alat 1: Semantic Scholar (TL;DR)",
    subtitle: "Mesin Nirlaba dari Allen Institute | semanticscholar.org",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            Jauh lebih cerdas dari Google Scholar biasa. <strong><img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Semantic_Scholar_logo.svg" class="brand-logo-inline" style="background: white; padding: 2px; border-radius: 4px;" alt="Semantic Scholar"> Semantic Scholar</strong> didesain khusus untuk ilmuwan agar tidak mabuk membaca abstrak.
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.9rem; margin-top: 15px;">
            <li><strong>Fitur TL;DR (Too Long; Didn't Read):</strong> AI secara otomatis meringkas teks abstrak (300 kata) menjadi <strong>satu kalimat kesimpulan padat (20 kata)</strong>.</li>
            <li>Memiliki metrik "Highly Influential Citations" (kutipan yang benar-benar membahas paper tersebut secara metodologis, bukan sekadar tempelan daftar pustaka).</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: #080c14; border: 1px solid var(--border-color); border-radius: 10px; padding: 20px; position: relative;">
            <div style="font-size: 0.8rem; color: var(--accent-purple); font-weight: bold; margin-bottom: 10px;">[Mockup Semantic Scholar]</div>
            <h4 style="color: var(--accent-sky); margin-bottom: 5px; font-size: 0.9rem;">The Impact of Cash Transfers on Child Nutrition</h4>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 15px;">Author: John Doe et al. (2024)</p>
            <div style="background: rgba(236, 72, 153, 0.1); border-left: 3px solid var(--accent-pink); padding: 10px; font-size: 0.8rem;">
              <strong style="color: var(--accent-pink);">TL;DR:</strong> <em>Conditional cash transfers significantly improve child nutrition outcomes only when combined with mandatory health checkups.</em>
            </div>
            <p style="font-size: 0.7rem; color: var(--accent-emerald); margin-top: 10px; font-weight: bold;">^ Satu detik cukup untuk tahu inti artikel ini tanpa membuka PDF-nya!</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Berapa banyak abstrak bahasa Inggris yang bisa Anda baca (scanning) dalam waktu 1 jam? Dengan TL;DR, kecepatan sortir Anda naik 5x lipat.",
    speakerNote: "Tekankan bahwa alat ini dikelola organisasi nirlaba (tanpa iklan/bias korporat). Fitur TL;DR sangat membantu bagi yang bahasa Inggrisnya masih pas-pasan.",
    referenceNote: "Allen Institute for AI (AI2)."
  },
  {
    id: 25,
    title: "Alat 2: <span style="background: white; color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;" class="brand-logo-inline">C</span> Consensus",
    subtitle: "Mencari 'Klaim Ilmiah', Bukan Tautan Website",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <p style="font-size:1.1rem; line-height: 1.6; text-align: center; margin-bottom: 2rem;">
          Jika Google mencari "website yang mengandung kata kunci Anda",<br> <strong>Consensus mencari "KLAIM para ilmuwan atas pertanyaan spesifik Anda"</strong> langsung dari jurnal <em>peer-reviewed</em>.
        </p>
        
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 12px; padding: 25px; font-size: 0.95rem; max-width: 800px; margin: 0 auto;">
          <p style="color: var(--accent-cyan); font-weight: bold; margin-bottom: 10px;"><i class="fa-solid fa-wand-magic-sparkles"></i> Contoh Prompt Ajaib:</p>
          <p style="font-family: var(--font-code); background: #000; padding: 15px; border-radius: 4px; margin-bottom: 15px; color: white;">"Does social media algorithms increase political polarization in developing countries?"</p>
          
          <div style="display: flex; align-items: center; gap: 15px; background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; border-left: 5px solid var(--accent-emerald);">
            <div style="flex: 1;">
              <div style="height: 12px; background: #333; border-radius: 6px; overflow: hidden; display: flex;">
                <div style="width: 85%; background: var(--accent-emerald);"></div>
                <div style="width: 10%; background: var(--accent-amber);"></div>
                <div style="width: 5%; background: var(--accent-rose);"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 8px; font-weight: 500;">
                <span>Setuju / YES (85%)</span>
                <span>Mungkin (10%)</span>
                <span>Tidak / NO (5%)</span>
              </div>
            </div>
            <div style="font-weight: bold; color: var(--accent-emerald); font-size: 1.2rem; margin-left: 10px;">Consensus Meter</div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Bandingkan Consensus dengan ChatGPT biasa. Consensus akan mengutip paper spesifik untuk mendukung argumen 'Yes' atau 'No', tidak mengarang bebas.",
    speakerNote: "Demo waktu nyata (live). Buka consensus.app. Ketik mitos yang populer (misal tentang kopi dan jantung) untuk menunjukkan cara kerjanya.",
    referenceNote: "<span style="background: white; color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;" class="brand-logo-inline">C</span> Consensus Search Engine."
  },
  {
    id: 26,
    title: "Alat 3: Elicit.org",
    subtitle: "Sintesis dan Matrik Literatur Otomatis",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <h3 style="color: var(--accent-purple); margin-bottom: 10px; font-size: 1.2rem;">Membangun Matriks Bukti</h3>
          <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">
            Proses paling menyiksa dalam menulis Bab Tinjauan Pustaka adalah membaca 20 paper dan membuat tabel ringkasan secara manual (Lokasi Riset, Metodologi, Jumlah Sampel).
          </p>
          <p style="font-size: 0.95rem; line-height: 1.6; margin-top: 10px; color: var(--text-main);">
            <strong>Elicit</strong> dapat membaca kumpulan PDF Anda dan <strong>mengekstrak variabel spesifik tersebut ke dalam sebuah tabel (kolom dan baris) secara instan!</strong>
          </p>
        </div>
        <div class="grid-col">
          <div style="background: #111; padding: 15px; border-radius: 8px; border: 1px solid #333;">
            <table style="width:100%; font-size:0.7rem; color: #ccc; border-collapse: collapse;">
              <tr style="border-bottom:1px solid #444;">
                <th style="padding:5px; text-align:left; color: var(--accent-sky);">Paper Title</th>
                <th style="padding:5px; text-align:left; color: var(--accent-emerald);">Sample Size</th>
                <th style="padding:5px; text-align:left; color: var(--accent-amber);">Methodology</th>
              </tr>
              <tr style="border-bottom:1px solid #333;">
                <td style="padding:5px;">Study of Voting Behavior (2023)</td>
                <td style="padding:5px;">N = 1,250</td>
                <td style="padding:5px;">Mixed-Method (Survey & Interview)</td>
              </tr>
              <tr style="border-bottom:1px solid #333;">
                <td style="padding:5px;">Digital Campaign Impact (2024)</td>
                <td style="padding:5px;">N = 850</td>
                <td style="padding:5px;">Quantitative (Regression)</td>
              </tr>
            </table>
            <div style="text-align:center; font-size:0.7rem; color:var(--text-muted); margin-top:10px;">*Tabel digenerasi oleh AI Elicit dalam 3 detik*</div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Bagi yang pernah mendapat tugas kuliah membuat resume 5 jurnal (critical review), bayangkan berapa banyak waktu yang dihemat Elicit untuk Anda tidur?",
    speakerNote: "Elicit adalah penyelamat hidup (lifesaver) untuk tinjauan literatur sistematis (systematic review).",
    referenceNote: "Elicit - The AI Research Assistant."
  },
  {
    id: 27,
    title: "Alat 4: SciSpace (Copilot PDF)",
    subtitle: "Asisten Pribadi (Tutor) saat Membaca Jurnal Sulit",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; line-height: 1.6;"><strong><span style="background: #111; color: white; border: 1px solid #333; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;" class="brand-logo-inline">SciSpace</span></strong> memiliki fitur Copilot yang tertanam langsung di penampil PDF.</p>
        
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
          <p><i class="fa-solid fa-highlighter" style="color: var(--accent-amber);"></i> <strong>Blok & Jelaskan:</strong> Anda tidak paham sebuah rumus regresi statistik atau paragraf metodologi yang rumit? Blok teks tersebut, dan minta AI SciSpace menjelaskannya dengan <em>"Gunakan bahasa anak SMA (Explain like I'm 5)"</em>.</p>
          <p><i class="fa-solid fa-table-cells" style="color: var(--accent-sky);"></i> <strong>Bedah Tabel (Snip):</strong> Potong area tabel data di jurnal, AI akan membacakan dan menyimpulkan angka-angka tabel tersebut dalam bentuk kalimat (narasi).</p>
          <p><i class="fa-solid fa-language" style="color: var(--accent-emerald);"></i> <strong>Terjemahan Instan Berkonteks Akademik:</strong> Jauh lebih baik dari Google Translate karena mengenali jargon-jargon spesifik ilmu sosial (misal: 'State Apparatus' bukan 'Alat Negara', melainkan 'Aparatur Negara').</p>
        </div>
      </div>
    `,
    discussionNote: "Seberapa sering Anda pusing melihat tabel korelasi statistik di jurnal, padahal Anda mahasiswa kualitatif?",
    speakerNote: "Alat favorit mahasiswa. Anda bisa mengunggah PDF yang diunduh dari EZProxy ke dalam SciSpace untuk dibedah secara interaktif.",
    referenceNote: "SciSpace Documentation."
  },
  {
    id: 28,
    title: "Alat 5: Connected Papers & Litmaps",
    subtitle: "Memetakan 'Pohon Silsilah' Sebuah Topik Riset",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.6; font-size: 0.95rem;">
            Agar Anda tidak melewatkan jurnal "Kakek Buyut" (teori klasik pendahulu/Prior Art) atau jurnal "Cucu" (riset paling mutakhir), gunakan alat pembuat jejaring visual.
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.85rem; margin-top: 15px;">
            <li><strong>Connected Papers:</strong> Masukkan 1 paper "bibit" yang sangat bagus, sistem akan membuat graf bola-bola paper lain yang mirip dan saling mensitasi.</li>
            <li><strong>Litmaps:</strong> Memetakan paper layaknya rasi bintang berdasarkan garis waktu (Timeline) dari tahun ke tahun.</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
            <i class="fa-solid fa-diagram-project" style="font-size: 4rem; color: var(--accent-emerald); margin-bottom: 15px;"></i>
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px; text-align: center;">Mencegah Plagiasi Tak Disengaja</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); text-align: center;">Banyak mahasiswa merasa topik risetnya "Novel/Baru", padahal sudah diteliti orang 5 tahun lalu. Alat ini mencegah klaim palsu (*false novelty*).</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Pernahkah dosen penguji bilang, 'Loh, kok tulisan tokoh A di tahun 2018 tidak Anda kutip?'",
    speakerNote: "Alat ini adalah jembatan menuju Modul 3 (Analisis Bibliometrik VOSviewer). Bedanya, ini versi instan dan terbatas secara komputasi web.",
    referenceNote: "connectedpapers.com & litmaps.com"
  },
  {
    id: 29,
    title: "Formula Rahasia: Prompting Pencarian AI",
    subtitle: "Jangan Samakan Mencari Jurnal dengan Ngobrol ChatGPT Biasa!",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <p style="font-size:1.1rem; margin-bottom: 1.5rem;">Menggunakan mesin akademis (Consensus/Elicit) butuh ketajaman merumuskan <strong>batasan</strong> (constraints).</p>
        
        <div style="background: rgba(59, 130, 246, 0.1); border-left: 5px solid var(--accent-blue); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
          <h4 style="color: var(--accent-sky); margin-bottom: 0.5rem;">Formula Prompt Standar:</h4>
          <p style="font-family: var(--font-code); font-weight: bold; color: white;">[Topik / Pertanyaan Utama] + [Batas Region/Waktu] + [Syarat Jenis Metodologi]</p>
        </div>
        
        <div style="display: flex; gap: 15px; margin-top: 20px;">
          <div style="flex: 1; border: 1px solid var(--border-color); padding: 15px; border-radius: 8px;">
            <p style="color: var(--accent-rose); font-weight: bold;"><i class="fa-solid fa-xmark"></i> Kurang Tepat (ChatGPT Style)</p>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 10px;">"Tolong buatkan saya latar belakang tentang kemiskinan di desa akibat covid."</p>
          </div>
          <div style="flex: 1; border: 1px solid var(--accent-emerald); background: rgba(16, 185, 129, 0.05); padding: 15px; border-radius: 8px;">
            <p style="color: var(--accent-emerald); font-weight: bold;"><i class="fa-solid fa-check"></i> Tepat Sasaran (Academic Search Style)</p>
            <p style="font-size: 0.85rem; color: var(--text-main); margin-top: 10px;">"What are the empirical impacts of unconditional cash transfers on rural poverty in Southeast Asia post-2020?"</p>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Mengapa kita tidak menyuruh AI 'menuliskan' skripsinya, tapi justru memberikan pertanyaan kritis (empirical impacts)?",
    speakerNote: "AI penelusuran (search engine) digunakan untuk mencari 'fakta', bukan 'mengarang' teks. Gunakan bahasa Inggris karena 95% data ilmiah dunia ditulis dalam bahasa Inggris.",
    referenceNote: "Panduan Literasi AI - Modul UGM."
  },

  // --- BAGIAN 5: ETIKA VALIDASI & HALUSINASI ---
  {
    id: 30,
    title: "Bagian 5: Etika Validasi & Filter Kebohongan AI",
    subtitle: "Aturan Main (SOP) Penggunaan AI di UGM",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-purple);">Babak 5<br>Skeptisisme Akademik</h1>
        <p class="subtitle">Halusinasi AI · Protokol Triangulasi · Panduan Etika UGM 2025</p>
      </div>
    `,
    discussionNote: "Apakah Anda percaya 100% pada semua jawaban komputer?",
    speakerNote: "Ini bagian terpenting dari seluruh kelas. Pustakawan adalah penjaga integritas akademik (Academic Integrity Gatekeeper).",
    referenceNote: "N/A"
  },
  {
    id: 31,
    title: "Bahaya Laten: Halusinasi Referensi",
    subtitle: "AI Terprogram untuk Menyenangkan, Bukan Jujur",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <h3 style="color: var(--accent-rose); margin-bottom: 10px; font-size: 1.2rem;"><i class="fa-solid fa-ghost"></i> Apa itu Halusinasi AI?</h3>
          <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">
            Sistem AI (seperti ChatGPT versi gratis) menggunakan model probabilitas kata. Jika ia tidak tahu jawaban faktualnya, ia cenderung <strong>memalsukan data</strong> agar jawabannya tetap terdengar cerdas dan meyakinkan.
          </p>
          <div style="background: rgba(244, 63, 94, 0.1); border-left: 3px solid var(--accent-rose); padding: 10px; margin-top: 15px; font-size: 0.85rem;">
            <strong style="color: #fecdd3;">Contoh Fatal:</strong> AI membuatkan daftar pustaka lengkap dengan Nama Pengarang, Tahun, Judul, dan DOI yang formatnya persis APA Style. Padahal... <strong>JURNAL ITU TIDAK PERNAH DITULIS ATAU TERBIT DI DUNIA NYATA!</strong>
          </div>
        </div>
        <div class="grid-col" style="text-align: center;">
          <i class="fa-solid fa-gavel" style="font-size: 5rem; color: var(--accent-rose); margin-bottom: 15px; opacity: 0.8;"></i>
          <h4 style="color: white; margin-bottom: 10px;">Pelanggaran Berat Etika</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            Mencantumkan sitasi fiktif di daftar pustaka skripsi/tesis UGM tergolong pemalsuan akademik berat (Pasal Etika UGM). Sanksinya pembatalan ujian hingga pencabutan gelar.
          </p>
        </div>
      </div>
    `,
    discussionNote: "Ada yang pernah meminta ChatGPT mencarikan jurnal, lalu saat dicari aslinya di Google sama sekali tidak ketemu? Itulah bukti nyata Halusinasi.",
    speakerNote: "Tekankan nada suara yang serius di slide ini. Halusinasi bukan *bug* (kesalahan teknis kecil), melainkan sifat bawaan (inherent feature) dari LLM yang belum terkoneksi pencarian *real-time*.",
    referenceNote: "Panduan Etika Akademik Pemanfaatan AI Generatif UGM (2025)."
  },
  {
    id: 32,
    title: "Protokol Wajib: Triangulasi (Cross-Check)",
    subtitle: "Bagaimana Memerangi Halusinasi AI?",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">Pustakawan UGM merumuskan <strong>Protokol Validasi Tiga Lapis (Triangulasi)</strong> setiap kali Anda menggunakan asisten kecerdasan buatan:</p>
        
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-emerald); border-radius: 8px; padding: 25px; display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem;">
          <p><strong>Langkah 1:</strong> Jika AI Generatif memberikan kutipan atau judul jurnal/buku kepada Anda...</p>
          <p><strong style="color: var(--accent-rose);">Langkah 2: JANGAN PERNAH</strong> langsung menyalin (Copy-Paste) judul tersebut ke naskah/daftar pustaka Anda.</p>
          <p><strong>Langkah 3:</strong> <em>Copy</em> judul tersebut secara utuh.</p>
          <p><strong style="color: var(--accent-sky);">Langkah 4 (VERIFIKASI):</strong> Tempel (<em>Paste</em>) judul tersebut ke dalam kotak pencarian <strong>Scopus, DOAJ, atau portal Summon (lib.ugm.ac.id)</strong>.</p>
          <p><strong>Langkah 5 (Lulus):</strong> Jika jurnal itu benar-benar muncul di sistem UGM/Scopus dan PDF-nya bisa dibuka, maka jurnal tersebut sah dan aman untuk dikutip.</p>
        </div>
      </div>
    `,
    discussionNote: "Mengapa kita memverifikasi ke Scopus/Summon dan bukan memverifikasi dengan menanyakannya kembali ke ChatGPT?",
    speakerNote: "ChatGPT memverifikasi dirinya sendiri adalah bias logika berputar (circular logic). Anda harus keluar dari sistem AI dan memverifikasi dengan 'sistem konvensional' (database terindeks manusia).",
    referenceNote: "Modul Literasi Informasi Perpustakaan UGM."
  },
  {
    id: 33,
    title: "Posisi Filosofis: Asisten, Bukan Otoritas",
    subtitle: "Aturan Main (Red Flag vs Green Flag)",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1; border: 1px solid var(--accent-rose); background: rgba(244,63,94,0.05); padding: 20px; border-radius: 8px;">
          <h3 style="color:var(--accent-rose); margin-bottom:1rem; text-align: center;"><i class="fa-solid fa-flag"></i> RED FLAG (Dilarang)</h3>
          <ul style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted); padding-left: 20px;">
            <li style="margin-bottom: 10px;">Menggantikan fungsi membaca: Menyuruh AI membaca lalu mem-<em>paste</em> ringkasan tersebut secara membabi-buta sebagai paragraf skripsi Anda.</li>
            <li style="margin-bottom: 10px;">Mengklaim sintesis teks yang digenerasi utuh oleh mesin sebagai buah pikiran orisinal.</li>
          </ul>
        </div>
        <div style="flex:1; border: 1px solid var(--accent-emerald); background: rgba(16,185,129,0.05); padding: 20px; border-radius: 8px;">
          <h3 style="color:var(--accent-emerald); margin-bottom:1rem; text-align: center;"><i class="fa-solid fa-flag"></i> GREEN FLAG (Etis & Dianjurkan)</h3>
          <ul style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted); padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>AI sebagai Pemantik (Brainstorming):</strong> Meminta ide variasi kata kunci atau struktur penulisan logis.</li>
            <li style="margin-bottom: 10px;"><strong>AI sebagai Peta Navigasi:</strong> Menggunakan ringkasan AI untuk menentukan <em>"Oh, paragraf pentingnya ada di halaman 14, saya akan membaca manual halaman 14 tersebut."</em></li>
          </ul>
        </div>
      </div>
    `,
    discussionNote: "Pertanyaan Etis: Siapa yang bertanggung jawab jika terjadi misinterpretasi data di skripsi Anda, Anda atau sang AI?",
    speakerNote: "Jawabannya adalah ANDA. AI tidak bisa dituntut pertanggungjawaban hukum (liability) maupun akademis. Anda sebagai penulis (author) yang memegang otoritas penuh.",
    referenceNote: "SOP Panduan Integritas Akademik."
  },
  {
    id: 34,
    title: "🖥️ Hands-On: Ujian Verifikasi AI",
    subtitle: "Lembar Kerja Praktik Mandiri (15 Menit)",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; line-height: 1.5; color: var(--accent-sky);"><strong>Misi Anda:</strong> Membuktikan kekuatan Triangulasi Data.</p>
        
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
          <p><strong>Langkah 1:</strong> Buka <a href="https://consensus.app" target="_blank" style="color: var(--accent-sky);">consensus.app</a>. Ketik: <em>"Does universal basic income reduce extreme poverty?"</em>.</p>
          <p><strong>Langkah 2:</strong> Lihat indikator *Consensus Meter*. (Apakah jawabannya bulat setuju atau ada bantahan?).</p>
          <p><strong>Langkah 3:</strong> Pilih 1 judul paper yang paling meyakinkan (misal terbitan tahun 2023/2024). Salin (Copy) judul teks aslinya.</p>
          <p><strong>Langkah 4 (The Check):</strong> Buka portal <strong>Summon lib.ugm.ac.id</strong>. *Paste* judul tersebut di kotak pencari. Buktikan apakah perpustakaan UGM memilikinya. Jika ya, unduh *Full-Text* PDF-nya!</p>
        </div>
        
        <p style="font-size: 0.90rem; color: var(--accent-emerald); text-align: center; margin-top: 10px; font-weight: bold;">
          Buktikan insting kepustakawanan (Librarian Instinct) Anda bekerja hari ini!
        </p>
      </div>
    `,
    discussionNote: "Siapa yang sukses menembus 'Paywall' (jurnal berbayar) jurnal terkait Basic Income tersebut berkat menggunakan ezproxy.ugm.ac.id?",
    speakerNote: "Keliling ruangan. Berikan tepuk tangan atau apresiasi bagi mahasiswa yang berhasil memecahkan teka-teki mengunduh PDF tertutup lewat gateway kampus.",
    referenceNote: "Perpustakaan FISIPOL UGM Workshop Sandbox."
  },
  
  // --- PENUTUP ---
  {
    id: 35,
    title: "Kesimpulan & Roadmap Berikutnya",
    subtitle: "Menggabungkan Kekuatan Manusia dan Mesin",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <ul class="slide-list list-check" style="font-size: 0.95rem; line-height: 1.6;">
            <li><i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> E-Resources UGM (JSTOR, ProQuest, dsb) adalah tambang utama emas literatur, AI hanyalah sekop pembarunya.</li>
            <li><i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> Transisi dari Boolean Logic kaku (Leksikal) menuju kueri Bahasa Natural berkonteks (Semantik).</li>
            <li><i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> Kewajiban absolut melaksanakan Triangulasi Cek-Fakta untuk melawan Halusinasi AI.</li>
          </ul>
        </div>
        <div class="grid-col" style="display: flex; flex-direction: column; justify-content: center; background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 8px;">
          <h4 style="color: var(--accent-sky); margin-bottom: 10px; text-align: center;"><i class="fa-solid fa-forward-step"></i> Apa Selanjutnya? (Modul 2)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); text-align: center; margin-bottom: 15px;">
            Setelah Anda mendapat ratusan PDF hari ini, bagaimana cara membacanya, menyimpannya, dan mengutip otomatis tanpa pusing?
          </p>
          <div style="font-weight: bold; color: white; text-align: center; font-size: 1.1rem;">
            Modul 2: Mendeley & NotebookLM (AI Reading Assistant)
          </div>
        </div>
      </div>
    `,
    discussionNote: "Sebelum kita tutup, dari semua alat baru yang didemokan hari ini (Consensus, Elicit, SciSpace, dll), mana yang akan Anda pakai malam ini untuk revisi skripsi/tesis Anda?",
    speakerNote: "Bungkus presentasi dengan rapi. Ingatkan mereka bahwa ini baru langkah pertama (Penelusuran), langkah membaca mendalam dan visualisasi ada di Modul 2 & 3.",
    referenceNote: "Sintesis Modul 1"
  },
  {
    id: 36,
    title: "Sesi Diskusi & Tanya Jawab",
    subtitle: "Silakan Ajukan Kendala Riset Anda",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
        <i class="fa-regular fa-comments" style="font-size: 5rem; color: var(--accent-amber); margin-bottom: 20px;"></i>
        <h2 style="font-size: 2.5rem; margin-bottom: 15px;">Q & A</h2>
        <p style="font-size: 1.2rem; color: var(--text-muted); text-align: center; max-width: 600px;">
          Adakah yang masih kebingungan membedakan antara EZProxy, Scopus, dan Summon? Atau punya kendala menyusun prompt di Consensus?
        </p>
      </div>
    `,
    discussionNote: "Jika ada kasus nyata riset mahasiswa di kelas yang sedang mandek (stuck), mari kita pecahkan secara langsung di proyektor sekarang juga.",
    speakerNote: "Alokasikan waktu 15-20 menit untuk Q&A terbuka. Jawab dengan taktis dan berikan demonstrasi live jika perlu.",
    referenceNote: "Q&A Session"
  },
  {
    id: 37,
    title: "Terima Kasih!",
    subtitle: "Mari Wujudkan Budaya Akademik Berintegritas Bersama",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-sky); font-size: 3rem;">Terima Kasih!</h1>
        <p style="font-size: 1.2rem; color: var(--text-main); margin-top: 15px; max-width: 700px; text-align: center; margin-bottom: 30px;">
          "Kecerdasan Buatan tidak akan menggantikan peneliti. Tetapi peneliti yang menggunakan Kecerdasan Buatan akan mengungguli mereka yang tidak."
        </p>
        
        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
          <div style="background: rgba(255,255,255,0.05); padding: 10px 20px; border-radius: 8px; font-size: 0.9rem;">
            <i class="fa-solid fa-envelope" style="color: var(--accent-cyan); margin-right: 8px;"></i> juvitaumarhadinata@ugm.ac.id
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 10px 20px; border-radius: 8px; font-size: 0.9rem;">
            <i class="fa-solid fa-globe" style="color: var(--accent-emerald); margin-right: 8px;"></i> juvitaumarhadinata.web.ugm.ac.id
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 10px 20px; border-radius: 8px; font-size: 0.9rem;">
            <i class="fa-brands fa-linkedin" style="color: #0a66c2; margin-right: 8px;"></i> Juvita Umar Hadinata
          </div>
        </div>
      </div>
    `,
    discussionNote: "Selesai.",
    speakerNote: "Tutup presentasi dengan semangat positif. Informasikan kepada peserta tempat mengunduh materi (Pojok Kelas Berbagi di digilib.fisipol).",
    referenceNote: "Closing Remarks."
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
  if (slide.layout !== "cover" && slide.layout !== "custom-widget") {
    // Only inject top navigation if not on cover or profile/agenda custom widgets
    headerHtml = `
      <header class="mock-web-header">
        <div class="mock-web-brand"><i class="fa-solid fa-book-open-reader"></i> <span>DIGILIB <strong>FISIPOL</strong></span></div>
        <nav class="mock-web-nav">
          <button class="mock-web-link ${slide.id <= 4 ? 'active' : ''}" onclick="jumpToSlide(1)">Home</button>
          <button class="mock-web-link ${slide.id > 4 && slide.id <= 13 ? 'active' : ''}" onclick="jumpToSlide(5)">1. Fasilitas Universitas</button>
          <button class="mock-web-link ${slide.id > 13 && slide.id <= 18 ? 'active' : ''}" onclick="jumpToSlide(14)">2. Open Data</button>
          <button class="mock-web-link ${slide.id > 18 && slide.id <= 21 ? 'active' : ''}" onclick="jumpToSlide(19)">3. Boolean Logic</button>
          <button class="mock-web-link ${slide.id > 21 && slide.id <= 29 ? 'active' : ''}" onclick="jumpToSlide(22)">4. Semantic AI</button>
          <button class="mock-web-link ${slide.id > 29 ? 'active' : ''}" onclick="jumpToSlide(30)">5. Etika Validasi</button>
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


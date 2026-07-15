/* ==========================================================================
   INTERACTIVE PRESENTATION ENGINE & DATASET (slides.js) - MODUL 4
   Modul 4: Administrasi Pasca-Sidang: Bebas Pustaka & ETD
   ========================================================================== */

const slideData = [
  // --- PEMBUKAAN ---
  {
    id: 1,
    title: "Administrasi Pasca-Sidang: Bebas Pustaka & ETD",
    subtitle: "Modul 4: Post-Defense Graduation Workflow",
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
        <div class="digilib-logo" style="display: flex; flex-direction: column; justify-content: center;">
          <div style="color: white; font-weight: 800; font-size: 1.2rem; letter-spacing: 1px;">DIGILIB<span style="color: var(--accent-amber); margin-left: 5px;">FISIPOL</span></div>
          <div style="color: rgba(255,255,255,0.7); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">Fakultas Ilmu Sosial dan Ilmu Politik UGM</div>
        </div>
      </div>
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-amber);">Administrasi Pasca-Sidang<br>Bebas Pustaka & ETD</h1>
        <p class="subtitle"><span style="background: var(--accent-sky); color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold;" class="brand-logo-inline">SIMASTER</span> SIMASTER · Turnitin · ETD Repository</p>
        <div class="cover-meta" style="margin-bottom: 20px;">
          <strong>Juvita Umar Hadinata</strong><br>
          Digital Library Staff | Academic Library FISIPOL UGM
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: "Tentang Pemateri",
    subtitle: "Juvita Umar Hadinata (Academic Library FISIPOL UGM)",
    layout: "custom-widget",
    content: `
      <div class="profile-card-container" style="background: rgba(30, 41, 59, 0.2); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 20px;">
        <div class="profile-card-photo" style="width: 150px; height: 150px; font-size: 4rem; margin: 0 auto; overflow: hidden; border: 4px solid var(--accent-amber);">
          <img src="https://github.com/jumarh.png" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <i class="fa-solid fa-user-tie" style="display: none; font-size: 4rem; line-height: 140px;"></i>
        </div>
        <div class="profile-card-info" style="text-align: center;">
          <div class="profile-card-name" style="font-size: 1.4rem;">Juvita Umar Hadinata</div>
          <div class="profile-card-title" style="font-size: 0.9rem; color: var(--accent-cyan);">Digital Library Staff | Academic Library FISIPOL UGM</div>
          <p style="font-size: 0.8rem; line-height: 1.4; color: var(--text-muted); max-width: 600px; margin: 5px auto;">
            Alumni Magister Manajemen Informasi dan Perpustakaan (MIP) UGM. Bertanggung jawab atas verifikasi akhir kelulusan (ETD/Bebas Pustaka) mahasiswa FISIPOL UGM.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "Agenda Kita Hari Ini",
    subtitle: "Modul 4 Roadmap",
    layout: "custom-widget",
    content: `
      <div class="search-agenda-container">
        <div class="search-agenda-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input class="search-agenda-input" type="text" value="Bagaimana cara mengurus syarat Yudisium tanpa ditolak?" readonly>
          <i class="fa-solid fa-microphone" style="color: var(--accent-amber);"></i>
        </div>
        <div class="search-agenda-dropdown">
          <div class="search-agenda-item" onclick="jumpToSlide(4)">
            <i class="fa-solid fa-stamp"></i>
            <div>Babak 1: <strong>Alur Bebas Pustaka</strong> — Birokrasi SIMASTER & Turnitin</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(11)">
            <i class="fa-solid fa-file-pdf"></i>
            <div>Babak 2: <strong>Standardisasi Unggah ETD</strong> — Mempersiapkan PDF Final</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(17)">
            <i class="fa-solid fa-lock"></i>
            <div>Babak 3: <strong>Lisensi Publikasi</strong> — Open Access vs Penangguhan (Embargo)</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(22)">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <div>Babak 4: <strong>Bedah Kasus Penolakan</strong> — Mengapa Karya Anda Berstatus "Revisi"?</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: "Bagian 1: Alur Bebas Pustaka",
    subtitle: "Langkah Pertama Menuju Yudisium",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-emerald);">Babak 1<br>Bebas Pustaka SIMASTER</h1>
        <p class="subtitle">Bebas Pinjam Fakultas · Bebas Pinjam Universitas · Turnitin</p>
      </div>
    `
  },
  {
    id: 5,
    title: "Mengapa Butuh Surat Bebas Pustaka?",
    subtitle: "Syarat Mutlak Pendaftaran Yudisium",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            Selamat! Anda telah menyelesaikan Sidang Skripsi/Tesis. Namun, gelar sarjana belum ditangan sebelum Anda mendaftar <strong>Yudisium</strong>.
          </p>
          <p style="font-size: 0.95rem; margin-top: 15px; color: var(--text-muted);">
            Surat Keterangan Bebas Pustaka adalah bukti otentik bahwa:
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.85rem; margin-top: 10px;">
            <li>Anda tidak memiliki tunggakan buku di Perpustakaan FISIPOL.</li>
            <li>Anda tidak memiliki tunggakan buku di Perpustakaan Pusat UGM.</li>
            <li>Karya akhir Anda telah lolos uji plagiasi (Turnitin).</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: rgba(244, 63, 94, 0.1); border-left: 4px solid var(--accent-rose); padding: 20px; border-radius: 4px;">
            <h4 style="color: var(--accent-rose); margin-bottom: 10px;"><i class="fa-solid fa-triangle-exclamation"></i> Jebakan Waktu</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
              Banyak mahasiswa menunda mengurus ini hingga H-1 batas pendaftaran yudisium. Padahal proses verifikasi oleh pustakawan membutuhkan waktu 1-3 hari kerja (terutama di masa puncak kelulusan). Jangan sampai Anda tertunda wisuda 3 bulan hanya karena hal ini!
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: "Birokrasi Dua Pintu",
    subtitle: "Fakultas vs Universitas",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="display: flex; gap: 20px; align-items: center; justify-content: center; margin-bottom: 2rem;">
          <div style="flex: 1; border: 1px solid var(--accent-sky); background: rgba(59,130,246,0.05); padding: 20px; border-radius: 8px; text-align: center;">
            <h4 style="color: var(--accent-sky); margin-bottom: 10px;">1. Bebas Pustaka Fakultas</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Diurus melalui layanan mandiri <strong>digilib.fisipol.ugm.ac.id</strong>. Termasuk penyerahan sumbangan buku (jika ada) dan pengecekan Turnitin fakultas.</p>
          </div>
          <div style="font-size: 2rem; color: var(--accent-emerald);">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div style="flex: 1; border: 1px solid var(--accent-emerald); background: rgba(16,185,129,0.05); padding: 20px; border-radius: 8px; text-align: center;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;">2. Bebas Pustaka Universitas</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Diurus melalui aplikasi <strong>SIMASTER</strong>. Syarat utamanya adalah unggah ETD (Electronic Theses and Dissertations).</p>
          </div>
        </div>
        <p style="text-align: center; color: var(--text-main); font-weight: bold;">Anda tidak bisa memproses nomor 2 sebelum nomor 1 selesai dan skripsi Anda sudah ditandatangani lengkap (Lembar Pengesahan).</p>
      </div>
    `
  },
  {
    id: 7,
    title: "Sertifikat Turnitin",
    subtitle: "Syarat Bebas Plagiarisme",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">Sebelum mengunggah, pastikan Naskah Anda bebas dari plagiasi menggunakan Turnitin (Batas Maksimal toleransi umumnya 20-25%).</p>
        
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
          <p><i class="fa-solid fa-envelope" style="color: var(--accent-amber);"></i> <strong>Permintaan Akun:</strong> Mahasiswa UGM bisa meminta akun *student* Turnitin ke perpustakaan. Jangan pakai jasa pengecekan di Shopee/Tokopedia! Naskah Anda bisa masuk ke repositori global mereka secara permanen (menjadi plagiat 100% saat diuji dosen).</p>
          <p><i class="fa-solid fa-file-invoice" style="color: var(--accent-emerald);"></i> <strong>Lembar Hasil:</strong> Lampirkan halaman pertama dari report PDF Turnitin yang menunjukkan persentase *Similarity Index*.</p>
        </div>
      </div>
    `
  },
  {
    id: 8,
    title: "Menu SIMASTER",
    subtitle: "Navigasi Menu Perpustakaan",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="text-align: center;">
        <i class="fa-solid fa-laptop-code" style="font-size: 4rem; color: var(--accent-sky); margin-bottom: 20px;"></i>
        <h3 style="margin-bottom: 15px;">Di mana letak menunya?</h3>
        <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 600px; margin: 0 auto 20px auto;">
          Login ke <strong>simaster.ugm.ac.id</strong> > Pilih Menu "Perpustakaan" (Atau Akademik > Perpustakaan) > Pilih "Bebas Pustaka".
        </p>
        <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; display: inline-block;">
          <p style="color: var(--text-main); font-family: var(--font-code); font-size: 0.9rem;">Pastikan status peminjaman buku Anda tertulis <strong>"Tidak ada pinjaman"</strong> di sistem.</p>
        </div>
      </div>
    `
  },
  {
    id: 9,
    title: "🖥️ Hands-On: Cek Status Peminjaman",
    subtitle: "Lembar Kerja Praktik (5 Menit)",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; color: var(--accent-emerald);"><strong>Cek Status Anda Sekarang:</strong></p>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
          <p>1. Buka browser HP atau Laptop Anda.</p>
          <p>2. Login ke <strong>simaster.ugm.ac.id</strong>.</p>
          <p>3. Navigasi ke menu Perpustakaan.</p>
          <p>4. Lihat apakah ada buku tandon perpustakaan pusat yang lupa Anda kembalikan sejak semester 2?</p>
        </div>
      </div>
    `
  },
  {
    id: 10,
    title: "Bagian 2: Standardisasi Unggah ETD",
    subtitle: "Electronic Theses and Dissertations",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-purple);">Babak 2<br>ETD Repository</h1>
        <p class="subtitle">Memecah File PDF · Watermark · Bookmark</p>
      </div>
    `
  },
  {
    id: 11,
    title: "Apa itu ETD UGM?",
    subtitle: "etd.repository.ugm.ac.id",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            <strong>ETD (Electronic Theses and Dissertations)</strong> adalah repositori institusi yang mengarsipkan seluruh karya akhir (Skripsi, Tesis, Disertasi, Tugas Akhir) mahasiswa UGM dalam format digital.
          </p>
          <p style="font-size: 0.95rem; margin-top: 15px; color: var(--text-muted);">
            Sistem ini adalah syarat wajib agar nama Anda terdaftar di Yudisium Universitas. Ini adalah warisan (legacy) ilmiah Anda bagi dunia.
          </p>
        </div>
        <div class="grid-col">
          <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--accent-emerald); padding: 20px; border-radius: 4px;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;">Format Wajib: PDF Text</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
              Dokumen wajib berformat PDF yang teksnya <strong>bisa diblok/disalin (Selectable Text)</strong>. Dilarang mengunggah file MS Word, atau PDF hasil scan gambar (Image-based PDF) kecuali untuk halaman Lembar Pengesahan yang mengandung tanda tangan basah.
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 12,
    title: "Memecah File Karya Akhir",
    subtitle: "Bukan 1 File PDF Gelondongan",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <p style="font-size:1.1rem; margin-bottom: 1.5rem; text-align: center;">Anda tidak boleh mengunggah Skripsi Anda dalam 1 buah file utuh. Harus dipecah (Split) sesuai standar repositori nasional.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <p style="color: var(--accent-sky); font-weight: bold;">1. Bagian Awal (Sampul - Daftar Isi)</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);">File PDF tersendiri.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <p style="color: var(--accent-sky); font-weight: bold;">2. Abstrak (Indo & Inggris)</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Hanya lembar abstrak saja.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <p style="color: var(--accent-sky); font-weight: bold;">3. Tiap Bab Terpisah</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Bab 1, Bab 2, Bab 3, dll dalam file PDF yang terpisah-pisah.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <p style="color: var(--accent-sky); font-weight: bold;">4. Bagian Akhir (Daftar Pustaka)</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Termasuk lampiran dokumentasi.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 13,
    title: "Lembar Pengesahan: Sangat Krusial!",
    subtitle: "Kesalahan Penolakan #1",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <h3 style="color: var(--accent-rose); margin-bottom: 15px;"><i class="fa-solid fa-stamp"></i> Tanda Tangan Lengkap</h3>
          <p style="font-size: 0.95rem; line-height: 1.6;">
            Lebih dari 60% penolakan unggah ETD disebabkan oleh masalah pada Lembar Pengesahan.
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.85rem; margin-top: 10px;">
            <li>Wajib sudah ditandatangani basah/digital oleh <strong>Seluruh Dosen Penguji</strong>.</li>
            <li>Wajib ditandatangani oleh <strong>Dekan/Kaprodi</strong> lengkap dengan Cap Stempel Instansi.</li>
            <li>Scan berwarna dengan resolusi yang jelas (bisa dibaca).</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: rgba(30, 41, 59, 0.4); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
            <i class="fa-solid fa-file-signature" style="font-size: 4rem; color: var(--accent-amber); margin-bottom: 15px;"></i>
            <h4 style="color: var(--accent-amber);">Penggabungan PDF</h4>
            <p style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 10px;">Sisipkan hasil scan halaman pengesahan ini ke dalam file "Bagian Awal" Anda sebelum diunggah ke sistem.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 14,
    title: "Watermark (Tanda Air)",
    subtitle: "Bukti Otentik Repositori UGM",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="text-align: center;">
        <h3 style="color: var(--accent-sky); margin-bottom: 1rem;">Cap Universitas Gadjah Mada</h3>
        <p style="font-size: 1.1rem; line-height: 1.6; max-width: 700px; margin: 0 auto 2rem auto;">
          Sebelum diunggah, seluruh file PDF <strong>wajib</strong> dibubuhi *Watermark* berlogo Universitas Gadjah Mada di tengah halaman secara transparan.
        </p>
        <div style="display: flex; justify-content: center; gap: 20px;">
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-emerald); padding: 15px; border-radius: 8px;">
            <p style="font-weight: bold; color: var(--accent-emerald);">Cara Menambahkan:</p>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 10px; text-align: left;">
              1. Buka MS Word.<br>
              2. Tab Design -> Watermark -> Custom Watermark.<br>
              3. Masukkan gambar logo UGM dengan opsi <em>Washout</em> tercentang.<br>
              4. Simpan as PDF.
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 15,
    title: "Bookmark (Daftar Isi Navigasi PDF)",
    subtitle: "Memudahkan Pembaca Daring",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">Setiap file PDF harus memiliki <strong>Bookmark</strong> interaktif. Jika Anda membuat Daftar Isi otomatis di MS Word (References > Table of Contents), saat di-Save As PDF, fitur "Create bookmarks using Headings" wajib dicentang.</p>
        <p style="font-size: 0.9rem; color: var(--text-muted);">Tujuannya agar pembaca/pustakawan yang memverifikasi bisa melompat langsung ke Bab tertentu di aplikasi PDF Reader.</p>
      </div>
    `
  },
  {
    id: 16,
    title: "Bagian 3: Lisensi Publikasi",
    subtitle: "Siapa yang Berhak Membaca Tesis Anda?",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-sky);">Babak 3<br>Hak Akses & Lisensi Publikasi</h1>
        <p class="subtitle">Open Access vs Penangguhan (Embargo)</p>
      </div>
    `
  },
  {
    id: 17,
    title: "Memilih Lisensi: Open Access",
    subtitle: "Berbagi Ilmu kepada Dunia (Default)",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="display: flex; gap: 20px; align-items: center; justify-content: center; height: 100%;">
          <div style="flex: 1; text-align: right;">
            <i class="fa-solid fa-lock-open" style="font-size: 5rem; color: var(--accent-emerald);"></i>
          </div>
          <div style="flex: 2; text-align: left;">
            <h3 style="color: var(--accent-emerald); margin-bottom: 10px;">Terbuka untuk Publik (Open Access)</h3>
            <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 15px;">Ini adalah opsi default dan sangat dianjurkan. Artinya, abstrak dan PDF utuh bab 1 hingga bab penutup karya Anda bisa diunduh oleh siapa saja dari penjuru dunia.</p>
            <ul style="font-size: 0.85rem; color: var(--text-muted);">
              <li>Meningkatkan visibilitas penelitian Anda.</li>
              <li>Berpotensi disitasi oleh peneliti lain.</li>
              <li>Amal jariyah intelektual.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 18,
    title: "Lisensi Terbatas & Embargo",
    subtitle: "Mengapa Skripsi Anda Disembunyikan?",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            Terkadang Anda ingin (atau diwajibkan oleh dosen) untuk membatasi akses PDF agar tidak bisa diunduh oleh publik. 
          </p>
          <div style="background: rgba(244, 63, 94, 0.1); border-left: 3px solid var(--accent-rose); padding: 10px; margin-top: 15px; font-size: 0.85rem;">
            <strong style="color: #fecdd3;">Akses Terbatas:</strong> Hanya abstrak yang terlihat publik. PDF utuh hanya bisa diakses oleh *civitas akademika* UGM yang *login* dengan SSO di dalam jaringan kampus.
          </div>
        </div>
        <div class="grid-col">
          <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 8px;">
            <h4 style="color: var(--accent-amber); margin-bottom: 10px;">Alasan Sah (Justifikasi) Embargo:</h4>
            <ul style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
              <li><strong>Rencana Jurnal Publikasi:</strong> Skripsi akan diterbitkan di Jurnal Internasional yang memiliki kebijakan menolak karya yang sudah terpublikasi *online* (Pre-print/ETD).</li>
              <li><strong>Paten/Kekayaan Intelektual:</strong> Mengandung prototipe komersial.</li>
              <li><strong>Data Sensitif Negara:</strong> Penelitian tentang pertahanan, atau yang berisiko pada keselamatan narasumber rahasia (Sosiologi Konflik).</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 19,
    title: "Surat Permohonan Penundaan Publikasi",
    subtitle: "Birokrasi Embargo",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">Jika Anda memilih Akses Terbatas/Embargo (misal ditunda publikasinya selama 2-3 tahun), Anda tidak bisa sekadar memilihnya di dropdown SIMASTER.</p>
        <p style="font-size: 0.95rem; color: var(--text-muted); border-left: 4px solid var(--accent-sky); padding-left: 15px;">Anda <strong>wajib melampirkan Surat Permohonan Penundaan Publikasi</strong> yang dicap dan ditandatangani oleh Dosen Pembimbing Skripsi. Surat ini diunggah bersama dokumen PDF ETD Anda.</p>
      </div>
    `
  },
  {
    id: 20,
    title: "Bagian 4: Troubleshooting & Pengecekan Akhir",
    subtitle: "Mengapa Pustakawan Menolak Unggahan Anda?",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-rose);">Babak 4<br>Kasus Penolakan Verifikasi</h1>
        <p class="subtitle">Memahami Status "Revisi" di SIMASTER</p>
      </div>
    `
  },
  {
    id: 21,
    title: "Dosa Fatal yang Sering Terjadi",
    subtitle: "Evaluasi Checklist Mandiri",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="background: rgba(244, 63, 94, 0.1); border: 1px solid var(--accent-rose); padding: 20px; border-radius: 8px;">
          <h4 style="color: var(--accent-rose); margin-bottom: 15px;">Jika pustakawan menekan tombol "Reject", kemungkinan besar Anda melakukan ini:</h4>
          <ul style="font-size: 0.95rem; color: var(--text-main); line-height: 1.8;">
            <li>1. Lupa menyisipkan halaman Lembar Pengesahan ber-cap basah.</li>
            <li>2. Judul di file PDF *berbeda* dengan judul yang diketik di *form* SIMASTER (kesalahan *typo* huruf besar-kecil).</li>
            <li>3. Logo/Watermark UGM diubah bentuknya secara *distorted* (menggepeng) atau posisinya bukan di tengah.</li>
            <li>4. Daftar pustaka di file PDF ternyata berantakan (tidak menggunakan gaya selingkung/Mendeley dengan benar).</li>
            <li>5. Memilih opsi "Embargo" tapi tidak melampirkan surat bukti dari Dosen Pembimbing.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 22,
    title: "Puncak Pencapaian: Surat Bebas Pustaka",
    subtitle: "Unduh dan Buktikan",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            Jika pustakawan telah memeriksa dan menyetujui ("Approved") ETD Anda, maka pada menu Bebas Pustaka di SIMASTER, status Anda akan berubah menjadi hijau.
          </p>
          <p style="font-size: 0.95rem; margin-top: 15px; color: var(--accent-emerald); font-weight: bold;">
            Anda kini berhak menekan tombol "Cetak Bukti Bebas Pustaka". 
          </p>
        </div>
        <div class="grid-col">
          <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--accent-emerald); padding: 20px; border-radius: 4px; display: flex; flex-direction: column; align-items: center;">
            <i class="fa-solid fa-file-circle-check" style="font-size: 4rem; color: var(--accent-emerald); margin-bottom: 15px;"></i>
            <p style="font-size: 0.85rem; color: var(--text-muted); text-align: center;">Lembaran PDF bersertifikat elektronik (QR Code) inilah yang akan Anda unggah ke sistem Pendaftaran Yudisium Akademik sebagai paspor kelulusan.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 23,
    title: "Kesimpulan & Penutup",
    subtitle: "Merawat Integritas Hingga Garis Akhir",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="text-align: center;">
        <h3 style="color: var(--accent-sky); margin-bottom: 1.5rem;">Perjalanan Panjang Anda Berakhir di Sini</h3>
        <p style="font-size: 1.1rem; line-height: 1.6; max-width: 800px; margin: 0 auto 2rem auto;">
          Repositori UGM adalah rak buku digital terbesar di Indonesia. Skripsi Anda bukan sekadar tumpukan kertas untuk dosen penguji, melainkan sumber data primer bagi peneliti-peneliti junior di angkatan berikutnya.
        </p>
        <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 20px; display: inline-block;">
          <p style="color: var(--accent-amber); font-weight: bold;">Jadilah teladan etika akademik. Pastikan dokumen yang Anda unggah benar-benar bebas dari plagiasi, diformat secara profesional, dan memiliki kedalaman intelektual.</p>
        </div>
      </div>
    `
  },
  {
    id: 24,
    title: "Sesi Diskusi & Tanya Jawab",
    subtitle: "Birokrasi Kelulusan",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
        <i class="fa-regular fa-comments" style="font-size: 5rem; color: var(--accent-amber); margin-bottom: 20px;"></i>
        <h2 style="font-size: 2.5rem; margin-bottom: 15px;">Q & A</h2>
        <p style="font-size: 1.2rem; color: var(--text-muted); text-align: center; max-width: 600px;">
          Punya kendala spesifik dengan Lembar Pengesahan yang sulit mendapatkan tanda tangan basah dosen? Mari diskusikan solusinya.
        </p>
      </div>
    `
  },
  {
    id: 25,
    title: "Terima Kasih, Selamat Lulus!",
    subtitle: "Akhir dari Modul 4",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-sky); font-size: 3rem;">Terima Kasih!</h1>
        <p style="font-size: 1.2rem; color: var(--text-main); margin-top: 15px; max-width: 700px; text-align: center; margin-bottom: 30px;">
          "Sebuah riset barulah paripurna ketika ia dipublikasikan, dibaca, dan memberikan manfaat nyata bagi khalayak ramai."
        </p>
        
        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
          <div style="background: rgba(255,255,255,0.05); padding: 10px 20px; border-radius: 8px; font-size: 0.9rem;">
            <i class="fa-solid fa-envelope" style="color: var(--accent-cyan); margin-right: 8px;"></i> juvitaumarhadinata@ugm.ac.id
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 10px 20px; border-radius: 8px; font-size: 0.9rem;">
            <i class="fa-solid fa-globe" style="color: var(--accent-emerald); margin-right: 8px;"></i> juvitaumarhadinata.web.ugm.ac.id
          </div>
        </div>
      </div>
    `
  }
];

let currentSlideIndex = 0;

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
  
  let headerHtml = "";
  if (slide.layout !== "cover" && slide.layout !== "custom-widget") {
    headerHtml = `
      <header class="mock-web-header">
        <div class="mock-web-brand"><i class="fa-solid fa-book-open-reader"></i> <span>DIGILIB <strong>FISIPOL</strong></span></div>
        <nav class="mock-web-nav">
          <button class="mock-web-link ${slide.id <= 3 ? 'active' : ''}" onclick="jumpToSlide(1)">Home</button>
          <button class="mock-web-link ${slide.id > 3 && slide.id <= 9 ? 'active' : ''}" onclick="jumpToSlide(4)">1. Birokrasi SIMASTER</button>
          <button class="mock-web-link ${slide.id > 9 && slide.id <= 15 ? 'active' : ''}" onclick="jumpToSlide(10)">2. Format ETD</button>
          <button class="mock-web-link ${slide.id > 15 && slide.id <= 19 ? 'active' : ''}" onclick="jumpToSlide(16)">3. Lisensi Akses</button>
          <button class="mock-web-link ${slide.id > 19 ? 'active' : ''}" onclick="jumpToSlide(20)">4. Troubleshooting</button>
        </nav>
      </header>
    `;
  }
  
  let slideHeaderHtml = "";
  if (slide.layout !== "cover" && slide.layout !== "custom-widget") {
    slideHeaderHtml = `
      <div class="slide-header">
        <h2>${slide.title}</h2>
        ${slide.subtitle ? '<div class="slide-subtitle">' + slide.subtitle + '</div>' : ''}
      </div>
    `;
  }
  
  wrapper.innerHTML = `
    ${headerHtml}
    ${slideHeaderHtml}
    <div class="slide-body">${slide.content}</div>
    <div class="slide-footer">
      <span style="font-size:0.7rem;">Juvita Umar Hadinata (FISIPOL UGM)</span>
      <span>Slide ${slide.id} / ${slideData.length}</span>
    </div>
  `;
  document.getElementById("slide-indicator").innerText = slide.id + " / " + slideData.length;
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
  document.getElementById("btn-fullscreen").addEventListener("click", toggleFullscreen);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " ") nextSlide();
    else if (e.key === "ArrowLeft") prevSlide();
    else if (e.key.toLowerCase() === "f") toggleFullscreen();
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
  document.getElementById("slide-drawer").classList.toggle("drawer-hidden");
}

function toggleFullscreen() {
  const element = document.getElementById("presentation-area");
  if (!document.fullscreenElement) {
    element.requestFullscreen().catch(err => console.error(err));
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
    item.innerHTML = '<div class="drawer-item-num">Slide ' + slide.id + '</div><div class="drawer-item-title">' + slide.title + '</div>';
    item.addEventListener("click", () => {
      currentSlideIndex = idx;
      renderSlide(currentSlideIndex);
      toggleSlideDrawer();
    });
    listContainer.appendChild(item);
  });
}

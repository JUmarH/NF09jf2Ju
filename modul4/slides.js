const slideData = [
  {
    id: 1,
    title: "Administrasi Pasca-Sidang: Bebas Pustaka & ETD",
    subtitle: "Modul 4: Post-Defense Graduation Workflow",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1>Bebas Pustaka & Unggah Mandiri ETD</h1>
        <p class="subtitle">Modul 4: Administrasi Pasca-Sidang di Lingkungan UGM</p>
        <div class="cover-meta" style="margin-bottom: 20px;">
          <strong>Juvita Umar Hadinata</strong><br>
          Digital Library Staff | Academic Library FISIPOL UGM
        </div>
        <div style="font-size: 0.85rem; color: var(--accent-sky); font-weight: 500;">
          <i class="fa-solid fa-globe"></i> <a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a>
        </div>
      </div>
    `,
    speakerNote: "Selamat di Modul terakhir! Saatnya mengurus birokrasi kelulusan tanpa drama revisi."
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
            Alumni Magister Manajemen Informasi dan Perpustakaan (MIP) UGM. Bertanggung jawab atas pengelolaan sistem repositori digital (ETD) FISIPOL, proses verifikasi karya akhir, dan diseminasi informasi akademik kepada calon wisudawan.
          </p>
        </div>
      </div>
    `,
    speakerNote: "Perkenalan singkat."
  },
  {
    id: 3,
    title: "Apa itu Bebas Pustaka?",
    subtitle: "Langkah Pertama Menuju Yudisium",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem; align-items:center;">
        <div style="flex:1;">
          <h3 style="color:var(--accent-emerald); margin-bottom:1rem;"><i class="fa-solid fa-check-double"></i> Syarat Mutlak Kelulusan</h3>
          <p style="font-size:1.1rem; margin-bottom:1rem;">Bebas Pustaka adalah bukti sah bahwa Anda tidak lagi memiliki tanggungan (pinjaman buku/denda) di Perpustakaan Pusat UGM maupun Perpustakaan Fakultas.</p>
          <ul style="line-height:1.8; color:var(--text-light);">
            <li>Cek tagihan denda di akun SIMASTER.</li>
            <li>Kembalikan semua buku fisik ke loket sirkulasi.</li>
            <li>Status Bebas Pustaka akan terekam secara sistem, tidak perlu lagi meminta stempel basah.</li>
          </ul>
        </div>
        <div style="flex:1; background:rgba(30,41,59,0.5); padding:2rem; border-radius:8px; border:1px solid #334155; text-align:center;">
          <i class="fa-solid fa-money-bill-wave" style="font-size:3rem; color:#ef4444; margin-bottom:1rem;"></i>
          <h4 style="color:#f1f5f9; margin-bottom:0.5rem;">Sering Terlupa!</h4>
          <p style="font-size:0.9rem; color:var(--text-muted);">Banyak mahasiswa telat mendaftar yudisium karena baru sadar punya denda Rp. 50.000 dari buku yang dipinjam 2 tahun lalu.</p>
        </div>
      </div>
    `,
    speakerNote: "Bebas pustaka harus diurus H-7 sebelum deadline Yudisium agar aman."
  },
  {
    id: 4,
    title: "Simulasi Menu SIMASTER",
    subtitle: "Navigasi Administrasi Perpustakaan",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="background:#0f172a; border-radius:8px; border:1px solid #334155; overflow:hidden;">
          <div style="background:#1e293b; padding:10px 15px; border-bottom:1px solid #334155; display:flex; gap:15px; align-items:center;">
            <div style="color:var(--accent-sky); font-weight:bold; font-size:1.1rem;"><i class="fa-solid fa-bars"></i> SIMASTER UGM</div>
          </div>
          <div style="display:flex; height:300px;">
            <div style="width:200px; background:#1e293b; padding:15px; border-right:1px solid #334155;">
              <ul style="list-style:none; line-height:2.5; font-size:0.9rem; color:var(--text-muted);">
                <li><i class="fa-solid fa-house"></i> Beranda</li>
                <li style="color:#fff;"><i class="fa-solid fa-folder-open"></i> Administrasi
                  <ul style="list-style:none; padding-left:20px; line-height:2;">
                    <li><i class="fa-solid fa-graduation-cap"></i> Yudisium</li>
                    <li style="color:var(--accent-sky);"><i class="fa-solid fa-book"></i> Perpustakaan</li>
                  </ul>
                </li>
                <li><i class="fa-solid fa-gear"></i> Pengaturan</li>
              </ul>
            </div>
            <div style="flex:1; padding:20px; position:relative;">
              <h3 style="color:#fff; margin-bottom:15px;">Layanan Perpustakaan</h3>
              <div style="display:flex; gap:15px;">
                <div style="background:#334155; padding:15px; border-radius:8px; width:200px; text-align:center; cursor:pointer; border:2px solid var(--accent-sky);">
                  <i class="fa-solid fa-file-circle-check" style="font-size:2rem; color:var(--accent-sky); margin-bottom:10px;"></i>
                  <div>Bebas Pustaka</div>
                </div>
                <div style="background:#334155; padding:15px; border-radius:8px; width:200px; text-align:center; cursor:pointer;">
                  <i class="fa-solid fa-cloud-arrow-up" style="font-size:2rem; color:#facc15; margin-bottom:10px;"></i>
                  <div>Unggah Mandiri ETD</div>
                </div>
              </div>
              <div class="mock-cursor" style="position:absolute; left:260px; top:110px; font-size:1.5rem; color:#fff; text-shadow: 0 2px 5px rgba(0,0,0,0.5);">
                <i class="fa-solid fa-arrow-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    speakerNote: "Tunjukkan lokasi pasti menu tersebut agar mahasiswa tidak bingung."
  },
  {
    id: 5,
    title: "Standardisasi Unggah ETD",
    subtitle: "Electronic Theses and Dissertations",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <h3 style="color:var(--accent-sky); margin-bottom:1rem; text-align:center;">File Splitting (Pemecahan File PDF)</h3>
        <p style="text-align:center; margin-bottom:1.5rem;">Sistem UGM menolak file Tesis utuh 200 halaman. Anda WAJIB memecah PDF menjadi beberapa bagian. Batas maksimal ukuran: <strong>50 MB per file</strong>.</p>
        
        <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:10px; text-align:center;">
          <div style="background:rgba(14, 165, 233, 0.1); padding:1rem; border:1px solid var(--accent-sky); border-radius:8px;">
            <i class="fa-regular fa-file-pdf" style="font-size:2rem; color:var(--accent-sky); margin-bottom:10px;"></i><br>
            <strong style="font-size:0.85rem;">Halaman Depan</strong><br>
            <span style="font-size:0.7rem; color:var(--text-muted);">(Cover, Pengesahan, Abstrak)</span>
          </div>
          <div style="background:rgba(16, 185, 129, 0.1); padding:1rem; border:1px solid var(--accent-emerald); border-radius:8px;">
            <i class="fa-regular fa-file-pdf" style="font-size:2rem; color:var(--accent-emerald); margin-bottom:10px;"></i><br>
            <strong style="font-size:0.85rem;">Bab 1</strong><br>
            <span style="font-size:0.7rem; color:var(--text-muted);">(Pendahuluan)</span>
          </div>
          <div style="background:rgba(245, 158, 11, 0.1); padding:1rem; border:1px solid var(--accent-amber); border-radius:8px;">
            <i class="fa-regular fa-file-pdf" style="font-size:2rem; color:var(--accent-amber); margin-bottom:10px;"></i><br>
            <strong style="font-size:0.85rem;">Bab 2 - Bab n-1</strong><br>
            <span style="font-size:0.7rem; color:var(--text-muted);">(Isi / Pembahasan)</span>
          </div>
          <div style="background:rgba(16, 185, 129, 0.1); padding:1rem; border:1px solid var(--accent-emerald); border-radius:8px;">
            <i class="fa-regular fa-file-pdf" style="font-size:2rem; color:var(--accent-emerald); margin-bottom:10px;"></i><br>
            <strong style="font-size:0.85rem;">Bab Penutup</strong><br>
            <span style="font-size:0.7rem; color:var(--text-muted);">(Kesimpulan)</span>
          </div>
          <div style="background:rgba(168, 85, 247, 0.1); padding:1rem; border:1px solid var(--accent-purple); border-radius:8px;">
            <i class="fa-regular fa-file-pdf" style="font-size:2rem; color:var(--accent-purple); margin-bottom:10px;"></i><br>
            <strong style="font-size:0.85rem;">Daftar Pustaka</strong><br>
            <span style="font-size:0.7rem; color:var(--text-muted);">(Referensi & Lampiran)</span>
          </div>
        </div>
      </div>
    `,
    speakerNote: "Ini bagian yang paling banyak direvisi. Mahasiswa sering salah memotong halaman bab."
  },
  {
    id: 6,
    title: "Lembar Pengesahan: Sangat Krusial!",
    subtitle: "Alasan Penolakan #1",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem; align-items:center;">
        <div style="flex:1;">
          <h3 style="color:#ef4444; margin-bottom:1rem;"><i class="fa-solid fa-triangle-exclamation"></i> Tanda Tangan Harus Lengkap!</h3>
          <p style="font-size:1.1rem; line-height:1.6;">Berkas <strong>Halaman Depan</strong> wajib memuat Lembar Pengesahan (Approval Sheet) yang sudah ditandatangani <strong>lengkap</strong> oleh:</p>
          <ul style="margin-left:20px; line-height:1.6; margin-top:10px; font-weight:bold; color:#facc15;">
            <li>Dosen Pembimbing</li>
            <li>Dosen Penguji 1 & 2</li>
            <li>Dekan / Kaprodi (dengan Stempel Fakultas)</li>
          </ul>
          <p style="margin-top:1rem; color:var(--text-muted);">Jika kurang satu saja tanda tangan, sistem akan menolak (Reject) proses unggah Anda.</p>
        </div>
        <div style="flex:1; background:#0f172a; padding:1rem; border-radius:8px; border:2px dashed #ef4444; position:relative;">
          <div style="text-align:center; font-family:serif; color:#cbd5e1; background:#fff; padding:20px; border-radius:4px; color:#000;">
            <h3>LEMBAR PENGESAHAN</h3>
            <p style="margin-top:20px; font-size:0.7rem;">Tesis ini telah dipertahankan di depan dewan penguji.</p>
            <div style="display:flex; justify-content:space-between; margin-top:40px;">
              <div style="border-top:1px solid #000; width:40%; padding-top:5px; font-size:0.6rem;">Penguji 1 (Ttd)</div>
              <div style="border-top:1px solid #000; width:40%; padding-top:5px; font-size:0.6rem;">Penguji 2 (Ttd)</div>
            </div>
            <div style="margin-top:40px; margin-left:30%; border-top:1px solid #000; width:40%; padding-top:5px; font-size:0.6rem;">Dekan FISIPOL (Ttd & Cap)</div>
          </div>
          <div style="position:absolute; top:40%; left:20%; color:rgba(239, 68, 68, 0.8); font-size:4rem; transform:rotate(-15deg); border:4px solid; padding:10px; border-radius:10px; font-weight:bold;">
            REJECTED
          </div>
        </div>
      </div>
    `,
    speakerNote: "Contoh dokumen yang ditolak karena tidak ada tanda tangannya."
  },
  {
    id: 7,
    title: "Kebijakan Akses Terbatas ETD FISIPOL",
    subtitle: "Mengapa Fulltext Tesis Saya Tidak Bisa Di-Download Publik?",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(30,41,59,0.5); border-left:5px solid var(--accent-purple); padding:2rem; border-radius:0.5rem;">
        <h3 style="color:var(--accent-purple); margin-bottom:1rem;"><i class="fa-solid fa-lock"></i> Hak Kekayaan Intelektual (HKI)</h3>
        <p style="font-size:1.1rem; line-height:1.7;">Kebijakan Fakultas Ilmu Sosial dan Ilmu Politik (FISIPOL) UGM sangat melindungi orisinalitas karya mahasiswanya. Oleh karena itu, pengaturan *default* untuk naskah ETD (Theses & Dissertations) adalah:</p>
        
        <div style="display:flex; gap:15px; margin-top:1.5rem;">
          <div style="flex:1; background:#0f172a; padding:15px; border-radius:8px; border:1px solid #334155;">
            <h4 style="color:var(--accent-sky);"><i class="fa-solid fa-globe"></i> Akses Publik (Internet)</h4>
            <p style="font-size:0.85rem; margin-top:5px;">Hanya bisa melihat/download <strong>Abstrak</strong> dan <strong>Daftar Pustaka</strong>.</p>
          </div>
          <div style="flex:1; background:#0f172a; padding:15px; border-radius:8px; border:1px solid #334155;">
            <h4 style="color:var(--accent-emerald);"><i class="fa-solid fa-network-wired"></i> Akses Intranet Kampus</h4>
            <p style="font-size:0.85rem; margin-top:5px;">Mahasiswa aktif dan Dosen dapat membaca <strong>Fulltext (Bab 1 - Penutup)</strong> menggunakan Wi-Fi UGM / SSO.</p>
          </div>
        </div>
      </div>
    `,
    speakerNote: "Jelaskan bahwa ini untuk mencegah plagiarisme oleh pihak luar sebelum naskah tersebut dipublikasikan menjadi jurnal."
  },
  {
    id: 8,
    title: "Memilih Lisensi Publikasi",
    subtitle: "Open Access vs Penangguhan",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <p style="margin-bottom:1.5rem;">Saat mengunggah di SIMASTER, Anda akan diminta memilih opsi ketersediaan naskah. Pilihlah dengan bijak:</p>
        
        <table style="width:100%; border-collapse:collapse; background:#0f172a; border-radius:8px; overflow:hidden;">
          <thead>
            <tr style="background:#1e293b; color:var(--accent-sky);">
              <th style="padding:15px; text-align:left;">Opsi di SIMASTER</th>
              <th style="padding:15px; text-align:left;">Kapan digunakan?</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #334155;">
              <td style="padding:15px; font-weight:bold;"><i class="fa-solid fa-lock-open" style="color:var(--accent-emerald);"></i> Open Access</td>
              <td style="padding:15px; font-size:0.9rem;">Anda ingin naskah Anda dibaca dan disitasi oleh siapa saja secara global (Cocok untuk Skripsi S1).</td>
            </tr>
            <tr style="border-bottom:1px solid #334155;">
              <td style="padding:15px; font-weight:bold;"><i class="fa-solid fa-clock" style="color:#facc15;"></i> Embargo 3 - 12 Bulan</td>
              <td style="padding:15px; font-size:0.9rem;">Naskah sedang dalam proses <em>submit</em> ke jurnal ilmiah, sehingga tidak boleh dipublikasikan ganda (<em>Double Publication</em>) sementara waktu.</td>
            </tr>
            <tr>
              <td style="padding:15px; font-weight:bold;"><i class="fa-solid fa-ban" style="color:#ef4444;"></i> Penangguhan Publikasi</td>
              <td style="padding:15px; font-size:0.9rem;">Data riset mengandung rahasia negara, HKI berbayar, atau data sensitif korban. <strong>Wajib mengunggah Surat Pernyataan Penangguhan bertandatangan Dekan.</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    speakerNote: "Jika jurnal sedang di-review Elsevier, pilih Embargo agar editor jurnal tidak mendeteksi plagiarism dari ETD UGM."
  },
  {
    id: 9,
    title: "Troubleshooting: Mengatasi Penolakan",
    subtitle: "Mengapa status saya "Perlu Perbaikan"?",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1;">
          <h3 style="color:#facc15; margin-bottom:1rem;"><i class="fa-solid fa-clipboard-question"></i> Top 3 Kesalahan Umum</h3>
          <ol style="margin-left:20px; line-height:1.8; color:var(--text-light);">
            <li><strong>Penulisan Judul (PUEBI/EYD)</strong><br><span style="font-size:0.85rem; color:var(--text-muted);">Tidak boleh huruf kapital SEMUA. Harus <em>Title Case</em>.</span></li>
            <li><strong>Isian Abstrak Terbalik</strong><br><span style="font-size:0.85rem; color:var(--text-muted);">Kolom abstrak Inggris diisi bahasa Indonesia, dan sebaliknya.</span></li>
            <li><strong>Kualitas PDF Rusak</strong><br><span style="font-size:0.85rem; color:var(--text-muted);">Hasil scan halaman pengesahan buram/hitam gelap sehingga nama penguji tidak terbaca.</span></li>
          </ol>
        </div>
        <div style="flex:1; background:rgba(239, 68, 68, 0.1); border-left:4px solid #ef4444; padding:1.5rem; border-radius:8px;">
          <h4 style="color:#ef4444; margin-bottom:0.5rem;"><i class="fa-solid fa-comment-dots"></i> Cek Catatan Petugas!</h4>
          <p style="font-size:0.9rem;">Jika ditolak, jangan panik. Buka kembali riwayat unggahan Anda di SIMASTER. Petugas Perpustakaan Pusat pasti memberikan <strong>Catatan Revisi</strong> (misal: <em>"Ttd penguji 2 belum ada, harap unggah ulang file Halaman Depan"</em>).</p>
          <p style="font-size:0.9rem; margin-top:10px; font-weight:bold;">Perbaiki sesuai catatan, lalu klik tombol "Kirim Ulang".</p>
        </div>
      </div>
    `,
    speakerNote: "Mahasiswa sering panik saat ditolak. Padahal cukup baca note dari admin."
  },
  {
    id: 10,
    title: "Cetak Bukti Akhir Penyerahan",
    subtitle: "Syarat Mutlak Daftar Yudisium",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="text-align:center;">
        <div style="display:inline-block; background:rgba(16, 185, 129, 0.1); border:2px dashed #10b981; padding:2rem; border-radius:12px; max-width:600px;">
          <i class="fa-solid fa-file-circle-check" style="font-size:4rem; color:#10b981; margin-bottom:1rem;"></i>
          <h3 style="color:var(--text-main); margin-bottom:1rem;">Status: <span style="color:#10b981;">DISETUJUI</span></h3>
          <p style="font-size:1.1rem; color:var(--text-light); margin-bottom:1.5rem;">Selamat! Begitu status berubah menjadi disetujui, tombol <strong>Cetak Bukti Penyerahan Karya Akhir</strong> akan muncul berwarna biru di SIMASTER.</p>
          
          <div style="background:#1e293b; color:var(--accent-sky); padding:10px; border-radius:6px; font-weight:bold; font-size:0.9rem;">
            <i class="fa-solid fa-print"></i> Download file PDF ini dan serahkan ke Akademik Fakultas untuk mendaftar Yudisium / Wisuda.
          </div>
        </div>
      </div>
    `,
    speakerNote: "Ini goal akhir kita. Mendapatkan kertas sakti bebas pustaka."
  },
  {
    id: 11,
    title: "Terima Kasih & Daftar Referensi",
    subtitle: "Akhir dari Modul 4",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="background: rgba(30,41,59,0.5); padding: 2rem; border-radius: 8px; margin-bottom: 2rem; text-align:center;">
          <h2 style="color:var(--accent-sky); margin-bottom:1rem;">Selamat Wisuda!</h2>
          <p style="font-size:1.1rem;">Semoga Modul 4 ini memperlancar proses administrasi kelulusan Anda di FISIPOL UGM.</p>
          <div style="margin-top:1.5rem; font-size:1.2rem; color:var(--accent-purple);">
            <i class="fa-solid fa-envelope"></i> juvitaumarhadinata@ugm.ac.id
          </div>
        </div>
        
        <h4 style="color:var(--text-light); margin-bottom:1rem; border-bottom:1px solid #334155; padding-bottom:5px;">Daftar Referensi Modul 4:</h4>
        <ul style="font-size:0.85rem; color:var(--text-muted); line-height:1.6; list-style-type:circle; padding-left:20px;">
          <li>Perpustakaan UGM. (2025). <em>Prosedur Standardisasi File Unggah Mandiri ETD</em>. lib.ugm.ac.id.</li>
          <li>Direktorat Teknologi Informasi UGM. (2025). <em>Panduan SIMASTER Modul Perpustakaan Mahasiswa</em>. dssdi.ugm.ac.id.</li>
          <li>Perpustakaan FISIPOL UGM. (2025). <em>Kebijakan Hak Cipta dan Akses Repositori Digital Fakultas</em>. digilib.fisipol.ugm.ac.id.</li>
        </ul>
      </div>
    `,
    speakerNote: "Sesi penutup. Ucapkan selamat kepada para calon wisudawan."
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
  
  // 3.1 Inject Web Navigation khusus Modul 4
  let headerHtml = "";
  if (slide.layout !== "cover") {
    headerHtml = `
      <header class="mock-web-header">
        <div class="mock-web-brand"><i class="fa-solid fa-book-open-reader"></i> <span>DIGILIB <strong>FISIPOL</strong></span></div>
        <nav class="mock-web-nav">
          <button class="mock-web-link ${slide.id === 1 ? 'active' : ''}" onclick="jumpToSlide(1)">Home</button>
          <button class="mock-web-link ${slide.id > 1 && slide.id <= 4 ? 'active' : ''}" onclick="jumpToSlide(3)">1. Bebas Pustaka</button>
          <button class="mock-web-link ${slide.id > 4 && slide.id <= 6 ? 'active' : ''}" onclick="jumpToSlide(5)">2. Splitting ETD</button>
          <button class="mock-web-link ${slide.id === 7 || slide.id === 8 ? 'active' : ''}" onclick="jumpToSlide(7)">3. Lisensi & Akses</button>
          <button class="mock-web-link ${slide.id >= 9 ? 'active' : ''}" onclick="jumpToSlide(9)">4. Verifikasi & Cetak</button>
        </nav>
      </header>
    `;
  }
  
  wrapper.innerHTML = `
    ${headerHtml}
    
    <div class="slide-header">
      <h2>${slide.title}</h2>
      ${slide.subtitle ? `<div class="slide-subtitle">${slide.subtitle}</div>` : ''}
    </div>
    
    <div class="slide-body">
      ${slide.content}
    </div>
    
    <div class="slide-footer">
      <span style="font-size:0.7rem;">Juvita Umar Hadinata (<a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a>)</span>
      <span>Slide ${slide.id} / ${slideData.length}</span>
    </div>
  `;
  
  document.getElementById("slide-indicator").innerText = `${slide.id} / ${slideData.length}`;
  
  document.getElementById("discussion-note-box").innerHTML = slide.discussionNote || "A,??";
  document.getElementById("speaker-note-box").innerHTML = slide.speakerNote || "A,??";
  document.getElementById("reference-note-box").innerHTML = slide.referenceNote || "A,??";
  
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
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
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
    item.innerHTML = `
      <div class="drawer-item-num">Slide ${slide.id}</div>
      <div class="drawer-item-title">${slide.title}</div>
    `;
    item.addEventListener("click", () => {
      currentSlideIndex = idx;
      renderSlide(currentSlideIndex);
      toggleSlideDrawer();
    });
    listContainer.appendChild(item);
  });
}

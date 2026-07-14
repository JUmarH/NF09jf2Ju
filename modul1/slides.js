const slideData = [
  {
    id: 1,
    title: "Penelusuran Semantik AI",
    subtitle: "Modul 1: Boolean Logic, Consensus AI, SciSpace, & Elicit",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1>Penelusuran Semantik AI</h1>
        <p class="subtitle">Modul 1: Boolean Logic, Consensus AI, SciSpace, & Elicit</p>
        <div class="cover-meta" style="margin-bottom: 20px;">
          <strong>Juvita Umar Hadinata</strong><br>
          Digital Library Staff | Academic Library FISIPOL UGM
        </div>
        <div style="font-size: 0.85rem; color: var(--accent-sky); font-weight: 500;">
          <i class="fa-solid fa-globe"></i> <a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a>
        </div>
      </div>
    `,
    speakerNote: "Selamat pagi dan selamat datang di Modul 1 Workshop Perpustakaan FISIPOL UGM."
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
            Alumni Magister Manajemen Informasi dan Perpustakaan (MIP) UGM. Fokus pada pengembangan ekosistem data ilmiah, pengelolaan repositori digital (ETD), asisten penelusuran pustaka, dan visualisasi bibliometrik di lingkungan FISIPOL UGM.
          </p>
        </div>
      </div>
    `,
    speakerNote: "Perkenalan singkat."
  },
  {
    id: 3,
    title: "Layanan Perpustakaan Universitas Gadjah Mada",
    subtitle: "Gerbang Utama Literatur Ilmiah (lib.ugm.ac.id)",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1; background:rgba(30, 41, 59, 0.5); padding:1.5rem; border-radius:8px;">
          <h3 style="color:var(--accent-sky); margin-bottom:1rem;"><i class="fa-solid fa-building-columns"></i> lib.ugm.ac.id</h3>
          <p>Portal resmi Perpustakaan Pusat UGM. Menyediakan akses ke puluhan database jurnal internasional langganan UGM (Scopus, ScienceDirect, JSTOR, dll).</p>
        </div>
        <div style="flex:1; background:rgba(168, 85, 247, 0.1); border:1px solid var(--accent-purple); padding:1.5rem; border-radius:8px;">
          <h3 style="color:var(--accent-purple); margin-bottom:1rem;"><i class="fa-solid fa-wifi"></i> EZProxy (Remote Access)</h3>
          <p>Wajib digunakan saat mengakses jurnal dari luar jaringan kampus (dari rumah/kos). Login menggunakan kredensial <strong>SSO UGM</strong> agar sistem mendeteksi Anda sebagai sivitas UGM.</p>
        </div>
      </div>
    `,
    speakerNote: "Perpustakaan pusat adalah gerbang utama menuju literatur internasional."
  },
  {
    id: 4,
    title: "Layanan Eksklusif Perpustakaan FISIPOL UGM",
    subtitle: "Akses Spesifik Sivitas FISIPOL (ugm.id/digilib)",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(239, 68, 68, 0.1); border-left:5px solid #ef4444; padding:2rem; border-radius:0.5rem;">
        <h3 style="color:#ef4444; margin-bottom:1rem;"><i class="fa-solid fa-graduation-cap"></i> Portal OSS FISIPOL UGM (ugm.id/digilib)</h3>
        <p style="font-size:1.2rem;">Layanan perpustakaan khusus untuk sivitas akademik FISIPOL UGM. Menyediakan repositori lokal, koleksi ilmu sosial dan politik terkurasi, dan peminjaman ruang diskusi.</p>
        <p style="margin-top:1rem; font-size:1.1rem; font-weight:bold; color:var(--text-light);">Syarat Akses Penuh: Wajib login menggunakan akun email <strong>@ugm.ac.id</strong> untuk membuka fasilitas unggah mandiri dan akses ETD (Electronic Theses & Dissertations) FISIPOL.</p>
      </div>
    `,
    speakerNote: "Tekankan bahwa ETD FISIPOL ada di OSS, wajib pakai email UGM."
  },
  {
    id: 5,
    title: "Sumber Informasi Lokal & Nasional",
    subtitle: "Portal Garuda, SINTA, & Neliti",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:1.5rem;">
        <div style="flex:1; background:rgba(30,41,59,0.3); padding:1rem; border-radius:8px; text-align:center;">
          <i class="fa-solid fa-book-journal-whills" style="font-size:3rem; color:var(--accent-sky); margin-bottom:1rem;"></i>
          <h4>Garuda (Garba Rujukan Digital)</h4>
          <p style="font-size:0.9rem; color:var(--text-muted);">Database puluhan ribu jurnal berbahasa Indonesia dari berbagai universitas nasional.</p>
        </div>
        <div style="flex:1; background:rgba(30,41,59,0.3); padding:1rem; border-radius:8px; text-align:center;">
          <i class="fa-solid fa-chart-line" style="font-size:3rem; color:var(--accent-cyan); margin-bottom:1rem;"></i>
          <h4>SINTA</h4>
          <p style="font-size:0.9rem; color:var(--text-muted);">Indeks kinerja riset dan pemeringkatan jurnal terakreditasi Kemdikbudristek (S1-S6).</p>
        </div>
        <div style="flex:1; background:rgba(30,41,59,0.3); padding:1rem; border-radius:8px; text-align:center;">
          <i class="fa-solid fa-magnifying-glass-location" style="font-size:3rem; color:var(--accent-purple); margin-bottom:1rem;"></i>
          <h4>Neliti</h4>
          <p style="font-size:0.9rem; color:var(--text-muted);">Mesin pencari repositori institusi dan jurnal ilmiah di Indonesia.</p>
        </div>
      </div>
    `,
    speakerNote: "Jangan lupakan riset-riset lokal dari peneliti Indonesia."
  },
  {
    id: 6,
    title: "Navigasi Summon 2.0 & OPAC",
    subtitle: "Mesin Pencari 'One-Search' & Koleksi Cetak",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1;">
          <h3 style="color:var(--accent-sky); margin-bottom:1rem;"><i class="fa-solid fa-magnifying-glass"></i> Summon 2.0</h3>
          <p>Fitur <em>Discovery Service</em> di lib.ugm.ac.id. Mencari di semua database jurnal langganan UGM dalam satu kali klik. Sangat efisien untuk literatur review tahap awal.</p>
        </div>
        <div style="flex:1;">
          <h3 style="color:var(--accent-purple); margin-bottom:1rem;"><i class="fa-solid fa-book"></i> OPAC (Katalog Cetak)</h3>
          <p>Meski di era digital, banyak buku teori fundamental FISIPOL hanya tersedia versi cetak. Gunakan OPAC untuk mencari letak buku di rak perpustakaan.</p>
        </div>
      </div>
    `,
    speakerNote: "Koleksi cetak tidak bisa diabaikan, terutama untuk buku babon (teori klasik)."
  },
  {
    id: 7,
    title: "Boolean Logic: Simulasi",
    subtitle: "AND, OR, NOT",
    layout: "custom-widget",
    content: `
      <div class="slide-layout-standard">
        <p style="margin-bottom: 1rem;">Coba berinteraksi dengan operator logika di bawah ini untuk melihat bagaimana hasil pencarian menyempit atau meluas.</p>
        <div style="display:flex; flex-direction:column; gap:1rem; background: rgba(30,41,59,0.5); padding: 1.5rem; border-radius: 8px;">
          
          <div style="display:flex; gap:1rem; align-items:center;">
            <div style="flex:1;"><input type="text" value="Democracy" readonly class="mock-input" style="width:100%; text-align:center; background:#1e293b;"></div>
            <select id="boolean-operator" class="mock-input" style="font-weight:bold; color:var(--accent-cyan); width:120px;">
              <option value="AND">AND</option>
              <option value="OR">OR</option>
              <option value="NOT">NOT</option>
            </select>
            <div style="flex:1;"><input type="text" value="Digital" readonly class="mock-input" style="width:100%; text-align:center; background:#1e293b;"></div>
          </div>
          
          <div style="display:flex; justify-content:center; margin-top:1rem;">
            <div id="boolean-venn-diagram" style="width: 300px; height: 180px; position:relative;">
              <!-- Circle A -->
              <div id="venn-a" style="position:absolute; width:140px; height:140px; border-radius:50%; background:rgba(59, 130, 246, 0.5); border: 2px solid #3b82f6; left:10px; top:20px; display:flex; align-items:center; justify-content:flex-start; padding-left:10px; font-weight:bold; font-size:0.8rem; z-index:1; mix-blend-mode: screen;">Democracy</div>
              <!-- Circle B -->
              <div id="venn-b" style="position:absolute; width:140px; height:140px; border-radius:50%; background:rgba(236, 72, 153, 0.5); border: 2px solid #ec4899; right:10px; top:20px; display:flex; align-items:center; justify-content:flex-end; padding-right:10px; font-weight:bold; font-size:0.8rem; z-index:1; mix-blend-mode: screen;">Digital</div>
              <!-- Intersection Highlights -->
              <div id="venn-result-text" style="position:absolute; bottom:-10px; width:100%; text-align:center; font-weight:bold; color:var(--accent-cyan);">Pilih Operator...</div>
            </div>
          </div>

        </div>
      </div>
    `,
    speakerNote: "Visualisasi diagram Venn. AND mempersempit, OR memperluas."
  },
  {
    id: 8,
    title: "Wildcard, Truncation & Exact Phrase",
    subtitle: "Mengoptimalkan Sintaksis Pencarian",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:1.5rem;">
        <div style="flex:1; background:rgba(30,41,59,0.5); padding:1.5rem; border-radius:8px;">
          <h3 style="color:#facc15; margin-bottom:1rem;">Truncation ( * )</h3>
          <p>Mencari seluruh variasi akhiran kata.</p>
          <p class="mock-input" style="font-family:monospace; margin-top:0.5rem; text-align:center;">Democra*</p>
          <p style="font-size:0.8rem; color:var(--text-muted); text-align:center;">&rarr; Democracy, Democratic, Democratization</p>
        </div>
        
        <div style="flex:1; background:rgba(30,41,59,0.5); padding:1.5rem; border-radius:8px;">
          <h3 style="color:#fb923c; margin-bottom:1rem;">Wildcard ( ? )</h3>
          <p>Mencari variasi satu karakter ejaan.</p>
          <p class="mock-input" style="font-family:monospace; margin-top:0.5rem; text-align:center;">Wom?n</p>
          <p style="font-size:0.8rem; color:var(--text-muted); text-align:center;">&rarr; Woman, Women</p>
        </div>
        
        <div style="flex:1; background:rgba(16, 185, 129, 0.2); border:1px solid #10b981; padding:1.5rem; border-radius:8px;">
          <h3 style="color:#10b981; margin-bottom:1rem;">Exact Phrase ( " " )</h3>
          <p>Mencegah pemecahan kalimat frasa utuh.</p>
          <p class="mock-input" style="font-family:monospace; margin-top:0.5rem; text-align:center;">"Social Media"</p>
          <p style="font-size:0.8rem; color:var(--text-muted); text-align:center;">&rarr; Wajib berdampingan, bukan "Social" dan "Media" terpisah.</p>
        </div>
      </div>
    `,
    speakerNote: "Teknik ini wajib sebelum masuk ke Scopus/Summon."
  },
  {
    id: 9,
    title: "Era Penelusuran Semantik AI",
    subtitle: "Mencari Makna Konteks, Bukan Hanya Kata",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="display:flex; justify-content: space-between; align-items:center; gap: 2rem;">
          <div style="flex:1; text-align:center; padding:2rem; background: rgba(30,41,59,0.5); border-radius: 8px;">
            <i class="fa-solid fa-magnifying-glass" style="font-size:3rem; color:#64748b; margin-bottom:1rem;"></i>
            <h3>Pencarian Tradisional</h3>
            <p style="color:var(--text-muted); font-size:0.9rem;">Hanya mencocokkan kata kunci sama persis. Tidak paham konteks.</p>
          </div>
          <div style="font-size: 2rem; color: var(--accent-cyan);"><i class="fa-solid fa-arrow-right-arrow-left"></i></div>
          <div style="flex:1; text-align:center; padding:2rem; background: rgba(14, 165, 233, 0.1); border:1px solid var(--accent-sky); border-radius: 8px;">
            <i class="fa-solid fa-brain" style="font-size:3rem; color:var(--accent-sky); margin-bottom:1rem;"></i>
            <h3 style="color:var(--accent-sky);">AI Semantic Search</h3>
            <p style="color:var(--text-muted); font-size:0.9rem;">Memahami makna kalimat, merangkum jawaban dari isi paper, dan mendukung <em>Natural Language</em>.</p>
          </div>
        </div>
      </div>
    `,
    speakerNote: "AI mengubah cara kita melakukan literatur review."
  },
  {
    id: 10,
    title: "Consensus AI: Simulasi Pencarian",
    subtitle: "Menemukan Klaim Berbasis Bukti",
    layout: "custom-widget",
    content: `
      <div class="slide-layout-standard">
        <p style="margin-bottom: 1rem;">Consensus AI membaca ribuan paper dan menghitung proporsi kesepakatan ilmuwan (Yes/No/Maybe).</p>
        
        <div style="background: rgba(30,41,59,0.8); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="display:flex; gap:10px; margin-bottom:1.5rem;">
            <input type="text" value="Does social media increase political polarization?" readonly class="mock-input" style="flex:1; font-size:1.1rem; padding:10px; background:#0f172a; border:1px solid #334155;">
            <button class="mock-btn" style="background:var(--accent-sky);"><i class="fa-solid fa-magnifying-glass"></i> Ask</button>
          </div>
          
          <div style="display:flex; align-items:center; gap: 2rem; background: #0f172a; padding: 1.5rem; border-radius:8px;">
            <div style="flex: 0 0 150px; text-align:center;">
              <div style="font-size:2.5rem; font-weight:bold; color:#10b981;">75%</div>
              <div style="font-size:0.9rem; color:var(--text-muted);">Say "Yes"</div>
            </div>
            
            <div style="flex:1;">
              <h4 style="color:#fff; margin-bottom:0.5rem;"><i class="fa-solid fa-wand-magic-sparkles" style="color:var(--accent-purple);"></i> Consensus Summary</h4>
              <p style="font-size:0.9rem; line-height:1.6; color:var(--text-light);">
                Multiple studies indicate that social media use is associated with increased political polarization, primarily through the formation of echo chambers and algorithmic curation of partisan content <sup>[1][2][3]</sup>.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    speakerNote: "Consensus sangat bagus untuk membuktikan hipotesis awal."
  },
  {
    id: 11,
    title: "SciSpace (Typeset.io)",
    subtitle: "Asisten Membaca PDF (Copilot)",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1;">
          <ul style="font-size:1.3rem; line-height:1.8;">
            <li><strong style="color:var(--accent-sky);">Literature Search:</strong> Menampilkan ringkasan tabel dan <em>insights</em> dari jurnal.</li>
            <li><strong style="color:var(--accent-purple);">PDF Copilot:</strong> Fitur interaktif untuk "mengobrol" dengan dokumen.</li>
            <li><strong style="color:#facc15;">Explain Math/Table:</strong> Memblokir rumus metodologi kuantitatif kompleks untuk dijelaskan AI ke bahasa sederhana.</li>
          </ul>
        </div>
        <div style="flex:1; text-align:center; background: rgba(30,41,59,0.5); padding: 1rem; border-radius:8px; border: 1px dashed var(--accent-cyan);">
           <i class="fa-solid fa-file-pdf" style="font-size:4rem; color:#ef4444; margin-bottom:1rem;"></i>
           <br><i class="fa-solid fa-arrow-down" style="color:var(--accent-cyan); margin-bottom:1rem;"></i><br>
           <i class="fa-solid fa-robot" style="font-size:3rem; color:var(--accent-purple); margin-bottom:1rem;"></i>
           <p style="font-size:0.9rem;"><em>"Tolong jelaskan metodologi sampling yang digunakan dalam paper ini?"</em></p>
        </div>
      </div>
    `,
    speakerNote: "SciSpace sangat populer di kalangan mahasiswa S2/S3 untuk bedah jurnal."
  },
  {
    id: 12,
    title: "Elicit.org",
    subtitle: "Sintesis dan Matrik Literatur",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(236, 72, 153, 0.1); border-left:5px solid #ec4899; padding:2rem; border-radius:0.5rem;">
        <h3 style="color:#ec4899; margin-bottom:1rem;"><i class="fa-solid fa-table"></i> Membangun Matrik Literatur Otomatis</h3>
        <p style="font-size:1.2rem;">Elicit dapat membaca kumpulan PDF Anda secara serentak dan mengekstrak variabel tertentu (misal: <em>Sample Size, Methodology, Main Findings</em>) langsung ke dalam format tabel (CSV).</p>
        <p style="margin-top:1rem; color:var(--text-muted);">Alat ini adalah "senjata rahasia" dalam mempercepat penulisan bab Tinjauan Pustaka (*Literature Review*) untuk menemukan celah penelitian (*Research Gap*).</p>
      </div>
    `,
    speakerNote: "Elicit membantu mempercepat proses reviu sistematik. Menghindari pekerjaan manual membaca satu per satu untuk buat matrik."
  },
  {
    id: 13,
    title: "Pemetaan Jejaring Paper",
    subtitle: "Connected Papers & Litmaps",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem; align-items:center;">
        <div style="flex:1;">
          <h3 style="color:var(--accent-sky); margin-bottom:1rem;"><i class="fa-solid fa-project-diagram"></i> Visualisasi Sitasi</h3>
          <p style="margin-bottom:1rem;">Masukkan satu judul paper referensi utama Anda (Bibit / <em>Seed Paper</em>).</p>
          <ul style="font-size:1.1rem; line-height:1.8;">
            <li><strong>Connected Papers:</strong> Membangun klaster visual kemiripan paper.</li>
            <li><strong>Litmaps:</strong> Mengurutkan peta sitasi berdasarkan linimasa waktu (Tahun terbit).</li>
          </ul>
        </div>
        <div style="flex:1; background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="8" fill="%233b82f6"/><circle cx="20" cy="30" r="5" fill="%23a855f7"/><circle cx="80" cy="20" r="6" fill="%23ec4899"/><circle cx="70" cy="80" r="4" fill="%2310b981"/><line x1="50" y1="50" x2="20" y2="30" stroke="%23334155" stroke-width="1"/><line x1="50" y1="50" x2="80" y2="20" stroke="%23334155" stroke-width="1"/><line x1="50" y1="50" x2="70" y2="80" stroke="%23334155" stroke-width="1"/></svg>') center center / contain no-repeat; height:200px;">
        </div>
      </div>
    `,
    speakerNote: "Gunakan untuk memastikan referensi utama Anda tidak ketinggalan zaman (Missing Prior Art)."
  },
  {
    id: 14,
    title: "Etika UGM: Skeptisisme Sehat",
    subtitle: "Hal. 8 - Panduan Etika Akademik UGM 2025",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(239,68,68,0.1); border-left:5px solid #ef4444; padding:2rem; border-radius:0.5rem;">
        <h3 style="color:#ef4444; margin-bottom:1rem;"><i class="fa-solid fa-triangle-exclamation"></i> Bahaya Halusinasi AI</h3>
        <p style="font-size:1.2rem;">AI Generatif seringkali bertindak "terlalu percaya diri" dengan menciptakan kutipan atau bahkan judul jurnal fiktif (*Halusinasi Referensi*).</p>
        <p style="margin-top:1rem; color:var(--text-muted); font-style:italic;">Mandat UGM: "Selalu lakukan verifikasi silang (Cross-check) untuk setiap klaim substantif dan rujukan yang dihasilkan oleh AI ke pangkalan data primer (misal: Scopus/Summon) sebelum mengutipnya ke dalam karya akademik."</p>
      </div>
    `,
    speakerNote: "Halusinasi AI adalah musuh terbesar integritas akademik. Banyak mahasiswa S1 terjebak mensitasi paper bodong buatan ChatGPT."
  },
  {
    id: 15,
    title: "Posisi Etis AI di Universitas",
    subtitle: "AI Bukan Otoritas Final",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1; background: rgba(16,185,129,0.1); border: 1px solid #10b981; padding: 2rem; border-radius: 8px;">
          <h3 style="color:#10b981; margin-bottom:1rem; text-align:center;"><i class="fa-solid fa-check-circle" style="font-size:2rem;"></i><br><br>Asisten Pemantik Ide</h3>
          <p style="text-align:center;">Menggunakan AI untuk *brainstorming* kata kunci, meringkas jurnal rumit, dan menemukan teori yang relevan secara cepat adalah **tindakan etis** (Stimulator Ide).</p>
        </div>
        <div style="flex:1; background: rgba(239,68,68,0.1); border: 1px solid #ef4444; padding: 2rem; border-radius: 8px;">
          <h3 style="color:#ef4444; margin-bottom:1rem; text-align:center;"><i class="fa-solid fa-xmark-circle" style="font-size:2rem;"></i><br><br>Otoritas Final (Plagiasi)</h3>
          <p style="text-align:center;">Menyalin langsung hasil sintesis AI Generatif secara utuh tanpa analisis kritis manusia (*Cognitive Debt*) adalah **pelanggaran etika** berat.</p>
        </div>
      </div>
    `,
    speakerNote: "AI adalah co-pilot, manusia tetap memegang kendali (Pilot)."
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
  
  // 3.1 Inject Web Navigation khusus Modul 1
  let headerHtml = "";
  if (slide.layout !== "cover") {
    headerHtml = `
      <header class="mock-web-header">
        <div class="mock-web-brand"><i class="fa-solid fa-book-open-reader"></i> <span>DIGILIB <strong>FISIPOL</strong></span></div>
        <nav class="mock-web-nav">
          <button class="mock-web-link ${slide.id === 1 ? 'active' : ''}" onclick="jumpToSlide(1)">Home</button>
          <button class="mock-web-link ${slide.id > 1 && slide.id <= 6 ? 'active' : ''}" onclick="jumpToSlide(2)">1. Akses Portal & Koleksi</button>
          <button class="mock-web-link ${slide.id > 6 && slide.id <= 8 ? 'active' : ''}" onclick="jumpToSlide(7)">2. Boolean & Sintaksis</button>
          <button class="mock-web-link ${slide.id > 8 && slide.id <= 13 ? 'active' : ''}" onclick="jumpToSlide(9)">3. Semantic AI Tools</button>
          <button class="mock-web-link ${slide.id > 13 ? 'active' : ''}" onclick="jumpToSlide(14)">4. Etika Pencarian</button>
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
  
  // Custom Widget Activators
  activateWidgets(slide.id);
  
  // Highlight active item in drawer
  document.querySelectorAll(".drawer-item").forEach((el, idx) => {
    if (idx === index) el.classList.add("active");
    else el.classList.remove("active");
  });
}

function activateWidgets(slideId) {
  if (slideId === 7) {
    const operatorSelect = document.getElementById('boolean-operator');
    const vennA = document.getElementById('venn-a');
    const vennB = document.getElementById('venn-b');
    const vennResult = document.getElementById('venn-result-text');
    
    if (operatorSelect) {
      operatorSelect.addEventListener('change', (e) => {
        const op = e.target.value;
        if (op === "AND") {
          vennA.style.background = "rgba(59, 130, 246, 0.2)";
          vennB.style.background = "rgba(236, 72, 153, 0.2)";
          vennResult.innerText = "Hasil: Irisan tengah (Artikel yg mengandung kedua kata)";
          vennResult.style.color = "var(--accent-cyan)";
        } else if (op === "OR") {
          vennA.style.background = "rgba(59, 130, 246, 0.6)";
          vennB.style.background = "rgba(236, 72, 153, 0.6)";
          vennResult.innerText = "Hasil: Seluruh area (Artikel yg mengandung salah satu/keduanya)";
          vennResult.style.color = "#fb923c";
        } else if (op === "NOT") {
          vennA.style.background = "rgba(59, 130, 246, 0.6)";
          vennB.style.background = "rgba(30, 41, 59, 0.8)";
          vennResult.innerText = "Hasil: Area biru saja (Mengecualikan artikel yg mengandung kata Digital)";
          vennResult.style.color = "#ef4444";
        }
      });
      // trigger initial state
      operatorSelect.dispatchEvent(new Event('change'));
    }
  }
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

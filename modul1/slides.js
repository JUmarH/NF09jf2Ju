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
      </div>
    `,
    speakerNote: "Selamat pagi dan selamat datang di Modul 1 Workshop Perpustakaan FISIPOL UGM."
  },
  {
    id: 2,
    title: "Akses E-Resources UGM",
    subtitle: "Gerbang Utama Literatur Ilmiah",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <ul style="font-size:1.5rem; line-height:2;">
          <li>Akses jaringan database jurnal internasional via <strong>lib.ugm.ac.id</strong></li>
          <li>Gunakan kredensial <strong>SSO UGM</strong> untuk masuk.</li>
          <li><strong style="color:var(--accent-cyan);">EZProxy (Remote Access)</strong> memungkinkan akses jurnal dari rumah seolah Anda berada di jaringan UGM.</li>
        </ul>
      </div>
    `,
    speakerNote: "Ingat untuk selalu login menggunakan SSO UGM."
  },
  {
    id: 3,
    title: "OPAC (Online Public Access Catalog)",
    subtitle: "Katalog Cetak & Skripsi",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1;">
          <h3 style="color:var(--accent-sky); margin-bottom:1rem;">Buku Cetak</h3>
          <p>Gunakan OPAC untuk mencari ketersediaan fisik buku di rak Perpustakaan FISIPOL maupun perpustakaan pusat.</p>
        </div>
        <div style="flex:1;">
          <h3 style="color:var(--accent-purple); margin-bottom:1rem;">Tugas Akhir / ETD</h3>
          <p>Skripsi dan Tesis cetak dapat dicari melalui sistem ini sebelum meminta akses ke pustakawan.</p>
        </div>
      </div>
    `,
    speakerNote: "Tidak semua ada di digital, buku cetak tetap relevan."
  },
  {
    id: 4,
    title: "Navigasi Summon 2.0",
    subtitle: "Mesin Pencari 'One-Search' UGM",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(59,130,246,0.1); border-left:5px solid #3b82f6; padding:2rem; border-radius:0.5rem;">
        <h3 style="color:#3b82f6; margin-bottom:1rem;">Apa itu Summon?</h3>
        <p style="font-size:1.2rem;">Summon adalah <em>Discovery Service</em>. Seperti Google, tapi khusus untuk <strong>seluruh database jurnal yang dilanggan UGM</strong> secara bersamaan.</p>
        <p style="margin-top:1rem; color:var(--text-muted);">Sangat berguna untuk pencarian awal yang meluas sebelum mengerucut ke database spesifik seperti Scopus atau JSTOR.</p>
      </div>
    `,
    speakerNote: "Summon sangat menghemat waktu pencarian awal."
  },
  {
    id: 5,
    title: "Boolean Logic",
    subtitle: "Dasar Pencarian Terstruktur",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <p style="font-size:1.3rem; margin-bottom: 2rem;">Sebelum mengenal AI, Anda WAJIB menguasai logika dasar pencarian pangkalan data.</p>
        <ul style="font-size:1.5rem; line-height:2;">
          <li><strong style="color:var(--accent-sky);">AND:</strong> Mempersempit hasil (A &cap; B) - Kedua syarat harus terpenuhi.</li>
          <li><strong style="color:var(--accent-cyan);">OR:</strong> Memperluas hasil (A &cup; B) - Salah satu atau keduanya terpenuhi. (Sangat berguna untuk sinonim)</li>
          <li><strong style="color:#ef4444;">NOT:</strong> Mengecualikan kata kunci tertentu dari hasil.</li>
        </ul>
      </div>
    `,
    speakerNote: "Boolean logic adalah fundamental."
  },
  {
    id: 6,
    title: "Visualisasi AND & OR",
    subtitle: "Contoh Kasus Query",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1;">
          <h3 style="color:var(--accent-sky); margin-bottom:1rem;">Contoh AND</h3>
          <p><code>Democracy AND Digital</code></p>
          <p style="color:var(--text-muted);">Hanya memunculkan artikel yang mengandung KEDUA kata tersebut.</p>
        </div>
        <div style="flex:1;">
          <h3 style="color:var(--accent-cyan); margin-bottom:1rem;">Contoh OR</h3>
          <p><code>Democracy OR Autocracy</code></p>
          <p style="color:var(--text-muted);">Memunculkan artikel yang membahas salah satu dari topik tersebut.</p>
        </div>
      </div>
    `,
    speakerNote: "Gunakan OR untuk padanan kata yang maknanya sama."
  },
  {
    id: 7,
    title: "Wildcard & Truncation",
    subtitle: "Memotong Akar Kata (?, *)",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <ul style="font-size:1.4rem; line-height:2;">
          <li><strong style="color:#facc15;">Truncation (*) :</strong> Mengambil semua variasi akhiran kata.<br>
          <em>Contoh:</em> <code>Democra*</code> &rarr; Democracy, Democratic, Democratization</li>
          <li><strong style="color:#fb923c;">Wildcard (?) :</strong> Mengganti satu karakter huruf.<br>
          <em>Contoh:</em> <code>Wom?n</code> &rarr; Woman, Women</li>
        </ul>
      </div>
    `,
    speakerNote: "Sangat berguna untuk mengatasi perbedaan ejaan bahasa Inggris (British vs US)."
  },
  {
    id: 8,
    title: "Exact Phrase Search",
    subtitle: 'Kekuatan Tanda Kutip (" ")',
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(16, 185, 129, 0.1); border-left:5px solid #10b981; padding:2rem; border-radius:0.5rem;">
        <h3 style="color:#10b981; margin-bottom:1rem;">Menghindari Pemecahan Frasa</h3>
        <p style="font-size:1.2rem;">Tanpa tanda kutip, mencari <code>Artificial Intelligence</code> akan mencari kata <em>Artificial</em> DAN kata <em>Intelligence</em> yang mungkin terpisah jauh.</p>
        <p style="margin-top:1rem; color:var(--text-muted);">Gunakan <strong>"Artificial Intelligence"</strong> agar sistem mencari tepat frasa dua kata tersebut secara berdampingan.</p>
      </div>
    `,
    speakerNote: "Tanda kutip wajib digunakan untuk konsep teori."
  },
  {
    id: 9,
    title: "Era Penelusuran Semantik AI",
    subtitle: "Mencari Makna Konteks, Bukan Hanya Kata",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <p style="font-size:1.3rem; margin-bottom: 2rem;">Pencarian tradisional bergantung pada kecocokan <em>Keyword</em>. AI Semantic Search memahami <strong>konteks kalimat dan klaim</strong>.</p>
        <ul style="font-size:1.5rem; line-height:2;">
          <li>AI membaca jutaan isi paper dan mengekstrak klaim kesimpulan.</li>
          <li>Anda dapat mengetik pertanyaan utuh (Natural Language) alih-alih merumuskan Query yang rumit.</li>
          <li>Hasil yang disajikan berupa <em>Summary</em> (Ringkasan) ber-sitasi, bukan sekadar daftar tautan.</li>
        </ul>
      </div>
    `,
    speakerNote: "AI mengubah cara kita melakukan literatur review."
  },
  {
    id: 10,
    title: "Consensus AI",
    subtitle: "Menemukan Klaim Berbasis Bukti",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1;">
          <h3 style="color:var(--accent-sky); margin-bottom:1rem;">Fungsi Utama</h3>
          <p>Mencari meteran konsensus (Yes/No/Maybe) dari para ilmuwan terhadap pertanyaan spesifik Anda.</p>
        </div>
        <div style="flex:1;">
          <h3 style="color:var(--accent-purple); margin-bottom:1rem;">Skenario Penggunaan</h3>
          <p>Ketik: <em>"Apakah media sosial meningkatkan polarisasi politik?"</em> - Consensus akan menampilkan persentase setuju/tidak berdasarkan paper yang terindeks.</p>
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
      <div class="slide-layout-standard">
        <ul style="font-size:1.5rem; line-height:2;">
          <li>Memiliki fitur pencarian literatur dengan ekstraksi tabel wawasan (*insights*).</li>
          <li><strong>Copilot AI:</strong> Unggah PDF jurnal yang sulit dibaca. Blok rumus matematika, metodologi, atau tabel, dan minta AI menjelaskannya dengan bahasa sederhana.</li>
          <li>Bisa merangkum hasil temuan (*findings*) secara instan.</li>
        </ul>
      </div>
    `,
    speakerNote: "SciSpace sangat populer di kalangan mahasiswa tingkat akhir."
  },
  {
    id: 12,
    title: "Elicit.org",
    subtitle: "Sintesis dan Matrik Literatur",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(236, 72, 153, 0.1); border-left:5px solid #ec4899; padding:2rem; border-radius:0.5rem;">
        <h3 style="color:#ec4899; margin-bottom:1rem;">Membangun Matrik Literatur Otomatis</h3>
        <p style="font-size:1.2rem;">Elicit dapat membaca kumpulan PDF dan mengekstrak variabel tertentu (misal: Jumlah Sampel, Metodologi, Limitasi Riset) ke dalam tabel yang rapi.</p>
        <p style="margin-top:1rem; color:var(--text-muted);">Sangat membantu dalam bab Tinjauan Pustaka (*Literature Review*) untuk menemukan celah penelitian (*Research Gap*).</p>
      </div>
    `,
    speakerNote: "Elicit membantu mempercepat proses reviu sistematik."
  },
  {
    id: 13,
    title: "Pemetaan Jejaring Paper",
    subtitle: "Connected Papers & Litmaps",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <ul style="font-size:1.5rem; line-height:2;">
          <li><strong style="color:var(--accent-cyan);">Connected Papers:</strong> Temukan satu *paper* relevan (bibit), dan sistem akan membuat graf visual jurnal lain yang sitasinya saling terkait.</li>
          <li><strong style="color:var(--accent-sky);">Litmaps:</strong> Melacak evolusi sebuah topik (Linimasa Waktu) dari *paper* klasik ke riset paling modern.</li>
          <li>Berfungsi meminimalisir kemungkinan Anda terlewat jurnal penting pendahulu (*Prior Art*).</li>
        </ul>
      </div>
    `,
    speakerNote: "Gunakan untuk memastikan referensi utama Anda tidak ketinggalan zaman."
  },
  {
    id: 14,
    title: "Etika UGM: Skeptisisme Sehat",
    subtitle: "Hal. 8 - Panduan Etika Akademik UGM 2025",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(239,68,68,0.1); border-left:5px solid #ef4444; padding:2rem; border-radius:0.5rem;">
        <h3 style="color:#ef4444; margin-bottom:1rem;">Bahaya Halusinasi AI</h3>
        <p style="font-size:1.2rem;">AI Generatif dapat menciptakan kutipan atau bahkan judul jurnal fiktif (*Halusinasi Referensi*) yang terlihat sangat meyakinkan.</p>
        <p style="margin-top:1rem; color:var(--text-muted);">Selalu verifikasi silang (Cross-check) nama penulis, DOIs, dan judul jurnal yang diberikan AI ke database asli (Scopus / portal resmi) sebelum mencantumkannya di skripsi.</p>
      </div>
    `,
    speakerNote: "Halusinasi AI adalah musuh terbesar integritas akademik."
  },
  {
    id: 15,
    title: "Posisi AI: Asisten Pemantik Ide",
    subtitle: "AI Bukan Otoritas Final",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1;">
          <h3 style="color:var(--accent-sky); margin-bottom:1rem;">Benar (Etis)</h3>
          <p>Menggunakan AI untuk <em>brainstorming</em> kata kunci, memahami konsep rumit, dan menemukan jurnal relevan secara cepat.</p>
        </div>
        <div style="flex:1;">
          <h3 style="color:#ef4444; margin-bottom:1rem;">Salah (Pelanggaran)</h3>
          <p>Mengklaim sintesis teks yang digenerasi AI sebagai tulisan pribadi secara utuh dan menjadikannya sebagai rujukan definitif.</p>
        </div>
      </div>
    `,
    speakerNote: "Gunakan AI dengan bijak dan bermartabat."
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
          <button class="mock-web-link ${slide.id > 1 && slide.id <= 4 ? 'active' : ''}" onclick="jumpToSlide(2)">1. Akses E-Resources</button>
          <button class="mock-web-link ${slide.id > 4 && slide.id <= 8 ? 'active' : ''}" onclick="jumpToSlide(5)">2. Boolean Logic</button>
          <button class="mock-web-link ${slide.id > 8 && slide.id <= 13 ? 'active' : ''}" onclick="jumpToSlide(9)">3. Semantic AI</button>
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

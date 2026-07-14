const slideData = [
  {
    id: 1,
    title: "Manajemen Referensi & AI Reading Assistant",
    subtitle: "Modul 2: Mendeley to Cite & Read (NotebookLM & SciSpace)",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1>Manajemen Referensi & AI Reading Assistant</h1>
        <p class="subtitle">Modul 2: Mendeley to Cite & Read (NotebookLM & SciSpace)</p>
        <div class="cover-meta" style="margin-bottom: 20px;">
          <strong>Juvita Umar Hadinata</strong><br>
          Digital Library Staff | Academic Library FISIPOL UGM
        </div>
        <div style="font-size: 0.85rem; color: var(--accent-sky); font-weight: 500;">
          <i class="fa-solid fa-globe"></i> <a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a>
        </div>
      </div>
    `,
    speakerNote: "Selamat datang di Modul 2. Di sini kita akan beralih dari fase 'Pencarian' ke fase 'Pengelolaan dan Membaca'."
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
    title: "Meninggalkan Mendeley Desktop",
    subtitle: "Migrasi ke Mendeley Reference Manager (MRM)",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1; background:rgba(239, 68, 68, 0.1); padding:1.5rem; border-radius:8px; border-left:4px solid #ef4444;">
          <h3 style="color:#ef4444; margin-bottom:1rem;"><i class="fa-solid fa-clock-rotate-left"></i> Mendeley Desktop (Legacy)</h3>
          <p>Mendeley versi lama (logo merah gelap) sudah dihentikan dukungannya (*Discontinued*) sejak September 2022. Sering mengalami *error* sinkronisasi di MacOS baru dan Windows 11.</p>
        </div>
        <div style="flex:1; background:rgba(16, 185, 129, 0.1); padding:1.5rem; border-radius:8px; border-left:4px solid #10b981;">
          <h3 style="color:#10b981; margin-bottom:1rem;"><i class="fa-solid fa-cloud"></i> Mendeley Reference Manager</h3>
          <p>Versi terbaru (logo merah cerah). 100% berbasis Cloud (*Cloud-centric*). Memungkinkan akses perpustakaan referensi Anda dari perangkat mana saja tanpa khawatir kehilangan data jika laptop rusak.</p>
        </div>
      </div>
    `,
    speakerNote: "Tekankan bahwa pakai Mendeley versi lama berisiko hilang data. Segera migrasi."
  },
  {
    id: 4,
    title: "Mendeley Cite untuk MS Word",
    subtitle: "Sitasi Cerdas & Dinamis",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(30,41,59,0.5); padding:2rem; border-radius:0.5rem; text-align:center;">
        <i class="fa-brands fa-microsoft" style="font-size:3rem; color:#3b82f6; margin-bottom:1rem;"></i>
        <h3 style="color:var(--accent-sky); margin-bottom:1rem;">Instalasi via Office Add-ins</h3>
        <p style="font-size:1.1rem; max-width:700px; margin:0 auto; color:var(--text-light);">
          Mendeley Cite tidak lagi di-install melalui aplikasi utama Mendeley, melainkan diunduh langsung dari dalam <strong>Microsoft Word -> Insert -> Get Add-ins</strong>.
        </p>
        <div style="margin-top:1.5rem; display:inline-block; padding:10px 20px; background:rgba(59, 130, 246, 0.2); border:1px dashed #3b82f6; border-radius:8px; color:var(--accent-sky);">
          Mendukung Word 365, Word 2016+, dan Word Online (iPad/Web).
        </div>
      </div>
    `,
    speakerNote: "Banyak mahasiswa kebingungan mencari tombol install plugin di Mendeley baru. Sekarang pindah ke Word Store."
  },
  {
    id: 5,
    title: "Manajemen Library yang Rapi",
    subtitle: "Kunci dari Penulisan Tesis yang Bebas Stres",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem;">
          <div style="background:rgba(30,41,59,0.5); padding:1.5rem; border-radius:8px;">
            <h4 style="color:#facc15;"><i class="fa-solid fa-folder-tree"></i> Collections (Folder)</h4>
            <p style="font-size:0.9rem; margin-top:0.5rem;">Jangan campur semua jurnal. Buat folder per Bab Tesis (Misal: <em>Bab 2 - Teori X</em>, <em>Bab 3 - Metodologi</em>).</p>
          </div>
          <div style="background:rgba(30,41,59,0.5); padding:1.5rem; border-radius:8px;">
            <h4 style="color:var(--accent-purple);"><i class="fa-solid fa-eye"></i> Watch Folder</h4>
            <p style="font-size:0.9rem; margin-top:0.5rem;">Otomatisasi! Setiap kali Anda men-download PDF jurnal ke folder 'Downloads', Mendeley otomatis menariknya ke library tanpa <em>drag & drop</em>.</p>
          </div>
          <div style="background:rgba(30,41,59,0.5); padding:1.5rem; border-radius:8px;">
            <h4 style="color:#ef4444;"><i class="fa-solid fa-trash-can"></i> Deduplication</h4>
            <p style="font-size:0.9rem; margin-top:0.5rem;">Bersihkan referensi ganda agar daftar pustaka Anda tidak mencantumkan jurnal yang sama dua kali.</p>
          </div>
          <div style="background:rgba(30,41,59,0.5); padding:1.5rem; border-radius:8px;">
            <h4 style="color:var(--accent-cyan);"><i class="fa-solid fa-pen-to-square"></i> Manual Entry</h4>
            <p style="font-size:0.9rem; margin-top:0.5rem;">Wajib dikuasai untuk mensitasi sumber non-jurnal (Website Berita, Buku Cetak, Undang-Undang).</p>
          </div>
        </div>
      </div>
    `,
    speakerNote: "Manajemen data penting sebelum kita beri makan ke AI."
  },
  {
    id: 6,
    title: "Sintesis Lintas-Dokumen dengan Google NotebookLM",
    subtitle: "Asisten Peneliti Pribadi Tanpa Halusinasi",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem; align-items:center;">
        <div style="flex:1;">
          <h3 style="color:#facc15; margin-bottom:1rem;"><i class="fa-brands fa-google"></i> NotebookLM</h3>
          <p style="margin-bottom:1rem;">Berbeda dengan ChatGPT yang menjawab dari data internet (rawan halusinasi), NotebookLM <strong>hanya</strong> menjawab berdasarkan PDF jurnal yang Anda unggah (maksimal 50 dokumen).</p>
          <ul style="font-size:1.1rem; line-height:1.8;">
            <li>Sintesis konsep dari 10 jurnal sekaligus.</li>
            <li>Memberikan kutipan sumber (klik untuk langsung ke paragraf asli di PDF).</li>
            <li>Sangat etis karena tidak mengarang teori baru.</li>
          </ul>
        </div>
        <div style="flex:1; background:rgba(30,41,59,0.5); border:1px solid #334155; padding:1.5rem; border-radius:8px; text-align:center;">
          <i class="fa-solid fa-file-pdf" style="font-size:2.5rem; color:#ef4444;"></i>
          <i class="fa-solid fa-plus" style="font-size:1rem; color:var(--text-muted); margin:0 10px;"></i>
          <i class="fa-solid fa-file-pdf" style="font-size:2.5rem; color:#ef4444;"></i>
          <br><i class="fa-solid fa-arrow-down" style="color:var(--accent-sky); margin:1rem 0;"></i><br>
          <i class="fa-solid fa-brain" style="font-size:3rem; color:#facc15; margin-bottom:1rem;"></i>
          <p style="font-size:0.8rem; color:var(--text-muted);"><em>NotebookLM Source Grounding</em></p>
        </div>
      </div>
    `,
    speakerNote: "NotebookLM adalah game changer. AI yang membatasi dirinya hanya pada dokumen yang kita beri."
  },
  {
    id: 7,
    title: "Simulasi NotebookLM",
    subtitle: "Sintesis Konsep Secara Real-Time",
    layout: "custom-widget",
    content: `
      <div class="slide-layout-standard">
        <p style="margin-bottom:1rem;">Coba simulasikan bagaimana NotebookLM menjawab pertanyaan dengan menyertakan kutipan (Citations).</p>
        
        <div style="background:#1e293b; border-radius:8px; border:1px solid #334155; display:flex; flex-direction:column; height:300px;">
          <!-- Chat History -->
          <div style="flex:1; padding:1.5rem; overflow-y:auto; display:flex; flex-direction:column; gap:1rem;">
            <!-- User Message -->
            <div style="align-self:flex-end; background:var(--accent-sky); color:#fff; padding:10px 15px; border-radius:12px 12px 0 12px; max-width:80%;">
              Apa perbedaan definisi modal sosial menurut 3 jurnal yang saya unggah?
            </div>
            <!-- AI Response -->
            <div style="align-self:flex-start; background:#0f172a; border:1px solid #334155; color:var(--text-light); padding:10px 15px; border-radius:12px 12px 12px 0; max-width:90%; font-size:0.95rem; line-height:1.5;">
              Berdasarkan dokumen yang Anda unggah, terdapat tiga pandangan mengenai modal sosial:
              <br><br>
              1. <strong>Bourdieu</strong> mendefinisikan modal sosial sebagai sumber daya aktual atau potensial yang terkait dengan kepemilikan jaringan hubungan <span class="citation-badge" style="background:#334155; color:var(--accent-sky); padding:2px 6px; border-radius:10px; font-size:0.75rem; cursor:pointer;" onclick="alert('Membuka PDF 1 halaman 4...')">[1]</span>.
              <br>2. <strong>Putnam</strong> melihatnya sebagai fitur organisasi sosial seperti jaringan, norma, dan kepercayaan sosial <span class="citation-badge" style="background:#334155; color:var(--accent-sky); padding:2px 6px; border-radius:10px; font-size:0.75rem; cursor:pointer;" onclick="alert('Membuka PDF 2 halaman 12...')">[2]</span>.
              <br>3. <strong>Coleman</strong> menyoroti fungsinya sebagai entitas yang terdiri dari aspek struktur sosial <span class="citation-badge" style="background:#334155; color:var(--accent-sky); padding:2px 6px; border-radius:10px; font-size:0.75rem; cursor:pointer;" onclick="alert('Membuka PDF 3 halaman 2...')">[3]</span>.
            </div>
          </div>
          <!-- Input Area -->
          <div style="border-top:1px solid #334155; padding:10px; display:flex; gap:10px; background:#0f172a; border-radius:0 0 8px 8px;">
            <input type="text" value="Bagaimana cara mereka mengukurnya?" readonly class="mock-input" style="flex:1; background:#1e293b; border:none; padding:10px; color:#fff; border-radius:4px;">
            <button class="mock-btn" style="background:var(--accent-sky); border-radius:4px;"><i class="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    `,
    speakerNote: "Perhatikan badge angka [1], [2]. Itu adalah bukti bahwa AI ini grounded (berbasis data yang diunggah)."
  },
  {
    id: 8,
    title: "Batas Etis: Enterprise Data Protection",
    subtitle: "Hal. 21 - Panduan Etika Akademik UGM 2025",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(239, 68, 68, 0.1); border-left:5px solid #ef4444; padding:2rem; border-radius:0.5rem;">
        <h3 style="color:#ef4444; margin-bottom:1rem;"><i class="fa-solid fa-user-secret"></i> Awas Membocorkan Data Riset Primer!</h3>
        <p style="font-size:1.2rem;">Jangan pernah mengunggah <strong>Transkrip Wawancara Rahasia</strong>, Data Medis Pasien, atau Data Korban ke ChatGPT/Claude versi gratis (Non-Enterprise).</p>
        <p style="margin-top:1rem; color:var(--text-light);">Kenapa? Karena data yang diunggah ke AI gratis akan digunakan oleh perusahaan AI (OpenAI/Google) untuk melatih model mereka. Data riset Anda bisa "bocor" menjadi jawaban untuk orang lain!</p>
        <p style="margin-top:1rem; color:var(--text-muted); font-size:0.9rem;"><em>Pengecualian: Boleh mengunggah PDF Jurnal publik karena datanya memang sudah terpublikasi (Open Access).</em></p>
      </div>
    `,
    speakerNote: "Data pribadi informan adalah tanggung jawab peneliti. Jangan diserahkan ke AI gratis."
  },
  {
    id: 9,
    title: "SciSpace: Menaklukkan PDF Rumit",
    subtitle: "Membaca Grafik dan Rumus Metode",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1;">
          <h3 style="color:var(--accent-purple); margin-bottom:1rem;"><i class="fa-solid fa-crop-simple"></i> Fitur "Snip & Explain"</h3>
          <p style="margin-bottom:1rem;">Menghadapi jurnal metodologi kuantitatif yang penuh dengan rumus matematika atau grafik yang membingungkan?</p>
          <p>Di SciSpace, Anda bisa melakukan <em>screenshot</em> potongan rumus tersebut di dalam PDF, lalu meminta AI untuk menjelaskannya ke dalam bahasa mahasiswa ilmu sosial yang sederhana.</p>
        </div>
        <div style="flex:1; background:#0f172a; padding:1.5rem; border-radius:8px; border:1px solid #334155; position:relative;">
          <div style="font-family:serif; font-size:1.5rem; text-align:center; margin-bottom:1rem; padding:1rem; border:2px dashed var(--accent-purple); color:#cbd5e1;">
            Y = &beta;<sub>0</sub> + &beta;<sub>1</sub>X<sub>1</sub> + &epsilon;
          </div>
          <div style="background:var(--accent-purple); color:#fff; padding:10px; border-radius:8px; font-size:0.9rem;">
            <strong>AI Explain:</strong> Ini adalah rumus regresi linier sederhana. Dalam konteks FISIPOL, jika Y adalah "Partisipasi Pemilu", maka X1 bisa jadi adalah "Tingkat Pendidikan".
          </div>
        </div>
      </div>
    `,
    speakerNote: "Mahasiswa ilmu sosial sering kesulitan baca jurnal kuantitatif. SciSpace adalah penyelamat."
  },
  {
    id: 10,
    title: "Deklarasi Penggunaan AI",
    subtitle: "Hal. 43 - Bukti Kejujuran Akademik UGM",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="background:rgba(16, 185, 129, 0.1); border-left:5px solid #10b981; padding:2rem; border-radius:0.5rem;">
        <h3 style="color:#10b981; margin-bottom:1rem;"><i class="fa-solid fa-file-signature"></i> Wajib Disisipkan di Tesis/Disertasi</h3>
        <p style="font-size:1.1rem; margin-bottom:1rem;">Sesuai mandat UGM, jika Anda menggunakan AI untuk memperbaiki grammar (Grammarly) atau menyintesis konsep awal (NotebookLM), Anda wajib melampirkan <strong>Surat Pernyataan Penggunaan AI</strong> di karya akhir.</p>
        
        <div style="background:rgba(255,255,255,0.05); padding:1rem; border-left:3px solid var(--text-muted); font-style:italic; font-size:0.95rem;">
          "Saya mendeklarasikan bahwa saya menggunakan NotebookLM semata-mata untuk tujuan pengorganisasian ide dan merangkum jurnal literatur. Seluruh analisis substantif dan pengambilan kesimpulan adalah hasil pemikiran orisinal saya tanpa campur tangan kecerdasan buatan (Cognitive Debt)."
        </div>
      </div>
    `,
    speakerNote: "Transparansi. Daripada dituduh plagiat oleh Turnitin AI-Detector, lebih baik deklarasikan dari awal di halaman depan Tesis."
  },
  {
    id: 11,
    title: "Terima Kasih & Daftar Referensi",
    subtitle: "Akhir dari Modul 2",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="background: rgba(30,41,59,0.5); padding: 2rem; border-radius: 8px; margin-bottom: 2rem; text-align:center;">
          <h2 style="color:var(--accent-sky); margin-bottom:1rem;">Terima Kasih!</h2>
          <p style="font-size:1.1rem;">Semoga Modul 2 ini membantu Anda mengatur ribuan PDF dan membaca jurnal dengan kecepatan 10x lipat tanpa kehilangan pemahaman kritis.</p>
          <div style="margin-top:1.5rem; font-size:1.2rem; color:var(--accent-purple);">
            <i class="fa-solid fa-envelope"></i> juvitaumarhadinata@ugm.ac.id
          </div>
        </div>
        
        <h4 style="color:var(--text-light); margin-bottom:1rem; border-bottom:1px solid #334155; padding-bottom:5px;">Daftar Referensi Modul 2:</h4>
        <ul style="font-size:0.85rem; color:var(--text-muted); line-height:1.6; list-style-type:circle; padding-left:20px;">
          <li>Universitas Gadjah Mada. (2025). <em>Panduan Etika Akademik Penggunaan AI Generatif</em>. Yogyakarta: UGM Press.</li>
          <li>Elsevier. (2025). <em>Mendeley Reference Manager User Guide</em>. mendeley.com.</li>
          <li>Google Labs. (2025). <em>NotebookLM: Grounded AI for Research</em>. notebooklm.google.</li>
          <li>SciSpace. (2025). <em>AI Copilot for Researchers</em>. typeset.io.</li>
        </ul>
      </div>
    `,
    speakerNote: "Penutup Modul 2. Persilakan peserta untuk istirahat atau sesi tanya jawab."
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
  
  // 3.1 Inject Web Navigation khusus Modul 2
  let headerHtml = "";
  if (slide.layout !== "cover") {
    headerHtml = `
      <header class="mock-web-header">
        <div class="mock-web-brand"><i class="fa-solid fa-book-open-reader"></i> <span>DIGILIB <strong>FISIPOL</strong></span></div>
        <nav class="mock-web-nav">
          <button class="mock-web-link ${slide.id === 1 ? 'active' : ''}" onclick="jumpToSlide(1)">Home</button>
          <button class="mock-web-link ${slide.id > 1 && slide.id <= 5 ? 'active' : ''}" onclick="jumpToSlide(3)">1. Migrasi Mendeley</button>
          <button class="mock-web-link ${slide.id > 5 && slide.id <= 7 ? 'active' : ''}" onclick="jumpToSlide(6)">2. NotebookLM</button>
          <button class="mock-web-link ${slide.id === 9 ? 'active' : ''}" onclick="jumpToSlide(9)">3. SciSpace</button>
          <button class="mock-web-link ${slide.id === 8 || slide.id >= 10 ? 'active' : ''}" onclick="jumpToSlide(8)">4. Etika Data</button>
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

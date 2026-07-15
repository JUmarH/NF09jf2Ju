/* ==========================================================================
   INTERACTIVE PRESENTATION ENGINE & DATASET (slides.js) - MODUL 2
   Modul 2: Mendeley to Cite & Read (NotebookLM & SciSpace)
   ========================================================================== */

const slideData = [
  // --- PEMBUKAAN ---
  {
    id: 1,
    title: "Manajemen Referensi & AI Reading Assistant",
    subtitle: "Modul 2: Mendeley, NotebookLM, & SciSpace",
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
          <div style="color: white; font-weight: 800; font-size: 1.2rem; letter-spacing: 1px;">DIGILIB<span style="color: var(--accent-purple); margin-left: 5px;">FISIPOL</span></div>
          <div style="color: rgba(255,255,255,0.7); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">Fakultas Ilmu Sosial dan Ilmu Politik UGM</div>
        </div>
      </div>
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-purple);">Manajemen Referensi &<br>AI Reading Assistant</h1>
        <p class="subtitle"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Mendeley_Logo.png" class="brand-logo-inline" alt="Mendeley"> Mendeley Cite · <span style="background: var(--accent-sky); color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;" class="brand-logo-inline">Nb</span> NotebookLM · <span style="background: #111; color: white; border: 1px solid #333; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;" class="brand-logo-inline">SciSpace</span></p>
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
        <div class="profile-card-photo" style="width: 150px; height: 150px; font-size: 4rem; margin: 0 auto; overflow: hidden; border: 4px solid var(--accent-purple);">
          <img src="https://github.com/jumarh.png" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <i class="fa-solid fa-user-tie" style="display: none; font-size: 4rem; line-height: 140px;"></i>
        </div>
        <div class="profile-card-info" style="text-align: center;">
          <div class="profile-card-name" style="font-size: 1.4rem;">Juvita Umar Hadinata</div>
          <div class="profile-card-title" style="font-size: 0.9rem; color: var(--accent-cyan);">Digital Library Staff | Academic Library FISIPOL UGM</div>
          <p style="font-size: 0.8rem; line-height: 1.4; color: var(--text-muted); max-width: 600px; margin: 5px auto;">
            Alumni Magister Manajemen Informasi dan Perpustakaan (MIP) UGM. Fokus pada penerapan AI untuk edukasi akademik dan manajemen referensi.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "Agenda Kita Hari Ini",
    subtitle: "Modul 2 Roadmap",
    layout: "custom-widget",
    content: `
      <div class="search-agenda-container">
        <div class="search-agenda-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input class="search-agenda-input" type="text" value="Bagaimana membaca dan mensitasi secara instan?" readonly>
          <i class="fa-solid fa-microphone" style="color: var(--accent-purple);"></i>
        </div>
        <div class="search-agenda-dropdown">
          <div class="search-agenda-item" onclick="jumpToSlide(4)">
            <i class="fa-solid fa-book"></i>
            <div>Babak 1: <strong>Era Baru Manajemen Referensi</strong> — <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Mendeley_Logo.png" class="brand-logo-inline" alt="Mendeley" style="height:1em;"> Mendeley Reference Manager</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(11)">
            <i class="fa-solid fa-brain"></i>
            <div>Babak 2: <strong>Membaca Ratusan PDF</strong> — Sintesis via <span style="background: var(--accent-sky); color: white; padding: 1px 4px; border-radius: 4px; font-weight: bold; font-family: sans-serif;" class="brand-logo-inline">Nb</span> NotebookLM</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(16)">
            <i class="fa-solid fa-file-pdf"></i>
            <div>Babak 3: <strong>Asisten Bedah Jurnal</strong> — <span style="background: #111; color: white; border: 1px solid #333; padding: 1px 4px; border-radius: 4px; font-weight: bold; font-family: sans-serif;" class="brand-logo-inline">SciSpace</span> Copilot</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(22)">
            <i class="fa-solid fa-scale-balanced"></i>
            <div>Babak 4: <strong>Privasi Data & Etika UGM</strong></div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: "Bagian 1: Era Baru Manajemen Referensi",
    subtitle: "Meninggalkan Mendeley Desktop",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-rose);">Babak 1<br>Mendeley Reference Manager</h1>
        <p class="subtitle">Cloud-Sync · Mendeley Cite · Web Importer</p>
      </div>
    `
  },
  {
    id: 5,
    title: "Mengapa Pindah ke Mendeley Baru?",
    subtitle: "Desktop vs Reference Manager",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Mendeley_Logo.png" class="brand-logo-inline" alt="Mendeley"> <strong>Mendeley Desktop</strong> (versi merah tua) resmi <strong>dihentikan dukungannya (Retired)</strong> per 2022.
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.9rem; margin-top: 15px;">
            <li>Tidak bisa diunduh lagi.</li>
            <li>Rawan crash dengan MS Word terbaru.</li>
            <li>Digantikan oleh <strong>Mendeley Reference Manager (MRM)</strong> yang berbasis komputasi awan (Cloud).</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--accent-emerald); padding: 20px; border-radius: 4px;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;">Keunggulan MRM:</h4>
            <ul style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
              <li>Terkoneksi langsung ke Cloud. Baca PDF di laptop, lanjut anotasi di iPad/Browser.</li>
              <li>Tampilan jauh lebih ringan dan modern.</li>
              <li>Fitur <em>Notebook</em> untuk merangkum kutipan antar-jurnal.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: "Plugin Word: Mendeley Cite",
    subtitle: "Selamat Tinggal Plugin Lama",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="display: flex; gap: 20px; align-items: center;">
          <div style="flex: 1; text-align: center;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg" class="brand-logo-inline" style="height: 5rem; margin-bottom: 1rem;" alt="MS Word">
            <h3 style="color: var(--accent-sky);">Mendeley Cite</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">Diunduh langsung dari <strong>Microsoft Store / Add-ins</strong> di dalam MS Word, bukan di-install dari aplikasi Mendeley.</p>
          </div>
          <div style="flex: 1; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px;">
            <ul class="slide-list list-check" style="font-size: 0.9rem;">
              <li>Tampil di panel sebelah kanan Word.</li>
              <li>Bisa memasukkan sitasi tanpa harus membuka aplikasi Mendeley utama.</li>
              <li>Perubahan daftar pustaka instan dan otomatis sesuai <em>Citation Style</em> pilihan (APA, Harvard, Chicago).</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 7,
    title: "Merapikan Metadata: Hukum Besi Sitasi",
    subtitle: "Garbage In, Garbage Out",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <h3 style="color: var(--accent-rose); margin-bottom: 15px;"><i class="fa-solid fa-triangle-exclamation"></i> Kesalahan Fatal</h3>
          <p style="font-size: 0.9rem; line-height: 1.6;">
            Banyak mahasiswa memasukkan PDF ke Mendeley lalu langsung melakukan <em>Insert Citation</em>. Hasilnya: Daftar pustakanya berantakan (nama terbalik, huruf kapital semua, tidak ada tahun).
          </p>
        </div>
        <div class="grid-col">
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-emerald); border-radius: 8px; padding: 20px;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;">Wajib: Validasi Metadata</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
              1. Cek tipe dokumen (Journal Article, Book, Webpage).<br>
              2. Perbaiki penulisan nama Authors (Last Name, First Name).<br>
              3. Pastikan DOI/URL terisi.<br>
              <strong>AI Mendeley tidak selalu 100% akurat membaca PDF lama. Mata manusia wajib memverifikasi!</strong>
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 8,
    title: "Mendeley Web Importer",
    subtitle: "Menangkap Metadata dari Browser",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="text-align: center;">
        <i class="fa-brands fa-chrome" style="font-size: 4rem; color: var(--accent-sky); margin-bottom: 20px;"></i>
        <h3 style="margin-bottom: 15px;">Ekstensi Browser Web Importer</h3>
        <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 600px; margin: 0 auto 20px auto;">
          Cara tercepat memasukkan referensi. Saat Anda berada di halaman jurnal atau bahkan artikel berita online, klik tombol merah Mendeley di pojok kanan atas browser.
        </p>
        <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; display: inline-block;">
          <p style="color: var(--accent-emerald); font-weight: bold;">Sangat berguna untuk menyitasi artikel Berita/Website (Webpage) yang tidak memiliki file PDF.</p>
        </div>
      </div>
    `
  },
  {
    id: 9,
    title: "Manajemen Struktur Folder",
    subtitle: "Organisasi untuk Tesis/Skripsi",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; line-height: 1.5;">Jangan biarkan 200 PDF menumpuk di "All Documents". Buat *Collections* berdasarkan bab atau tema:</p>
        
        <div style="background: #111; border: 1px solid #333; padding: 20px; border-radius: 8px; font-family: var(--font-code); color: var(--text-muted);">
          📁 Skripsi 2026<br>
          &nbsp;&nbsp; ├─ 📁 Bab 1 - Latar Belakang & Data<br>
          &nbsp;&nbsp; ├─ 📁 Bab 2 - Teori Kebijakan Publik<br>
          &nbsp;&nbsp; ├─ 📁 Bab 2 - Teori Desentralisasi<br>
          &nbsp;&nbsp; └─ 📁 Bab 3 - Metodologi Kualitatif
        </div>
      </div>
    `
  },
  {
    id: 10,
    title: "🖥️ Hands-On: Mendeley Cite",
    subtitle: "Lembar Kerja Praktik (10 Menit)",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; color: var(--accent-sky);"><strong>Misi Praktik:</strong></p>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
          <p>1. Buka MS Word.</p>
          <p>2. Pergi ke tab <strong>Insert > Get Add-ins</strong>, cari "Mendeley Cite".</p>
          <p>3. Login ke panel Mendeley Cite di Word.</p>
          <p>4. Ketik satu paragraf kalimat sembarang. Masukkan (Insert) 2 buah sitasi ke akhir kalimat.</p>
          <p>5. Ubah <em>Citation Style</em> dari APA ke IEEE, perhatikan bagaimana kutipan otomatis berubah dari (Nama, Tahun) menjadi angka [1].</p>
        </div>
      </div>
    `
  },
  {
    id: 11,
    title: "Bagian 2: Membaca Ratusan PDF dengan AI",
    subtitle: "Google NotebookLM",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-sky);">Babak 2<br>Sintesis AI Lintas Dokumen</h1>
        <p class="subtitle"><span style="background: var(--accent-sky); color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;" class="brand-logo-inline">Nb</span> NotebookLM dari Google</p>
      </div>
    `
  },
  {
    id: 12,
    title: "Masalah: Overload Informasi",
    subtitle: "Keterbatasan Ingatan Manusia",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            Anda telah mengunduh 50 PDF menggunakan Semantic Scholar (Modul 1). Masalah berikutnya: Kapan Anda punya waktu untuk membaca itu semua? Dan jika Anda membacanya, apakah Anda ingat siapa bilang apa?
          </p>
          <p style="font-size: 0.9rem; margin-top: 15px; color: var(--accent-rose);">
            <strong>Titik Kritis Tesis:</strong> Gagal merajut (mensintesis) argumen dari berbagai jurnal karena lupa konteks, berakhir pada gaya penulisan "kliping" (A bilang begini, B bilang begitu).
          </p>
        </div>
        <div class="grid-col">
          <div style="background: rgba(30, 41, 59, 0.4); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
             <i class="fa-solid fa-brain" style="font-size: 4rem; color: var(--accent-sky); margin-bottom: 15px;"></i>
             <h4 style="color: var(--accent-sky);">Solusi: AI Reading Assistant</h4>
             <p style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 10px;">Kita butuh asisten yang bisa membaca 50 jurnal tersebut secara serentak, mengingat tiap lembarnya, dan menjawab pertanyaan kita <strong>berdasarkan kumpulan dokumen tersebut saja</strong>.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 13,
    title: "Mengapa <span style='background: var(--accent-sky); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.8em;'>Nb</span> NotebookLM?",
    subtitle: "Anti-Halusinasi (RAG - Retrieval Augmented Generation)",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="display: flex; gap: 20px; margin-bottom: 2rem;">
          <div style="flex: 1; border: 1px solid var(--accent-rose); background: rgba(244,63,94,0.05); padding: 20px; border-radius: 8px;">
            <h4 style="color: var(--accent-rose); margin-bottom: 10px;">ChatGPT Biasa</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Menjawab menggunakan "pengetahuan dunia" yang ia pelajari. Jika tidak tahu, ia mengarang/halusinasi jurnal palsu.</p>
          </div>
          <div style="flex: 1; border: 1px solid var(--accent-emerald); background: rgba(16,185,129,0.05); padding: 20px; border-radius: 8px;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;">NotebookLM</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Anda memberikan "Buku Suci" (PDF Anda). Ia <strong>hanya boleh</strong> menjawab berdasarkan dokumen yang Anda unggah. Jika jawabannya tidak ada di dokumen Anda, ia akan jujur berkata "Saya tidak menemukan jawabannya."</p>
          </div>
        </div>
        <p style="text-align: center; font-size: 1.1rem; color: var(--accent-sky); font-weight: bold;">Setiap jawaban NotebookLM disertai "Kutipan Sitasi Animasi" (Citation Badge) yang jika diklik akan langsung melompat ke paragraf PDF asli sebagai bukti faktual!</p>
      </div>
    `
  },
  {
    id: 14,
    title: "Fitur Ekstraksi NotebookLM",
    subtitle: "Rangkuman Otomatis",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <ul class="slide-list list-check" style="font-size: 1rem; line-height: 1.8;">
          <li><strong>Batas Unggah:</strong> Hingga 50 Dokumen (PDF, Google Docs, Teks, Audio) per Notebook. (Lebih dari cukup untuk satu bab skripsi).</li>
          <li><strong>Audio Overview (Podcast):</strong> AI ini bisa mengubah jurnal PDF yang membosankan menjadi percakapan *podcast* interaktif dua arah (suara) agar Anda bisa belajar sambil menyetir.</li>
          <li><strong>Otomatisasi Catatan:</strong> Sekali klik untuk membuat FAQ, Panduan Studi, dan Garis Waktu (Timeline).</li>
        </ul>
      </div>
    `
  },
  {
    id: 15,
    title: "🖥️ Hands-On: NotebookLM",
    subtitle: "Lembar Kerja Praktik (15 Menit)",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
          <p>1. Buka <strong>notebooklm.google.com</strong> dan login dengan akun Gmail (disarankan akun pribadi jika GSuite kampus dibatasi).</p>
          <p>2. Buat Notebook baru, beri nama "Eksperimen Literatur".</p>
          <p>3. Unggah (Upload) minimal 3 jurnal PDF berbahasa Inggris.</p>
          <p>4. Ketik *prompt*: <em>"Berdasarkan 3 dokumen ini, apa kesamaan dan perbedaan temuan mereka terkait tingkat kemiskinan?"</em>.</p>
          <p>5. Klik angka indikator (badge) sitasi di akhir kalimat jawaban AI untuk memverifikasi kebenaran paragraf PDF aslinya.</p>
        </div>
      </div>
    `
  },
  {
    id: 16,
    title: "Bagian 3: Asisten Bedah Jurnal",
    subtitle: "<span style='background: #111; color: white; border: 1px solid #333; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>SciSpace</span> Copilot",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-emerald);">Babak 3<br>Bedah Teks dengan SciSpace</h1>
        <p class="subtitle">Membaca Tabel Kompleks · Terjemahan Berkonteks Akademik</p>
      </div>
    `
  },
  {
    id: 17,
    title: "SciSpace (Typeset.io)",
    subtitle: "Tutor Pribadi untuk 1 PDF Tunggal",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1rem; line-height: 1.6;">
            Jika NotebookLM digunakan untuk <strong>Sintesis Lintas-Dokumen (Makro)</strong>, maka SciSpace Copilot digunakan untuk <strong>Bedah Mendalam 1 Dokumen (Mikro)</strong>.
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.9rem; margin-top: 15px;">
            <li>Anda membaca jurnal.</li>
            <li>Anda tidak paham satu kalimat rumit.</li>
            <li>Anda blok teksnya -> Klik "Explain Math/Text".</li>
            <li>Copilot AI menjelaskan di bilah kanan.</li>
          </ul>
        </div>
        <div class="grid-col">
          <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--accent-emerald); padding: 20px; border-radius: 4px;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;">Fitur Andalan (Snip)</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
              Gunakan *Crop Tool* pada tabel regresi yang membingungkan. SciSpace akan membacakan angka signifikansinya menggunakan kalimat manusia. Sangat cocok bagi mahasiswa Sosiologi/Politik yang anti-matematika!
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 18,
    title: "Translate Akademis vs Google Translate",
    subtitle: "Mengapa Terjemahan Konvensional Berbahaya?",
    layout: "standard",
    content: `
      <div class="slide-layout-standard">
        <div style="display: flex; gap: 20px; margin-bottom: 2rem;">
          <div style="flex: 1; border: 1px solid var(--accent-rose); background: rgba(244,63,94,0.05); padding: 20px; border-radius: 8px;">
            <h4 style="color: var(--accent-rose); margin-bottom: 10px;">Google Translate (Harfiah)</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Menerjemahkan "State Apparatus" menjadi "Alat Negara". Menerjemahkan "Civil Society" terkadang keliru konteksnya.</p>
          </div>
          <div style="flex: 1; border: 1px solid var(--accent-emerald); background: rgba(16,185,129,0.05); padding: 20px; border-radius: 8px;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;">SciSpace (Academic LLM)</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Mengenali jargon-jargon sosiologi. Akan lebih tepat menerjemahkannya sebagai "Aparatur Negara" dan "Masyarakat Sipil" sesuai standar teori ilmu sosial.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 19,
    title: "Ekstensi Chrome SciSpace",
    subtitle: "Membaca di Website Apapun",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 15px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">SciSpace Copilot tidak hanya untuk PDF. Anda dapat menginstal <strong>Chrome Extension</strong>-nya.</p>
        <ul class="slide-list list-check" style="font-size: 0.95rem; margin-top: 15px;">
          <li>Membuka berita panjang di Kompas/CNN? Buka Copilot dan minta dirangkum.</li>
          <li>Membaca Wikipedia bahasa Spanyol? Copilot bisa menerjemahkan blok teks secara *real-time*.</li>
        </ul>
      </div>
    `
  },
  {
    id: 20,
    title: "Bagian 4: Privasi Data & Etika UGM",
    subtitle: "Risiko Tersembunyi Penggunaan AI",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-amber);">Babak 4<br>Privasi & Deklarasi AI</h1>
        <p class="subtitle">Buku Panduan UGM 2025 Hal. 21 & 43</p>
      </div>
    `
  },
  {
    id: 21,
    title: "Jangan Unggah Data Wawancara Rahasia!",
    subtitle: "Enterprise Data Protection",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <h3 style="color: var(--accent-amber); margin-bottom: 10px;"><i class="fa-solid fa-shield-halved"></i> Peringatan Privasi</h3>
          <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">
            NotebookLM dan SciSpace memproses file PDF Anda di *server* komputasi awan. 
          </p>
          <div style="background: rgba(244, 63, 94, 0.1); border-left: 3px solid var(--accent-rose); padding: 10px; margin-top: 15px; font-size: 0.85rem;">
            <strong style="color: #fecdd3;">RED FLAG:</strong> Dilarang keras mengunggah <strong>Transkrip Wawancara Narasumber Rahasia</strong> atau <strong>Data Survei Pribadi</strong> yang belum dianonimisasi ke dalam AI gratis, karena data Anda dapat menjadi bahan latih (training data) mereka!
          </div>
        </div>
        <div class="grid-col">
          <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 8px;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 10px;">Green Flag: Jurnal Publik</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Hanya unggah jurnal/artikel yang sifatnya sudah *published* (publik). Buku panduan UGM secara ketat mengatur "Enterprise Data Protection".</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 22,
    title: "Bukti Kejujuran Akademik (Deklarasi AI)",
    subtitle: "SOP Panduan UGM Hal. 43",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="text-align: center;">
        <h3 style="color: var(--accent-sky); margin-bottom: 1rem;">Wajib Cantumkan di Halaman Metodologi/Lampiran Tesis!</h3>
        <p style="font-size: 1.1rem; line-height: 1.6; max-width: 700px; margin: 0 auto 2rem auto;">
          UGM tidak melarang penggunaan AI, tetapi UGM menuntut <strong>Transparansi</strong>. Jika Anda menggunakan NotebookLM untuk merangkum 50 jurnal, Anda wajib mendeklarasikannya secara tertulis.
        </p>
        <div style="background: #111; border: 1px solid #333; padding: 20px; border-radius: 8px; font-family: var(--font-code); color: var(--text-muted); font-size: 0.9rem; text-align: left; max-width: 800px; margin: 0 auto;">
          <em>Contoh Deklarasi:</em><br><br>
          "Dalam penyusunan literatur review penelitian ini, penulis menggunakan aplikasi NotebookLM dari Google untuk mengekstrak dan membandingkan variabel dari 40 artikel jurnal berbahasa Inggris. Namun, proses perumusan argumen dan penulisan paragraf sepenuhnya dilakukan secara mandiri oleh penulis."
        </div>
      </div>
    `
  },
  {
    id: 23,
    title: "Kesimpulan",
    subtitle: "Manajemen dan Sintesis Referensi",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <ul class="slide-list list-check" style="font-size: 0.95rem; line-height: 1.6;">
            <li><i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> Gunakan Mendeley Reference Manager & Cite untuk menghindari krisis daftar pustaka berantakan di akhir bab.</li>
            <li><i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> Gunakan NotebookLM (Sintesis Makro Lintas-Dokumen) agar tidak kehilangan jejak (lupa) argumen 50 jurnal.</li>
            <li><i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> Gunakan SciSpace (Tutor Bedah Mikro) untuk menerjemahkan paragraf dan membaca tabel jurnal yang rumit.</li>
          </ul>
        </div>
        <div class="grid-col" style="display: flex; flex-direction: column; justify-content: center; background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 8px;">
          <h4 style="color: var(--accent-sky); margin-bottom: 10px; text-align: center;"><i class="fa-solid fa-forward-step"></i> Apa Selanjutnya? (Modul 3)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); text-align: center; margin-bottom: 15px;">
            Membaca sudah bisa. Mengutip sudah bisa. Tapi bagaimana membuktikan ke dosen bahwa topik riset Anda benar-benar *State of the Art* (belum banyak diteliti) dengan visualisasi grafis memukau?
          </p>
          <div style="font-weight: bold; color: white; text-align: center; font-size: 1.1rem;">
            Modul 3: VOSviewer & Bibliometric Mapping
          </div>
        </div>
      </div>
    `
  },
  {
    id: 24,
    title: "Sesi Diskusi & Tanya Jawab",
    subtitle: "Kendala Referensi Skripsi Anda",
    layout: "standard",
    content: `
      <div class="slide-layout-standard" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
        <i class="fa-regular fa-comments" style="font-size: 5rem; color: var(--accent-amber); margin-bottom: 20px;"></i>
        <h2 style="font-size: 2.5rem; margin-bottom: 15px;">Q & A</h2>
        <p style="font-size: 1.2rem; color: var(--text-muted); text-align: center; max-width: 600px;">
          Siapa yang pernah menangis karena MS Word-nya *crash* gara-gara Mendeley Desktop lama? Atau bingung membuat sintesis literatur? Mari diskusi.
        </p>
      </div>
    `
  },
  {
    id: 25,
    title: "Terima Kasih!",
    subtitle: "Manajemen Ilmu yang Cerdas untuk Riset FISIPOL",
    layout: "cover",
    content: `
      <div class="slide-layout-cover">
        <h1 style="color: var(--accent-sky); font-size: 3rem;">Terima Kasih!</h1>
        <p style="font-size: 1.2rem; color: var(--text-main); margin-top: 15px; max-width: 700px; text-align: center; margin-bottom: 30px;">
          "Bukan seberapa banyak jurnal yang Anda kumpulkan di laptop Anda, melainkan seberapa cerdas Anda merajut benang merah antar-jurnal tersebut."
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
          <button class="mock-web-link ${slide.id > 3 && slide.id <= 10 ? 'active' : ''}" onclick="jumpToSlide(4)">1. Mendeley RM</button>
          <button class="mock-web-link ${slide.id > 10 && slide.id <= 15 ? 'active' : ''}" onclick="jumpToSlide(11)">2. NotebookLM</button>
          <button class="mock-web-link ${slide.id > 15 && slide.id <= 19 ? 'active' : ''}" onclick="jumpToSlide(16)">3. SciSpace</button>
          <button class="mock-web-link ${slide.id > 19 ? 'active' : ''}" onclick="jumpToSlide(20)">4. Etika UGM</button>
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

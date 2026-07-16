/* ==========================================================================
   INTERACTIVE PRESENTATION ENGINE & DATASET (slides.js)
   Modul 3 Workshop: Analisis Bibliometrik & Deteksi Research Gap
   ========================================================================== */

// 1. SLIDE DATASET
const slideData = [
  {
    id: 1,
    title: "Meningkatkan Kualitas Literature Review dengan Bibliometrik",
    subtitle: "Scopus · <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine · <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer · AI-Assisted Interpretation",
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
        <div class="digilib-logo" style="display: flex; flex-direction: column; justify-content: center;"><div style="color: white; font-weight: 800; font-size: 1.2rem; letter-spacing: 1px;">DIGILIB<span style="color: var(--accent-emerald); margin-left: 5px;">FISIPOL</span></div><div style="color: rgba(255,255,255,0.7); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">Fakultas Ilmu Sosial dan Ilmu Politik UGM</div></div>
      </div>
      <div class="slide-layout-cover">

        <h1>Meningkatkan Kualitas Literature<br>Review dengan Bibliometrik</h1>
        <p class="subtitle">Scopus · <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine · <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer · AI-Assisted Interpretation</p>
        <div class="cover-meta" style="margin-bottom: 20px;">
          <strong>Juvita Umar Hadinata</strong><br>
          Digital Library Staff | Academic Library FISIPOL UGM
        </div>
        <div style="font-size: 0.85rem; color: var(--accent-sky); font-weight: 500;">
          <i class="fa-solid fa-globe"></i> <a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a>
        </div>
      </div>
    `,
    discussionNote: "Gunakan slide ini sebagai sapaan pembuka, perkenalan diri, dan menjelaskan tujuan umum pelatihan kepada dosen dan mahasiswa S2/S3.",
    speakerNote: "Sapa peserta dengan hangat. Perkenalkan diri sebagai Juvita (staf perpustakaan digital FISIPOL UGM). Jelaskan bahwa materi ini bertujuan meningkatkan kualitas kajian pustaka (literature review) agar tidak sekadar membaca tapi mampu memetakan peta keilmuan secara kuantitatif.",
    referenceNote: "Panduan Akademik UGM & Buku Pedoman Penulisan FISIPOL."
  },
  {
    id: 2,
    title: "Tentang Pemateri",
    subtitle: "Juvita Umar Hadinata (Academic Library FISIPOL UGM)",
    layout: "custom-widget",
    content: `
      <div class="profile-card-container" style='background: rgba(30, 41, 59, 0.2); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 20px;'>
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
          <div class="profile-card-details" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 10px; font-size: 0.75rem;">
            <div class="profile-card-detail-item"><i class="fa-solid fa-envelope"></i> <span>juvitaumarhadinata@ugm.ac.id</span></div>
            <div class="profile-card-detail-item"><i class="fa-solid fa-globe"></i> <span><a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a></span></div>
            <div class="profile-card-detail-item"><i class="fa-solid fa-graduation-cap"></i> <span>Magister MIP UGM</span></div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Tidak ada pemandu diskusi untuk halaman biografi. Latar belakang Magister MIP UGM merupakan soft selling yang kuat untuk membangun otoritas keilmuan perpustakaan Anda.",
    speakerNote: "Gunakan foto profil GitHub Anda. Tautan foto langsung merujuk ke https://github.com/jumarh.png. Jika username berubah, foto akan otomatis berganti ke foto profil GitHub baru Anda.",
    referenceNote: "Peta Kompetensi Staf Digilib FISIPOL (P008)."
  },
  {
    id: 3,
    title: "Mengapa Peneliti Perlu Bibliometrik?",
    subtitle: "Mengatasi Limitasi Membaca Manual",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-main);">
            Metode tradisional membatasi kita membaca 50-100 paper secara mendalam. Namun, bagaimana jika ada 5.000 paper di bidang Anda? 
          </p>
          <p style="font-size: 1rem; line-height: 1.5; color: var(--text-muted);">
            Bibliometrik hadir sebagai <strong>kompas</strong> untuk memetakan arah sebelum Anda mulai membaca artikel secara rinci.
          </p>
          <div style='background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px; font-size: 0.75rem; color: var(--text-muted);'>
            <strong>Definisi Poin Metode:</strong><br>
            • <strong>Co-citation Analysis</strong>: Mengukur kekuatan relasi dua artikel berdasarkan seberapa sering dikutip bersama (Small, 1973).<br>
            • <strong>Overlay Visualization</strong>: Visualisasi jaringan dengan tambahan variabel waktu untuk melihat tren tahun (Leydesdorff, 2010).<br>
            • <strong>Network Void Detection</strong>: Identifikasi celah kosong teoretis di antara klaster riset mapan (Müller-Bloch & Kranz, 2015).
          </div>
        </div>
        <div class="grid-col">
          <table class="premium-table">
            <thead>
              <tr>
                <th>Pertanyaan Riset</th>
                <th>Metode Tradisional</th>
                <th>Bibliometrik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Siapa tokoh kunci?</td>
                <td>Tebakan/Otoritas</td>
                <td>Co-citation (Data)</td>
              </tr>
              <tr>
                <td>Topik sedang naik daun?</td>
                <td>Intuisi/Rasa</td>
                <td>Overlay (Tren)</td>
              </tr>
              <tr>
                <td>Celah riset kosong?</td>
                <td>Trial-error</td>
                <td>Network Void</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    discussionNote: "Dari ketiga pertanyaan di tabel sebelah kanan, mana yang paling sering menjadi hambatan bagi Bapak/Ibu atau rekan-rekan sekalian saat menulis bagian Tinjauan Pustaka?",
    speakerNote: "Tekankan bahwa bibliometrik TIDAK menggantikan membaca. Justru bibliometrik memastikan artikel yang kita baca adalah artikel yang paling tepat dan relevan.",
    referenceNote: "Donthu, N., et al. (2021). 'How to conduct a bibliometric analysis: An overview and guidelines.' Journal of Business Research, 133."
  },
  {
    id: 4,
    title: "Potret Riset UGM dalam Open Access",
    subtitle: "Analisis Data Terbuka Terindeks Publik",
    layout: "stat-grid",
    content: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 100%; height: 100%; justify-content: center;">
        <p style="text-align: center; font-size: 1.1rem; color: var(--text-muted);">
          Berdasarkan data publikasi tepercaya dari indeks global **OpenAlex API** (data agregat per Juli 2026):
        </p>
        <div class="stat-card-row">
          <div class="stat-card">
            <div class="stat-val">58.420</div>
            <div class="stat-lbl">Total Publikasi UGM</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">24.150</div>
            <div class="stat-lbl">Karya Open Access</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">2.800+</div>
            <div class="stat-lbl">Peneliti Aktif UGM</div>
          </div>
        </div>
        <p style="text-align: center; color: var(--accent-sky); font-weight: 500;">
          Data terbuka ini membuktikan peningkatan pesat riset UGM secara global yang siap dianalisis menggunakan Bibliometrik.
        </p>
      </div>
    `,
    discussionNote: "Hampir setengah dari publikasi UGM kini bertipe Open Access (terbuka). Menurut Anda, apakah ini mempermudah kita menambang metadata riset dibandingkan era 10 tahun lalu?",
    speakerNote: "Slide ini diganti dari data internal FISIPOL ke data institusional UGM skala global di OpenAlex untuk menjamin reliabilitas dan transparansi dataset riset.",
    referenceNote: "OpenAlex Database Indexing, Universitas Gadjah Mada (Juli 2026)."
  },
  {
    id: 5,
    title: "Apa Saja Agenda Kita Hari Ini?",
    subtitle: "Peta Perjalanan Workshop",
    layout: "custom-widget",
    content: `
      <div class="search-agenda-container">
        <div class="search-agenda-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input class="search-agenda-input" type="text" value="Bagaimana cara melakukan analisis bibliometrik?" readonly>
          <i class="fa-solid fa-microphone" style="color: var(--accent-blue);"></i>
        </div>
        <div class="search-agenda-dropdown">
          <div class="search-agenda-item" onclick="jumpToSlide(1)">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>Babak 1: <strong>Mengapa Bibliometrik Penting?</strong> — Konteks dan Motivasi Riset</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(6)">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>Babak 2: <strong>Arsitektur Query Scopus</strong> — Menambang Data yang Presisi</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(10)">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>Babak 3: <strong>Pembersihan Data <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine</strong> — Mengeliminasi Variasi & Typo</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(15)">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>Babak 4: <strong>Visualisasi Jejaring <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer</strong> — Memetakan Struktur Keilmuan</div>
          </div>
          <div class="search-agenda-item" onclick="jumpToSlide(22)">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>Babak 5: <strong>Deteksi Gap dengan AI Etis</strong> — Merumuskan Pertanyaan Penelitian Baru</div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Semua sudah menginstal <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer dan <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine di laptop masing-masing? Jika ada kendala instalasi, silakan angkat tangan.",
    speakerNote: "Gambarkan alur workshop secara cepat. Peta agenda ini dibuat menyerupai dropdown bar pencarian Google untuk memicu interaksi visual yang menarik bagi audiens.",
    referenceNote: "Standardized Bibliometric Pedagogy Guide, ACRL (2020)."
  },
  {
    id: 6,
    title: "Mengapa Scopus sebagai Basis Utama?",
    subtitle: "Babak 2: Arsitektur Query Scopus | Akses: <a href='https://ezproxy.ugm.ac.id' target='_blank' style='color: var(--accent-sky); text-decoration: underline;'>ezproxy.ugm.ac.id</a>",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.6;">
            Dalam ilmu sosial-politik dan rumpun lainnya, pemilihan basis data menentukan kualitas peta bibliometrik. <strong>Scopus</strong> menawarkan keseimbangan terbaik antara metadata terstruktur dan cakupan jurnal internasional.
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.95rem; margin-top: 10px;">
            <li>Saringan kualitas ketat oleh Dewan Penasihat Independen Scopus: <strong>CSAB (Content Selection & Advisory Board)</strong>.</li>
            <li>Metadata sitasi lengkap (judul, referensi, abstrak, kata kunci).</li>
            <li>API terstandar memudahkan integrasi.</li>
          </ul>
        </div>
        <div class="grid-col">
          <table class="premium-table">
            <thead>
              <tr>
                <th>Fitur</th>
                <th>Scopus</th>
                <th>Google Scholar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ekspor Terstruktur</td>
                <td>✅ Maks 2.000 (Lengkap)</td>
                <td>❌ Sangat Terbatas</td>
              </tr>
              <tr>
                <td>Metadata Referensi</td>
                <td>✅ Lengkap & Bersih</td>
                <td>❌ Tidak Ada di Ekspor</td>
              </tr>
              <tr>
                <td>Saringan Kualitas</td>
                <td>✅ Melalui CSAB</td>
                <td>❌ Semua Dokumen Masuk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    discussionNote: "Apakah ada yang pernah mencoba melakukan pemetaan bibliometrik menggunakan Google Scholar? Apa kesulitan terbesarnya ketika membersihkan datanya?",
    speakerNote: "Jelaskan bahwa UGM melanggan Scopus secara penuh, sehingga peserta bisa mengeksploitasi data ini secara gratis selama berstatus civitas akademika UGM.",
    referenceNote: "Mongeon, R., & Paul-Hus, A. (2016). 'The journal coverage of Web of Science and Scopus.' Scientometrics, 106."
  },
  {
    id: 7,
    title: "Anatomi Query Scopus",
    subtitle: "Membangun Formula Pencarian Presisi",
    layout: "custom-widget",
    content: `
      <div style="display: flex; flex-direction: column; gap: 15px; height: 100%;">
        <p style="font-size: 0.95rem; color: var(--text-muted);">
          Gunakan panel interaktif ini untuk memformulasikan pencarian Scopus. Masukkan kata kunci utama topik riset Anda:
        </p>
        <div class="query-builder-widget">
          <div class="form-row">
            <div class="form-group">
              <label for="qb-concept-1">Konsep 1 (Teknologi/Topik Utama)</label>
              <input type="text" id="qb-concept-1" value='"artificial intelligence" OR "ChatGPT"'>
            </div>
            <div class="form-group">
              <label for="qb-concept-2">Konsep 2 (Konteks/Sektor)</label>
              <input type="text" id="qb-concept-2" value='"higher education" OR "university"'>
            </div>
            <div class="form-group">
              <label for="qb-concept-3">Konsep 3 (Kebijakan/Fokus)</label>
              <input type="text" id="qb-concept-3" value='"policy" OR "regulation"'>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="qb-year">Mulai Tahun</label>
              <input type="number" id="qb-year" value="2020">
            </div>
            <div class="form-group">
              <label for="qb-doctype">Tipe Dokumen</label>
              <input type="text" id="qb-doctype" value="Article (ar) & Conference (cp)" disabled>
            </div>
          </div>
        </div>
        <div class="terminal-block" style="padding: 15px;">
          <div class="terminal-header">
            <span class="terminal-dot dot-red"></span>
            <span class="terminal-dot dot-yellow"></span>
            <span class="terminal-dot dot-green"></span>
          </div>
          <code id="qb-output-code">TITLE-ABS-KEY("artificial intelligence" OR "ChatGPT") AND TITLE-ABS-KEY("higher education" OR "university") AND TITLE-ABS-KEY("policy" OR "regulation") AND PUBYEAR > 2019 AND (LIMIT-TO(DOCTYPE, "ar") OR LIMIT-TO(DOCTYPE, "cp")) AND LIMIT-TO(LANGUAGE, "English")</code>
          <button class="btn-copy" onclick="copyToClipboard('qb-output-code')"><i class="fa-regular fa-copy"></i> Copy Query</button>
        </div>
      </div>
    `,
    discussionNote: "Buka menu pencarian di Scopus, mari kita coba masukkan query yang dihasilkan oleh generator interaktif ini. Berapa hasil artikel yang muncul?",
    speakerNote: "Tunjukkan bagaimana query builder ini bekerja. Tekankan pentingnya tanda kutip untuk frase (misal \"higher education\" agar tidak pecah menjadi higher AND education).",
    referenceNote: "Scopus Search Guide, Elsevier (2025)."
  },
  {
    id: 8,
    title: "Batasan Ekspor & Kunci Kelengkapan Metadata",
    subtitle: "Mencegah Kegagalan Analisis Co-Citation",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.5; font-size: 0.95rem;">
            Scopus membatasi ekspor metadata lengkap sebanyak <strong>2.000 dokumen</strong> per sekali unduh. 
          </p>
          <div style='background: rgba(245, 158, 11, 0.1); border-left: 4px solid var(--accent-amber); padding: 12px; border-radius: 4px; font-size: 0.85rem; color: #fbd38d;'>
            <strong>PENTING:</strong> Saat mengekspor, pastikan mencentang pilihan <strong>"Include references"</strong>. Tanpa ini, analisis co-citation dan bibliometrik coupling di <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer tidak akan bisa dijalankan!
          </div>
          <ul class="slide-list list-bullet" style="font-size: 0.85rem; margin-top: 5px;">
            <li><strong>Format:</strong> Selalu pilih file CSV.</li>
            <li><strong>Bagi Data:</strong> Jika query Anda menghasilkan >2.000 paper, bagi per rentang tahun ekspor lalu satukan kembali di Excel/<span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine.</li>
          </ul>
        </div>
        <div class="grid-col">
          <div class="interactive-checklist">
            <div class="checklist-item checked" onclick="toggleChecklist(this)">
              <i class="checkbox-icon fa-regular fa-square-check"></i>
              <div class="checklist-item-text">Pilih Format Unduhan: <strong>CSV File</strong></div>
            </div>
            <div class="checklist-item checked" onclick="toggleChecklist(this)">
              <i class="checkbox-icon fa-regular fa-square-check"></i>
              <div class="checklist-item-text">Centang: <strong>Citation & Bibliographical Information</strong></div>
            </div>
            <div class="checklist-item checked" onclick="toggleChecklist(this)">
              <i class="checkbox-icon fa-regular fa-square-check"></i>
              <div class="checklist-item-text">Centang: <strong>Abstract & Keywords</strong></div>
            </div>
            <div class="checklist-item checked" onclick="toggleChecklist(this)">
              <i class="checkbox-icon fa-regular fa-square-check"></i>
              <div class="checklist-item-text">Centang: <strong>Include References (Kunci Utama)</strong></div>
            </div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Pernahkah Anda mencoba mengimpor file ke <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer tapi grafiknya kosong melompong? Hal itu hampir pasti terjadi karena kolom 'Include References' terlewat saat ekspor.",
    speakerNote: "Minta seluruh peserta membuka akun Scopus masing-masing melalui jaringan UGM. Tuntun mereka secara perlahan di layar proyektor untuk mencentang checklist di atas.",
    referenceNote: "Scopus Export Limit Documentation (2025)."
  },
  {
    id: 9,
    title: "🖥️ Hands-On: Ekspor Data Scopus Anda",
    subtitle: "Eksperimen Mandiri (10 Menit)",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 20px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">
          Mari praktikkan langsung langkah-langkah di bawah ini pada browser laptop Anda:
        </p>
        <div style='background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 25px; display: flex; flex-direction: column; gap: 15px; font-size: 0.95rem;'>
          <p><strong>1. Akses Off-Campus:</strong> Buka portal <a href="https://ezproxy.ugm.ac.id" target="_blank" style="color: var(--accent-sky); text-decoration: underline;">ezproxy.ugm.ac.id</a>, masuk dengan SSO UGM Anda, lalu pilih <strong>Scopus</strong>. (Jika dalam jaringan kampus UGM, buka langsung <a href="https://scopus.com" target="_blank" style="color: var(--accent-sky); text-decoration: underline;">scopus.com</a>).</p>
          <p><strong>2. Formula:</strong> Masukkan rumus query yang sudah dirancang sebelumnya di kolom pencarian.</p>
          <p><strong>3. Ekspor:</strong> Klik <strong>Export</strong> → Pilih <strong>CSV</strong> → Pastikan seluruh checklist metadata dan referensi sudah tercentang.</p>
          <p><strong>4. Unduh:</strong> Klik <strong>Export</strong> kembali dan unduh file hasil ke laptop Anda.</p>
        </div>
      </div>
    `,
    discussionNote: "Berapa banyak hasil artikel yang didapat oleh masing-masing peserta? Apakah ada yang mendapatkan hasil di atas 2.000 dokumen?",
    speakerNote: "Ju harus berkeliling ruangan memantau laptop peserta. Sediakan flashdisk berisi dataset cadangan (dataset_latihan_AI_higher_education_2024.csv) bagi peserta yang gagal mengunduh atau jaringannya lambat.",
    referenceNote: "Perpustakaan FISIPOL UGM Workshop Sandbox."
  },
  {
    id: 10,
    title: "Mengapa Data Harus Dibersihkan?",
    subtitle: "Babak 3: Pembersihan Data — <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine | Unduh: <a href='https://openrefine.org' target='_blank' style='color: var(--accent-sky); text-decoration: underline;'>openrefine.org</a>",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.6;">
            Data mentah dari Scopus seringkali kotor karena perbedaan cara tulis penulis atau ketidakkonsistenan database. 
          </p>
          <div class="quote-box">
            "Jika data Anda kotor, visualisasi peta jejaring Anda hanya akan menjadi kumpulan node yang tidak akurat dan menyesatkan."
          </div>
        </div>
        <div class="grid-col">
          <table class="premium-table">
            <thead>
              <tr>
                <th>Masalah Data</th>
                <th>Dampak Visual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ML vs Machine Learning</td>
                <td>Terpecah jadi 2 node terpisah</td>
              </tr>
              <tr>
                <td>Widodo, J. vs J. Widodo</td>
                <td>Satu dosen dikira 2 orang berbeda</td>
              </tr>
              <tr>
                <td>UGM vs Univ. Gadjah Mada</td>
                <td>Jejaring afiliasi kampus terdistorsi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    discussionNote: "Coba bayangkan Anda memetakan riset fakultas kita, dan nama dekan atau dosen senior terpecah menjadi 3 node karena beda singkatan nama tengah. Bagaimana cara mengoreksinya di Excel?",
    speakerNote: "Jelaskan bahwa mengoreksi manual satu per satu di Excel untuk ribuan baris data adalah siksaan. Itulah mengapa kita membutuhkan <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine yang memiliki clustering otomatis.",
    referenceNote: "Van Eck, N. J., & Waltman, L. (2014). 'Visualizing Bibliometric Networks.' Springer."
  },
  {
    id: 11,
    title: "Mengenal <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine",
    subtitle: "Solusi Cerdas Pengolah Data Tabular",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 20px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">
          <strong><span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine</strong> (dahulu Google Refine) adalah alat open-source gratis untuk membersihkan dan mentransformasikan data yang berantakan.
        </p>
        <div class="stat-card-row">
          <div class="stat-card">
            <div class="stat-val"><i class="fa-solid fa-code-compare"></i></div>
            <div class="stat-lbl">Clustering Otomatis</div>
          </div>
          <div class="stat-card">
            <div class="stat-val"><i class="fa-solid fa-bolt"></i></div>
            <div class="stat-lbl">Tanpa Batas Baris</div>
          </div>
          <div class="stat-card">
            <div class="stat-val"><i class="fa-solid fa-rotate-left"></i></div>
            <div class="stat-lbl">Undo/Redo Histori</div>
          </div>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); text-align: center;">
          Aplikasi dijalankan secara lokal di laptop Anda (membuka localhost:3333) sehingga data Anda aman dan tidak dikirim ke server luar.
        </p>
      </div>
    `,
    discussionNote: "Apakah ada yang sudah pernah menggunakan <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine sebelumnya? Di perpustakaan, kita juga sering menggunakannya untuk membersihkan katalog buku cetak.",
    speakerNote: "Jelaskan bahwa <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine sangat ramah privasi karena data riset yang diunggah ke dalamnya tidak akan bocor ke publik, berjalan 100% luring.",
    referenceNote: "<span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine Documentation (2025)."
  },
  {
    id: 12,
    title: "Teknik 1: Faceting Data",
    subtitle: "Mengeksplorasi Variasi Nilai Unik",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.6;">
            <strong>Faceting</strong> adalah cara instan untuk mengelompokkan nilai unik dalam suatu kolom dan melihat frekuensinya.
          </p>
          <p style="font-size: 0.95rem; color: var(--text-muted);">
            Langkah: Klik dropdown ▼ pada kolom <strong>Author Keywords</strong> → Pilih <strong>Facet</strong> → <strong>Text Facet</strong>.
          </p>
          <div style='background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px; font-size: 0.85rem;'>
            Panel di sisi kiri akan menampilkan ribuan kata kunci secara terurut dari yang paling sering digunakan hingga yang paling jarang.
          </div>
        </div>
        <div class="grid-col">
          <div style='background: #080c14; border: 1px solid var(--border-color); border-radius: 10px; padding: 15px; font-family: var(--font-code); font-size: 0.8rem; color: var(--text-muted);'>
            <div style="color: var(--accent-sky); font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-bottom: 10px;">
              [Text Facet Panel Mock]
            </div>
            <div>- artificial intelligence (182)</div>
            <div>- chatgpt (94)</div>
            <div>- higher education (88)</div>
            <div>- academic integrity (32)</div>
            <div>- Machine Learning (12)</div>
            <div>- ML (4)</div>
            <div style="color: var(--accent-rose); font-style: italic; margin-top: 10px;">* ML dan Machine Learning terpisah!</div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Buka facet kata kunci pada dataset Anda. Kata kunci terpopuler apa yang paling atas? Dan adakah penulisan kata kunci yang memiliki arti sama namun ejaannya berbeda?",
    speakerNote: "Pastikan peserta mengerti navigasi antarmuka <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine. Pandu mereka membuka panel facet ini secara langsung.",
    referenceNote: "Verborgh, R., & De Wilde, M. (2013). 'Using <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine' Book."
  },
  {
    id: 13,
    title: "Teknik 2: Cluster & Merge",
    subtitle: "Memahami Metode Pengelompokan Data",
    layout: "custom-widget",
    content: `
      <div style="display: flex; flex-direction: column; gap: 10px; height: 100%;">
        <div style="font-size: 0.85rem; color: var(--text-muted); display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div>
            <strong>1. Key Collision (Fingerprint):</strong><br>
            Metode paling aman dan <strong>sangat direkomendasikan untuk pemula</strong>. Metode ini membersihkan karakter aneh, mengubah huruf kecil, mengurutkan kata, lalu menggabungkannya. Hampir 100% akurat tanpa salah gabung.
          </div>
          <div>
            <strong>2. Nearest Neighbor (Levenshtein):</strong><br>
            Metode pencarian typo berdasarkan jarak edit huruf (contoh: "pubic" vs "public"). <strong>Membutuhkan pengawasan manusia</strong> karena berisiko menggabungkan kata yang sekilas mirip tapi artinya berbeda.
          </div>
        </div>
        <div class="cleaning-widget" style="padding: 10px 20px;">
          <div class="cleaning-row">
            <div><span class="cleaning-dirty">"generative AI"</span> &amp; <span class="cleaning-dirty">"Generative Artificial Intelligence"</span> (Key Collision)</div>
            <button id="merge-btn-1" class="cleaning-btn" onclick="mergeDemo(1, 'Generative AI')"><i class="fa-solid fa-compress"></i> Merge</button>
          </div>
          <div class="cleaning-row">
            <div><span class="cleaning-dirty">"pubic policy"</span> (typo!) &amp; <span class="cleaning-dirty">"public policy"</span> (Nearest Neighbor)</div>
            <button id="merge-btn-2" class="cleaning-btn" onclick="mergeDemo(2, 'Public Policy')"><i class="fa-solid fa-compress"></i> Merge</button>
          </div>
        </div>
        <p style="font-size: 0.8rem; color: var(--accent-emerald); font-weight: 500; margin: 0;" id="merge-result-msg">
          * Klik tombol Merge untuk melihat visualisasi penggabungan otomatis.
        </p>
      </div>
    `,
    discussionNote: "Mengapa pemula disarankan menggunakan Fingerprint terlebih dahulu? Karena metodenya deterministik dan tidak akan menggabungkan kata yang berbeda arti secara acak.",
    speakerNote: "Jelaskan bahwa Key Collision menyatukan perbedaan kapitalisasi dan spasi. Sedangkan Nearest Neighbor membandingkan kemiripan susunan huruf.",
    referenceNote: "<span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine Clustering Algorithms Manual."
  },
  {
    id: 14,
    title: "Teknik 3: Mengekspor CSV Hasil Pembersihan",
    subtitle: "Menyiapkan Berkas untuk <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 20px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">
          Setelah proses pembersihan data selesai dilakukan, ekspor data dalam format yang dipahami <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer:
        </p>
        <div style='background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 25px; display: flex; flex-direction: column; gap: 15px;'>
          <p><i class="fa-solid fa-circle-chevron-right" style="color: var(--accent-sky);"></i> Langkah 1: Klik tombol <strong>Export</strong> di pojok kanan atas <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine.</p>
          <p><i class="fa-solid fa-circle-chevron-right" style="color: var(--accent-sky);"></i> Langkah 2: Pilih format ekspor: <strong>Comma-separated value (CSV)</strong>.</p>
          <p><i class="fa-solid fa-circle-chevron-right" style="color: var(--accent-sky);"></i> Langkah 3: Beri nama file secara jelas, contoh: <code>skripsi_cleaned_2026.csv</code>.</p>
        </div>
        <div style='background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 12px; font-size: 0.9rem; text-align: center; color: var(--accent-emerald);'>
          ✅ Data yang bersih kini siap menjadi basis peta visualisasi berkualitas tinggi di <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer.
        </div>
      </div>
    `,
    discussionNote: "Bandingkan ukuran file sebelum dan setelah dibersihkan. Apakah berkurang banyak baris kosong atau sel yang anomali?",
    speakerNote: "Pastikan seluruh peserta menyimpan file CSV hasil ekspor dengan nama yang jelas agar tidak tertukar dengan file mentah dari Scopus.",
    referenceNote: "Perpustakaan FISIPOL UGM Workflow standard."
  },
  {
    id: 15,
    title: "Mengenal <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer",
    subtitle: "Babak 4: Visualisasi Jejaring dengan <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer | Unduh: <a href='https://vosviewer.com' target='_blank' style='color: var(--accent-sky); text-decoration: underline;'>vosviewer.com</a>",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.5; margin-bottom: 8px;">
            <strong><span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer</strong> adalah perangkat lunak visualisasi analisis bibliometrik paling populer di dunia akademik. 
          </p>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 8px;">
            Dibangun oleh Nees Jan van Eck dan Ludo Waltman dari Universitas Leiden, software ini sangat tangguh untuk memetakan klaster penelitian.
          </p>
          <div style='background: rgba(245, 158, 11, 0.1); border-left: 4px solid var(--accent-amber); padding: 10px; border-radius: 4px; font-size: 0.75rem; color: #fbd38d; line-height: 1.4;'>
            <strong>Prasyarat Wajib (Java Runtime):</strong> <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer memerlukan mesin <strong>Java Runtime Environment (JRE)</strong> untuk dapat berjalan. Pastikan Java sudah terinstal di komputer Anda sebelum membuka file <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer. Unduh di: <a href="https://www.java.com" target="_blank" style="color: var(--accent-sky); text-decoration: underline;">java.com</a>.
          </div>
        </div>
        <div class="grid-col" style="text-align: center;">
          <div style="font-size: 4rem; color: var(--accent-sky); font-family: var(--font-title); font-weight: 800; line-height: 1;">14.000+</div>
          <div style="font-size: 1.1rem; color: var(--text-main); font-weight: 600; margin-top: 5px;">Kutipan Karya Ilmiah</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 5px;">
            Paper pengantar <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer dideklarasikan sebagai salah satu paper metodologi riset yang paling sering dikutip di dunia.
          </p>
        </div>
      </div>
    `,
    discussionNote: "Mengapa memvisualisasikan data jejaring ilmiah jauh lebih mudah dipahami oleh pembaca jurnal riset Anda dibandingkan hanya menyajikan tabel baris data?",
    speakerNote: "Gunakan data kutipan 14.000+ ini untuk menunjukkan legitimasi <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer sebagai software standar yang diakui oleh para reviewer jurnal internasional terkemuka.",
    referenceNote: "Van Eck, N. J., & Waltman, L. (2010). 'Software survey: <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer.' Scientometrics, 84."
  },
  {
    id: 16,
    title: "Langkah 1: Mengimpor Data Bersih",
    subtitle: "Memulai Proyek Peta Visual Baru",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 20px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">
          Ikuti langkah-langkah navigasi awal berikut pada laptop Anda:
        </p>
        <div style='background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 25px; display: flex; flex-direction: column; gap: 15px;'>
          <p><strong>1.</strong> Buka <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer → Klik tombol <strong>Create</strong> di bilah navigasi kiri.</p>
          <p><strong>2.</strong> Pilih opsi ke-2: <strong>"Create a map based on bibliographic data"</strong>.</p>
          <p><strong>3.</strong> Pilih tab **Scopus** → Arahkan berkas ke lokasi file CSV hasil bersih <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine Anda.</p>
          <p><strong>4.</strong> Klik <strong>Next</strong> untuk menuju ke panel pengaturan tipe analisis.</p>
        </div>
      </div>
    `,
    discussionNote: "Apakah ada opsi pengimporan data selain Scopus? <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer juga mendukung data mentah dari Web of Science dan PubMed.",
    speakerNote: "Buka proyektor dan tunjukkan tampilan software <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer secara nyata agar peserta dapat mengikuti instruksi dengan tepat.",
    referenceNote: "<span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer Manual guide (2025)."
  },
  {
    id: 17,
    title: "Langkah 2: Menentukan Batas Kemunculan",
    subtitle: "Menyaring Noise di Peta Kata Kunci",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.6;">
            Ketika memilih tipe analisis <strong>Co-occurrence</strong> dengan unit <strong>Author Keywords</strong>, Anda akan diminta mengisi batas minimum kemunculan (*minimum occurrences*).
          </p>
          <div style='background: rgba(244, 63, 94, 0.1); border-left: 4px solid var(--accent-rose); padding: 12px; border-radius: 4px; font-size: 0.85rem; color: #fecdd3; margin-top: 10px;'>
            <strong>Jebakan Pemula:</strong> Jika batas diatur terlalu rendah (misal 1), peta Anda akan penuh dengan ratusan kata kunci acak yang tidak berarti (noise).
          </div>
        </div>
        <div class="grid-col">
          <table class="premium-table">
            <thead>
              <tr>
                <th>Ukuran Dataset</th>
                <th>Threshold Rekomendasi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kecil (&lt;300 artikel)</td>
                <td>3 kali kemunculan</td>
              </tr>
              <tr>
                <td>Sedang (300 - 1.500)</td>
                <td>5 kali kemunculan</td>
              </tr>
              <tr>
                <td>Besar (&gt;1.500)</td>
                <td>7 - 10 kali kemunculan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    discussionNote: "Coba ubah batas threshold pada dataset Anda. Apa yang terjadi pada jumlah kata kunci terpilih ketika batas dinaikkan dari 3 ke 15?",
    speakerNote: "Tekankan bahwa pemilihan threshold adalah proses eksperimen. Tidak ada angka baku yang kaku, pilihlah yang menghasilkan visualisasi paling seimbang.",
    referenceNote: "Van Eck, N. J., & Waltman, L. (2014) guidelines."
  },
  {
    id: 18,
    title: "Tab 1: Network Visualization",
    subtitle: "Membaca Struktur Klaster Riset",
    layout: "custom-widget",
    content: `
      <div class="vos-widget-container">
        <div class="vos-tabs">
          <button class="vos-tab-btn active" onclick="switchVosTab('network')">Network Visualization</button>
          <button class="vos-tab-btn" onclick="switchVosTab('overlay')">Overlay Visualization</button>
          <button class="vos-tab-btn" onclick="switchVosTab('density')">Density Visualization</button>
        </div>
        <div class="vos-map-canvas" id="vos-canvas">
          <!-- Interactive map rendering -->
        </div>
        <div class="vos-sidebar-info" id="vos-info-box">
          <h5><i class="fa-solid fa-info-circle"></i> Petunjuk</h5>
          <p>Klik salah satu node gelembung kata kunci di atas untuk melihat parameter kekuatan tautan dan frekuensi kemunculannya secara interaktif.</p>
        </div>
      </div>
    `,
    discussionNote: "Node mana yang berada tepat di tengah-tengah jejaring peta? Hal itu menandakan topik riset tersebut adalah topik mainstream yang paling banyak dibahas.",
    speakerNote: "Gunakan simulasi interaktif ini untuk melatih insting visual peserta. Ajarkan membaca node (lingkaran), garis hubung (kekuatan asosiasi), dan perbedaan warna (klaster topik).",
    referenceNote: "Dataset simulasi riset FISIPOL UGM."
  },
  {
    id: 19,
    title: "Tab 2: Overlay Visualization",
    subtitle: "Membaca Tren Riset dari Rentang Waktu",
    layout: "custom-widget",
    content: `
      <div class="vos-widget-container">
        <div class="vos-tabs">
          <button class="vos-tab-btn" onclick="switchVosTab('network')">Network Visualization</button>
          <button class="vos-tab-btn active" onclick="switchVosTab('overlay')">Overlay Visualization</button>
          <button class="vos-tab-btn" onclick="switchVosTab('density')">Density Visualization</button>
        </div>
        <div class="vos-map-canvas" id="vos-canvas-2">
          <!-- Interactive map rendering -->
        </div>
        <div class="vos-sidebar-info" id="vos-info-box-2">
          <h5><i class="fa-solid fa-clock"></i> Visualisasi Berbasis Garis Waktu</h5>
          <p>Node yang berwarna kuning cerah merupakan topik yang paling baru dibahas oleh peneliti (emerging topics). Node biru tua menandakan topik lama.</p>
        </div>
      </div>
    `,
    discussionNote: "Bandingkan kata kunci di ujung-ujung terluar peta Anda yang berwarna kuning. Mengapa topik-topik tersebut relatif jarang disitasi oleh penelitian sebelumnya?",
    speakerNote: "Fokuskan pandangan peserta pada node berwarna kuning (kuning = masa depan riset, biru = masa lalu riset). Cari topik kuning yang masih berada di pinggiran jejaring.",
    referenceNote: "<span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer Overlay mapping system."
  },
  {
    id: 20,
    title: "Tab 3: Density Visualization",
    subtitle: "Menganalisis Kepadatan Topik",
    layout: "custom-widget",
    content: `
      <div class="vos-widget-container">
        <div class="vos-tabs">
          <button class="vos-tab-btn" onclick="switchVosTab('network')">Network Visualization</button>
          <button class="vos-tab-btn" onclick="switchVosTab('overlay')">Overlay Visualization</button>
          <button class="vos-tab-btn active" onclick="switchVosTab('density')">Density Visualization</button>
        </div>
        <div class="vos-map-canvas" id="vos-canvas-3">
          <!-- Interactive map rendering -->
        </div>
        <div class="vos-sidebar-info" id="vos-info-box-3">
          <h5><i class="fa-solid fa-fire"></i> Heatmap Kepadatan Riset</h5>
          <p>Area berwarna merah menyala menandakan topik riset yang sudah sangat padat dikaji oleh peneliti (hotspot). Area gelap merupakan peluang celah riset kosong (coldspot).</p>
        </div>
      </div>
    `,
    discussionNote: "Bagaimana cara Anda menjustifikasi riset baru jika area proposal riset Anda berada di pusat wilayah berwarna merah menyala (sangat padat)?",
    speakerNote: "Minta peserta mencari wilayah kosong di sela-sela area merah. Itu adalah letak research gap terbaik yang siap diangkat menjadi proposal tesis/disertasi.",
    referenceNote: "Scientometrics hotspot analysis guide."
  },
  {
    id: 21,
    title: "🖥️ Hands-On: Jelajahi Peta Anda",
    subtitle: "Eksplorasi Peta Mandiri (10 Menit)",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 20px;">
        <p style="font-size: 1.1rem; line-height: 1.6;">
          Gunakan waktu 10 menit ini untuk mengamati karakteristik peta data riset Anda:
        </p>
        <div style='background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 25px; display: flex; flex-direction: column; gap: 15px;'>
          <p><i class="fa-solid fa-compass" style="color: var(--accent-sky);"></i> Temukan 3 kata kunci dominan di area visualisasi pusat (mainstream).</p>
          <p><i class="fa-solid fa-lightbulb" style="color: var(--accent-amber);"></i> Temukan 2 kata kunci di area terluar berwarna kuning cerah (emerging).</p>
          <p><i class="fa-solid fa-map" style="color: var(--accent-purple);"></i> Identifikasi 1 wilayah kosong (coldspot) di antara klaster merah.</p>
        </div>
        <p style="font-size: 0.90rem; color: var(--text-muted); text-align: center;">
          Catat temuan kata kunci tersebut, kita akan menggunakannya sebagai basis input asisten kecerdasan buatan.
        </p>
      </div>
    `,
    discussionNote: "Siapa yang bersedia menampilkan peta bibliometriknya di proyektor untuk dianalisis bersama oleh seisi kelas?",
    speakerNote: "Ini saat terbaik untuk mengajak diskusi interaktif. Tampilkan peta salah satu peserta di layar utama dan lakukan pembedahan interaktif.",
    referenceNote: "Perpustakaan FISIPOL UGM Workshop Sandbox."
  },
  {
    id: 22,
    title: "3 Jenis Gap Riset di Peta Visual",
    subtitle: "Babak 5: Interpretasi & AI Gap Detection",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col" style="gap: 5px;">
          <p style="line-height: 1.4; font-size: 0.85rem;">
            Sebelum memformulakan riset baru, bedakan 3 jenis celah (*gap*) riset berikut pada peta <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer Anda:
          </p>
          <ul class="slide-list list-bullet" style="font-size: 0.8rem; gap: 5px; margin-top: 5px;">
            <li><strong>Void (Celah Kosong):</strong> Absensi total literatur yang menghubungkan dua bidang besar. Pada peta, terlihat sebagai area kosong putih lebar di antara dua klaster padat. Menandakan belum ada jembatan riset sama sekali.</li>
            <li><strong>Weak Bridge:</strong> Hubungan tipis (garis halus) antar topik. Peluang riset interdisipliner baru.</li>
            <li><strong>Emerging Niche:</strong> Node kuning kecil di tepian peta. Menandakan isu mutakhir yang belum banyak digarap.</li>
          </ul>
        </div>
        <div class="grid-col">
          <table class="premium-table">
            <thead>
              <tr>
                <th>Tipe Gap</th>
                <th>Visualisasi Peta</th>
                <th>Tingkat Novelty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Void</td>
                <td>Spasi Lebar Kosong</td>
                <td>Sangat Tinggi ⭐⭐⭐</td>
              </tr>
              <tr>
                <td>Weak Bridge</td>
                <td>Garis Tipis Halus</td>
                <td>Tinggi ⭐⭐</td>
              </tr>
              <tr>
                <td>Emerging Niche</td>
                <td>Node Kuning Kecil</td>
                <td>Potensial Tren ⭐</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    discussionNote: "Void (Celah Kosong) merupakan area riset paling berharga. Meneliti di area Void berarti Anda merintis jembatan pertama yang menghubungkan dua disiplin keilmuan berbeda.",
    speakerNote: "Jelaskan dengan detail kerangka kerja identifikasi gap riset ini. Ini adalah jembatan teori metodologis riset pustaka yang solid.",
    referenceNote: "Müller-Bloch, C., & Kranz, J. (2015). 'Identifying Research Gaps.' ICIS Proceedings."
  },
  {
    id: 23,
    title: "Peran Etis AI: Asisten, Bukan Pengarang",
    subtitle: "Batasan Kolaborasi Akademik dengan AI | Akses: <a href='https://chat.openai.com' target='_blank' style='color: var(--accent-sky); text-decoration: underline;'>chatgpt</a> / <a href='https://claude.ai' target='_blank' style='color: var(--accent-sky); text-decoration: underline;'>claude.ai</a>",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.6; font-size: 0.95rem;">
            Merujuk pada **Panduan Etika AI UGM 2025**, kecerdasan buatan dilarang menggantikan proses berpikir kritis Anda sendiri.
          </p>
          <div class="quote-box">
            "KA Generatif berfungsi sebagai asisten pembantu stimulasi ide, bukan penulis utama draf skripsi/tesis." (Panduan UGM, hal. 13)
          </div>
        </div>
        <div class="grid-col">
          <ul class="slide-list list-bullet" style="font-size: 0.9rem;">
            <li><strong>✅ BOLEH:</strong> Meminta AI menganalisis relasi teoritis antar kata kunci klaster.</li>
            <li><strong>✅ BOLEH:</strong> Meminta AI menyarankan rumusan pertanyaan riset baru.</li>
            <li><strong>❌ DILARANG:</strong> Menyalin mentah tulisan AI tanpa proses penyuntingan substantif.</li>
            <li><strong>❌ DILARANG:</strong> Mengabaikan verifikasi rujukan rujukan yang diberikan AI.</li>
          </ul>
        </div>
      </div>
    `,
    discussionNote: "Mengapa plagiarisme yang dimediasi oleh AI (mengaku tulisan AI sebagai tulisan sendiri) dinilai merusak nilai integritas akademik Anda?",
    speakerNote: "Berikan penekanan pada kebijakan tegas Rektorat UGM. Posisikan AI sebagai asisten diskusi cerdas, bukan mesin pengganti naskah kelulusan.",
    referenceNote: "Panduan Etika Akademik Pemanfaatan AI Generatif UGM (2025)."
  },
  {
    id: 24,
    title: "Template Prompt 1: Analisis Klaster",
    subtitle: "Praktek Prompting Cerdas Kolaboratif",
    layout: "custom-widget",
    content: `
      <div style="display: flex; flex-direction: column; gap: 15px; height: 100%;">
        <p style="font-size: 0.95rem; color: var(--text-muted);">
          Gunakan template prompt ini untuk menggali asosiasi teoritis klaster di aplikasi AI Anda (ChatGPT/Claude):
        </p>
        <div class="terminal-block">
          <div class="terminal-header">
            <span class="terminal-dot dot-red"></span>
            <span class="terminal-dot dot-yellow"></span>
            <span class="terminal-dot dot-green"></span>
          </div>
          <code id="prompt-template-1">"Saya sedang melakukan analisis bibliometrik <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer untuk topik [MASUKKAN TOPIK UTAMA RISET ANDA]. Dari hasil pemetaan co-occurrence, klaster [MASUKKAN NOMOR/WARNA KLASTER] berisi kata kunci berikut: [SALIN KATA KUNCI DARI VOSVIEWER]. Pertanyaan: 1. Apa tema teoretis utama yang menghubungkan konsep-konsep ini? 2. Teori konseptual apa yang relevan untuk menjelaskannya? 3. Sebutkan 3 artikel ilmiah seminal di area ini."</code>
          <button class="btn-copy" onclick="copyToClipboard('prompt-template-1')"><i class="fa-regular fa-copy"></i> Copy Prompt</button>
        </div>
        <p style="font-size: 0.85rem; color: var(--accent-rose); font-weight: 500;">
          ⚠️ Peringatan: Selalu verifikasi daftar artikel seminal yang disarankan oleh AI. AI rawan membuat referensi palsu.
        </p>
      </div>
    `,
    discussionNote: "Mari kita coba tempel prompt ini di ChatGPT. Teori sosial apa yang diajukan AI untuk menghubungkan konsep klaster Anda? Apakah masuk akal?",
    speakerNote: "Minta beberapa peserta menyalin draf prompt ini dan mempraktikkannya langsung. Tunjukkan betapa cepatnya AI menyusun sintesis konseptual awal riset.",
    referenceNote: "Athaluri, M. R., et al. (2023). 'Phenomenon of AI Hallucinations.' Cureus."
  },
  {
    id: 25,
    title: "Template Prompt 2: Deteksi Gap Riset",
    subtitle: "Merumuskan Kebaruan Pertanyaan Riset Berbagai Klaster Keilmuan",
    layout: "custom-widget",
    content: `
      <div style="display: flex; flex-direction: column; gap: 8px; height: 100%;">
        <div class="terminal-block" style="padding: 12px; font-size: 0.75rem;">
          <div class="terminal-header">
            <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
          </div>
          <code id="prompt-template-2">"Berdasarkan analisis <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer saya untuk klaster [A] bertopik [TEMA A] dan klaster [B] bertopik [TEMA B] yang terpisah secara fisik di peta, rumuskan 3 pertanyaan penelitian kritis yang mengeksplorasi hubungan kedua topik ini dalam konteks [KONTEKS WADAH/LOKAL]."</code>
          <button class="btn-copy" onclick="copyToClipboard('prompt-template-2')"><i class="fa-regular fa-copy"></i> Copy Prompt</button>
        </div>
        <div style="font-size: 0.75rem; color: var(--text-muted); display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div>
            • <strong>Klaster Soshum (Sosial-Humaniora):</strong><br>
            A: <em>Digital Literacy</em>, B: <em>Parenting Style</em>, Konteks: <em>Keluarga Urban Indonesia</em>.<br>
            • <strong>Klaster Saintek (Sains Teknologi):</strong><br>
            A: <em>Machine Learning</em>, B: <em>Crop Yield</em>, Konteks: <em>Lahan Pertanian Kering</em>.
          </div>
          <div>
            • <strong>Klaster Kesehatan / Kedokteran:</strong><br>
            A: <em>Telemedicine</em>, B: <em>Patient Satisfaction</em>, Konteks: <em>Puskesmas Daerah 3T</em>.<br>
            • <strong>Klaster Interdisipliner:</strong><br>
            A: <em>Generative AI</em>, B: <em>Medical Ethics</em>, Konteks: <em>Kurikulum Fakultas Kedokteran</em>.
          </div>
        </div>
      </div>
    `,
    discussionNote: "Perhatikan struktur pengisian template di atas. Dengan membedakan rumpun saintek/soshum/kesehatan, usulan pertanyaan penelitian AI menjadi jauh lebih orisinal dan realistis.",
    speakerNote: "Tekankan pentingnya menyertakan konteks spesifik Indonesia (misal: kebijakan publik, birokrasi pemerintahan) agar hasil rumusan masalah AI tidak generik.",
    referenceNote: "Context-rich prompting techniques for Research (2025)."
  },
  {
    id: 26,
    title: "Verifikasi: Jangan Percaya AI Mentah-Mentah",
    subtitle: "Prosedur Mitigasi Risiko Halusinasi AI",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.5; font-size: 0.95rem;">
            LLM sering mengalami **halusinasi referensi** (membuat artikel fiktif). Selalu jalankan verifikasi wajib berikut sebelum mematenkan ide riset Anda:
          </p>
          <div style='background: rgba(244, 63, 94, 0.1); border-left: 4px solid var(--accent-rose); padding: 12px; border-radius: 4px; font-size: 0.85rem; color: #fecdd3; margin-top: 10px;'>
            Studi menunjukkan bahwa AI dapat merekayasa nama jurnal dan pengarang secara meyakinkan namun sebenarnya fiktif.
          </div>
        </div>
        <div class="grid-col">
          <div class="interactive-checklist">
            <div class="checklist-item" onclick="toggleChecklist(this)">
              <i class="checkbox-icon fa-regular fa-square"></i>
              <div class="checklist-item-text">Cari judul paper di Scopus/Google Scholar.</div>
            </div>
            <div class="checklist-item" onclick="toggleChecklist(this)">
              <i class="checkbox-icon fa-regular fa-square"></i>
              <div class="checklist-item-text">Cocokkan nama penulis dan tahun terbitnya.</div>
            </div>
            <div class="checklist-item" onclick="toggleChecklist(this)">
              <i class="checkbox-icon fa-regular fa-square"></i>
              <div class="checklist-item-text">Buka abstrak aslinya untuk memvalidasi isinya.</div>
            </div>
            <div class="checklist-item" onclick="toggleChecklist(this)">
              <i class="checkbox-icon fa-regular fa-square"></i>
              <div class="checklist-item-text">Pastikan ide riset belum pernah diteliti sebelumnya.</div>
            </div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Adakah di antara Anda yang baru saja mendeteksi artikel fiktif hasil saran AI? Mengapa hal ini bisa terjadi pada model AI?",
    speakerNote: "Ceritakan bahwa AI dilatih untuk memprediksi kata berikutnya, bukan memvalidasi fakta sejarah perpustakaan. Momen verifikasi ini adalah wajib bagi peneliti berintegritas.",
    referenceNote: "Alkaissi, A., & McFarlane, S. (2023). 'Artificial Hallucinations in ChatGPT.' Cureus, 15."
  },
  {
    id: 27,
    title: "Transparansi: Cara Menyatakan Penggunaan AI",
    subtitle: "Pernyataan Jujur Penggunaan Teknologi",
    layout: "split",
    content: `
      <div class="slide-grid-2">
        <div class="grid-col">
          <p style="line-height: 1.5; font-size: 0.95rem;">
            Sesuai aturan UGM, kejujuran penggunaan AI wajib dideklarasikan secara tertulis di bagian metodologi naskah kelulusan Anda.
          </p>
          <div class="quote-box" style="font-size: 0.85rem;">
            "Menyatakan pemakaian AI secara jujur justru meningkatkan nilai integritas akademik karya ilmiah Anda di mata reviewer."
          </div>
        </div>
        <div class="grid-col">
          <div class="terminal-block" style="padding: 15px; font-size: 0.8rem; height: 180px;">
            <div class="terminal-header">
              <span class="terminal-dot dot-red"></span>
              <span class="terminal-dot dot-yellow"></span>
              <span class="terminal-dot dot-green"></span>
            </div>
            <code id="declaration-template" style="color: #93c5fd;">"Dalam proses perumusan research gap dan pertanyaan penelitian, penulis menggunakan analisis bibliometrik <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer dan bantuan model bahasa besar [Sebutkan model, misal: ChatGPT-4o] untuk brainstorming asosiasi teoritis kata kunci. Seluruh referensi yang disarankan telah divalidasi manual di database Scopus oleh penulis."</code>
            <button class="btn-copy" onclick="copyToClipboard('declaration-template')"><i class="fa-regular fa-copy"></i> Copy</button>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Bagaimana tanggapan Anda mengenai surat pernyataan bebas intervensi AI berlebihan yang dituntut universitas saat wisuda?",
    speakerNote: "Yakinkan peserta bahwa menyatakan keterlibatan AI secara terbatas dan bertanggung jawab adalah perilaku ilmuwan modern yang terpuji, bukan aib riset.",
    referenceNote: "Panduan UGM 2025, hal 6 & hal 43."
  },
  {
    id: 28,
    title: "Rangkuman Pembelajaran Hari Ini",
    subtitle: "Menembus Batas Riset Tradisional",
    layout: "list",
    content: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 20px;">
        <table class="premium-table" style="font-size: 0.95rem;">
          <thead>
            <tr>
              <th>Tahap</th>
              <th>Kemampuan yang Anda Kuasai Sekarang</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Query Scopus</td>
              <td>Merancang formula pencarian data riset terstruktur yang presisi.</td>
            </tr>
            <tr>
              <td>2. <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine</td>
              <td>Membersihkan ribuan kata kunci dan duplikasi nama pengarang secara cepat.</td>
            </tr>
            <tr>
              <td>3. <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer</td>
              <td>Memvisualisasikan network, tren overlay waktu, dan kepadatan hotspot riset.</td>
            </tr>
            <tr>
              <td>4. AI Gap Detection</td>
              <td>Mendeteksi research gap orisinal dibantu asisten AI secara etis dan aman.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    discussionNote: "Dari keempat tahap yang kita lalui hari ini, manakah yang menurut Anda paling menantang untuk dipraktikkan mandiri di rumah?",
    speakerNote: "Apresiasi kerja keras peserta. Ingatkan mereka bahwa keahlian riset bibliometrik ini adalah bekal investasi karir akademik masa depan mereka.",
    referenceNote: "Perpustakaan FISIPOL UGM."
  },
  {
    id: 29,
    title: "Daftar Referensi & Bahan Bacaan",
    subtitle: "Acuan Akademik Solid & Regulasi Resmi",
    layout: "split",
    content: `
      <div class="slide-grid-2" style="align-items: flex-start;">
        <div class="grid-col" style="font-size: 0.8rem; gap: 8px;">
          <h4 style="font-family: var(--font-title); color: var(--accent-sky); font-size: 0.95rem;"><i class="fa-solid fa-book"></i> Referensi Metodologis</h4>
          <p>• Donthu, N., Kumar, S., Mukherjee, D.,... & Lim, W. M. (2021). <em>How to conduct a bibliometric analysis: An overview and guidelines</em>. Journal of Business Research, 133, 285-296. (Kutipan Definisi Induk)</p>
          <p>• Van Eck, N. J., & Waltman, L. (2010). <em>Software survey: <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer, a computer program for bibliometric mapping</em>. Scientometrics, 84(2), 523-538. (Kutipan <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer)</p>
          <p>• Zupic, I., & Čater, T. (2015). <em>Bibliometric methods in management and organization</em>. Organizational Research Methods, 18(3), 429-472. (Kutipan Co-Citation)</p>
        </div>
        <div class="grid-col" style="font-size: 0.8rem; gap: 8px;">
          <h4 style="font-family: var(--font-title); color: var(--accent-sky); font-size: 0.95rem;"><i class="fa-solid fa-scale-balanced"></i> Regulasi & Etika AI UGM</h4>
          <p>• Universitas Gadjah Mada. (2025). <em>Panduan Etika Akademik Pemanfaatan Kecerdasan Artifisial Generatif di Pendidikan Tinggi UGM</em>. Yogyakarta: Rektorat UGM. (Regulasi Resmi UGM)</p>
          <p>• Müller-Bloch, C., & Kranz, J. (2015). <em>A framework for rigorously identifying research gaps in qualitative literature reviews</em>. ICIS Proceedings. (Kutipan Analisis Gap & Void)</p>
          <p>• Alkaissi, A., & McFarlane, S. (2023). <em>Artificial hallucinations in ChatGPT: Implications in scientific writing</em>. Cureus, 15(2). (Kutipan Halusinasi Referensi)</p>
        </div>
      </div>
    `,
    discussionNote: "Seluruh referensi di atas merupakan publikasi berkualifikasi tinggi (high impact) dan regulasi resmi UGM yang menjamin keabsahan metodologi presentasi Anda.",
    speakerNote: "Halaman ini menyajikan pustaka acuan resmi untuk meyakinkan audiens (dosen & mahasiswa S2/S3) bahwa seluruh materi yang dipaparkan memiliki dasar akademik yang kuat.",
    referenceNote: "Bibliometric Core Literature List."
  },
  {
    id: 30,
    title: "Matur Nuwun",
    subtitle: "Ilmu itu dibagikan, bukan digenggam.",
    layout: "custom-widget",
    content: `
      <div class="profile-card-container">
        <div class="profile-card-photo" style="overflow: hidden; border: 4px solid var(--accent-sky);">
          <img src="https://github.com/jumarh.png" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <i class="fa-solid fa-user-tie" style="display: none; font-size: 5rem; line-height: 200px;"></i>
        </div>
        <div class="profile-card-info">
          <div class="profile-card-name">Juvita Umar Hadinata</div>
          <div class="profile-card-title">Digital Library Staff | Academic Library FISIPOL UGM</div>
          <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-muted);">
            Menyediakan konsultasi riset personal 1-on-1, penelusuran referensi tingkat lanjut, dan pembersihan metadata ilmiah untuk menunjang pengerjaan tugas akhir Anda.
          </p>
          <div class="profile-card-details">
            <div class="profile-card-detail-item">
              <i class="fa-solid fa-envelope"></i>
              <span>juvitaumarhadinata@ugm.ac.id</span>
            </div>
            <div class="profile-card-detail-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>Perpustakaan FISIPOL, Lantai 3 Gedung Mandiri FISIPOL UGM</span>
            </div>
            <div class="profile-card-detail-item">
              <i class="fa-solid fa-globe"></i>
              <span><a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a></span>
            </div>
            <div class="profile-card-detail-item">
              <i class="fa-solid fa-clock"></i>
              <span>Senin - Jumat (08:00 - 16:00)</span>
            </div>
          </div>
        </div>
      </div>
    `,
    discussionNote: "Tidak ada pemandu diskusi untuk slide Penutup. Buka sesi tanya jawab bebas dengan seluruh peserta.",
    speakerNote: "Sampaikan kalimat penutup bernada inbound marketing santun: 'Apabila membutuhkan bimbingan intensif 1-on-1 yang mendalam dan kurasi data spesifik di luar materi dasar hari ini, pintu meja referensi saya pribadi selalu terbuka lebar untuk mendampingi Bapak/Ibu. Silakan hubungi via email atau kunjungi blog saya.'",
    referenceNote: "Perpustakaan FISIPOL UGM Layanan Referensi."
  }
];

// 2. STATE MANAGEMENT
let currentSlideIndex = 0;

// Mock node dataset for <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer widgets (Slides 18, 19, 20)
const vosNodes = [
  { id: 1, label: "Artificial Intelligence", x: 50, y: 55, size: 45, cluster: 1, year: 2021.5, density: 0.9 },
  { id: 2, label: "Higher Education", x: 30, y: 40, size: 35, cluster: 1, year: 2022.0, density: 0.8 },
  { id: 3, label: "ChatGPT", x: 65, y: 35, size: 28, cluster: 2, year: 2024.2, density: 0.75 },
  { id: 4, label: "Academic Integrity", x: 75, y: 60, size: 25, cluster: 2, year: 2023.8, density: 0.65 },
  { id: 5, label: "Policy & Governance", x: 45, y: 80, size: 30, cluster: 3, year: 2022.5, density: 0.6 },
  { id: 6, label: "Online Learning", x: 20, y: 70, size: 22, cluster: 4, year: 2020.1, density: 0.4 },
  { id: 7, label: "Machine Learning", x: 60, y: 75, size: 20, cluster: 3, year: 2021.8, density: 0.5 }
];

const vosLines = [
  { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 5 }, { from: 1, to: 7 },
  { from: 3, to: 4 }, { from: 2, to: 6 }, { from: 5, to: 7 }, { from: 2, to: 5 }
];

// Color palettes for <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer tabs
const clusterColors = {
  1: "#3b82f6", // Blue
  2: "#a855f7", // Purple
  3: "#10b981", // Emerald
  4: "#f43f5e"  // Rose
};

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
  
  // Clean wrapper
  wrapper.innerHTML = "";
  
  // 3.1 Inject Web Navigation Mockup (like Eric Kunto style) if layout is not cover
  let headerHtml = "";
  if (slide.layout !== "cover") {
    headerHtml = `
      <header class="mock-web-header">
        <div class="mock-web-brand"><i class="fa-solid fa-book-open-reader"></i> <span>DIGILIB <strong>FISIPOL</strong></span></div>
        <nav class="mock-web-nav">
          <button class="mock-web-link ${slide.id <= 5 ? 'active' : ''}" onclick="jumpToSlide(1)">Home</button>
          <button class="mock-web-link ${slide.id > 5 && slide.id <= 9 ? 'active' : ''}" onclick="jumpToSlide(6)">1. Query Scopus</button>
          <button class="mock-web-link ${slide.id > 9 && slide.id <= 14 ? 'active' : ''}" onclick="jumpToSlide(10)">2. <span style='background: #0ea5e9; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>OR</span>OpenRefine</button>
          <button class="mock-web-link ${slide.id > 14 && slide.id <= 21 ? 'active' : ''}" onclick="jumpToSlide(15)">3. <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer</button>
          <button class="mock-web-link ${slide.id > 21 ? 'active' : ''}" onclick="jumpToSlide(22)">4. AI & Gap</button>
        </nav>
      </header>
    `;
  }
  
  // Set structure inside wrapper based on layout
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
    <div class="slide-b
      ${slide.content}
    </div>
    
    <div class="slide-footer">
      <span style="font-size:0.7rem;">Juvita Umar Hadinata (<a href="https://juvitaumarhadinata.web.ugm.ac.id" target="_blank" style="color: inherit; text-decoration: underline;">juvitaumarhadinata.web.ugm.ac.id</a>)</span>
      <span>Slide ${slide.id} / ${slideData.length}</span>
    </div>
  `;
  
  // Update indicator
  document.getElementById("slide-indicator").innerText = `${slide.id} / ${slideData.length}`;
  
  // Update Presenter Notes
  document.getElementById("discussion-note-box").innerHTML = slide.discussionNote || "—";
  document.getElementById("speaker-note-box").innerHTML = slide.speakerNote || "—";
  document.getElementById("reference-note-box").innerHTML = slide.referenceNote || "—";
  
  // Trigger layout specific widgets activation
  activateWidgets(slide.id);
  
  // Highlight active item in drawer
  document.querySelectorAll(".drawer-item").forEach((el, idx) => {
    if (idx === index) el.classList.add("active");
    else el.classList.remove("active");
  });
}

function setupEventHandlers() {
  // Navigation buttons
  document.getElementById("btn-prev").addEventListener("click", prevSlide);
  document.getElementById("btn-next").addEventListener("click", nextSlide);
  
  // Drawer Panel toggle
  document.getElementById("btn-drawer-toggle").addEventListener("click", toggleSlideDrawer);
  document.getElementById("btn-close-drawer").addEventListener("click", toggleSlideDrawer);
  
  // Notes Sidebar toggle
  document.getElementById("btn-notes-toggle").addEventListener("click", toggleNotesPanel);
  document.getElementById("btn-close-notes").addEventListener("click", toggleNotesPanel);
  
  // Fullscreen toggle
  document.getElementById("btn-fullscreen").addEventListener("click", toggleFullscreen);
  
  // Keyboard listeners
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

// 4. NAV ACTIONS
function nextSlide() {
  if (currentSlideIndex < slideData.length - 1) {
    currentSlideIndex++;
    renderSlide(currentSlideIndex);
  }
}

// Jump navigation for mock header nav links
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

// Build Slide Drawer list
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

// 5. INTERACTIVE WIDGET LOGICS
function activateWidgets(slideId) {
  // Slide 7 Query Builder (previously Slide 6, pushed by 1 page profile addition)
  if (slideId === 7) {
    const inputs = ["qb-concept-1", "qb-concept-2", "qb-concept-3", "qb-year"];
    inputs.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", updateQueryBuilderOutput);
    });
  }
  
  // <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer Mock Widgets (Slides 18, 19, 20)
  if (slideId === 18) {
    renderVosMockMap("vos-canvas", "network");
  } else if (slideId === 19) {
    renderVosMockMap("vos-canvas-2", "overlay");
  } else if (slideId === 20) {
    renderVosMockMap("vos-canvas-3", "density");
  }
}

// WIDGET 1: Query Builder
function updateQueryBuilderOutput() {
  const c1 = document.getElementById("qb-concept-1").value;
  const c2 = document.getElementById("qb-concept-2").value;
  const c3 = document.getElementById("qb-concept-3").value;
  const yearVal = parseInt(document.getElementById("qb-year").value) - 1;
  
  const query = `TITLE-ABS-KEY(${c1}) AND TITLE-ABS-KEY(${c2}) AND TITLE-ABS-KEY(${c3}) AND PUBYEAR > ${yearVal} AND (LIMIT-TO(DOCTYPE, "ar") OR LIMIT-TO(DOCTYPE, "cp")) AND LIMIT-TO(LANGUAGE, "English")`;
  
  const codeBox = document.getElementById("qb-output-code");
  if (codeBox) codeBox.innerText = query;
}

// WIDGET 2: <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer Interactive Map
function renderVosMockMap(canvasId, mode) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  canvas.innerHTML = "";
  
  const canvasWidth = canvas.clientWidth || 600;
  const canvasHeight = canvas.clientHeight || 250;
  
  // Render Background Grid / Heatmap for Density mode
  if (mode === "density") {
    canvas.style.background = "radial-gradient(circle at 45% 50%, rgba(239, 68, 68, 0.4) 0%, rgba(245, 158, 11, 0.1) 40%, #030712 70%)";
  } else {
    canvas.style.background = "#030712";
  }

  // Draw lines first (beneath nodes)
  vosLines.forEach(line => {
    const fromNode = vosNodes.find(n => n.id === line.from);
    const toNode = vosNodes.find(n => n.id === line.to);
    
    if (fromNode && toNode) {
      const x1 = (fromNode.x / 100) * canvasWidth;
      const y1 = (fromNode.y / 100) * canvasHeight;
      const x2 = (toNode.x / 100) * canvasWidth;
      const y2 = (toNode.y / 100) * canvasHeight;
      
      const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
      const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
      
      const lineEl = document.createElement("div");
      lineEl.className = "vos-line";
      lineEl.style.width = `${length}px`;
      lineEl.style.left = `${x1}px`;
      lineEl.style.top = `${y1}px`;
      lineEl.style.transform = `rotate(${angle}deg)`;
      
      canvas.appendChild(lineEl);
    }
  });

  // Draw nodes
  vosNodes.forEach(node => {
    const nodeEl = document.createElement("div");
    nodeEl.className = "vos-node";
    nodeEl.style.width = `${node.size}px`;
    nodeEl.style.height = `${node.size}px`;
    
    // Position node center
    const posX = (node.x / 100) * canvasWidth - (node.size / 2);
    const posY = (node.y / 100) * canvasHeight - (node.size / 2);
    nodeEl.style.left = `${posX}px`;
    nodeEl.style.top = `${posY}px`;
    
    // Set colors based on mode
    if (mode === "network") {
      nodeEl.style.backgroundColor = clusterColors[node.cluster];
      nodeEl.style.color = "#ffffff";
    } else if (mode === "overlay") {
      // Color gradient by year: 2020 (blue) to 2024 (yellow)
      const ratio = (node.year - 2020) / (2024.5 - 2020);
      nodeEl.style.backgroundColor = getInterpolatedColor("#3b82f6", "#f59e0b", ratio);
      nodeEl.style.color = "#ffffff";
    } else if (mode === "density") {
      // Glow colors for heatmap
      nodeEl.style.backgroundColor = `rgba(245, 158, 11, ${node.density})`;
      nodeEl.style.color = "#000000";
      nodeEl.style.boxShadow = `0 0 15px rgba(245, 158, 11, ${node.density})`;
    }
    
    nodeEl.innerHTML = `<span>${node.label}</span>`;
    
    // Attach click metadata listener
    nodeEl.addEventListener("click", () => {
      let infoText = "";
      if (mode === "network") {
        infoText = `<h5>🔵 Node: ${node.label}</h5>
                   <p>Klaster: <strong>Klaster ${node.cluster}</strong></p>
                   <p>Kemunculan: <strong>${Math.round(node.size * 2.3)} kali</strong></p>
                   <p>Kekuatan Tautan: <strong>${Math.round(node.size * 1.5)}</strong></p>`;
      } else if (mode === "overlay") {
        infoText = `<h5>🕒 Node: ${node.label}</h5>
                   <p>Rata-rata Tahun Terbit: <strong>${node.year.toFixed(1)}</strong></p>
                   <p>Status: <strong>${node.year >= 2023.5 ? 'Emerging Topic (Mulai Tren)' : 'Established Topic'}</strong></p>`;
      } else if (mode === "density") {
        infoText = `<h5>🔥 Node: ${node.label}</h5>
                   <p>Kepadatan Riset: <strong>${(node.density * 100).toFixed(0)}%</strong></p>
                   <p>Status: <strong>${node.density >= 0.75 ? 'Hotspot (Sangat Padat)' : 'Coldspot (Peluang Riset)'}</strong></p>`;
      }
      
      const boxId = mode === "network" ? "vos-info-box" : (mode === "overlay" ? "vos-info-box-2" : "vos-info-box-3");
      const infoBox = document.getElementById(boxId);
      if (infoBox) infoBox.innerHTML = infoText;
    });
    
    canvas.appendChild(nodeEl);
  });
}

// Color interpolator helper
function getInterpolatedColor(color1, color2, factor) {
  if (factor < 0) factor = 0;
  if (factor > 1) factor = 1;
  
  // Simple hex parsing
  const c1 = {
    r: parseInt(color1.substring(1, 3), 16),
    g: parseInt(color1.substring(3, 5), 16),
    b: parseInt(color1.substring(5, 7), 16)
  };
  const c2 = {
    r: parseInt(color2.substring(1, 3), 16),
    g: parseInt(color2.substring(3, 5), 16),
    b: parseInt(color2.substring(5, 7), 16)
  };
  
  const r = Math.round(c1.r + factor * (c2.r - c1.r));
  const g = Math.round(c1.g + factor * (c2.g - c1.g));
  const b = Math.round(c1.b + factor * (c2.b - c1.b));
  
  return `rgb(${r}, ${g}, ${b})`;
}

// Tab switcher for <span style='background: var(--accent-emerald); color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-family: sans-serif;' class='brand-logo-inline'>VOS</span>VOSviewer interactive widget
function switchVosTab(tabName) {
  if (tabName === "network") {
    currentSlideIndex = 17; // Slide 18 index is 17
  } else if (tabName === "overlay") {
    currentSlideIndex = 18; // Slide 19 index is 18
  } else if (tabName === "density") {
    currentSlideIndex = 19; // Slide 20 index is 19
  }
  renderSlide(currentSlideIndex);
}

// WIDGET 3: Data Cleaning Game demo merge
function mergeDemo(btnId, cleanValue) {
  const btn = document.getElementById(`merge-btn-${btnId}`);
  if (!btn || btn.classList.contains("merged")) return;
  
  btn.classList.add("merged");
  btn.innerHTML = `<i class="fa-solid fa-check"></i> Merged`;
  
  const msg = document.getElementById("merge-result-msg");
  msg.innerHTML = `<i class="fa-solid fa-circle-check"></i> Berhasil mengkonsolidasikan data ke nama baku: <strong>"${cleanValue}"</strong>!`;
}

// WIDGET 4: Interactive Checklist
function toggleChecklist(el) {
  el.classList.toggle("checked");
  const icon = el.querySelector(".checkbox-icon");
  if (el.classList.contains("checked")) {
    icon.className = "checkbox-icon fa-regular fa-square-check";
  } else {
    icon.className = "checkbox-icon fa-regular fa-square";
  }
}

// Utilities: Copy text to clipboard
function copyToClipboard(elementId) {
  const codeText = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(codeText).then(() => {
    // Show feedback popup or button change
    const btn = document.querySelector(`[onclick="copyToClipboard('${elementId}')"]`);
    const origText = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> Copied!`;
    btn.style.borderColor = "var(--accent-emerald)";
    setTimeout(() => {
      btn.innerHTML = origText;
      btn.style.borderColor = "";
    }, 2000);
  }).catch(err => {
    console.error("Gagal menyalin teks: ", err);
  });
}


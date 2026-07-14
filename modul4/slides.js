const slides = [
    {
        id: "intro",
        title: "Workshop AI Digilib FISIPOL",
        subtitle: "MODUL 4: Administrasi Pasca-Sidang & Unggah Mandiri ETD",
        content: "<div style='text-align:center;'><p style='font-size:1.2rem; color:#94a3b8; margin-bottom:2rem;'>Alur Kelulusan dan Kebijakan Publikasi Tugas Akhir</p><div style='display:flex; justify-content:center; gap:2rem; margin-top:3rem;'><div class='feature-badge'>Bebas Pustaka</div><div class='feature-badge'>SIMASTER</div><div class='feature-badge'>ETD UGM</div></div></div>",
        notes: "Selamat datang di Modul 4. Ini adalah tahap akhir menjelang Yudisium."
    },
    {
        id: "simaster",
        title: "Prosedur Bebas Pustaka SIMASTER",
        subtitle: "Syarat Mutlak Kelulusan",
        content: "<ul style='font-size:1.5rem; line-height:2;'><li>Pastikan seluruh <strong>denda dan pinjaman buku</strong> telah diselesaikan.</li><li>Akses menu: <code style='background:#334155; padding:0.2rem 0.5rem; border-radius:4px;'>Administrasi -> Perpustakaan -> Bebas Pustaka</code></li><li>Cetak Bukti Digital Bebas Pustaka sebagai syarat administrasi fakultas.</li></ul>",
        notes: "Seringkali mahasiswa terhambat yudisium karena denda buku yang terlupa."
    },
    {
        id: "unggah",
        title: "Standardisasi Unggah Mandiri ETD",
        subtitle: "Memecah Berkas Sesuai Aturan",
        content: "<div style='display:grid; grid-template-columns: 1fr 1fr; gap: 2rem;'><div><h3 style='color:#facc15; margin-bottom:1rem;'>Pemecahan File (Maks 50MB)</h3><p>Pisahkan file PDF menjadi: 1. Fulltext utuh. 2. Halaman Pengesahan (bertandatangan). 3. Bab Pendahuluan. 4. Bab Penutup. 5. Daftar Pustaka.</p></div><div><h3 style='color:#fb923c; margin-bottom:1rem;'>Metadata (PUEBI)</h3><p>Penulisan Judul dan Abstrak harus sesuai kaidah PUEBI. Kesalahan ejaan adalah alasan utama penolakan verifikasi oleh Universitas.</p></div></div>",
        notes: "Perhatikan batas ukuran file dan kelengkapan tanda tangan basah/digital."
    },
    {
        id: "policy",
        title: "Kebijakan Akses Terbatas ETD FISIPOL",
        subtitle: "Perlindungan Hak Kekayaan Intelektual",
        content: "<div style='background:rgba(16, 185, 129, 0.1); border-left:5px solid #10b981; padding:2rem; border-radius:0.5rem;'><h3 style='color:#10b981; margin-bottom:1rem;'>Mengapa Fulltext Dikunci?</h3><p style='font-size:1.2rem;'>FISIPOL menetapkan kebijakan bahwa <em>fulltext</em> naskah tesis/skripsi hanya dapat diakses melalui <strong>intranet kampus</strong> (jaringan UGM).</p><p style='margin-top:1rem; color:#94a3b8;'>Hal ini bertujuan untuk melindungi karya orisinal mahasiswa dari plagiarisme eksternal. Publik luar hanya dapat mengakses Abstrak dan Daftar Pustaka (Open Access terbatas).</p></div>",
        notes: "Edukasi mahasiswa agar tidak khawatir karyanya dijiplak orang luar kampus."
    }
];

let currentSlide = 0;

function updateSlide() {
    const slide = slides[currentSlide];
    
    document.getElementById('slide-title').innerHTML = slide.title;
    document.getElementById('slide-subtitle').innerHTML = slide.subtitle;
    document.getElementById('slide-content').innerHTML = slide.content;
    document.getElementById('presenter-notes').innerHTML = slide.notes;
    
    document.getElementById('progress-fill').style.width = \\%\;
    document.getElementById('slide-counter').textContent = \\ / \\;
    
    document.getElementById('prev-btn').disabled = currentSlide === 0;
    document.getElementById('next-btn').disabled = currentSlide === slides.length - 1;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prev-btn').addEventListener('click', prevSlide);
    document.getElementById('next-btn').addEventListener('click', nextSlide);
    updateSlide();
});

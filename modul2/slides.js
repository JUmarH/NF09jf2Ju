const slides = [
    {
        id: "intro",
        title: "Workshop AI Digilib FISIPOL",
        subtitle: "MODUL 2: Mendeley Cite & AI Reading Assistant",
        content: "<div style='text-align:center;'><p style='font-size:1.2rem; color:#94a3b8; margin-bottom:2rem;'>Mengelola Referensi dan Sintesis Literatur dengan AI</p><div style='display:flex; justify-content:center; gap:2rem; margin-top:3rem;'><div class='feature-badge'>Mendeley Ref Manager</div><div class='feature-badge'>NotebookLM</div><div class='feature-badge'>SciSpace Copilot</div></div></div>",
        notes: "Selamat datang di Modul 2. Kita akan fokus pada manajemen PDF dan sintesis."
    },
    {
        id: "mendeley",
        title: "Migrasi ke Mendeley Baru",
        subtitle: "Dari Desktop ke Reference Manager",
        content: "<ul style='font-size:1.5rem; line-height:2;'><li>Tinggalkan Mendeley Desktop (Legacy), beralih ke <strong>Mendeley Reference Manager</strong> (Cloud-Sync).</li><li>Gunakan <strong>Mendeley Cite</strong> sebagai Add-in di Microsoft Word (Online/365).</li><li>Manfaatkan fitur <em>Watch Folder</em> untuk import PDF otomatis.</li></ul>",
        notes: "Mendeley Cite jauh lebih stabil dan tidak sering crash seperti plugin lama."
    },
    {
        id: "notebooklm",
        title: "Sintesis Lintas Dokumen dengan NotebookLM",
        subtitle: "AI sebagai Asisten Peneliti",
        content: "<div style='display:grid; grid-template-columns: 1fr 1fr; gap: 2rem;'><div><h3 style='color:#34d399; margin-bottom:1rem;'>Cara Kerja</h3><p>Unggah PDF paper Anda ke NotebookLM. Tanyakan pertanyaan lintas-dokumen, dan AI akan menjawab disertai <strong>sitasi akurat</strong> ke dokumen sumber Anda.</p></div><div><h3 style='color:#ef4444; margin-bottom:1rem;'>Peringatan Keamanan (Hal. 21)</h3><p>Jangan pernah mengunggah data primer yang belum dipublikasi (wawancara rahasia, data pasien) ke versi gratis NotebookLM.</p></div></div>",
        notes: "NotebookLM memecahkan masalah 'halusinasi' dengan hanya membaca dokumen yang kita unggah."
    },
    {
        id: "ethics2",
        title: "Aturan UGM: Penulisan & Plagiarisme",
        subtitle: "Bebas dari Intervensi AI Berlebih",
        content: "<div style='background:rgba(59, 130, 246, 0.1); border-left:5px solid #3b82f6; padding:2rem; border-radius:0.5rem;'><h3 style='color:#3b82f6; margin-bottom:1rem;'>Deklarasi Penggunaan (Hal. 43)</h3><p style='font-size:1.2rem;'>Mahasiswa wajib mengisi Surat Pernyataan bahwa naskah akhir bebas dari intervensi AI berlebih.</p><p style='margin-top:1rem; color:#94a3b8;'>AI hanya diizinkan untuk: 1. Penyuntingan Bahasa (Grammarly). 2. Sintesis Konsep awal. BUKAN untuk menyusun paragraf argumen utama secara utuh.</p></div>",
        notes: "Ini sangat penting menjelang sidang. Jangan biarkan ChatGPT menulis tesis Anda."
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

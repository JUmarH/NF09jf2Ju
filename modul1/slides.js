const slides = [
    {
        id: "intro",
        title: "Workshop AI Digilib FISIPOL",
        subtitle: "MODUL 1: Penelusuran Semantik & Evaluasi AI",
        content: "<div style='text-align:center;'><p style='font-size:1.2rem; color:#94a3b8; margin-bottom:2rem;'>Menggabungkan Logika Boolean Tradisional dengan Kekuatan AI</p><div style='display:flex; justify-content:center; gap:2rem; margin-top:3rem;'><div class='feature-badge'>Boolean Logic</div><div class='feature-badge'>Consensus AI</div><div class='feature-badge'>SciSpace</div></div></div>",
        notes: "Selamat datang di Modul 1. Kita akan belajar cara mencari referensi secara cerdas."
    },
    {
        id: "boolean",
        title: "Seni Mencari: Boolean Logic",
        subtitle: "AND, OR, NOT",
        content: "<ul style='font-size:1.5rem; line-height:2;'><li><strong style='color:#60a5fa;'>AND:</strong> Mempersempit hasil (A ∩ B)</li><li><strong style='color:#34d399;'>OR:</strong> Memperluas hasil (A ∪ B)</li><li><strong style='color:#f87171;'>NOT:</strong> Mengecualikan kata kunci tertentu</li><li><strong>Gunakan Tanda Kutip (\")</strong> untuk frasa persis (Exact Match).</li></ul>",
        notes: "Boolean logic adalah fundamental sebelum kita beralih ke AI."
    },
    {
        id: "ai-search",
        title: "Penelusuran Semantik AI",
        subtitle: "Mencari Makna, Bukan Sekadar Kata Kunci",
        content: "<div style='display:grid; grid-template-columns: 1fr 1fr; gap: 2rem;'><div><h3 style='color:#60a5fa; margin-bottom:1rem;'>Consensus AI</h3><p>Mencari klaim dan konsensus dari paper ilmiah (Yes/No/Maybe). Sangat cocok untuk pertanyaan spesifik.</p></div><div><h3 style='color:#a855f7; margin-bottom:1rem;'>SciSpace (Typeset.io)</h3><p>Mencari artikel dengan ringkasan AI instan, membaca PDF interaktif dengan Copilot.</p></div></div>",
        notes: "AI Semantic Search memahami konteks kalimat."
    },
    {
        id: "ethics",
        title: "Etika UGM: AI Sebagai Stimulator",
        subtitle: "Hal. 8 - Panduan UGM 2025",
        content: "<div style='background:rgba(239,68,68,0.1); border-left:5px solid #ef4444; padding:2rem; border-radius:0.5rem;'><h3 style='color:#ef4444; margin-bottom:1rem;'>Skeptisisme Sehat</h3><p style='font-size:1.2rem;'>Menurut Panduan Etika Akademik UGM 2025, AI harus diposisikan sebagai <strong>Asisten Pemantik Ide (Stimulator)</strong>, BUKAN otoritas rujukan akhir.</p><p style='margin-top:1rem; color:#94a3b8;'>Selalu verifikasi referensi yang diberikan oleh AI ke database asli (Scopus/ProQuest) untuk menghindari Halusinasi Referensi.</p></div>",
        notes: "Ini poin paling penting. Jangan telan mentah-mentah hasil AI."
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

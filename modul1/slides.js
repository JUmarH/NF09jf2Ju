const slideData = [
  {
    id: 1,
    title: "Penelusuran Semantik AI",
    subtitle: "Modul 1: Boolean Logic, Consensus AI, SciSpace, & Elicit",
    layout: "cover",
    content: 
      <div class="slide-layout-cover">
        <h1>Penelusuran Semantik AI</h1>
        <p class="subtitle">Modul 1: Boolean Logic, Consensus AI, SciSpace, & Elicit</p>
        <div class="cover-meta" style="margin-bottom: 20px;">
          <strong>Juvita Umar Hadinata</strong><br>
          Digital Library Staff | Academic Library FISIPOL UGM
        </div>
      </div>
    ,
    speakerNote: "Selamat datang di Modul 1."
  },
  {
    id: 2,
    title: "Seni Mencari: Boolean Logic",
    subtitle: "AND, OR, NOT",
    layout: "standard",
    content: 
      <div class="slide-layout-standard">
        <ul style="font-size:1.5rem; line-height:2;">
          <li><strong style="color:var(--accent-sky);">AND:</strong> Mempersempit hasil (A ∩ B)</li>
          <li><strong style="color:var(--accent-cyan);">OR:</strong> Memperluas hasil (A ∪ B)</li>
          <li><strong style="color:var(--accent-purple);">NOT:</strong> Mengecualikan kata kunci tertentu</li>
          <li><strong>Gunakan Tanda Kutip (")</strong> untuk frasa persis (Exact Match).</li>
        </ul>
      </div>
    ,
    speakerNote: "Boolean logic adalah fundamental sebelum kita beralih ke AI."
  },
  {
    id: 3,
    title: "Penelusuran Semantik AI",
    subtitle: "Mencari Makna, Bukan Sekadar Kata Kunci",
    layout: "standard",
    content: 
      <div class="slide-layout-standard" style="display:flex; gap:2rem;">
        <div style="flex:1;">
          <h3 style="color:var(--accent-sky); margin-bottom:1rem;">Consensus AI</h3>
          <p>Mencari klaim dan konsensus dari paper ilmiah (Yes/No/Maybe). Sangat cocok untuk pertanyaan spesifik.</p>
        </div>
        <div style="flex:1;">
          <h3 style="color:var(--accent-purple); margin-bottom:1rem;">SciSpace (Typeset.io)</h3>
          <p>Mencari artikel dengan ringkasan AI instan, membaca PDF interaktif dengan Copilot.</p>
        </div>
      </div>
    ,
    speakerNote: "AI Semantic Search memahami konteks kalimat."
  },
  {
    id: 4,
    title: "Etika UGM: AI Sebagai Stimulator",
    subtitle: "Hal. 8 - Panduan UGM 2025",
    layout: "standard",
    content: 
      <div class="slide-layout-standard" style="background:rgba(239,68,68,0.1); border-left:5px solid #ef4444; padding:2rem; border-radius:0.5rem;">
        <h3 style="color:#ef4444; margin-bottom:1rem;">Skeptisisme Sehat</h3>
        <p style="font-size:1.2rem;">Menurut Panduan Etika Akademik UGM 2025, AI harus diposisikan sebagai <strong>Asisten Pemantik Ide (Stimulator)</strong>, BUKAN otoritas rujukan akhir.</p>
        <p style="margin-top:1rem; color:var(--text-muted);">Selalu verifikasi referensi yang diberikan oleh AI ke database asli (Scopus/ProQuest) untuk menghindari Halusinasi Referensi.</p>
      </div>
    ,
    speakerNote: "Ini poin paling penting. Jangan telan mentah-mentah hasil AI."
  }
];

// 2. STATE MANAGEMENT
let currentSlideIndex = 0;

// Mock node dataset for VOSviewer widgets (Slides 18, 19, 20)
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

// Color palettes for VOSviewer tabs
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
          <button class="mock-web-link ${slide.id > 9 && slide.id <= 14 ? 'active' : ''}" onclick="jumpToSlide(10)">2. OpenRefine</button>
          <button class="mock-web-link ${slide.id > 14 && slide.id <= 21 ? 'active' : ''}" onclick="jumpToSlide(15)">3. VOSviewer</button>
          <button class="mock-web-link ${slide.id > 21 ? 'active' : ''}" onclick="jumpToSlide(22)">4. AI & Gap</button>
        </nav>
      </header>
    `;
  }
  
  // Set structure inside wrapper based on layout
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
  
  // Update indicator
  document.getElementById("slide-indicator").innerText = `${slide.id} / ${slideData.length}`;
  
  // Update Presenter Notes
  document.getElementById("discussion-note-box").innerHTML = slide.discussionNote || "â€”";
  document.getElementById("speaker-note-box").innerHTML = slide.speakerNote || "â€”";
  document.getElementById("reference-note-box").innerHTML = slide.referenceNote || "â€”";
  
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
  
  // VOSviewer Mock Widgets (Slides 18, 19, 20)
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

// WIDGET 2: VOSviewer Interactive Map
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
        infoText = `<h5>ðŸ”µ Node: ${node.label}</h5>
                   <p>Klaster: <strong>Klaster ${node.cluster}</strong></p>
                   <p>Kemunculan: <strong>${Math.round(node.size * 2.3)} kali</strong></p>
                   <p>Kekuatan Tautan: <strong>${Math.round(node.size * 1.5)}</strong></p>`;
      } else if (mode === "overlay") {
        infoText = `<h5>ðŸ•’ Node: ${node.label}</h5>
                   <p>Rata-rata Tahun Terbit: <strong>${node.year.toFixed(1)}</strong></p>
                   <p>Status: <strong>${node.year >= 2023.5 ? 'Emerging Topic (Mulai Tren)' : 'Established Topic'}</strong></p>`;
      } else if (mode === "density") {
        infoText = `<h5>ðŸ”¥ Node: ${node.label}</h5>
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

// Tab switcher for VOSviewer interactive widget
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

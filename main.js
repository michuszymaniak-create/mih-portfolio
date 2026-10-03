/** Logo partnerów — podmień name lub dodaj logo: "logos/nazwa.svg" */
const PARTNERS = [
  { name: "Studio North", logo: "" },
  { name: "Agora Media", logo: "" },
  { name: "Frame House", logo: "" },
  { name: "Kino Polska", logo: "" },
  { name: "Visual Dept.", logo: "" },
  { name: "On Set", logo: "" },
  { name: "Post Lab", logo: "" },
  { name: "Creative Union", logo: "" },
];

const PROJECTS = [
  {
    id: "summit-live",
    title: "Summit Live",
    category: "event",
    categoryLabel: "Event",
    year: "2023",
    gradient: "linear-gradient(145deg, #252018, #12100e)",
    description:
      "Relacja wielokamerowa z konferencji — szybki turnaround i wersje pod social media.",
    meta: "3 kamery · Live cut",
    videoUrl: "",
    format: "reel",
  },
  {
    id: "portret-atelier",
    title: "Portret — Atelier",
    category: "reklama",
    categoryLabel: "Film wizerunkowy",
    year: "2022",
    gradient: "linear-gradient(145deg, #2a2420, #161412)",
    description:
      "Portret twórcy w pracowni. Miękkie światło, 35 mm look, minimalistyczna ścieżka dźwiękowa.",
    meta: "Reżyseria · Światło",
    videoUrl: "",
    format: "reel",
  },
  {
    id: "reel-bts-plan",
    title: "BTS — Plan",
    category: "reklama",
    categoryLabel: "Reel",
    year: "2025",
    gradient: "linear-gradient(160deg, #2a2e24, #121410)",
    description: "Kulisy planu — dynamiczny reel 9:16 pod social media.",
    meta: "Reel · Montaż",
    videoUrl: "",
    format: "reel",
  },
  {
    id: "neon-dreams",
    title: "Neon Dreams",
    category: "reklama",
    categoryLabel: "Reklama",
    year: "2025",
    gradient: "linear-gradient(145deg, #3d2a1f, #1a1218)",
    description:
      "Kampania wizerunkowa dla marki lifestyle. Dynamiczny montaż, neonowe światło i narracja bez dialogów.",
    meta: "Reżyseria · Operator · Montaż · Kolor",
    videoUrl: "",
    format: "wide",
  },
  {
    id: "cisza-gor",
    title: "Cisza gór",
    category: "dokument",
    categoryLabel: "Dokument",
    year: "2024",
    gradient: "linear-gradient(145deg, #1e2a24, #0d1210)",
    description:
      "Krótki dokument o alpiniście wracającym na szlak po przerwie. Naturalne światło, długie ujęcia.",
    meta: "Reżyseria · Dźwięk terenowy",
    videoUrl: "",
    format: "wide",
  },
  {
    id: "reel-color-tease",
    title: "Color Tease",
    category: "teledysk",
    categoryLabel: "Reel",
    year: "2024",
    gradient: "linear-gradient(160deg, #1f2430, #0e1018)",
    description: "Zwiastun koloru i rytmu — pionowy format reels.",
    meta: "Kolor · Reel",
    videoUrl: "",
    format: "reel",
  },
  {
    id: "reel-event-cut",
    title: "Event Cut",
    category: "event",
    categoryLabel: "Reel",
    year: "2024",
    gradient: "linear-gradient(160deg, #2c241c, #14100c)",
    description: "Szybki montaż z eventu — highlighty w pionie.",
    meta: "Event · Reel",
    videoUrl: "",
    format: "reel",
  },
  {
    id: "reel-portrait-light",
    title: "Portrait Light",
    category: "reklama",
    categoryLabel: "Reel",
    year: "2023",
    gradient: "linear-gradient(160deg, #262420, #12100e)",
    description: "Portret światłem dostępnym — krótki reel wizerunkowy.",
    meta: "Operator · Reel",
    videoUrl: "",
    format: "reel",
  },
  {
    id: "midnight-run",
    title: "Midnight Run",
    category: "teledysk",
    categoryLabel: "Teledysk",
    year: "2024",
    gradient: "linear-gradient(145deg, #1a1a2e, #0f0f18)",
    description:
      "Teledysk nocny w mieście — choreografia kamery i rytm cięć zsynchronizowany z utworem.",
    meta: "Operator · Postprodukcja",
    videoUrl: "",
    format: "wide",
  },
  {
    id: "forge-industrial",
    title: "Forge Industrial",
    category: "reklama",
    categoryLabel: "Reklama",
    year: "2023",
    gradient: "linear-gradient(145deg, #2a2218, #14100c)",
    description:
      "Film B2B dla producenta maszyn. Kontrast światła przemysłowego i ludzkiej precyzji.",
    meta: "Produkcja end-to-end",
    videoUrl: "",
    format: "wide",
  },
];

const grid = document.getElementById("project-grid");
const modal = document.getElementById("project-modal");
const yearEl = document.getElementById("year");

if (yearEl) yearEl.textContent = String(new Date().getFullYear());

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  if (link.classList.contains("page-top")) return;
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    history.replaceState(null, "", "#top");
  });
});

function embedHtml(url) {
  if (!url) {
    return `<div style="height:100%;display:flex;align-items:center;justify-content:center;color:#9a958c;font-size:0.9rem;padding:1rem;text-align:center">Dodaj <code style="color:#8fa67a">videoUrl</code> w main.js</div>`;
  }
  const yt = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/
  );
  if (yt) {
    return `<iframe src="https://www.youtube.com/embed/${yt[1]}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Wideo"></iframe>`;
  }
  if (url.includes("vimeo.com")) {
    const vimeoId = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    const src = vimeoId
      ? `https://player.vimeo.com/video/${vimeoId[1]}`
      : url;
    return `<iframe src="${src}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Wideo"></iframe>`;
  }
  return `<iframe src="${url}" allowfullscreen title="Wideo"></iframe>`;
}

function renderProjects(filter = "all") {
  if (!grid) return;
  grid.innerHTML = "";
  const items = PROJECTS.filter(
    (p) => filter === "all" || p.category === filter
  );

  items.forEach((project, index) => {
    const li = document.createElement("li");
    const isReel = project.format === "reel";
    li.className = isReel
      ? "project-card project-card--reel"
      : "project-card project-card--wide";
    li.dataset.category = project.category;
    li.innerHTML = `
      <article>
        <button type="button" class="project-card__button" data-project-id="${project.id}">
          <div class="project-card__visual" style="--card-gradient: ${project.gradient}">
            <div class="project-card__overlay">
              <span class="project-card__play">Otwórz</span>
            </div>
          </div>
          <p class="project-card__category">${project.categoryLabel}</p>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__year">${project.year}</p>
        </button>
      </article>
    `;
    grid.appendChild(li);
    requestAnimationFrame(() => {
      setTimeout(() => li.classList.add("is-visible"), 80 * index);
    });
  });
}

function openProject(id) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project || !modal) return;
  modal.classList.toggle("modal--wide", project.format === "wide");
  modal.classList.toggle("modal--reel", project.format !== "wide");
  document.getElementById("modal-category").textContent =
    project.categoryLabel;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-desc").textContent = project.description;
  document.getElementById("modal-meta").textContent = project.meta;
  document.getElementById("modal-media").innerHTML = embedHtml(
    project.videoUrl
  );
  modal.showModal();
}

grid?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-project-id]");
  if (btn) openProject(btn.dataset.projectId);
});

document.querySelectorAll("[data-modal-close]").forEach((el) => {
  el.addEventListener("click", () => modal?.close());
});

modal?.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) =>
      b.classList.remove("is-active")
    );
    btn.classList.add("is-active");
    renderProjects(btn.dataset.filter);
  });
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

navToggle?.addEventListener("click", () => {
  const open = siteNav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateCount(el, target, duration = 1400) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reducedMotion || !target) {
    el.textContent = String(target);
    return;
  }

  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = String(Math.round(target * easeOutCubic(progress)));
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = String(target);
  };
  requestAnimationFrame(tick);
}

const statsBlock = document.querySelector(".about__stats");
if (statsBlock) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const list = entry.target;
        list.classList.add("is-visible");
        list.querySelectorAll("[data-count]").forEach((el, index) => {
          const target = Number(el.dataset.count);
          const delay = window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? 0
            : 120 + index * 140;
          setTimeout(() => animateCount(el, target), delay);
        });
        statsObserver.unobserve(list);
      });
    },
    { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
  );
  statsObserver.observe(statsBlock);
}

function renderPartnerLogos() {
  const track = document.getElementById("hero-logos-track");
  if (!track || PARTNERS.length === 0) return;

  const items = PARTNERS.map((partner) => {
    if (partner.logo) {
      return `<li class="hero__logo-item"><img src="${partner.logo}" alt="${partner.name}" width="120" height="32" loading="lazy" decoding="async" /></li>`;
    }
    return `<li class="hero__logo-item"><span>${partner.name}</span></li>`;
  }).join("");

  const row = `<ul class="hero__logos-row">${items}</ul>`;
  track.innerHTML = `${row}<ul class="hero__logos-row" aria-hidden="true">${items}</ul>`;
}

function smoothstep(value) {
  return value * value * (3 - 2 * value);
}

function initHeroHeadlineMotion() {
  const hero = document.querySelector(".hero");
  const layers = document.querySelectorAll(".hero__display [data-depth]");
  const words = document.querySelectorAll(".hero__word");
  if (!hero || layers.length === 0) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const wordFill = new Map();

  words.forEach((word) => {
    const base = Number(word.dataset.baseFill) || 0;
    wordFill.set(word, base);
    word.style.setProperty("--fill", String(base));
  });

  if (reducedMotion.matches) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let pointerX = null;
  let pointerY = null;

  const setTarget = (clientX, clientY) => {
    const rect = hero.getBoundingClientRect();
    targetX = (clientX - rect.left) / rect.width - 0.5;
    targetY = (clientY - rect.top) / rect.height - 0.5;
    pointerX = clientX;
    pointerY = clientY;
  };

  const clearPointer = () => {
    targetX = 0;
    targetY = 0;
    pointerX = null;
    pointerY = null;
  };

  hero.addEventListener("mousemove", (event) => {
    setTarget(event.clientX, event.clientY);
  });

  hero.addEventListener("mouseleave", clearPointer);

  hero.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      setTarget(touch.clientX, touch.clientY);
    },
    { passive: true }
  );

  hero.addEventListener("touchend", clearPointer);

  const animate = () => {
    currentX += (targetX - currentX) * 0.07;
    currentY += (targetY - currentY) * 0.07;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.depth) || 12;
      layer.style.transform = `translate3d(${currentX * depth}px, ${currentY * depth}px, 0)`;
    });

    const heroRect = hero.getBoundingClientRect();
    const influenceRadius = Math.max(heroRect.width, heroRect.height) * 0.24;

    words.forEach((word) => {
      const base = Number(word.dataset.baseFill) || 0;
      let targetFill = base;

      if (pointerX !== null && pointerY !== null) {
        const rect = word.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(pointerX - centerX, pointerY - centerY);
        const proximity = 1 - Math.min(distance / influenceRadius, 1);
        targetFill = smoothstep(proximity);
      }

      const currentFill = wordFill.get(word) ?? base;
      const nextFill = currentFill + (targetFill - currentFill) * 0.14;
      wordFill.set(word, nextFill);
      word.style.setProperty("--fill", nextFill.toFixed(3));
    });

    requestAnimationFrame(animate);
  };

  animate();
}

renderPartnerLogos();
initHeroHeadlineMotion();
renderProjects();

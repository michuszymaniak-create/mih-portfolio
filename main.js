/** Logo partnerów — podmień name lub dodaj logo: "logos/nazwa.svg" */
const PARTNERS = [
  { name: "Bitter", logo: "logos/Bitter.png", id: "bitter" },
  { name: "DSS", logo: "logos/dss.png", id: "dss" },
  { name: "Ken", logo: "logos/ken.png", id: "ken" },
  { name: "Univ", logo: "logos/univ.png", id: "univ" },
  { name: "Newonce", logo: "logos/newonce.png", id: "newonce" },
  { name: "Smeg", logo: "logos/smeg.png", id: "smeg" },
  { name: "Sony", logo: "logos/Sony.png", id: "sony" },
  { name: "Media", logo: "logos/Media.png", id: "media" },
  { name: "Matchy", logo: "logos/matchy.png", id: "matchy" },
  { name: "2115", logo: "logos/2115.png", id: "2115" },
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
    videoUrl: "https://vimeo.com/1232396930?fl=pl&fe=sh",
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
    videoUrl: "https://vimeo.com/1232397206?fl=ip&fe=ec",
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
    videoUrl: "https://vimeo.com/1232397583?fl=ip&fe=ec",
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
];

/** Zakładka Wybrane — 2 reele + 1 poziomy */
function buildFeaturedProjects() {
  const reels = PROJECTS.filter((p) => p.format === "reel").slice(0, 2);
  const wide = PROJECTS.find((p) => p.format === "wide");
  return wide ? [...reels, wide] : reels;
}

const FEATURED_PROJECTS = buildFeaturedProjects();

/** Zakładka Social — 9 pionowych reelów (desktop); na mobile 8 */
const SOCIAL_REEL_SLOT_COUNT = 9;
const SOCIAL_REEL_SLOT_COUNT_MOBILE = 8;
const PORTFOLIO_MOBILE_MQ = "(max-width: 720px)";

function buildSocialReelSlots() {
  const reels = PROJECTS.filter(
    (p) => p.category === "reklama" && p.format === "reel"
  );
  const slots = [];
  for (let i = 0; i < SOCIAL_REEL_SLOT_COUNT; i++) {
    slots.push(
      reels[i] ?? {
        id: `social-slot-${String(i + 1).padStart(2, "0")}`,
        title: `Social ${i + 1}`,
        category: "reklama",
        categoryLabel: "Reel",
        year: "—",
        gradient: "linear-gradient(160deg, #2a2a28, #121210)",
        description: "Materiał w przygotowaniu — podmień slot w main.js.",
        meta: "Reel · 9:16",
        videoUrl: "",
        format: "reel",
      }
    );
  }
  return slots;
}

const SOCIAL_REEL_SLOTS = buildSocialReelSlots();

/** Zakładka Reklamy — 3 pionowe + 2 poziome (desktop); na mobile 2+1 */
function buildReklamySlots() {
  const inCategory = PROJECTS.filter((p) => p.category === "teledysk");
  const reels = inCategory.filter((p) => p.format === "reel");
  const wides = inCategory.filter((p) => p.format === "wide");
  const slots = [];

  for (let i = 0; i < 3; i++) {
    slots.push(
      reels[i] ?? {
        id: `reklamy-reel-${String(i + 1).padStart(2, "0")}`,
        title: `Reklama ${i + 1}`,
        category: "teledysk",
        categoryLabel: "Reklama",
        year: "—",
        gradient: "linear-gradient(160deg, #2c2824, #141210)",
        description: "Materiał w przygotowaniu — podmień slot w main.js.",
        meta: "Reel · 9:16",
        videoUrl: "",
        format: "reel",
      }
    );
  }

  for (let i = 0; i < 2; i++) {
    slots.push(
      wides[i] ?? {
        id: `reklamy-wide-${String(i + 1).padStart(2, "0")}`,
        title: `Kampania ${i + 1}`,
        category: "teledysk",
        categoryLabel: "Reklama",
        year: "—",
        gradient: "linear-gradient(145deg, #322820, #161412)",
        description: "Materiał w przygotowaniu — podmień slot w main.js.",
        meta: "16:9 · Reklama",
        videoUrl: "",
        format: "wide",
      }
    );
  }

  return slots;
}

const REKLAMY_SLOTS = buildReklamySlots();

/** Zakładka Teledyski — 4 poziome (desktop); na mobile 3 */
function buildTeledyskiSlots() {
  const wides = PROJECTS.filter(
    (p) => p.category === "event" && p.format === "wide"
  );
  const slots = [];
  for (let i = 0; i < 4; i++) {
    slots.push(
      wides[i] ?? {
        id: `teledysk-wide-${String(i + 1).padStart(2, "0")}`,
        title: `Teledysk ${i + 1}`,
        category: "event",
        categoryLabel: "Teledysk",
        year: "—",
        gradient: "linear-gradient(145deg, #2a2438, #121018)",
        description: "Materiał w przygotowaniu — podmień slot w main.js.",
        meta: "16:9 · Teledysk",
        videoUrl: "",
        format: "wide",
      }
    );
  }
  return slots;
}

const TELEDYSKI_SLOTS = buildTeledyskiSlots();

/** Zakładka Business — 2 poziome + 3 pionowe (desktop); na mobile 1+2 */
function buildBusinessSlots() {
  const inCategory = PROJECTS.filter((p) => p.category === "business");
  const reels = inCategory.filter((p) => p.format === "reel");
  const wides = inCategory.filter((p) => p.format === "wide");
  const slots = [];

  for (let i = 0; i < 2; i++) {
    slots.push(
      wides[i] ?? {
        id: `business-wide-${String(i + 1).padStart(2, "0")}`,
        title: `Business film ${i + 1}`,
        category: "business",
        categoryLabel: "Business",
        year: "—",
        gradient: "linear-gradient(145deg, #283038, #12161c)",
        description: "Materiał w przygotowaniu — podmień slot w main.js.",
        meta: "16:9 · Business",
        videoUrl: "",
        format: "wide",
      }
    );
  }

  for (let i = 0; i < 3; i++) {
    slots.push(
      reels[i] ?? {
        id: `business-reel-${String(i + 1).padStart(2, "0")}`,
        title: `Business ${i + 1}`,
        category: "business",
        categoryLabel: "Business",
        year: "—",
        gradient: "linear-gradient(160deg, #242830, #101418)",
        description: "Materiał w przygotowaniu — podmień slot w main.js.",
        meta: "Reel · 9:16",
        videoUrl: "",
        format: "reel",
      }
    );
  }

  return slots;
}

const BUSINESS_SLOTS = buildBusinessSlots();

function isPortfolioMobileView() {
  return window.matchMedia(PORTFOLIO_MOBILE_MQ).matches;
}

function portfolioItemsForReelsAndOneWide(slots, reelCount) {
  const reels = slots.filter((p) => p.format === "reel").slice(0, reelCount);
  const wide = slots.find((p) => p.format === "wide");
  return wide ? [...reels, wide] : reels;
}

function portfolioItemsForOneWideAndReels(slots, reelCount) {
  const wide = slots.find((p) => p.format === "wide");
  const reels = slots.filter((p) => p.format === "reel").slice(0, reelCount);
  return wide ? [wide, ...reels] : reels;
}

function getPortfolioItems(filter) {
  const mobile = isPortfolioMobileView();

  if (filter === "all") {
    return mobile ? FEATURED_PROJECTS : PROJECTS;
  }
  if (filter === "reklama") {
    return mobile
      ? SOCIAL_REEL_SLOTS.slice(0, SOCIAL_REEL_SLOT_COUNT_MOBILE)
      : SOCIAL_REEL_SLOTS;
  }
  if (filter === "teledysk") {
    return mobile
      ? portfolioItemsForReelsAndOneWide(REKLAMY_SLOTS, 2)
      : REKLAMY_SLOTS;
  }
  if (filter === "event") {
    return mobile ? TELEDYSKI_SLOTS.slice(0, 3) : TELEDYSKI_SLOTS;
  }
  if (filter === "business") {
    return mobile
      ? portfolioItemsForOneWideAndReels(BUSINESS_SLOTS, 2)
      : BUSINESS_SLOTS;
  }
  return PROJECTS.filter((p) => p.category === filter);
}

let activePortfolioFilter = "all";

function findProject(id) {
  return (
    PROJECTS.find((p) => p.id === id) ||
    SOCIAL_REEL_SLOTS.find((p) => p.id === id) ||
    REKLAMY_SLOTS.find((p) => p.id === id) ||
    TELEDYSKI_SLOTS.find((p) => p.id === id) ||
    BUSINESS_SLOTS.find((p) => p.id === id)
  );
}

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

function parseVideoUrl(url) {
  if (!url) return null;
  const yt = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/
  );
  if (yt) return { type: "youtube", id: yt[1] };
  const vimeoId = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoId) return { type: "vimeo", id: vimeoId[1] };
  return { type: "iframe", src: url };
}

function embedHtml(url) {
  const parsed = parseVideoUrl(url);
  if (!parsed) {
    return `<div style="height:100%;display:flex;align-items:center;justify-content:center;color:#9a958c;font-size:0.9rem;padding:1rem;text-align:center">Dodaj <code style="color:#8fa67a">videoUrl</code> w main.js</div>`;
  }
  if (parsed.type === "youtube") {
    return `<iframe src="https://www.youtube.com/embed/${parsed.id}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Wideo"></iframe>`;
  }
  if (parsed.type === "vimeo") {
    return `<iframe src="https://player.vimeo.com/video/${parsed.id}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Wideo"></iframe>`;
  }
  return `<iframe src="${parsed.src}" allowfullscreen title="Wideo"></iframe>`;
}

function cardMediaHtml(url) {
  const parsed = parseVideoUrl(url);
  if (!parsed) return "";
  let src;
  if (parsed.type === "vimeo") {
    src = `https://player.vimeo.com/video/${parsed.id}?background=1&autoplay=1&loop=1&muted=1`;
  } else if (parsed.type === "youtube") {
    src = `https://www.youtube.com/embed/${parsed.id}?autoplay=1&mute=1&loop=1&playlist=${parsed.id}&controls=0&playsinline=1&rel=0`;
  } else {
    src = parsed.src;
  }
  return `<div class="project-card__media" aria-hidden="true"><iframe src="${src}" tabindex="-1" title=""></iframe></div>`;
}

function renderProjects(filter = "all") {
  if (!grid) return;
  grid.innerHTML = "";
  const isSocial = filter === "reklama";
  const isReklamy = filter === "teledysk";
  const isTeledyski = filter === "event";
  const isBusiness = filter === "business";
  const isFeatured = filter === "all";
  grid.classList.toggle("project-grid--featured", isFeatured);
  grid.classList.toggle("project-grid--social", isSocial);
  grid.classList.toggle("project-grid--reklamy", isReklamy);
  grid.classList.toggle("project-grid--business", isBusiness);
  grid.classList.toggle("project-grid--teledyski", isTeledyski);

  activePortfolioFilter = filter;
  const items = getPortfolioItems(filter);

  items.forEach((project, index) => {
    const li = document.createElement("li");
    const isReel = project.format === "reel";
    li.className = isReel
      ? "project-card project-card--reel"
      : "project-card project-card--wide";
    li.dataset.category = project.category;
    const hasVideo = Boolean(project.videoUrl);
    li.innerHTML = `
      <article>
        <button type="button" class="project-card__button" data-project-id="${project.id}">
          <div class="project-card__visual${hasVideo ? " project-card__visual--has-video" : ""}" style="--card-gradient: ${project.gradient}">
            ${hasVideo ? cardMediaHtml(project.videoUrl) : ""}
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
  const project = findProject(id);
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
  const isMobileModal = window.matchMedia("(max-width: 720px)").matches;
  if (isMobileModal) {
    modal.classList.add("modal--fullscreen");
    document.documentElement.classList.add("is-modal-open");
  } else {
    modal.classList.remove("modal--fullscreen");
    document.documentElement.classList.remove("is-modal-open");
  }
  modal.showModal();
}

grid?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-project-id]");
  if (btn) openProject(btn.dataset.projectId);
});

function closeProjectModal() {
  modal?.classList.remove("modal--fullscreen");
  document.documentElement.classList.remove("is-modal-open");
  modal?.close();
}

document.querySelectorAll("[data-modal-close]").forEach((el) => {
  el.addEventListener("click", () => closeProjectModal());
});

modal?.addEventListener("close", () => {
  modal.classList.remove("modal--fullscreen");
  document.documentElement.classList.remove("is-modal-open");
});

modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeProjectModal();
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

window
  .matchMedia(PORTFOLIO_MOBILE_MQ)
  .addEventListener("change", () => renderProjects(activePortfolioFilter));

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
  const prefix = el.dataset.countPrefix || "";
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reducedMotion || !target) {
    el.textContent = `${prefix}${target}`;
    return;
  }

  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = `${prefix}${Math.round(target * easeOutCubic(progress))}`;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = `${prefix}${target}`;
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
  if (track.querySelector(".hero__logo-img")) return;

  const items = PARTNERS.map((partner) => {
    const idAttr = partner.id ? ` data-logo="${partner.id}"` : "";
    if (partner.logo) {
      return `<li class="hero__logo-item"${idAttr}><img class="hero__logo-img" src="${partner.logo}" alt="${partner.name}" width="160" height="40" loading="lazy" decoding="async" /></li>`;
    }
    return `<li class="hero__logo-item"${idAttr}><span>${partner.name}</span></li>`;
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
  const wordFocus = new Map();

  words.forEach((word) => {
    const base = Number(word.dataset.baseFill) || 0;
    wordFill.set(word, base);
    wordFocus.set(word, 0);
    word.style.setProperty("--fill", String(base));
    word.style.setProperty("--focus", "0");
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
    const heroScale = Math.max(heroRect.width, heroRect.height);
    const fillRadius = heroScale * 0.24;
    const focusRadius = heroScale * 0.16;

    words.forEach((word) => {
      const base = Number(word.dataset.baseFill) || 0;
      let targetFill = base;
      let targetFocus = 0;

      if (pointerX !== null && pointerY !== null) {
        const rect = word.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(pointerX - centerX, pointerY - centerY);
        const fillProximity = 1 - Math.min(distance / fillRadius, 1);
        targetFill = smoothstep(fillProximity);
        const focusProximity = 1 - Math.min(distance / focusRadius, 1);
        targetFocus = smoothstep(focusProximity);
      }

      const currentFill = wordFill.get(word) ?? base;
      const nextFill = currentFill + (targetFill - currentFill) * 0.14;
      wordFill.set(word, nextFill);
      word.style.setProperty("--fill", nextFill.toFixed(3));

      const currentFocus = wordFocus.get(word) ?? 0;
      const nextFocus = currentFocus + (targetFocus - currentFocus) * 0.16;
      wordFocus.set(word, nextFocus);
      word.style.setProperty("--focus", nextFocus.toFixed(3));
    });

    requestAnimationFrame(animate);
  };

  animate();
}

renderPartnerLogos();
initHeroHeadlineMotion();
renderProjects();

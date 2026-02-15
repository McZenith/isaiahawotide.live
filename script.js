// ═══════════════════════════════════════════════
// Isaiah Awotide — Portfolio JS
// Theme, i18n, Animations, Interactions
// ═══════════════════════════════════════════════

// ── i18n Translations ──
const translations = {
  en: {
    meta: {
      title: "Isaiah Awotide — Senior Software Engineer (React, TypeScript, .NET)",
      description: "Senior Full Stack Software Engineer at JP Morgan Chase. Expert in React, TypeScript, and .NET. Building high-performance financial systems and real-time analytics platforms.",
      app_title: "Isaiah Awotide — Senior Software Engineer"
    },
    nav: { about: "About", projects: "Projects", skills: "Skills", experience: "Experience", contact: "Get in Touch" },
    hero: { available: "Available for opportunities", greeting: "I build", role: "Senior Software Engineer at", spec: "Real-Time Systems", cta_work: "View My Work", cta_contact: "Contact Me" },
    stats: { years: "Years Experience", perf: "Perf. Improvement", oss: "Open Source Projects" },
    about: {
      title: "About",
      heading_pre: "Engineering at the intersection of", heading_finance: "finance", heading_and: "and", heading_tech: "technology",
      p1: "I'm a Senior Full Stack Software Engineer at <strong>JP Morgan Chase</strong> in London, where I build mission-critical financial systems that serve front-office traders and quantitative analysts.",
      p2: "My work spans the entire stack — from building high-performance <strong>React/TypeScript</strong> interfaces for real-time trade monitoring, to architecting <strong>C#/.NET</strong> pricing engines and <strong>Node.js</strong> microservices that process millions of calculations daily.",
      p3: "I recently led a complete platform migration from legacy WPF/WinForms to a modern web stack, achieving a <strong>90% reduction in pricing calculation time</strong> and a <strong>300% improvement in usability</strong>.",
      p4: "Outside JP Morgan, I build production-grade systems like real-time analytics platforms and collaborative tools, always pushing the boundaries of what modern web technologies can achieve.",
      card1: "Senior Software Engineer", card2: "Cloud Solutions Architecture", card2_date: "Cloud Infrastructure",
      card3: "Platform performance gains", card3_date: "Legacy → Modern",
      card4: "Open to hybrid / remote", card4_date: "Available"
    },
    projects: {
        title: "Projects", heading_pre: "Featured", heading_work: "work", view_github: "View on GitHub →", view_site: "View Live →",
        findash_desc: "Engineered a high-performance financial analytics terminal rendering real-time data for 10+ markets with <strong>sub-500ms latency</strong> via React 18 concurrent features.",
        frontend_showcase: "Frontend Showcase",
        elaifa_desc: "Architected a mobile wellness app achieving <strong>sub-100ms cold start times</strong> and <strong>offline-first reliability</strong> with React Native and MMKV storage.",
        mobile_showcase: "Mobile Architecture", sacred_ui: "Sacred Premium UI",
        collabboard_desc: "Built a collaborative Kanban platform achieving <strong>zero-latency state synchronization</strong> using Socket.IO and a shared TypeScript Monorepo.",
        fullstack_showcase: "Full Stack Showcase", realtime: "Real-Time Collaboration"
    },
    skills: { title: "Skills", heading_pre: "Technical", heading_arsenal: "arsenal" },
    experience: {
        title: "Experience", heading_pre: "Career", heading_timeline: "timeline",
        job1_title: "Full Platform Migration Lead", job1_desc: "Led end-to-end migration from WPF/WinForms to React/TypeScript. <strong>90% faster pricing</strong>, <strong>300% usability improvement</strong>. TDD with SOLID architecture throughout.",
        job2_title: "Trade Blotter & Messaging Systems", job2_desc: "Built real-time trade monitoring with WebSocket streaming and OpenFin integration. Led Tibco → ActiveMQ migration achieving <strong>30% faster messaging</strong> and <strong>99.99% uptime</strong>.",
        job3_title: "Equity Derivatives Pricing Engine", job3_desc: "Developed pre-trade pricing systems with C#, React, and Python. Technical SME for EMEA region. Drove EU/UK PRIIPs regulatory compliance to <strong>100%</strong>."
    },
    contact: { title: "Contact", heading_pre: "Let's build something", heading_great: "great", heading_together: "together", desc: "I'm currently open to new Senior / Lead Software Engineering opportunities in London (hybrid or remote). Let's connect." }
  },
  es: {
    meta: {
      title: "Isaiah Awotide — Ingeniero de Software Senior (React, TypeScript, .NET)",
      description: "Ingeniero de Software Full Stack Senior en JP Morgan Chase. Experto en React, TypeScript y .NET. Construyendo sistemas financieros de alto rendimiento.",
      app_title: "Isaiah Awotide — Ingeniero de Software Senior"
    },
    nav: { about: "Sobre Mí", projects: "Proyectos", skills: "Habilidades", experience: "Experiencia", contact: "Contactar" },
    hero: { available: "Disponible para oportunidades", greeting: "Construyo", role: "Ingeniero de Software Senior en", spec: "Sistemas de Tiempo Real", cta_work: "Ver mi Trabajo", cta_contact: "Contáctame" },
    stats: { years: "Años de Experiencia", perf: "Mejora de Rendimiento", oss: "Proyectos Open Source" },
    about: {
      title: "Sobre Mí",
      heading_pre: "Ingeniería en la intersección de", heading_finance: "finanzas", heading_and: "y", heading_tech: "tecnología",
      p1: "Soy Ingeniero de Software Full Stack Senior en <strong>JP Morgan Chase</strong> en Londres, donde construyo sistemas financieros críticos para traders y analistas cuantitativos.",
      p2: "Mi trabajo abarca todo el stack — desde interfaces <strong>React/TypeScript</strong> de alto rendimiento, hasta motores de precios en <strong>C#/.NET</strong> y microservicios en <strong>Node.js</strong>.",
      p3: "Lideré una migración completa de WPF/WinForms a web moderna, logrando una <strong>reducción del 90% en tiempos de cálculo</strong> y una <strong>mejora del 300% en usabilidad</strong>.",
      p4: "Fuera de JP Morgan, construyo sistemas como herramientas de análisis en tiempo real y colaboración, siempre empujando los límites de la tecnología web moderna.",
      card1: "Ingeniero de Software Senior", card2: "Arquitectura de Soluciones Cloud", card2_date: "Infraestructura Cloud",
      card3: "Ganancia de rendimiento", card3_date: "Legado → Moderno",
      card4: "Híbrido / Remoto", card4_date: "Disponible"
    },
    projects: {
        title: "Proyectos", heading_pre: "Trabajo", heading_work: "destacado", view_github: "Ver en GitHub →", view_site: "Ver en Vivo →",
        findash_desc: "Diseñé una terminal financiera de alto rendimiento renderizando datos de 10+ mercados con <strong>latencia sub-500ms</strong> mediante React 18.",
        frontend_showcase: "Showcase Frontend",
        elaifa_desc: "Arquitectura de app móvil logrando <strong>arranque en sub-100ms</strong> y <strong>confiabilidad offline-first</strong> con React Native y MMKV.",
        mobile_showcase: "Arquitectura Móvil", sacred_ui: "UI Premium Sagrada",
        collabboard_desc: "Construí plataforma Kanban colaborativa logrando <strong>sincronización de estado con latencia cero</strong> usando Socket.IO y Monorepo TypeScript.",
        fullstack_showcase: "Showcase Full Stack", realtime: "Colaboración Real-Time"
    },
    skills: { title: "Habilidades", heading_pre: "Arsenal", heading_arsenal: "técnico" },
    experience: {
        title: "Experiencia", heading_pre: "Línea de", heading_timeline: "tiempo",
        job1_title: "Líder de Migración de Plataforma", job1_desc: "Lideré migración de WPF/WinForms a React/TypeScript. <strong>Precios 90% más rápidos</strong>, <strong>mejora del 300% en usabilidad</strong>.",
        job2_title: "Sistemas de Mensajería y Trading", job2_desc: "Construí monitoreo de operaciones en tiempo real con WebSocket. Migración de Tibco a ActiveMQ logrando <strong>mensajería 30% más rápida</strong>.",
        job3_title: "Motor de Precios de Derivados", job3_desc: "Desarrollé sistemas de precios pre-trade con C#, React y Python. Experto técnico para la región EMEA."
    },
    contact: { title: "Contacto", heading_pre: "Construyamos algo", heading_great: "genial", heading_together: "juntos", desc: "Actualmente abierto a nuevas oportunidades de Ingeniería de Software Senior / Líder en Londres (híbrido o remoto)." }
  },
  fr: {
    meta: {
      title: "Isaiah Awotide — Ingénieur Logiciel Senior (React, TypeScript, .NET)",
      description: "Ingénieur Logiciel Full Stack Senior chez JP Morgan Chase. Expert en React, TypeScript et .NET. Création de systèmes financiers haute performance.",
      app_title: "Isaiah Awotide — Ingénieur Logiciel Senior"
    },
    nav: { about: "À Propos", projects: "Projets", skills: "Compétences", experience: "Expérience", contact: "Contactez-moi" },
    hero: { available: "Disponible pour opportunités", greeting: "Je bâtis", role: "Ingénieur Logiciel Senior chez", spec: "Systèmes Temps Réel", cta_work: "Voir mon Travail", cta_contact: "Contactez-moi" },
    stats: { years: "Années d'Expérience", perf: "Amélioration Perf.", oss: "Projets Open Source" },
    about: {
      title: "À Propos",
      heading_pre: "L'ingénierie à l'intersection de", heading_finance: "la finance", heading_and: "et de", heading_tech: "la technologie",
      p1: "Je suis Ingénieur Logiciel Full Stack Senior chez <strong>JP Morgan Chase</strong> à Londres, où je conçois des systèmes financiers critiques.",
      p2: "Mon travail couvre tout la stack — des interfaces <strong>React/TypeScript</strong> haute performance aux moteurs de tarification <strong>C#/.NET</strong>.",
      p3: "J'ai dirigé une migration complète de WPF vers le web moderne, réduisant les temps de calcul de <strong>90%</strong> et améliorant l'utilisabilité de <strong>300%</strong>.",
      p4: "En dehors de JP Morgan, je construis des systèmes de production comme des plateformes d'analyse en temps réel, repoussant toujours les limites du web.",
      card1: "Ingénieur Logiciel Senior", card2: "Architecture Solutions Cloud", card2_date: "Infrastructure Cloud",
      card3: "Gains de performance", card3_date: "Héritage → Moderne",
      card4: "Hybride / Télétravail", card4_date: "Disponible"
    },
    projects: {
        title: "Projets", heading_pre: "Travaux", heading_work: "récents", view_github: "Voir sur GitHub →", view_site: "Voir en Direct →",
        findash_desc: "Terminal financier haute performance avec rendu de données temps réel pour 10+ marchés avec <strong>latence sub-500ms</strong> via React 18.",
        frontend_showcase: "Vitrine Frontend",
        elaifa_desc: "Architecture d'app mobile atteignant <strong>démarrage sub-100ms</strong> et <strong>fiabilité hors-ligne</strong> avec React Native et MMKV.",
        mobile_showcase: "Architecture Mobile", sacred_ui: "UI Sacrée Premium",
        collabboard_desc: "Plateforme Kanban collaborative atteignant <strong>synchronisation à latence zéro</strong> via Socket.IO et Monorepo TypeScript.",
        fullstack_showcase: "Vitrine Full Stack", realtime: "Collaboration Temps Réel"
    },
    skills: { title: "Compétences", heading_pre: "Arsenal", heading_arsenal: "technique" },
    experience: {
        title: "Expérience", heading_pre: "Chronologie", heading_timeline: "de carrière",
        job1_title: "Responsable Migration Plateforme", job1_desc: "Migration complète de WPF vers React/TypeScript. <strong>Tarification 90% plus rapide</strong>. TDD et architecture SOLID.",
        job2_title: "Systèmes de Trading", job2_desc: "Monitoring temps réel avec WebSocket. Migration Tibco vers ActiveMQ : <strong>messagerie 30% plus rapide</strong>.",
        job3_title: "Moteur de Tarification Dérivés", job3_desc: "Développement de systèmes de prix avec C#, React et Python. Expert technique pour la région EMEA."
    },
    contact: { title: "Contact", heading_pre: "Bâtissons quelque chose de", heading_great: "grand", heading_together: "ensemble", desc: "Actuellement ouvert aux opportunités d'Ingénieur Logiciel Senior / Lead à Londres." }
  },
  yo: {
    meta: {
      title: "Isaiah Awotide — Onímọ̀ Ẹ̀rọ Gíga (ReactNative, React, TypeScript, .NET)",
      description: "Onímọ̀ Ẹ̀rọ Gíga ní JP Morgan Chase. Ògbóǹtarìgì nínú React, TypeScript, àti .NET. Mo ń kọ́ àwọn ètò ìṣirò owó tó lágbára.",
      app_title: "Isaiah Awotide — Onímọ̀ Ẹ̀rọ Gíga"
    },
    nav: { about: "Nípa Mi", projects: "Àwọn Iṣẹ́ Mi", skills: "Ìmọ̀ Ẹ̀rọ", experience: "Ìrírí Iṣẹ́", contact: "Kàn Sí Mi" },
    hero: { available: "Mo wà fún àǹfààní iṣẹ́", greeting: "Mo ń kọ́", role: "Onímọ̀ Ẹ̀rọ Gíga ní", spec: "Ètò Àkókò Gidi", cta_work: "Wo Iṣẹ́ Mi", cta_contact: "Kàn Sí Mi" },
    stats: { years: "Ọdún Ìrírí", perf: "Ìlọsíwájú Iṣẹ́", oss: "Iṣẹ́ Àfihàn" },
    about: {
      title: "Nípa Mi",
      heading_pre: "Iṣẹ́ ẹ̀rọ ní ìpàdé", heading_finance: "ìṣirò owó", heading_and: "àti", heading_tech: "ìmọ̀ ẹ̀rọ",
      p1: "Mo jẹ́ Onímọ̀ Ẹ̀rọ Gíga ní <strong>JP Morgan Chase</strong> ní London, níbi tí mo ti ń kọ́ àwọn ètò ìṣirò owó tó ṣe pàtàkì fún àwọn oníṣòwò.",
      p2: "Iṣẹ́ mi dá lórí gbogbo stack — láti kíkọ́ àwọn ojú-iṣẹ́ <strong>React/TypeScript</strong> tó yára, sí dídárí àwọn ẹ̀rọ ìṣirò <strong>C#/.NET</strong> àti <strong>Node.js</strong>.",
      p3: "Lẹ́nu àìpẹ́ yìí, mo darí ìyípadà ètò láti WPF/WinForms sí stack òde òní, èyí tó mú kí iṣẹ́ yára sí i ní ìwọ̀n <strong>90%</strong>.",
      p4: "Lẹ́yìn iṣẹ́ mi ní JP Morgan, mo ń kọ́ àwọn ètò bíi analytics gidi àti àwọn ohun èlò fún iṣẹ́ àjọṣe.",
      card1: "Onímọ̀ Ẹ̀rọ Gíga", card2: "Architecture Solutions Cloud", card2_date: "Cloud Infrastructure",
      card3: "Gains de performance", card3_date: "Legado → Moderno",
      card4: "Híbrido / Télétravail", card4_date: "Wà fún iṣẹ́"
    },
    projects: {
        title: "Àwọn Iṣẹ́ Mi", heading_pre: "Àwọn", heading_work: "iṣẹ́ àfihàn", view_github: "Wo lórí GitHub →", view_site: "Wo lórí ayélujára →",
        findash_desc: "Mo kọ́ financial analytics terminal tó ń fi data hàn ní àkókò gidi fún ọjà 10+ pẹ̀lú <strong>ìyára sub-500ms</strong> nípa lílo React 18.",
        frontend_showcase: "Frontend Showcase",
        elaifa_desc: "Mo darí kíkọ́ app fún ìlera tó ń bẹ̀rẹ̀ ní <strong>sub-100ms</strong> tí ó sì ń ṣiṣẹ́ láìsí ayélujára pẹ̀lú React Native àti MMKV.",
        mobile_showcase: "Mobile Architecture", sacred_ui: "Sacred Premium UI",
        collabboard_desc: "Mo kọ́ Kanban platform tí ó ń ṣiṣẹ́ pẹ̀lú <strong>zero-latency state synchronization</strong> nípa lílo Socket.IO àti TypeScript Monorepo.",
        fullstack_showcase: "Full Stack Showcase", realtime: "Àjọṣepọ̀ Àkókò Gidi"
    },
    skills: { title: "Ìmọ̀ Ẹ̀rọ", heading_pre: "Àkójọ", heading_arsenal: "ìmọ̀ mi" },
    experience: {
        title: "Ìrírí Iṣẹ́", heading_pre: "Ìrìn-àjò", heading_timeline: "iṣẹ́ mi",
        job1_title: "Líder de Migración de Plataforma", job1_desc: "Mo darí ìyípadà láti WPF sí React. <strong>Ìṣirò owó tó yára ní 90%</strong>.",
        job2_title: "Trade Blotter & Messaging Systems", job2_desc: "Mo kọ́ ètò monitoring fún òwò pẹ̀lú WebSocket. Mo darí ìyípadà Tibco sí ActiveMQ tó yára ní <strong>30%</strong>.",
        job3_title: "Equity Derivatives Pricing Engine", job3_desc: "Mo kọ́ ètò pricing fún equity derivatives pẹ̀lú C#, React, àti Python."
    },
    contact: { title: "Kàn Sí Mi", heading_pre: "Ẹ jẹ́ kí á kọ́", heading_great: "nǹkan gidi", heading_together: "pọ̀", desc: "Mo wà fún àǹfààní iṣẹ́ gẹ́gẹ́ bí Senior / Lead Software Engineer ní London (hybrid tàbí remote)." }
  }
};

// ── Theme Switcher ──
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ── Language Switcher ──
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

// Helper to get nested value
function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function updateLanguage(lang) {
    currentLang = lang;
    
    // Update active button state
    langBtns.forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = getNestedValue(translations[lang], key);
        if (text) {
             el.innerHTML = text;
        }
    });
    // Update SEO Meta Tags
    updateSEOTags(lang);
}

function updateSEOTags(lang) {
    const metaMap = translations[lang].meta;
    if (!metaMap) return;

    // Title
    document.title = metaMap.title;

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', metaMap.description);

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', metaMap.app_title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metaMap.description);

    // Twitter
    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', metaMap.app_title);

    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', metaMap.description);
}

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
    });
});
// Initialize SEO on load
updateSEOTags(currentLang);

// ── Scroll Nav ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
});

// ── Mobile Menu ──
const navMenu = document.getElementById('navMenu');
const mobileMenu = document.getElementById('mobileMenu');

if (navMenu && mobileMenu) {
    navMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        const expanded = navMenu.getAttribute('aria-expanded') === 'true';
        navMenu.setAttribute('aria-expanded', !expanded);
    });
    
    // Close mobile menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            navMenu.setAttribute('aria-expanded', 'false');
        });
    });
}

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars
      const bars = entry.target.querySelectorAll('.skill-bar__fill');
      if (bars.length > 0) {
          bars.forEach(bar => {
            const level = bar.dataset.level;
            setTimeout(() => { bar.style.width = level + '%'; }, 200);
          });
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
// Also observe hero elements for fade-up
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


// ── Counter Animation ──
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          el.textContent = current;
        }, 30);
      });
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero__stats').forEach(el => countObserver.observe(el));

// ── Rotating Hero Words ──
const heroWords = [
  'systems that scale',
  'real-time dashboards',
  'trading platforms',
  'elegant APIs',
  'collaborative tools',
];
let wordIdx = 0;
const heroWord = document.getElementById('heroWord');

if (heroWord) {
    setInterval(() => {
    heroWord.style.opacity = '0';
    setTimeout(() => {
        wordIdx = (wordIdx + 1) % heroWords.length;
        heroWord.textContent = heroWords[wordIdx];
        heroWord.style.opacity = '1';
    }, 300);
    }, 2800);
}

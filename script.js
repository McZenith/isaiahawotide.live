// ═══════════════════════════════════════════════
// Isaiah Awotide — Portfolio JS
// Terminal animation, counters, scroll reveals
// ═══════════════════════════════════════════════

// ── Scroll Nav ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
});

// ── Mobile Menu ──
const navMenu = document.getElementById('navMenu');
const mobileMenu = document.getElementById('mobileMenu');
navMenu.addEventListener('click', () => mobileMenu.classList.toggle('open'));
function closeMobile() { mobileMenu.classList.remove('open'); }

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars
      entry.target.querySelectorAll('.skill-bar__fill').forEach(bar => {
        const level = bar.dataset.level;
        setTimeout(() => { bar.style.width = level + '%'; }, 200);
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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

setInterval(() => {
  heroWord.style.opacity = '0';
  setTimeout(() => {
    wordIdx = (wordIdx + 1) % heroWords.length;
    heroWord.textContent = heroWords[wordIdx];
    heroWord.style.opacity = '1';
  }, 300);
}, 2800);

// ── Terminal Typing Animation ──
const commands = [
  { cmd: 'cat about.json', output: `<span class="brace">{</span>
  <span class="key">"name"</span>: <span class="str">"Isaiah Awotide"</span>,
  <span class="key">"role"</span>: <span class="str">"Senior Software Engineer"</span>,
  <span class="key">"company"</span>: <span class="str">"JP Morgan Chase"</span>,
  <span class="key">"stack"</span>: <span class="val">["React", "TypeScript", "C#", "Node.js"]</span>,
  <span class="key">"passion"</span>: <span class="str">"Building systems that matter"</span>
<span class="brace">}</span>` },
];

const terminalBody = document.getElementById('terminalBody');
const terminalCmd = document.getElementById('terminalCmd');
const cmdText = commands[0].cmd;
let charIdx = 0;

function typeChar() {
  if (charIdx < cmdText.length) {
    terminalCmd.textContent += cmdText[charIdx];
    charIdx++;
    setTimeout(typeChar, 60 + Math.random() * 40);
  } else {
    // Show output after typing
    setTimeout(() => {
      const cursor = terminalBody.querySelector('.terminal__cursor');
      cursor.style.display = 'none';
      const outputDiv = document.createElement('div');
      outputDiv.className = 'terminal__output';
      outputDiv.innerHTML = commands[0].output;
      terminalBody.appendChild(outputDiv);
    }, 400);
  }
}

// Start typing after page loads
setTimeout(typeChar, 1200);

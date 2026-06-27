// ══════════════════════════════════════
// SLIDER — só no index.html
// ══════════════════════════════════════
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.dot');
let current = 0, timer;

if (slides.length > 0) {
  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = idx;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  function next() { goTo((current + 1) % slides.length); }
  function startTimer() { timer = setInterval(next, 5000); }
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      goTo(parseInt(dot.dataset.index));
      startTimer();
    });
  });
  startTimer();
}

// ══════════════════════════════════════
// HAMBURGER — todas as páginas
// ══════════════════════════════════════
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('aberto');
    navLinks.classList.toggle('aberto');
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('aberto');
      navLinks.classList.remove('aberto');
    }
  });
}

function fecharMenu() {
  if (hamburger) hamburger.classList.remove('aberto');
  if (navLinks)  navLinks.classList.remove('aberto');
}

// ══════════════════════════════════════
// NOMES
// ══════════════════════════════════════
const NOMES = {
  empreendedorismo: 'Empreendedorismo',
  fisica: 'Física',
  matematica: 'Matemática',
  ogi: 'OGI',
  seac: 'SEAC',
  tlp: 'TLP'
};

// ══════════════════════════════════════
// ESCOLHA.HTML
// ══════════════════════════════════════
function explorar(disciplina) {
  window.location.href = 'tipo.html?disciplina=' + disciplina;
}

if (document.getElementById('fill-empreendedorismo')) {
  (function() {
    const lista = ['empreendedorismo','fisica','matematica','ogi','seac','tlp'];

    function atualizarBarra(d, pct) {
      const fill  = document.getElementById('fill-' + d);
      const label = document.getElementById('pct-' + d);
      const hint  = document.getElementById('hint-' + d);
      if (!fill) return;
      fill.style.width  = pct + '%';
      label.textContent = pct + '%';
      if (pct === 0)      { label.style.color = '#bbb'; }
      else if (pct < 50)  { label.style.color = '#43A047'; }
      else if (pct < 100) { label.style.color = '#C8A96B'; }
      else                { label.style.color = '#1B5E20'; }
    }

    lista.forEach(d => {
      const v = sessionStorage.getItem('prog_' + d);
      if (v !== null) atualizarBarra(d, parseInt(v));
    });

    window.registarProgresso = function(disciplina, pct) {
      const v = Math.min(100, Math.max(0, Math.round(pct)));
      sessionStorage.setItem('prog_' + disciplina, v);
      atualizarBarra(disciplina, v);
    };
  })();
}

// ══════════════════════════════════════
// TIPO.HTML
// ══════════════════════════════════════
if (document.getElementById('titulo-pagina')) {
  (function() {
    const disc = new URLSearchParams(window.location.search).get('disciplina') || '';
    const nome = NOMES[disc] || disc;
    const elBc = document.getElementById('breadcrumb-disciplina');
    const elTi = document.getElementById('titulo-pagina');
    if (elBc) elBc.textContent = nome;
    if (elTi) elTi.textContent = nome + ' — O que queres explorar?';

    window.irPara = function(tipo) {
      if (tipo === 'conteudo') {
        window.location.href = 'conteudos.html?disciplina=' + disc;
      } else {
        window.location.href = 'quiz.html?disciplina=' + disc;
      }
    };
  })();
}

// ══════════════════════════════════════
// CONTEUDOS.HTML
// ══════════════════════════════════════
if (document.getElementById('card-t1')) {
  (function() {
    const disc = new URLSearchParams(window.location.search).get('disciplina') || '';
    const nome = NOMES[disc] || disc;
    const elBc = document.getElementById('bc-disciplina');
    const elTi = document.getElementById('titulo');
    if (elBc) elBc.textContent = nome;
    if (elTi) elTi.textContent = 'Conteúdos — ' + nome;
    ['t1','t2','t3'].forEach((t, i) => {
      const c = document.getElementById('card-' + t);
      if (c) c.href = 'pdfs.html?disciplina=' + disc + '&trimestre=' + (i + 1);
    });
  })();
}

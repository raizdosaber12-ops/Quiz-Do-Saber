(function() {
  // ══════════════════════════════════════════
  // CATÁLOGO DE PDFs — edita aqui os teus ficheiros
  // ══════════════════════════════════════════
  const catalogo = {
    fisica: {
      trimestre1: [
        { nome: 'Fascículo 1 — Versores',    ficheiro: '../pdfs/fisica/trimestre1/versores.pdf' },
        { nome: 'Fascículo 2 — Derivadas',   ficheiro: '../pdfs/fisica/trimestre1/derivadas.pdf' },
      ],
      trimestre2: [
        { nome: 'Fascículo 3 — Dinâmica',    ficheiro: '../pdfs/fisica/trimestre2/fasciculo3.pdf' },
        { nome: 'Fascículo 4 — Energia',     ficheiro: '../pdfs/fisica/trimestre2/fasciculo4.pdf' },
      ],
      trimestre3: [
        { nome: 'Fascículo 5 — Eletricidade',ficheiro: '../pdfs/fisica/trimestre3/fasciculo5.pdf' },
        { nome: 'Fascículo 6 — Ondas',       ficheiro: '../pdfs/fisica/trimestre3/fasciculo6.pdf' },
      ],
    },
    matematica: {
      trimestre1: [
        { nome: 'Fascículo 1 — Potências e Radicais',   ficheiro: '../pdfs/matematica/trimestre1/exponenciais.pdf' },
        { nome: 'Fascículo 2 — Exponenciais',   ficheiro: '../pdfs/matematica/trimestre1/exponenciais.pdf' },
          { nome: 'Fascículo 3 — Logaritmos',   ficheiro: '../pdfs/matematica/trimestre1/logaritmos.pdf' },

      ],

      trimestre2: [
        { nome: 'Fascículo 4 — Limites e Derivadas', ficheiro: '../pdfs/matematica/trimestre2/limitesderivadas.pdf' }

      ],
      trimestre3: [
        { nome: 'Fascículo 5 — Derivadas',   ficheiro: '../pdfs/matematica/trimestre3/limitesderivadas.pdf' },
         { nome: 'Fascículo 6 — Integrais',   ficheiro: '../pdfs/matematica/trimestre3/solucoesintegrais.pdf' },
          { nome: 'Fascículo 7 — Tabela De Integrais Indefinidas',   ficheiro: '../pdfs/matematica/trimestre3/tabelasdeintegraisindefinidas.pdf' },
      ],
    },

    empreendedorismo: {
      trimestre1: [{ nome: 'Livro De Empreendedorismo', ficheiro: '../pdfs/empreendedorismo/trimestre1/livrodeempreendedorismo.pdf' }],
      trimestre2: [{ nome: 'Livro De Empreededorismo', ficheiro: '../pdfs/empreendedorismo/trimestre2/livrodeempreendedorismo.pdf' }],
      trimestre3: [{ nome: 'Livro De Empreendedorismo', ficheiro: '../pdfs/empreendedorismo/trimestre3/livrodeempreendedorismo.pdf' }],
    },
    ogi: {
      trimestre1: [{ nome: 'Material Didático do 1Trimestre de OGI', ficheiro: '../pdfs/ogi/ogi1trimestre.pdf' }],

      trimestre2: [{ nome: 'Material Didático do 2Trimestre de OGI', ficheiro: '../pdfs/ogi/ogi2trimestre.pdf' }],

      trimestre3: [{ nome: 'Material Didático do 3Trimestre de OGI', ficheiro: '../pdfs/ogi/ogi3trimestre.pdf' }],
    },
    seac: {
      trimestre1: [{ nome: 'Material Didático de SEAC', ficheiro: '../pdfs/seac/material-didatico-de-seac.pdf' }],
      trimestre2: [{ nome: 'Material Didático de SEAC', ficheiro: '../pdfs/seac/material-didatico-de-seac.pdf' }],
      trimestre3: [{ nome: 'Material Didático de SEAC', ficheiro: '../pdfs/seac/material-didatico-de-seac.pdf' }],
    },
    tlp: {
      trimestre1: [
        { nome: 'Material Didático de TLP', ficheiro: '../pdfs/tlp/material-didatico-de-tlp.pdf' },
         { nome: 'Introdução a HTML', ficheiro: '../pdfs/tlp/introducaoatlp.pdf' },


      ],

      trimestre2: [
        { nome: 'Material Didático de TLP', ficheiro: '../pdfs/tlp/material-didatico-de-tlp.pdf' },
       { nome: 'Introducao a CSS', ficheiro: '../pdfs/tlp/introducaoacss.pdf' }

      ],

      trimestre3: [
        { nome: 'Material Didático de TLP', ficheiro: '../pdfs/tlp/material-didatico-de-tlp.pdf' },
        { nome: 'Introdução a JS', ficheiro: '../pdfs/tlp/introducaoajs.pdf' }
      ],
    },
  };

  const NOMES_T = { '1':'1.º Trimestre', '2':'2.º Trimestre', '3':'3.º Trimestre' };
  const NOMES   = { empreendedorismo:'Empreendedorismo', fisica:'Física', matematica:'Matemática', ogi:'OGI', seac:'SEAC', tlp:'TLP' };

  const params     = new URLSearchParams(window.location.search);
  const disciplina = params.get('disciplina') || '';
  const trimestre  = params.get('trimestre')  || '';
  const nomeLeg    = NOMES[disciplina] || disciplina;

  // Breadcrumb e título
  const elBc = document.getElementById('bc-disciplina');
  const elTi = document.getElementById('titulo');
  if (elBc) elBc.textContent = nomeLeg;

  if (trimestre) {
    const elTr = document.getElementById('bc-trimestre');
    if (elTr) elTr.textContent = NOMES_T[trimestre] || '';
    if (elTi) elTi.textContent = nomeLeg + ' — ' + (NOMES_T[trimestre] || '');
  } else {
    const wrap = document.getElementById('bc-trimestre-wrap');
    if (wrap) wrap.style.display = 'none';
    if (elTi) elTi.textContent = 'Materiais — ' + nomeLeg;
  }

  // Carrega lista de PDFs
  const chave     = trimestre ? 'trimestre' + trimestre : 'trimestre1';
  const lista     = (catalogo[disciplina] || {})[chave] || [];
  const container = document.getElementById('pdfList');
  if (!container) return;

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="empty">
        <div class="empty-icon">📭</div>
        <p>Ainda não há materiais disponíveis para esta secção.<br>Volta em breve!</p>
      </div>`;
  } else {
    lista.forEach(pdf => {
      const card = document.createElement('div');
      card.className = 'pdf-card';
      card.innerHTML = `
        <div class="pdf-icon">📄</div>
        <div class="pdf-info">
          <div class="pdf-name">${pdf.nome}</div>
          <div class="pdf-meta">
            <span class="pdf-tag">PDF</span>
            <span>${nomeLeg}${trimestre ? ' · ' + NOMES_T[trimestre] : ''}</span>
          </div>
        </div>
        <a class="btn-baixar" href="${pdf.ficheiro}" download target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Baixar
        </a>`;
      container.appendChild(card);
    });
  }
})();

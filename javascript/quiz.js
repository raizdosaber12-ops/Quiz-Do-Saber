window.addEventListener('load', function() {

  // ══════════════════════════════════════
  // CONFIGURAÇÃO
  // ══════════════════════════════════════
  const params     = new URLSearchParams(window.location.search);
  const disciplina = params.get('disciplina') || 'seac';
  const NOMES      = { empreendedorismo:'Empreendedorismo', fisica:'Física', matematica:'Matemática', ogi:'OGI', seac:'SEAC', tlp:'TLP' };
  const nomeDisciplina = NOMES[disciplina] || disciplina;

  // Carrega perguntas da disciplina (ex: perguntasSEAC)
  const mapaPerguntas = {
    seac:             window['perguntasSEAC'],
    tlp:              window['perguntasTLP'],
    ogi:              window['perguntasOGI'],
    fisica:           window['perguntasFisica'],
    matematica:       window['perguntasMatematica'],
    empreendedorismo: window['perguntasEmpreendedorismo'],
  };
  const PERGUNTAS = mapaPerguntas[disciplina] || window['perguntasSEAC'];

  const NIVEIS_CONFIG = [
    { num: 1, label: 'Nível 1 — Fácil',  icon: '🎯', tipos: ['vf','mc'],                          total: 20, progresso: 20 },
    { num: 2, label: 'Nível 2 — Médio',  icon: '⚡', tipos: ['vf','mc','dissertiva','data'],       total: 20, progresso: 20 },
    { num: 3, label: 'Nível 3 — Difícil',icon: '🔥', tipos: ['vf','mc','dissertiva','codigo','ligacao'], total: 20, progresso: 60 },
  ];

  // ══════════════════════════════════════
  // ESTADO
  // ══════════════════════════════════════
  let nivelAtual    = 1;
  let perguntaAtual = 0;
  let perguntasList = [];
  let acertos       = 0;
  let aguardandoProxima = false;
  let progressoTotal = parseInt(sessionStorage.getItem('prog_' + disciplina) || '0');

  // ══════════════════════════════════════
  // INICIALIZAÇÃO
  // ══════════════════════════════════════
  document.getElementById('quiz-disciplina').textContent = nomeDisciplina;
  document.getElementById('btn-sair').addEventListener('click', () => {
    document.getElementById('modal-sair').style.display = 'flex';
  });

  atualizarHeaderProgresso();
  mostrarInicioNivel(1);

  // ══════════════════════════════════════
  // ECRÃS
  // ══════════════════════════════════════
  function mostrarEcra(id) {
    ['ecra-inicio','ecra-pergunta','ecra-fim-nivel','ecra-final'].forEach(e => {
      document.getElementById(e).style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
  }

  function mostrarInicioNivel(num) {
    nivelAtual = num;
    const cfg = NIVEIS_CONFIG[num - 1];
    document.getElementById('inicio-icon').textContent  = cfg.icon;
    document.getElementById('inicio-titulo').textContent = cfg.label;
    document.getElementById('inicio-desc').textContent  = `Vais responder a ${cfg.total} perguntas.`;
    document.getElementById('quiz-nivel-label').textContent = cfg.label;

    // badges
    NIVEIS_CONFIG.forEach((_, i) => {
      const badge = document.getElementById('badge-' + (i+1));
      badge.className = 'nivel-badge';
      if (i + 1 < num)  badge.classList.add('completo');
      if (i + 1 === num) badge.classList.add('ativo');
    });

    document.getElementById('btn-comecar').onclick = () => iniciarNivel(num);
    mostrarEcra('ecra-inicio');
  }

  // ══════════════════════════════════════
  // INICIAR NÍVEL
  // ══════════════════════════════════════
  function iniciarNivel(num) {
    const cfg    = NIVEIS_CONFIG[num - 1];
    const fonte  = PERGUNTAS['nivel' + num] || [];
    const tipos  = cfg.tipos;

    // filtra por tipos disponíveis e embaralha
    const filtradas = fonte.filter(p => tipos.includes(p.tipo));
    perguntasList   = embaralhar(filtradas).slice(0, cfg.total);
    perguntaAtual   = 0;
    acertos         = 0;

    mostrarEcra('ecra-pergunta');
    mostrarPergunta();
  }

  // ══════════════════════════════════════
  // MOSTRAR PERGUNTA
  // ══════════════════════════════════════
  function mostrarPergunta() {
    aguardandoProxima = false;
    const p   = perguntasList[perguntaAtual];
    const cfg = NIVEIS_CONFIG[nivelAtual - 1];

    // limpa feedback
    const fb = document.getElementById('feedback');
    fb.style.display = 'none';
    fb.className = 'feedback';

    // esconde todas as opções
    ['opcoes-vf','opcoes-mc','opcoes-dissertiva','opcoes-ligacao','codigo-bloco'].forEach(id => {
      document.getElementById(id).style.display = 'none';
    });

    // contador e barra
    const total = perguntasList.length;
    document.getElementById('perg-contador').textContent = (perguntaAtual + 1) + ' / ' + total;
    document.getElementById('perg-barra-fill').style.width = ((perguntaAtual / total) * 100) + '%';

    // tipo label
    const tipoLabels = { vf:'Verdadeiro ou Falso', mc:'Múltipla Escolha', dissertiva:'Dissertiva', codigo:'Análise de Código', ligacao:'Ligação de Colunas', data:'Data' };
    document.getElementById('perg-tipo-label').textContent = tipoLabels[p.tipo] || p.tipo;

    // texto
    document.getElementById('perg-texto').textContent = p.pergunta;

    // mostra opções certas
    if (p.tipo === 'vf') {
      document.getElementById('opcoes-vf').style.display = 'flex';
    } else if (p.tipo === 'mc' || p.tipo === 'codigo' || p.tipo === 'data') {
      if (p.tipo === 'codigo') {
        document.getElementById('codigo-bloco').style.display = 'block';
        document.getElementById('codigo-bloco').textContent = p.pergunta;
        document.getElementById('perg-texto').textContent = 'Analisa o código abaixo e responde:';
      }
      const opcoesMC = document.getElementById('opcoes-mc');
      opcoesMC.style.display = 'flex';
      p.opcoes.forEach((op, i) => {
        const btn = document.getElementById('mc-' + i);
        btn.textContent = String.fromCharCode(97 + i) + ') ' + op;
        btn.className = 'opcao-mc';
        btn.disabled = false;
      });
    } else if (p.tipo === 'dissertiva') {
      document.getElementById('opcoes-dissertiva').style.display = 'flex';
    } else if (p.tipo === 'ligacao') {
      document.getElementById('opcoes-ligacao').style.display = 'flex';
      montarLigacao(p);
    }
  }

  // ══════════════════════════════════════
  // RESPOSTAS
  // ══════════════════════════════════════
  window.responderVF = function(resposta) {
    if (aguardandoProxima) return;
    const p = perguntasList[perguntaAtual];
    const certa = resposta === p.resposta;
    mostrarFeedbackEProxima(certa, certa ? null : (p.resposta ? 'Correto: Verdadeiro' : 'Correto: Falso'));
  };

  window.responderMC = function(idx) {
    if (aguardandoProxima) return;
    const p = perguntasList[perguntaAtual];
    const certa = idx === p.resposta;

    // desabilita todos os botões
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById('mc-' + i);
      btn.disabled = true;
      if (i === p.resposta) btn.classList.add('certa');
      if (i === idx && !certa) btn.classList.add('errada');
    }
    mostrarFeedbackEProxima(certa, certa ? null : 'Correto: ' + String.fromCharCode(97 + p.resposta) + ') ' + p.opcoes[p.resposta]);
  };

  function montarLigacao(p) {
    const grid = document.getElementById('ligacao-grid');
    grid.innerHTML = '';
    const opcoesBaralhadas = [...p.colunaB];

    p.colunaA.forEach((conceito, i) => {
      const row = document.createElement('div');
      row.className = 'ligacao-row';
      row.id = 'lig-row-' + i;

      const sel = document.createElement('select');
      sel.className = 'ligacao-select';
      sel.id = 'lig-sel-' + i;

      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = '— Escolhe —';
      placeholder.disabled = true;
      placeholder.selected = true;
      sel.appendChild(placeholder);

      opcoesBaralhadas.forEach((op, j) => {
        const opt = document.createElement('option');
        opt.value = j;
        opt.textContent = op;
        sel.appendChild(opt);
      });

      row.innerHTML = `<div class="ligacao-conceito">${conceito}</div><div class="ligacao-seta">→</div>`;
      row.appendChild(sel);
      grid.appendChild(row);
    });
  }

  window.confirmarLigacao = function() {
    if (aguardandoProxima) return;
    const p = perguntasList[perguntaAtual];
    let todasCertas = true;

    p.colunaA.forEach((_, i) => {
      const sel = document.getElementById('lig-sel-' + i);
      const row = document.getElementById('lig-row-' + i);
      const escolhido = parseInt(sel.value);
      const correto   = p.resposta[i];
      sel.disabled = true;
      row.classList.remove('certa','errada');
      if (escolhido === correto) {
        row.classList.add('certa');
      } else {
        row.classList.add('errada');
        todasCertas = false;
      }
    });

    mostrarFeedbackEProxima(todasCertas, todasCertas ? null : 'Verifica as ligações correctas assinaladas a verde.');
  };

  // ══════════════════════════════════════
  // FEEDBACK E PRÓXIMA
  // ══════════════════════════════════════
  function mostrarFeedbackEProxima(certa, mensagemErro) {
    aguardandoProxima = true;
    if (certa) acertos++;

    const fb = document.getElementById('feedback');
    const fi = document.getElementById('feedback-inner');
    fb.style.display = 'block';
    fb.className = 'feedback ' + (certa ? 'certa' : 'errada');
    fi.textContent = certa ? '✓ Correto!' : ('✗ Incorreto. ' + (mensagemErro || ''));

    setTimeout(() => proximaPergunta(), 1800);
  }

  function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual >= perguntasList.length) {
      finalizarNivel();
    } else {
      mostrarPergunta();
    }
  }

  // ══════════════════════════════════════
  // ══════════════════════════════════════
  // FIM DE NÍVEL
  // ══════════════════════════════════════
  function finalizarNivel() {
    const cfg = NIVEIS_CONFIG[nivelAtual - 1];
    const total = perguntasList.length;
    const todasCertas = acertos === total;

    document.getElementById('fim-acertos').textContent = '✓ ' + acertos + ' / ' + total + ' acertos';

    if (!todasCertas) {
      // Não passou — repete o nível
      document.getElementById('fim-titulo').textContent   = 'Nível ' + nivelAtual + ' — Tenta outra vez!';
      document.getElementById('fim-desc').textContent     = 'Precisas de acertar todas as perguntas para avançar. Tens ' + acertos + ' de ' + total + ' certas.';
      document.getElementById('fim-progresso').textContent = 'Sem progresso ainda';

      const btnProximo = document.getElementById('btn-proximo-nivel');
      btnProximo.textContent = 'Repetir Nível';
      btnProximo.onclick = () => iniciarNivel(nivelAtual);

    } else {
      // Passou — guarda progresso e avança
      progressoTotal = Math.min(100, progressoTotal + cfg.progresso);
      sessionStorage.setItem('prog_' + disciplina, progressoTotal);
      atualizarHeaderProgresso();

      document.getElementById('fim-titulo').textContent   = cfg.label + ' Completo!';
      document.getElementById('fim-desc').textContent     = 'Parabéns! Acertaste todas as perguntas!';
      document.getElementById('fim-progresso').textContent = '+' + cfg.progresso + '% progresso';

      const btnProximo = document.getElementById('btn-proximo-nivel');
      if (nivelAtual < 3) {
        btnProximo.textContent = 'Próximo Nível';
        btnProximo.onclick = () => mostrarInicioNivel(nivelAtual + 1);
      } else {
        btnProximo.textContent = 'Ver Resultados';
        btnProximo.onclick = () => mostrarEcra('ecra-final');
        document.getElementById('final-desc').textContent = 'Completaste todos os níveis de ' + nomeDisciplina + '!';
      }
    }

    mostrarEcra('ecra-fim-nivel');
  }

  // ══════════════════════════════════════
  // HEADER PROGRESSO
  // ══════════════════════════════════════
  function atualizarHeaderProgresso() {
    document.getElementById('progresso-fill').style.width = progressoTotal + '%';
    document.getElementById('progresso-pct').textContent  = progressoTotal + '%';
  }

  // ══════════════════════════════════════
  // MODAL SAIR
  // ══════════════════════════════════════
  window.fecharModal = function() {
    document.getElementById('modal-sair').style.display = 'none';
  };

  window.confirmarSaida = function() {
    window.location.href = 'escolha.html';
  };

  // ══════════════════════════════════════
  // UTILITÁRIO
  // ══════════════════════════════════════
  function embaralhar(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

});

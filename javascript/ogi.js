var perguntasOGI = {
  nivel1: [
    // VERDADEIRO/FALSO
    { tipo: 'vf', pergunta: 'As primeiras organizações que na história são: Organizações Políticas; Organizações Militares; Organizações Religiosas.', resposta: true },

    { tipo: 'vf', pergunta: 'As primeiras razões que explicam a existência das organizações são: Matérias; Sociais e Efeito de Sinergia.', resposta: true },

    { tipo: 'vf', pergunta: 'Os tipos de industrias sao: Ceramica; Textil; Minerais; Metalurgicas; Automóvel.', resposta: true },

    { tipo: 'vf', pergunta:'As empresas são classificadas: Quanto ao tamanho; Propriedade;Tipo de producao; Actividade Economica;Forma Juridica.', resposta: true },

    { tipo: 'vf',pergunta:' Organicao empresarial e uma organizacao que permite a gestao da empresa de uma forma mais organizada.', resposta: true },

    { tipo: 'vf', pergunta: 'Os quatro componentes essenciaia na organicao empresarial sao: Pessoa; Trabalho; Orgao e Relacao.', resposta: true },

    { tipo: 'vf', pergunta: 'Uma funcão corresponde a um tipo de actividade laboral que pode ser identificada e se destingir de qualquer outra.', resposta: true },

    { tipo: 'vf', pergunta: 'Departamentalizacao é o processo que consiste em agrupar funcoes semelhantes ou actividade principais em unidade de gestao.', resposta: true },

    { tipo: 'vf', pergunta: 'Diferencição corresponde a estrutura organizacional que e o conjunto de relacoes formais entre grupos e os individos que constituem a organizacao.', resposta: true },

    { tipo: 'vf', pergunta: 'Stock é um produto ou mercadoria que se encontra armazenada na empresa a espera de uma utilizacao futura pelos sevicos .', resposta: true },

    // MÚLTIPLA ESCOLHA
    { tipo: 'mc', pergunta: 'Qual das opções abaixo representa os nives de gestão?', opcoes: ['Conceptual,técnica e em relações humanas', 'Institucional, intermedio e operacional', 'Direcao planificar, organizar e controle'], resposta: 1 },

    { tipo: 'mc', pergunta: 'Os recursos empresariais que vc estudou são:', opcoes: ['Estrategico, tatico e operacional', 'Materiais, Estrategico, Mercadologicos, Humanos, Financeiros', 'Pessoa, trabalho, orgão e relação' ], resposta: 1 },

    { tipo: 'mc', pergunta: 'Os tipos de planeamento que vc estudou são:', opcoes: [' Materiais, Estrategico, Mercadologicos, Humanos, Financeiros', 'Estrategico, tatico e operacional', 'Pessoa, trabalho, orgão e relação' ], resposta: 1 },

    { tipo: 'mc', pergunta: 'As fazes do planeamento são:', opcoes: ['Estabelecimento do objetivo, Análise do contexto esterno da empresa, Conhecimento de recursos da empresa,Definição e seleção de estratégia, Elaborar um plano de atuação,Controle e avaliação', 'Materiais, finaceiros, Humanos, Mercadologicos e administrativos.' ], resposta: 0 },

   
  ],

  nivel2: [
    // DISSERTIVA (Correta/Não correta)
    { tipo: 'dissertiva', pergunta: 'Aprovisionamento é um conjunto de actividades, que tem por finalidade o abastecimento em tempo oprtuno.', resposta: true },

    { tipo: 'dissertiva', pergunta: 'As tarefas que a empresa deve desenvolver ao constituir um stock saõ: Gedstão material, Gestão admistrativa, Gestão economica.', resposta: true },


    { tipo: 'dissertiva', pergunta: 'Os aspectos a reter ao  fazer o aprovisionamento são: Detrminação da qualidade de bens e servissos a adquirir, preço e data de aquisição.', resposta: true },

    { tipo: 'dissertiva', pergunta: 'Para que haja uma gestão correta de aprovisonamento, devemos evitar investimento desnecesario em bens, ruptura de stock, grandes locais de armazenagem que provocam custos elavados de manunteção.', resposta: true },

    { tipo: 'dissertiva', pergunta: 'As informações que podemos obter no documento chamado fixa de armazem são: Conhecerc o stock existente de armazem, evitar roptura ou escessos de um determinado produto, calcular o custo de um detrminado produto e permitir uma leitura facil da dados.', resposta: true},

    { tipo: 'dissertiva', pergunta: 'As aréas de actividades do aprovisionamento são: as compras, armazenamento, gestão de stock e os tranportes.', resposta: true },

    { tipo: 'dissertiva', pergunta: 'As etapas de realização de uma compra são: recepção de pedidos, preocura de fornecedores, negociação e comunicação, efectivação de compra e envio de formação.', resposta: true },

     { tipo: 'dissertiva', pergunta: 'Planeamento é uma actividade contínua,sitemática e disciplinada que consiste em ordenar e estruturar as tarefas a desenvolver de modo a alcançarem-se determinados exercícios que previamente foram fixados.', resposta: true },

  ],

  nivel3: [
  
    // LIGAÇÃO DE COLUNAS
   {
  tipo: 'ligacao',
  pergunta: 'Liga cada conceito à sua definição:',
  colunaA: [
    'Quantidade em stock',
    'Recepção',
    'Gestão material de stocks(GMS)'
  ],
  colunaB: [
    'Informações que constam nos documentos administrativos',
    'Áreas que a GMS engloba',
    'Ópticas em que podemos analisar a gestão de stocks'
  ],
  resposta: [0,1,2]
},

    {
      tipo: 'ligacao',
      pergunta: 'Liga cada componente à sua definição:',
      colunaA: ['Identificação dos materiais em stock', 'Arrumação', 'Gestão Administrativa De Stock(GAS)'],
      colunaB: ['Ópticas em que podemos analisar a gestão de stocks', 'Áreas que a GMS englobao', 'Informações que constam nos documentos administrativoss'],
      resposta: [ 2, 1, 0]
    },
    
   
  ]
};

var perguntasSEAC = {
  nivel1: [
    // VERDADEIRO/FALSO
    { tipo: 'vf', pergunta: 'O HTML, é uma linguagem de marcação de texto que tem como função criar paginas web', resposta: true },

    { tipo: 'vf', pergunta: 'O HTML, foi criado por Tim Berners-Lee, junto com a programação web em 1989 e 1991', resposta: true },

    { tipo: 'vf', pergunta: 'A tag <!DOCTYPE html> serve para informar o navegador de que o documento está escrito na versão HTML5', resposta: true },

    { tipo: 'vf', pergunta: 'O conteúdo inserido dentro da tag <head> fica totalmente visível para o utilizador na área principal da página web.', resposta: false},

    { tipo: 'vf', pergunta: 'A tag <h1> representa o título de menor importância numa página web, enquanto a tag <h6> representa o título principal.', resposta: false },

    { tipo: 'vf', pergunta: 'O atributo href é obrigatório na tag <a> para definir o endereço de destino de um link.', resposta: true },

    { tipo: 'vf', pergunta: 'Numa tabela HTML, a tag <tr> é utilizada para criar uma nova linha, e a tag <td> cria uma célula de dados comum.', resposta: true },

    { tipo: 'vf', pergunta: 'Para criar uma lista numerada automática, devemos utilizar a tag <ul> acompanhada da tag <li> para cada item.', resposta: false },

    { tipo: 'vf', pergunta: 'O método POST num formulário envia os dados digitados pelo utilizador visíveis diretamente na barra de endereço (URL) do navegador.', resposta: false },

    { tipo: 'vf', pergunta: 'Para esconder os caracteres de uma palavra-passe enquanto o utilizador digita num formulário, usa-se a tag <input type="password">', resposta: true },

    // MÚLTIPLA ESCOLHA
    { tipo: 'mc', pergunta: 'Qual é o objetivo principal do HTML no desenvolvimento de uma aplicação ou página web?', opcoes: ['Definir a estrutura e a marcação de conteúdo da página.', 'Executar scripts do lado do servidor e conectar bases de dados.', 'Estilizar o design visual, cores e animações do site.', 'Criar funções lógicas e loops de repetição de dados.'], resposta: 0 },

    { tipo: 'mc', pergunta: 'Como funciona o mecanismo de leitura das tags HTML pelo navegador da web?', opcoes: ['O navegador compila o código HTML num ficheiro binário executável antes de o mostrar.', 'As tags são interpretadas sequencialmente de cima para baixo, gerando a árvore DOM.', 'O HTML é enviado para o sistema operativo para que este desenhe a interface de utilizador.', 'As tags só funcionam se forem processadas por um servidor web ativo como o Apache.'], resposta: 1 },

    { tipo: 'mc', pergunta: 'O que caracteriza a "semântica" introduzida de forma forte no HTML5?', opcoes: ['A capacidade de usar tags que descrevem claramente o significado do seu conteúdo para o navegador e motores de busca.', 'A obrigatoriedade de escrever todo o código em letras maiúsculas para evitar erros de leitura.', 'A integração direta de código PHP dentro de elementos estruturais sem necessidade de tags especiais.', 'O uso exclusivo de tags genéricas como <div> e <span> para acelerar o carregamento da página.'], resposta: 0 },

    { tipo: 'mc', pergunta: 'Qual das seguintes opções apresenta apenas tags puramente semânticas introduzidas ou consolidadas no HTML5?', opcoes: ['<div>, <span>, <br>', '<header>, <article>, <footer>', '<table>, <tr>, <td>', '<b>, <i>, <font>'], resposta: 1 },

    { tipo: 'mc', pergunta: 'Em relação à anatomia de uma tag HTML, qual é a diferença funcional entre uma tag que possui fecho (ex: <p>...</p>) e uma tag de fecho automático (ex: <img> ou <br>)?', opcoes: [' As tags de fecho automático não aceitam atributos em nenhuma circunstância.', ' As tags com fecho delimitam um bloco de conteúdo, enquanto as de fecho automático inserem um elemento autónomo.', 'As tags de fecho automático só funcionam dentro da secção <head> do documento.', 'As tags com fecho servem apenas para texto e as de fecho automático servem apenas para imagens.'], resposta: 1 },

    { tipo: 'mc', pergunta: 'No HTML5, o atributo class pode ser utilizado em que circunstâncias?', opcoes: [' Pode ser atribuído a qualquer elemento HTML para aplicar estilos CSS ou manipulação via JavaScript.', ' É de uso exclusivo da tag <div>, não funcionando em tags de texto como <p> ou <h1>', ' Só pode existir uma única tag com uma determinada class em todo o documento HTML.', 'Serve apenas para declarar que a página pertence a uma classe ou categoria escolar específica.'], resposta: 0 },

    { tipo: 'mc', pergunta: ' Analise a seguinte afirmação: "Uma tag HTML pode conter múltiplos nomes de classes no mesmo atributo class". Esta afirmação está:', opcoes: ['Correta, bastando separar os nomes das classes por um espaço em branco (ex: class="azul texto-grande").', ' Incorreta, porque o atributo só aceita uma palavra e deve usar-se o atributo class2 para uma segunda classe.', 'Correta, mas os nomes devem ser separados obrigatoriamente por um ponto (ex: class="azul.texto-grande").', ' Incorreta, porque o HTML5 baniu o uso de múltiplas classes para simplificar o código.'], resposta: 0 },

    { tipo: 'mc', pergunta: ' Embora o HTML estruture o conteúdo, a centralização de elementos é feita com CSS. Qual é a combinação correta de propriedades CSS para centralizar horizontal e verticalmente uma <div> filha dentro de uma <div> pai que usa Flexbox?', opcoes: ['text-align: center; e vertical-align: middle;', 'margin: center;', 'display: flex; justify-content: center; align-items: center;', 'position: center; float: center;'], resposta: 2 },

    { tipo: 'mc', pergunta: 'Se não puder usar Flexbox, qual é a forma clássica de centralizar horizontalmente uma <div> que possui uma largura (width) fixa definida?', opcoes: ['Definir a propriedade margin: 0 auto; no CSS dessa <div>.', 'Usar a tag <center> em volta da <div>, pois é a prática recomendada no HTML5.', 'Definir a propriedade align="center" diretamente na tag HTML da <div>.', 'Definir padding: center; nas regras globais do documento.'], resposta: 0 },

    { tipo: 'mc', pergunta: 'O que acontece se um programador esquecer-se de fechar uma tag estrutural como <div> ou <section> no código?', opcoes: ['O navegador exibe um ecrã azul de erro e interrompe imediatamente o carregamento do site.', 'O navegador tenta corrigir o erro automaticamente ao renderizar, mas o layout e a formatação da página podem quebrar visualmente.', ' O código é rejeitado pelo provedor de internet e a página não é publicada online.', ' Nada acontece, porque o HTML5 ignora completamente a ordem e a estrutura das tags.'], resposta: 1 },
  ],

  nivel2: [
    
    { 
        tipo: 'dissertiva', 
        pergunta: 'A sigla CSS significa Cascading Style Sheets (Folhas de Estilo em Cascata) e o seu objetivo principal é separar o conteúdo estrutural de um documento (HTML) da sua apresentação visual e layout.', 
        resposta: true 
    },

    { 
        tipo: 'dissertiva', 
        pergunta: 'No Modelo de Caixas (Box Model) do CSS, a propriedade margin define o espaço interno entre o conteúdo e a borda do elemento, enquanto o padding define o espaço externo entre elementos.', 
        resposta: false 
    },

    { 
        tipo: 'dissertiva', 
        pergunta: 'Os seletores de ID (ex: #menu) possuem maior especificidade no CSS do que os seletores de classe (ex: .menu), o que significa que as regras do ID substituem as da classe em caso de conflito no mesmo elemento.', 
        resposta: true 
    },

    { 
        tipo: 'dissertiva', 
        pergunta: 'A propriedade display: inline-block; permite que um elemento fique alinhado ao lado de outros elementos na mesma linha, mantendo a capacidade de aceitar configurações personalizadas de largura (width) e altura (height).', 
        resposta: true 
    },

    { 
        tipo: 'dissertiva', 
        pergunta: 'Para aplicar uma regra CSS a todas as tags de parágrafo (<p>) que estejam especificamente e exclusivamente dentro de uma <section>, utiliza-se obrigatoriamente o seletor combinado p > section.', 
        resposta: false 
    },

    { 
        tipo: 'dissertiva', 
        pergunta: 'A propriedade position: absolute; posiciona um elemento em relação ao elemento pai mais próximo que possua uma posição diferente de static (como relative ou absolute).', 
        resposta: true 
    },

    { 
        tipo: 'dissertiva', 
        pergunta: 'A propriedade display: flex; deve ser aplicada diretamente nos elementos filhos que deseja alinhar, não sendo necessária qualquer configuração na tag pai (contentor).', 
        resposta: false 
    },

    { 
        tipo: 'dissertiva', 
        pergunta: 'No CSS Flexbox, a propriedade justify-content é utilizada para alinhar os elementos filhos ao longo do eixo principal (horizontal por padrão), enquanto align-items controla o alinhamento no eixo cruzado (vertical).', 
        resposta: true 
    },

    { 
        tipo: 'dissertiva', 
        pergunta: 'As Media Queries (@media) servem exclusivamente para alterar a cor de fundo das páginas web quando abertas no modo noturno dos sistemas operativos móveis.', 
        resposta: false 
    },

    { 
        tipo: 'dissertiva', 
        pergunta: 'A unidade de medida relativa em baseia-se no tamanho da fonte (font-size) do próprio elemento ou do seu elemento pai direto, tornando-a ideal para criar designs escaláveis.', 
        resposta: true 
    },

    // MAIS MÚLTIPLA ESCOLHA
    
    // QUESTÕES DE MÚLTIPLA ESCOLHA (tipo: 'mc') - NÍVEL MÉDIO/DIFÍCIL
    { 
        tipo: 'mc', 
        pergunta: 'No CSS Grid Layout, qual propriedade deve ser usada no contentor pai para definir explicitamente o tamanho e a quantidade de colunas na grelha?', 
        opcoes: ['grid-columns', 'grid-template-columns', 'grid-auto-flow', 'grid-layout-axis'], 
        resposta: 1 
    },
    { 
        tipo: 'mc', 
        pergunta: 'Qual das seguintes regras de especificidade CSS possui o maior peso de renderização e substituirá todas as outras num mesmo elemento?', 
        opcoes: ['Um seletor de ID (ex: #topo)', 'Duas classes combinadas (ex: .alerta.ativo)', 'Um estilo em linha (inline style) inserido na tag HTML', 'A pseudo-classe :hover aplicada ao elemento'], 
        resposta: 2 
    },
    { 
        tipo: 'mc', 
        pergunta: 'Se aplicar as propriedades "position: absolute; top: 20px; left: 50px;" a uma div, e nenhum dos seus elementos ascendentes (pais) tiver uma posição definida, a div será posicionada em relação a:', 
        opcoes: ['Ao elemento irmão mais próximo', 'Ao elemento pai direto', 'À viewport (janela do navegador/elemento raiz html)', 'À primeira tag de texto encontrada'], 
        resposta: 2 
    },
    { 
        tipo: 'mc', 
        pergunta: 'No CSS Flexbox, quando a propriedade "flex-direction: column;" está ativa, quais propriedades controlam respetivamente o alinhamento Vertical e Horizontal?', 
        opcoes: ['justify-content controla o vertical; align-items controla o horizontal', 'align-items controla o vertical; justify-content controla o horizontal', 'text-align controla o vertical; vertical-align controla o horizontal', 'grid-row controla o vertical; grid-column controla o horizontal'], 
        resposta: 0 
    },
    { 
        tipo: 'mc', 
        pergunta: 'Qual é o comportamento exato da propriedade "box-sizing: border-box;" aplicada a um elemento com largura (width) de 300px, preenchimento (padding) de 20px e borda de 5px?', 
        opcoes: ['A largura total visível do elemento passa a ser de 350px', 'A largura total visível permanece 300px, e o padding e a borda são subtraídos do espaço interno', 'O elemento ignora a borda e assume 320px de largura', 'O navegador gera um erro de sintaxe por conflito de propriedades'], 
        resposta: 1 
    },

    // QUESTÕES DE VERDADEIRO E FALSO (tipo: 'vf') - NÍVEL MÉDIO/DIFÍCIL
    { 
        tipo: 'vf', 
        pergunta: 'A unidade de medida relativa "rem" baseia-se exclusivamente no tamanho da fonte (font-size) definido no elemento raiz do documento (normalmente a tag html), diferentemente da unidade "em" que herda do pai direto.', 
        resposta: true 
    },
    { 
        tipo: 'vf', 
        pergunta: 'A pseudo-classe :nth-child(odd) é utilizada no CSS para selecionar e estilizar apenas os elementos que ocupam posições pares dentro do seu contentor pai.', 
        resposta: false 
    },
    { 
        tipo: 'vf', 
        pergunta: 'A propriedade "display: none;" esconde o elemento visualmente da página, mas o navegador continua a reservar o espaço físico e geométrico do layout que o elemento ocupava originalmente.', 
        resposta: false 
    },
    { 
        tipo: 'vf', 
        pergunta: 'As variáveis nativas do CSS (Custom Properties) são declaradas utilizando dois traços como prefixo (ex: --cor-principal: #ff0000;) e são recuperadas no código através da função var().', 
        resposta: true 
    },
    { 
        tipo: 'vf', 
        pergunta: 'A palavra-chave "!important" inserida no final de uma regra CSS serve para aumentar a sua especificidade ao nível máximo, mas o seu uso excessivo dificulta a manutenção e a depuração do código.', 
        resposta: true 
    }
],

    

  nivel3: [
    // ANÁLISE DE CÓDIGO
   { 
    tipo: 'codigo', 
    pergunta: 'Analisa o seguinte bloco de código JavaScript:\n\nlet x = "5";\nlet y = 5;\nconsole.log(x == y);\n\nQual será o resultado exibido na consola?', 
    opcoes: ['true', 'false', 'undefined', 'Erro de sintaxe'], 
    resposta: 0 
  },
  { 
    tipo: 'codigo', 
    pergunta: 'Observa a seguinte estrutura condicional em JavaScript:\n\nconst idade = 18;\nif (idade > 18) {\n  console.log("Maior");\n} else {\n  console.log("Menor");\n}\n\nQual mensagem será impressa na consola?', 
    opcoes: ['Maior', 'Menor', 'Não imprime nada', 'Erro: idade não pode ser alterada'], 
    resposta: 1 
  },
  { 
    tipo: 'codigo', 
    pergunta: 'Analisa o seguinte trecho de código CSS:\n\n.caixa {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n  box-sizing: border-box;\n}\n\nQual é a largura total visível ocupada por este elemento no ecrã?', 
    opcoes: ['250px', '240px', '200px', '150px'], 
    resposta: 2 
  },
  { 
    tipo: 'codigo', 
    pergunta: 'Observa a linha de código JavaScript utilizada na manipulação do DOM:\n\ndocument.querySelector(".btn-salvar");\n\nO que este comando está a tentar selecionar na página HTML?', 
    opcoes: ['Uma tag chamada <btn-salvar>', 'O primeiro elemento que possui a classe "btn-salvar"', 'O elemento com o atributo id="btn-salvar"', 'Todos os botões da página de forma simultânea'], 
    resposta: 1 
  },
  { 
    tipo: 'codigo', 
    pergunta: 'Analisa a seguinte declaração de array e estrutura de repetição:\n\nconst números = [10, 20, 30];\nconsole.log(números[1]);\n\nQue valor será exibido na consola após a execução?', 
    opcoes: ['10', '20', '30', 'undefined'], 
    resposta: 1 
  },
  { 
    tipo: 'codigo', 
    pergunta: 'Observa a seguinte regra de estilização CSS:\n\ndiv p {\n  color: red;\n}\n\nA que elementos esta regra será aplicada?', 
    opcoes: ['Apenas a tags <div> que tenham texto idêntico a "p"', 'A todas as tags <div> e também a todas as tags <p> da página', 'Apenas a tags <p> que estejam dentro de uma <div>', 'Apenas à primeira <div> encontrada na página'], 
    resposta: 2 
  },
  { 
    tipo: 'codigo', 
    pergunta: 'Analisa o seguinte código HTML5:\n\n<input type="password" required>\n\nQual é o comportamento esperado deste elemento num formulário?', 
    opcoes: ['Um campo de texto normal onde a palavra exigida é "password"', 'Um campo de texto que esconde os caracteres digitados e bloqueia o envio se estiver vazio', 'Um botão de segurança para submeter palavras-passe encriptadas', 'Um campo numérico para digitação de PINs de cartões bancários'], 
    resposta: 1 
  },
  // LIGAÇÃO DE COLUNAS
    {
    tipo: 'ligacao',
    pergunta: 'Liga cada marco histórico do JavaScript à sua descrição ou criador:',
    colunaA: ['Brendan Eich', 'Netscape', 'ECMAScript', 'Node.js'],
    colunaB: ['Navegador onde o JavaScript foi lançado em 1995', 'Especificação e padrão oficial da linguagem', 'Ambiente que permitiu executar JavaScript no servidor', 'Programador que criou a linguagem em apenas 10 dias'],
    resposta: [3, 0, 1, 2]
  },
  {
    tipo: 'ligacao',
    pergunta: 'Liga cada palavra-chave de declaração de variável ao seu comportamento correto:',
    colunaA: ['var', 'let', 'const', 'Escopo de bloco'],
    colunaB: ['Não permite reatribuição de valor após ser definida', 'Possui escopo global ou de função e aceita redeclaração', 'Restringe a visibilidade da variável apenas dentro das chavetas {}', 'Possui escopo de bloco e permite alterar o seu valor'],
    resposta: [1, 3, 0, 2]
  },
  {
    tipo: 'ligacao',
    pergunta: 'Liga cada termo do funcionamento do JavaScript à sua definição técnica:',
    colunaA: ['Client-Side', 'Interpretada', 'Just-In-Time (JIT)', 'Tipagem Dinâmica'],
    colunaB: ['O motor compila o código para linguagem de máquina na hora de executar', 'O código é executado linha por linha diretamente no navegador', 'O tipo da variável é definido automaticamente com base no valor', 'Código descarregado e processado no computador do utilizador'],
    resposta: [3, 1, 0, 2]
  },
  {
    tipo: 'ligacao',
    pergunta: 'Liga cada método de manipulação do DOM à sua respetiva função:',
    colunaA: ['querySelector()', 'addEventListener()', 'createElement()', 'innerHTML'],
    colunaB: ['Gera dinamicamente uma nova tag HTML na página', 'Seleciona um elemento do HTML usando seletores id, classe ou tag', 'Modifica ou adiciona conteúdo de texto e tags dentro de um elemento', 'Fica à escuta de uma ação do utilizador como um clique'],
    resposta: [1, 3, 0, 2]
  },
  {
    tipo: 'ligacao',
    pergunta: 'Liga cada tipo de dados primitivo do JavaScript ao seu exemplo correspondente:',
    colunaA: ['String', 'Number', 'Boolean', 'Undefined'],
    colunaB: ['true ou false', 'Variável que foi declarada mas não recebeu nenhum valor', '"Olá Mundo"', '2026'],
    resposta: [2, 3, 0, 1]
  },
    // VF e MC extras nível 3
  
  // FORMATO ESCOLHA MÚLTIPLA (tipo: 'mc')
  { 
    tipo: 'mc', 
    pergunta: 'Em JavaScript, qual método deve ser utilizado para converter uma string que representa um número inteiro (ex: "42") num valor numérico real?', 
    opcoes: ['String.toNumber()', 'parseInt()', 'Math.floor()', 'JSON.stringify()'], 
    resposta: 1 
  },
  { 
    tipo: 'mc', 
    pergunta: 'No CSS Flexbox, qual propriedade deve ser aplicada diretamente num item filho para definir a sua capacidade de encolher caso o espaço do contentor pai seja reduzido?', 
    opcoes: ['flex-basis', 'flex-shrink', 'flex-grow', 'flex-wrap'], 
    resposta: 1 
  },
  { 
    tipo: 'mc', 
    pergunta: 'Qual das seguintes estruturas de dados do JavaScript representa uma lista ordenada de valores que pode ser manipulada com os métodos push() e pop()?', 
    opcoes: ['Object', 'Function', 'Array', 'Boolean'], 
    resposta: 2 
  },
  { 
    tipo: 'mc', 
    pergunta: 'Ao utilizar a propriedade CSS "position: sticky;", o elemento comportar-se-á como relativo até que a página atinja um determinado ponto de rolagem, passando a comportar-se como:', 
    opcoes: ['Absolute', 'Static', 'Fixed', 'Inherit'], 
    resposta: 2 
  },

  // FORMATO VERDADEIRO OU FALSO (tipo: 'vf')
  { 
    tipo: 'vf', 
    pergunta: 'A tag <picture> do HTML5 funciona de forma idêntica à tag <img>, não permitindo definir diferentes fontes de imagem para diferentes resoluções de ecrã (Media Queries).', 
    resposta: false 
  },
  { 
    tipo: 'vf', 
    pergunta: 'Em JavaScript, as funções declaradas como Arrow Functions (ex: () => {}) não possuem o seu próprio vínculo com a palavra-chave "this", herdando-o do escopo onde foram criadas.', 
    resposta: true 
  },
  { 
    tipo: 'vf', 
    pergunta: 'No CSS, a pseudo-classe :focus-within é ativada num elemento pai sempre que qualquer um dos seus elementos filhos receber o foco do teclado ou clique.', 
    resposta: true 
  },

  // FORMATO DISSERTIVA / ANÁLISE CONCEITUAL (tipo: 'dissertiva')
  { 
    tipo: 'dissertiva', 
    pergunta: 'O método Event.preventDefault() é utilizado em JavaScript dentro de um manipulador de eventos para cancelar o comportamento padrão que o navegador executaria automaticamente, como o envio de um formulário ou a abertura de um link.', 
    resposta: true 
  },
  { 
    tipo: 'dissertiva', 
    pergunta: 'As tags semânticas do HTML5 como <main>, <nav> e <aside> alteram drasticamente o comportamento visual e o alinhamento dos elementos na página, substituindo completamente a necessidade de usar regras CSS de layout.', 
    resposta: false 
  },
  { 
    tipo: 'dissertiva', 
    pergunta: 'O operador lógico de coalescência nula (??) do JavaScript serve para retornar o operando do lado direito apenas quando o operando do lado esquerdo é estritamente null ou undefined.', 
    resposta: true 
  }

 ]
};
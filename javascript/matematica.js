

var perguntasSEAC = {
  nivel1: [
    // VERDADEIRO/FALSO
    { tipo: 'vf', pergunta: 'Amanha sera terca ou quarta?.', resposta: true },

    { tipo: 'vf', pergunta: 'O patch panel é um equipamento activo.', resposta: false },

    { tipo: 'vf', pergunta: 'A fibra óptica transmite dados por luz.', resposta: true },

    { tipo: 'vf', pergunta: 'A norma TIA/EIA-569 trata de caminhos e espaços de telecomunicações.', resposta: true },

    { tipo: 'vf', pergunta: 'O backbone é também chamado de cabeamento vertical.', resposta: true },

    { tipo: 'vf', pergunta: 'A topologia barramento é a mais usada actualmente.', resposta: false },

    { tipo: 'vf', pergunta: 'O Cat 6A suporta 10 Gigabit Ethernet.', resposta: true },

    { tipo: 'vf', pergunta: 'O rack serve para fazer backup de dados.', resposta: false },

    { tipo: 'vf', pergunta: 'O cabo UTP é o mais comum nas redes locais.', resposta: true },

    { tipo: 'vf', pergunta: 'Misturar cabos eléctricos e de rede é uma boa prática.', resposta: false },

    // MÚLTIPLA ESCOLHA
    { tipo: 'mc', pergunta: 'Qual das seguintes normas trata da administração e etiquetagem?', opcoes: ['ISO 9001', 'ANSI/TIA/EIA-606', 'TCP/IP', 'IEEE 802.11'], resposta: 1 },

    { tipo: 'mc', pergunta: 'O cabo mais comum nas redes locais é:', opcoes: ['Fibra multimodo', 'Coaxial', 'UTP', 'HDMI'], resposta: 2 },

    { tipo: 'mc', pergunta: 'A topologia mais usada no cabeamento estruturado é:', opcoes: ['Barramento', 'Anel', 'Estrela', 'Malha'], resposta: 2 },

    { tipo: 'mc', pergunta: 'O cabeamento backbone é normalmente instalado:', opcoes: ['Entre computador e impressora', 'Entre pisos ou edifícios', 'Dentro do teclado', 'Apenas no exterior'], resposta: 1 },

    { tipo: 'mc', pergunta: 'A tomada padrão de rede utilizada em computadores é:', opcoes: ['USB', 'HDMI', 'RJ45', 'VGA'], resposta: 2 },

    { tipo: 'mc', pergunta: 'Qual das seguintes é uma boa prática de cabeamento?', opcoes: ['Misturar cabos eléctricos e de rede', 'Esmagar cabos para caberem na tubagem', 'Identificar cabos e portas', 'Dobrar o cabo ao máximo'], resposta: 2 },

    { tipo: 'mc', pergunta: 'O Cat 6A suporta:', opcoes: ['10 Gigabit Ethernet', 'Apenas voz', 'Corrente eléctrica', 'Rádio FM'], resposta: 0 },

    { tipo: 'mc', pergunta: 'O rack serve para:', opcoes: ['Decorar a sala', 'Organizar e proteger equipamentos', 'Substituir cabos', 'Fazer backup'], resposta: 1 },

    { tipo: 'mc', pergunta: 'Qual cabo é recomendado para ligação entre dois edifícios distantes?', opcoes: ['UTP Cat5e', 'Cabo coaxial', 'Fibra óptica', 'Par de cobre'], resposta: 2 },

    { tipo: 'mc', pergunta: 'O que significa UTP?', opcoes: ['Universal Transfer Protocol', 'Unshielded Twisted Pair', 'Ultra Thin Port', 'Unified Topology Protocol'], resposta: 1 },
  ],

  nivel2: [
    // DISSERTIVA (Correta/Não correta)
    { tipo: 'dissertiva', pergunta: 'O cabeamento estruturado é considerado a base de uma rede moderna porque oferece padronização, organização, facilidade de expansão, manutenção simplificada e melhor desempenho de rede.', resposta: true },

    { tipo: 'dissertiva', pergunta: 'A norma ANSI/TIA/EIA-568 define apenas os tipos de conectores permitidos numa rede, sem especificar distâncias ou categorias de cabos.', resposta: false },

    { tipo: 'dissertiva', pergunta: 'A fibra óptica apresenta maior imunidade a interferências electromagnéticas em comparação com cabos de cobre, sendo ideal para longas distâncias.', resposta: true },

    { tipo: 'dissertiva', pergunta: 'A sala de equipamentos pode ser substituída por um simples armário de telecomunicações em qualquer instalação, sem diferença de funcionalidade.', resposta: false },

    { tipo: 'dissertiva', pergunta: 'Todos os pontos de rede devem ser testados após a instalação para garantir a continuidade e o desempenho adequado da rede.', resposta: true },

    { tipo: 'dissertiva', pergunta: 'O endereçamento IP não é uma etapa necessária no planeamento de uma rede de computadores moderna.', resposta: false },

    { tipo: 'dissertiva', pergunta: 'A etiquetagem e documentação do cabeamento, segundo a norma TIA/EIA-606, facilita a manutenção e resolução de problemas na rede.', resposta: true },
    { tipo: 'dissertiva', pergunta: 'O cabeamento horizontal pode ter comprimento ilimitado desde que utilize cabo Cat 6A.', resposta: false },
    { tipo: 'dissertiva', pergunta: 'A topologia em estrela centraliza todas as ligações num switch ou hub, facilitando a gestão e isolamento de falhas.', resposta: true },
    { tipo: 'dissertiva', pergunta: 'Instalar cabos de rede próximos de cabos eléctricos não causa qualquer interferência no sinal de dados.', resposta: false },
    // MAIS MÚLTIPLA ESCOLHA
    { tipo: 'mc', pergunta: 'Qual a distância máxima do cabeamento horizontal segundo a norma TIA/EIA-568?', opcoes: ['50 metros', '90 metros', '150 metros', '200 metros'], resposta: 1 },
    { tipo: 'mc', pergunta: 'O que é um patch cord?', opcoes: ['Um tipo de rack', 'Um cabo curto de ligação', 'Um tipo de switch', 'Uma norma de rede'], resposta: 1 },
    { tipo: 'mc', pergunta: 'Qual norma trata de caminhos e espaços de telecomunicações?', opcoes: ['TIA/EIA-568', 'TIA/EIA-569', 'TIA/EIA-606', 'ISO 9001'], resposta: 1 },
    { tipo: 'mc', pergunta: 'O STP difere do UTP porque:', opcoes: ['É mais barato', 'Possui blindagem contra interferências', 'Não usa conectores RJ45', 'Suporta menos velocidade'], resposta: 1 },
    { tipo: 'mc', pergunta: 'Qual equipamento organiza e distribui as ligações de rede num rack?', opcoes: ['Switch', 'Patch panel', 'Router', 'Modem'], resposta: 1 },
    { tipo: 'vf', pergunta: 'O armário de telecomunicações deve ser instalado num local de fácil acesso e com ventilação adequada.', resposta: true },
    { tipo: 'vf', pergunta: 'A fibra óptica multimodo é recomendada para distâncias superiores a 10 km.', resposta: false },
    { tipo: 'vf', pergunta: 'O planeamento de segurança é uma etapa opcional no projecto de redes.', resposta: false },
    { tipo: 'vf', pergunta: 'O cabeamento backbone pode ser realizado com fibra óptica ou cabo de cobre de alta categoria.', resposta: true },
    { tipo: 'vf', pergunta: 'Um rack de 19 polegadas é o padrão mais comum na indústria de telecomunicações.', resposta: true },
  ],

  nivel3: [
    // ANÁLISE DE CÓDIGO
    { tipo: 'codigo', pergunta: 'Analisa o seguinte endereço IP e responde: a que classe pertence?\n\n192.168.1.100', opcoes: ['Classe A', 'Classe B', 'Classe C', 'Classe D'], resposta: 2 },
    { tipo: 'codigo', pergunta: 'Observa a seguinte máscara de sub-rede:\n\n255.255.255.0\n\nQuantos hosts são possíveis nesta rede?', opcoes: ['254', '256', '512', '128'], resposta: 0 },
    { tipo: 'codigo', pergunta: 'Analisa a sequência de crimpagem T568B:\n\nBranco-Laranja, Laranja, Branco-Verde, Azul, Branco-Azul, Verde, Branco-Castanho, Castanho\n\nEsta sequência está correcta para o padrão T568B?', opcoes: ['Sim, está correcta', 'Não, a ordem está errada', 'Não, faltam cores', 'Não, são apenas 4 pares'], resposta: 0 },
    { tipo: 'codigo', pergunta: 'Observa o seguinte comando de rede:\n\nping 192.168.1.1\n\nQual o objectivo deste comando?', opcoes: ['Copiar ficheiros', 'Testar conectividade com um host', 'Configurar o endereço IP', 'Reiniciar a placa de rede'], resposta: 1 },
    { tipo: 'codigo', pergunta: 'Analisa:\n\nipconfig /all\n\nEste comando é utilizado para:', opcoes: ['Apagar configurações de rede', 'Ver todas as configurações de rede do computador', 'Reiniciar o router', 'Configurar o DNS'], resposta: 1 },
    { tipo: 'codigo', pergunta: 'Observa o endereço:\n\n10.0.0.1\n\nEste é um endereço IP:', opcoes: ['Público', 'Privado Classe A', 'Privado Classe B', 'Privado Classe C'], resposta: 1 },
    { tipo: 'codigo', pergunta: 'Analisa a topologia descrita:\n\nTodos os computadores ligados a um switch central\n\nQue topologia é esta?', opcoes: ['Barramento', 'Anel', 'Estrela', 'Malha'], resposta: 2 },
    // LIGAÇÃO DE COLUNAS
    {
      tipo: 'ligacao',
      pergunta: 'Liga cada norma à sua função correcta:',
      colunaA: ['ANSI/TIA/EIA-568', 'ANSI/TIA/EIA-569', 'ANSI/TIA/EIA-606', 'ISO/IEC 11801'],
      colunaB: ['Administração e etiquetagem', 'Caminhos e espaços', 'Cabeamento de telecomunicações', 'Norma internacional de cabeamento'],
      resposta: [2, 1, 0, 3]
    },
    {
      tipo: 'ligacao',
      pergunta: 'Liga cada componente à sua definição:',
      colunaA: ['Patch panel', 'Rack', 'Patch cord', 'Backbone'],
      colunaB: ['Cabeamento vertical entre pisos', 'Cabo curto de ligação', 'Armário para equipamentos', 'Painel de distribuição de ligações'],
      resposta: [3, 2, 1, 0]
    },
    {
      tipo: 'ligacao',
      pergunta: 'Liga cada tipo de cabo à sua característica:',
      colunaA: ['UTP', 'STP', 'Fibra óptica', 'Coaxial'],
      colunaB: ['Transmite dados por luz', 'Par trançado sem blindagem', 'Par trançado com blindagem', 'Usado em TV por cabo'],
      resposta: [1, 2, 0, 3]
    },
    {
      tipo: 'ligacao',
      pergunta: 'Liga cada categoria de cabo ao seu desempenho:',
      colunaA: ['Cat 5e', 'Cat 6', 'Cat 6A', 'Fibra monomodo'],
      colunaB: ['10 Gbps a 100m', '1 Gbps a 100m', 'Longas distâncias acima de 10km', '1 Gbps melhorado'],
      resposta: [1, 3, 0, 2]
    },
    // VF e MC extras nível 3
    { tipo: 'mc', pergunta: 'Numa rede com máscara 255.255.0.0, quantos hosts são possíveis?', opcoes: ['254', '65534', '1024', '512'], resposta: 1 },
    
    { tipo: 'mc', pergunta: 'Qual protocolo é usado para atribuição automática de endereços IP?', opcoes: ['DNS', 'FTP', 'DHCP', 'HTTP'], resposta: 2 },

    { tipo: 'vf', pergunta: 'A fibra monomodo é usada para longas distâncias superiores a 10 km.', resposta: true },

    { tipo: 'vf', pergunta: 'O protocolo TCP/IP é exclusivo de redes sem fio.', resposta: false },

    { tipo: 'vf', pergunta: 'O endereço 192.168.x.x é um endereço IP privado.', resposta: true },

    { tipo: 'mc', pergunta: 'O que é latência numa rede?', opcoes: ['Velocidade máxima', 'Tempo de atraso na transmissão', 'Número de hosts', 'Tipo de cabo'], resposta: 1 },

    { tipo: 'mc', pergunta: 'Qual equipamento opera na camada 3 do modelo OSI?', opcoes: ['Switch', 'Hub', 'Router', 'Patch panel'], resposta: 2 },

    { tipo: 'dissertiva', pergunta: 'O modelo OSI possui 7 camadas, sendo a camada física responsável pela transmissão de bits através do meio físico de comunicação.', resposta: true },

    { tipo: 'dissertiva', pergunta: 'Um switch opera na camada 1 do modelo OSI, trabalhando apenas com sinais eléctricos sem interpretar endereços MAC.', resposta: false },

    { tipo: 'dissertiva', pergunta: 'O DHCP é um protocolo que permite a atribuição automática de endereços IP aos dispositivos de uma rede.', resposta: true },
  ]
};

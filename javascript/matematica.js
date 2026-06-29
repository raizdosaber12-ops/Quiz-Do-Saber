// PERGUNTAS — MATEMÁTICA
// Parte 1: Perguntas 1-10 (Verdadeiro/Falso)

var perguntasMatematica = {
  nivel1: [
    {
      tipo: 'vf',
      pergunta: 'O resultado da operação (100 + 10¹) - 1,33 - 1100² / 0,1⁻³ é igual a -7.',
      resposta: true
    },
    {
      tipo: 'vf',
      pergunta: 'Se a·b ≠ 0, a expressão (a³·b⁻²)⁻² · (a·b⁻²)³ / (a⁻¹·b²)⁻³ · (a⁻⁴·b⁻³) / (a⁵²·b³³) será igual a 1 / (a²⁰·b⁸).',
      resposta: true
    },
    {
      tipo: 'vf',
      pergunta: 'O resultado da operação com radicais -3·∛20 - 2·√24 + √125² + 0,2·√75 - √54 é igual a 12.',
      resposta: false
    },
    {
      tipo: 'vf',
      pergunta: 'O resultado da operação (2⁹⁸ + 2¹⁰⁰ - 2¹⁰²) / (2⁹⁹ - 2¹⁰⁰ - 2¹⁰¹) é igual a 0.',
      resposta: false
    },
    {
      tipo: 'vf',
      pergunta: 'O resultado da operação √(x+1)/(x-1) - √(x-1)/(x+1) + 4x·√(x+1)/x é igual a (4x² + 4x) / (x - 1).',
      resposta: true
    },
    {
      tipo: 'vf',
      pergunta: 'O resultado da operação [(1 - 1+xy) / (1 + 3xy/xy)] / [(1 - 3xy - 1 - xy) / (3xy - 1 + xy)] é igual a xy.',
      resposta: false
    },
    {
      tipo: 'vf',
      pergunta: 'Os logaritmos log₃(25/123), log₁/₃(27) e log₀,₀₁(1000) são respectivamente iguais a x = 9/4, x = 1/100 e x = -3.',
      resposta: false
    },
    {
      tipo: 'vf',
      pergunta: 'Das expressões a) 16^(log₈5) - 49^(log₇2), b) (6^(log5) + log3) / (log3 + log2) e c) log₃(1 + 4log₄5) + log₃(log₅125), os resultados b) = 15 e c) = 6 são verdadeiros.',
      resposta: true
    },
    {
      tipo: 'vf',
      pergunta: 'As funções f(x) = 5^x e g(x) = log₅(x) são funções inversas uma da outra.',
      resposta: true
    },
    {
      tipo: 'vf',
      pergunta: 'O domínio de f(x) = log(x-1) - √(-x² - 4x - 3) é D = {x ∈ ℝ | 1 < x < 3 e x ≠ 2}.',
      resposta: false
    },
    // EQUAÇÕES E INEQUAÇÕES EXPONENCIAIS
    { tipo: 'mc', pergunta: 'O resultado da equação exponencial 0,5²ˣ = √2 é:', opcoes: ['-1/4', '1/4', '-1/2', '1/2'], resposta: 0 },
    { tipo: 'mc', pergunta: 'O resultado da equação exponencial 4²ˣ⁻³ = 8³ˣ⁺² é:', opcoes: ['-2', '-12/5', '-12', '4'], resposta: 1 },
    { tipo: 'mc', pergunta: 'O resultado da equação exponencial 2⁴ˣ⁺¹ × 8⁻ˣ⁺³ = 1/16 é:', opcoes: ['-14', '-6', '4', '14'], resposta: 0 },
    { tipo: 'mc', pergunta: 'O resultado da equação 25ˣ - 6×5ˣ + 5 = 0 usando substituição de variável é:', opcoes: ['x=0 ou x=1', 'x=1 ou x=5', 'x=0 ou x=5', 'Não tem soluções reais'], resposta: 0 },
    { tipo: 'mc', pergunta: 'O resultado da equação exponencial 27ˣ⁺¹ = 81 é:', opcoes: ['4', '5', '1/3', '7'], resposta: 2 },
    { tipo: 'mc', pergunta: 'O conjunto solução da inequação 25ˣ - 6×5ˣ + 5 < 0 é:', opcoes: [']1, 5[', ']0, 1[', ']-∞,0[ ∪ ]1,+∞[', '∅'], resposta: 1 },
    { tipo: 'mc', pergunta: 'O conjunto solução da inequação (0,01)ˣ < √10 é:', opcoes: [']-1/4, +∞[', ']-∞, -1/4[', ']-1/2, +∞[', ']1/4, +∞['], resposta: 0 },
    { tipo: 'mc', pergunta: 'O conjunto solução da inequação 0,5ˣ² ≥ (1/8)³ˣ é:', opcoes: ['[0, 9]', ']-∞,0] ∪ [9,+∞[', '[-3, 3]', '[-9, 0]'], resposta: 0 },
    { tipo: 'mc', pergunta: 'O conjunto solução da inequação 4ˣ + 16 > 10×2ˣ é:', opcoes: [']1, 3[', ']-∞,1[ ∪ ]3,+∞[', ']-∞,2[ ∪ ]8,+∞[', 'ℝ'], resposta: 1 },
    { tipo: 'mc', pergunta: 'O conjunto solução da inequação x² ≥ 4x + 8 é:', opcoes: ['[2-2√3, 2+2√3]', ']-∞,2-2√3] ∪ [2+2√3,+∞[', ']-∞,-2] ∪ [4,+∞[', '[-2, 6]'], resposta: 1 },

  ],
  nivel2: [
    // ── LIMITES E LOGARITMOS — Fascículo Prof. Miguel Lumbombo ──
    // Dissertivas (Verdadeiro/Falso justificado)
    { tipo: 'dissertiva', pergunta: 'O limite lim(n→+∞) ln(n+5)/ln(n) é igual a 1, pois ln(n+5) pode ser escrito como ln(n) + ln(1+5/n) e a segunda parcela tende a 0.', resposta: true },

    { tipo: 'dissertiva', pergunta: 'O limite lim(n→+∞) logₙ(n+7) é igual a 7, pois ao aplicar a mudança de base o valor do logaritmo cresce indefinidamente.', resposta: false },
    
    { tipo: 'dissertiva', pergunta: 'Quando x→0, o infinitésimo equivalente de ln(1+x) é o próprio x, ou seja, ln(1+x) ~ x.', resposta: true },
    { tipo: 'dissertiva', pergunta: 'O limite lim(x→0) ln(1+8x)/x é igual a 8, usando o infinitésimo equivalente ln(1+8x) ~ 8x.', resposta: true },
    { tipo: 'dissertiva', pergunta: 'O limite lim(x→+∞) log_{x²}(5x+3) é igual a 1, pois a propriedade log_{a²}(b) = ½·log_a(b) foi aplicada incorretamente.', resposta: false },
    { tipo: 'dissertiva', pergunta: 'O limite lim(x→0) (eˣ)^(1/ln(1+x)) é igual a e, pois o expoente x/ln(1+x) tende a 1 quando x→0.', resposta: true },
    { tipo: 'dissertiva', pergunta: 'Para que exista lim(x→0) r(x) na função definida por partes com ln(x+1)/(kx) para x>0 e (x²-3x)/x para x<0, o valor de k deve ser -1/3.', resposta: true },
    // Múltipla escolha — Equações Logarítmicas por Definição
    { tipo: 'mc', pergunta: 'Resolva: log₂(x - 1) = 3. Qual é o valor de x?', opcoes: ['x = 7', 'x = 8', 'x = 9', 'x = 6'], resposta: 2 },
    { tipo: 'mc', pergunta: 'Resolva: log₅(2x + 1) = log₅(3x - 4). Qual é o valor de x?', opcoes: ['x = 3', 'x = 5', 'x = 4', 'x = 2'], resposta: 1 },
    // Equações Logarítmicas por Propriedades
    { tipo: 'mc', pergunta: 'Resolva: log₃(x) + log₃(x - 2) = 2. Qual é o valor de x?', opcoes: ['x = 3', 'x = 6', 'x = 9', 'x = 1'], resposta: 0 },
    { tipo: 'mc', pergunta: 'Resolva: log₂(4x) - log₂(x - 1) = 3. Qual é o valor de x?', opcoes: ['x = 2', 'x = 4', 'x = 3', 'x = 8'], resposta: 1 },
    { tipo: 'mc', pergunta: 'Resolva: log₅(x²) = 2·log₅(3). Quais são os valores de x?', opcoes: ['x = 3 ou x = -3', 'x = 9', 'x = 3', 'x = 6 ou x = -6'], resposta: 0 },
    // Inequações Logarítmicas por Definição
    { tipo: 'mc', pergunta: 'Resolva: log₂(x + 3) > 4. Qual é o conjunto solução?', opcoes: ['x > 13', 'x > 11', 'x > 19', 'x > 7'], resposta: 0 },
    { tipo: 'mc', pergunta: 'Resolva: log₃(2x - 1) ≤ 2. Qual é o conjunto solução?', opcoes: ['1/2 < x ≤ 4', 'x ≤ 5', '1/2 < x ≤ 5', 'x ≤ 4'], resposta: 2 },
    // Inequações Logarítmicas por Propriedades
    { tipo: 'mc', pergunta: 'Resolva: log₂(x) + log₂(x - 4) < 3. Qual é o conjunto solução?', opcoes: ['4 < x < 8', 'x > 4', '0 < x < 8', '4 < x < 6'], resposta: 0 },
    { tipo: 'mc', pergunta: 'Resolva: log₅(x² - 1) ≥ 2. Qual é o conjunto solução?', opcoes: ['x ≤ -√26 ou x ≥ √26', 'x ≤ -5 ou x ≥ 5', 'x ≤ -√26 ou x ≥ √26, com x ≠ ±1', ']−∞,−1[ ∪ ]1,+∞['], resposta: 2 },
    { tipo: 'mc', pergunta: 'Resolva: log₃(x) - log₃(x - 2) > 1. Qual é o conjunto solução?', opcoes: ['2 < x < 3', 'x > 3', '2 < x < 4', 'x > 2'], resposta: 0 },
    // Funções Logarítmicas
    { tipo: 'mc', pergunta: 'Qual é o domínio de f(x) = log₂(x² - 5x + 6)?', opcoes: ['x < 2 ou x > 3', 'x ∈ ℝ', 'x > 0', '2 < x < 3'], resposta: 0 },
    { tipo: 'mc', pergunta: 'A função f(x) = log₃(x - 1) é:', opcoes: ['Decrescente para todo x > 1', 'Crescente para todo x > 1', 'Constante', 'Decrescente para x > 0'], resposta: 1 },
    { tipo: 'mc', pergunta: 'Para f(x) = log₅(x) + 2, qual é o valor de x quando f(x) = 0?', opcoes: ['x = 1/5', 'x = 1/25', 'x = 5', 'x = 25'], resposta: 1 },
  ],
  nivel3: [
    // ── 3.º TRIMESTRE — Limites, Derivadas e Integrais ──

    // Ex. 1 — Limite por definição (mc)
    { tipo: 'mc', pergunta: 'Calcule: lim [h→0] ((3+h)⁻¹ - 3⁻¹) / h', opcoes: ['1/9', '-1/9', '1/3', '-1/3'], resposta: 1 },

    // Ex. 2 — Limite com raízes (mc)
    { tipo: 'mc', pergunta: 'Calcule: lim [h→0] (³√(h²+8) - 2) / (√(h²+4) - 2)', opcoes: ['1/3', '2/3', '4/3', '3/4'], resposta: 2 },

    // Ex. 3 — Limite incremental / derivada (mc)
    { tipo: 'mc', pergunta: 'O limite lim [h→0] [((x+h+5)/(x+h)) - ((x+5)/x)] / h representa a derivada de f(x) = (x+5)/x. Qual é o resultado?', opcoes: ['5/x²', '-5/x²', '5/x', '-5/x'], resposta: 1 },

    // Ex. 4 — Continuidade / função por partes (mc)
    { tipo: 'mc', pergunta: 'Para que valor de k existe lim [x→0] r(x), sendo r(x) = ln(x+1)/(kx) se x>0 e (x²-3x)/x se x<0?', opcoes: ['k = 1/3', 'k = -1/3', 'k = 3', 'k = -3'], resposta: 1 },

    // Ex. 5 — Continuidade com constante k (dissertiva)
    { tipo: 'dissertiva', pergunta: 'Para que o limite lim [x→2⁻] (2x² - 3kx + 5)/(x-2) seja um número real finito, o valor de k deve ser 13/6, e o limite resultante é igual a 5.', resposta: true },

    // Ex. 6 — Continuidade verificação (dissertiva)
    { tipo: 'dissertiva', pergunta: 'A função g(x) = 2x + ln(1+x-x²) para x<1 e g(1) = lim(√x+1) é contínua em x=1, pois o limite lateral à esquerda e o valor no ponto coincidem e valem 2.', resposta: true },

    // Ex. 7 — L\'Hôpital (mc)
    { tipo: 'mc', pergunta: 'Aplique a Regra de L\'Hôpital para calcular: lim [x→0] (eˣ - e⁻ˣ - 2x) / (x - sen(x))', opcoes: ['0', '1', '2', '4'], resposta: 2 },

    // Ex. 8 — L\'Hôpital produto (mc)
    { tipo: 'mc', pergunta: 'Calcule: lim [x→+∞] x · ln((x-1)/(x+1))', opcoes: ['-2', '-1', '0', '2'], resposta: 0 },

    // Ex. 9 — L\'Hôpital potência × exponencial (mc)
    { tipo: 'mc', pergunta: 'Calcule: lim [x→+∞] x³ · e^(-x²)', opcoes: ['+∞', '1', '3', '0'], resposta: 3 },

    // Ex. 10 — Derivada por definição (ligação)
    {
      tipo: 'ligacao',
      pergunta: 'Liga cada função à sua derivada correta:',
      colunaA: ['f(x) = 3^(√x)', 'f(x) = 5x^(1/2) - 2x^(3/2) + x^(-1/2)', 'f(x) = ln(⁴√((x²+x+1)/(x²-x+1)))', 'f(x) = (x+1) · ³√(x³-12x+10)'],
      colunaB: ['(1-x²) / [2(x⁴+x²+1)]', '(3^(√x) · ln3) / (2√x)', '5/(2√x) - 3√x - 1/(2x√x)', '³√(x³-12x+10) + [(x+1)(x²-4)] / [³√(x³-12x+10)²]'],
      resposta: [1, 2, 0, 3]
    },

    // Ex. 11 — Derivada raízes aninhadas (dissertiva)
    { tipo: 'dissertiva', pergunta: 'A derivada de f(x) = √(x + √(x + √x)) obtém-se pela regra da cadeia de forma iterativa, sendo o resultado f\'(x) = [1 + (1 + 1/(2√x))/(2√(x+√x))] / [2√(x+√(x+√x))].', resposta: true },

    // Ex. 12 — Derivada potências (mc)
    { tipo: 'mc', pergunta: 'Qual é a derivada de f(x) = 5x^(1/2) - 2x^(3/2) + x^(-1/2)?', opcoes: ['5/(2√x) + 3√x + 1/(2x√x)', '5/(2√x) - 3√x - 1/(2x√x)', '5√x - 3x√x - 1/√x', '10√x - 6x√x'], resposta: 1 },

    // Ex. 13 — Regra do produto (mc)
    { tipo: 'mc', pergunta: 'A derivada de f(x) = (x+1) · ³√(x³-12x+10) pela regra do produto inclui qual dos termos abaixo?', opcoes: ['(x+1)(x²-4) / [³√(x³-12x+10)]²', '(x+1)(x²-4) / [³√(x³-12x+10)²]', '(x+1)(3x²-12) · ³√(x³-12x+10)', '(x²-4) / ³√(x³-12x+10)'], resposta: 1 },

    // Ex. 14 — Regra do quociente (dissertiva)
    { tipo: 'dissertiva', pergunta: 'A derivada de f(x) = (9-x²)³ / √(3-x) pela regra do quociente resulta em f\'(x) = [(9-x²)² · (11x²-36x-9)] / [2(3-x)√(3-x)].', resposta: true },

    // Ex. 15 — Derivada com logaritmo (mc)
    { tipo: 'mc', pergunta: 'Após simplificar com propriedades dos logaritmos, a derivada de f(x) = ln(⁴√((x²+x+1)/(x²-x+1))) é:', opcoes: ['(x²-1) / [2(x⁴+x²+1)]', '(1-x²) / [2(x⁴+x²+1)]', '(1-x) / (x⁴+x²+1)', '(x+1) / [4(x⁴+x²+1)]'], resposta: 1 },

    // Ex. 16 — Integral binómio (ligação)
    {
      tipo: 'ligacao',
      pergunta: 'Liga cada integral ao seu resultado correto:',
      colunaA: ['∫ v·(v²+2)² dv', '∫ (x³-2√x)/x dx', '∫ (x²+1+5/(x²+1)) dx', '∫ (3csc²(x) - 2eˣ) dx'],
      colunaB: ['-3cot(x) - 2eˣ + C', 'x³/3 + x + 5·arctan(x) + C', 'v⁶/6 + v⁴ + 2v² + C', 'x³/3 - 4√x + C'],
      resposta: [2, 3, 1, 0]
    },

    // Ex. 17 — Integral divisão (dissertiva)
    { tipo: 'dissertiva', pergunta: 'A integral ∫ (x³ - 2√x)/x dx, ao distribuir o denominador, resulta em x³/3 - 4√x + C.', resposta: true },

    // Ex. 18 — Integral com arctan (mc)
    { tipo: 'mc', pergunta: 'Calcule: ∫ (x² + 1 + 5/(x²+1)) dx', opcoes: ['x³/3 + x + 5·arctan(x) + C', 'x³/3 + 5·arctan(x) + C', 'x³ + x + 5·arctan(x) + C', 'x²/2 + 5·arctan(x) + C'], resposta: 0 },

    // Ex. 19 — Integral trigonométrica/exponencial (mc)
    { tipo: 'mc', pergunta: 'Calcule: ∫ (3csc²(x) - 2eˣ) dx', opcoes: ['3cot(x) - 2eˣ + C', '-3cot(x) + 2eˣ + C', '-3cot(x) - 2eˣ + C', '3tan(x) - 2eˣ + C'], resposta: 2 },

    // Ex. 20 — Integral frações parciais (mc)
    { tipo: 'mc', pergunta: 'Calcule ∫ (x+1)² / (x³+x) dx usando decomposição em frações parciais:', opcoes: ['ln|x| + arctan(x) + C', 'ln|x| + 2·arctan(x) + C', '2·ln|x| + arctan(x) + C', 'ln|x²+1| + arctan(x) + C'], resposta: 1 },
  ]
};

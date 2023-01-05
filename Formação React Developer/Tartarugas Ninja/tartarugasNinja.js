// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

function findMaximumPieces(n) { 
    return 1 + n * (n + 1) / 2; 
} 

let valor = gets();

//TODO: Imprima o valor usando a função (utilizando -> função(valor)) alterando, enquanto transforma o valor em um inteiro.
let n = parseInt(valor);
print(findMaximumPieces(n))
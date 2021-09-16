
// Exercícios do dia 12 do curso 30 dias de javascript
console.log('Exercícios nível 2\n\n');

// =========> 1 <=========
console.log('\n\n Questão 1 \n\n ');

let paragrafo1 = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(text, n) {

    let paragrafo = text;
    
    let paragrafoLimpo = paragrafo.replace(/\./g, ""); // Troca todos os pontos por ''
    let arrayDePalavras = paragrafoLimpo.split(/\s+/) // Aqui eu transformo todo o texto em uma lista com todas as palavras sem espaço e com as repetidas
    //console.log(arrayDePalavras);

    const setPalavras = new Set(arrayDePalavras); // Cria um Set sem as palavras repetidas
    //console.log(setPalavras);

    const palavrasNãoRepetidas = [...setPalavras] // converto o set para array sem palavras repetidas
    //console.log(palavrasNãoRepetidas);

    let contadorDePalavras = []; 

    for (let i = 0; i < n; i++) {
        const count = arrayDePalavras.filter((word) => word === palavrasNãoRepetidas[i]); // Conta as palavras
        contadorDePalavras.push({ palavra: palavrasNãoRepetidas[i], quantasVezes: count.length }); // Coloca as informações que precisamos no Array
    }

    contadorDePalavras.sort((a, b) => { // Ordena para as mais repetidas primeiro
        if (b.quantasVezes < a.quantasVezes) return -1;
        if (b.quantasVezes > a.quantasVezes) return 1;
        return 0;
    });

    return contadorDePalavras; // retorna o array com as informações
}

console.log(tenMostFrequentWords(paragrafo1, 10)); // Mostra as 'n' palavras mais repetidas no texto


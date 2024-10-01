function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias (vitórias - derrotas)
    const saldoVitorias = vitorias - derrotas;

    // Define o nível do jogador com base na quantidade de vitórias
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }

    // Retorna o saldo e o nível
    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Exemplo de uso
const resultado = calcularRank(85, 30);

// Exibe a mensagem final
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

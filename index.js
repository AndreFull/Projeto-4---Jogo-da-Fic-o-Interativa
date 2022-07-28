const prompt = require('prompt-sync')();
console.log();

function avançoTempo(horaAtual, horaPassada) {
    console.log(`Se passaram ${horaPassada} horas`);
    tempo = horaAtual + horaPassada;
    return tempo;
}

let personagem = {
    energia: 50,
    inteligencia: 50,

    exibeStatus: function () {
        console.log(`
        Sua inteligência é: ${this.inteligencia}.
        Sua energia é: ${this.energia}.`);
    },

    modificaStatus: function (ener, intel) {
        this.energia += ener;
        this.inteligencia += intel;
    },
};

let horas = 7;
let dia = 1;
let loop;
let escolha;
let tempo;

console.log(`Bem vindos a "Sobrevivendo na Selva"`);
console.log(`-------------------------------`);
console.log(`A finalidade do nosso jogo é que você crie uma rotina para sobreviver na Selva por 7 dias,de acordo com suas escolhas 
ganhará ou perderá pontos de inteligência e energia.Para que sobreviva é necessário mínimo de 70 de inteligência
e 60 de energia.Então foque em fazer uma rotina equilibrada para que voce consiga sobreviver.`);
console.log(`-------------------------------`);

// ciclo de repetição
do {
    personagem.energia = 50;
    personagem.inteligencia = 50;
    semana: do {
        for (dia = 1; dia < 7; dia++) {
            while (horas <= 24) {
                console.log(
                    `Agora são ${horas} horas do dia ${dia}, o que focê gostaria de fazer?`,
                );
                console.log(`
          [1] Estudar a area (+4 horas / +5 inteligência / -4 Energia)
          [2] Coletar frutas (+2 horas / -3 inteligência / +2 Energia)
          [3] Caçar (+2 horas / +1 inteligência / -5 Energia)
          [4] Comer (+1 horas / +0 inteligência / +4 Energia)
          [5] Pescar (+2 horas / -3 inteligência / -4 Energia)
          [6] Preparar armadilhas (+4 horas / +3 inteligência / -4 Energia)
          [7] Dormir (+8 horas / -5 inteligência / +5 Energia)`);
                let escolha = +prompt();
                if (escolha == 1) {
                    horas = avançoTempo(horas, 4);
                    personagem.modificaStatus(-4, 5);
                    personagem.exibeStatus();
                    console.log();
                } else if (escolha == 2) {
                    horas = avançoTempo(horas, 2);
                    personagem.modificaStatus(2, -3);
                    personagem.exibeStatus();
                    console.log();
                } else if (escolha == 3) {
                    horas = avançoTempo(horas, 2);
                    personagem.modificaStatus(-5, 1);
                    personagem.exibeStatus();
                    console.log();
                } else if (escolha == 4) {
                    horas = avançoTempo(horas, 1);
                    personagem.modificaStatus(4, 0);
                    personagem.exibeStatus();
                    console.log();
                } else if (escolha == 5) {
                    horas = avançoTempo(horas, 2);
                    personagem.modificaStatus(-4, -3);
                    personagem.exibeStatus();
                    console.log();
                } else if (escolha == 6) {
                    horas = avançoTempo(horas, 4);
                    personagem.modificaStatus(-4, 3);
                    personagem.exibeStatus();
                    console.log();
                } else if (escolha == 7) {
                    horas = avançoTempo(horas, 8);
                    personagem.modificaStatus(5, -5);
                    personagem.exibeStatus();
                    console.log();
                } else {
                    console.log(`Digite uma alternativa válida`);
                }
                if (personagem.energia <= 0 || personagem.inteligencia <= 0) {
                    break semana;
                }
                if (dia === 7 && horas >= 7) {
                    break semana;
                }
            }
            horas = horas - 24;
        }
    } while (
        escolha != 1 &&
        escolha != 2 &&
        escolha != 3 &&
        escolha != 4 &&
        escolha != 5 &&
        escolha != 6 &&
        escolha != 7
    );
    // finais possiveis

    if (personagem.inteligencia <= 0 || personagem.energia <= 0) {
        if (personagem.inteligencia <= 0) {
            console.log(
                `A não, sua inteligência zerou, com esse nivel de inteligência você não consegirá sobreviver, fim de jogo para você!`,
            );
        } else if (personagem.energia <= 0) {
            console.log(
                `A não, sua energia zerou, com esse nível de energia terá que desistir, fim de jogo para você!`,
            );
        }
    } else if (personagem.inteligencia >= 85 && personagem.energia >= 60) {
        console.log(
            `Meus parabéns!! Você fez uma rotina muito boa e sobreviveu ás provas com Bravura. `,
        );
    } else if (personagem.inteligencia >= 70 && personagem.energia >= 60) {
        console.log(
            `Meus parabéns!! Você fez o melhor possível,continua vivo.`,
        );
    } else if (personagem.inteligencia >= 70 && personagem.energia < 60) {
        console.log(
            `Nossa que pena, vc ficou exausto e não consegue mais continuar e vai acabar morrendo.`,
        );
    } else if (personagem.inteligencia <= 40) {
        console.log(`Que pena, você morreu muito rapido. `);
    }

    do {
        console.log(`Você gostaria de tentar novamente? [1] SIM [2] NÃO `);
        loop = +prompt();
        console.log();
        if (loop == 2) {
            console.log(
                `Muito obrigado por ter jogado 'Sobrevivendo na Selva, até a próxima! :)`,
            );
            console.log();
        } else if (loop != 1 && loop != 2) {
            console.log(`Digite uma resposta válida. `);
        }
    } while (loop != 1 && loop != 2);
} while (loop == 1);

// Definição da classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para o herói atacar
    atacar() {
        let ataque;

        // Determinando o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Array com informações dos heróis
const heroisInfo = [
    { nome: 'Aragorn', idade: 35, tipo: 'guerreiro' },
    { nome: 'Gandalf', idade: 200, tipo: 'mago' },
    { nome: 'Bruce Lee', idade: 32, tipo: 'monge' },
    { nome: 'Hattori Hanzo', idade: 40, tipo: 'ninja' }
];

// Criando instâncias da classe Heroi e chamando o método atacar para cada um
for (const info of heroisInfo) {
    const heroi = new Heroi(info.nome, info.idade, info.tipo);
    heroi.atacar();
}


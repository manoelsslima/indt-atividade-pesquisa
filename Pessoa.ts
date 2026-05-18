class Pessoa { // questao 1 - classe eh o modelo de objeto

    private nome: string; // questao 2- atributos
    private idade: number; // questao 3 - atributo private

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

     // questao 3 - encapsulamento do atributo 'nome'
    public getNome(): string {
        return this.nome;
    }

    // questao 3 - metodo getIdade eh public
    public getIdade(): number {
        return this.idade;
    }

    public seApresentar(): void {
        console.log(`Olá! Meu nome é ${this.nome}. Tenho ${this.idade} anos.`);
    }
}

// questao 2 - objeto eh o objeto concreto, criado a partir da classe
const manoel = new Pessoa("Manoel", 99);
manoel.seApresentar();
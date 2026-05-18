import Pessoa from "./Pessoa";
import Autenticar from "./Autenticar";

export default class Gerente extends Pessoa implements Autenticar { // questoa 4 - heranca

    constructor(
        nome: string,
        idade: number,
        private salario: number
    ) {
        super(nome, idade); // questao 4 - heranca
    }

    public override seApresentar(): void { // questao 5 - polimofismo
        console.log(
            `Olá! Meu nome é ${this.getNome()}. Tenho ${this.getIdade()} anos. Ganho ${this.salario} por mês.`
        );
    }

    // questao 6 - interfaces
    public autenticar(email: string, senha: string): void {
        if (email === "admin@email.com" && senha === "123") {
            console.log(`Usuário ${email} autenticado.`);
            return;
        }
        console.log("Usuário inválido.");
    }
}
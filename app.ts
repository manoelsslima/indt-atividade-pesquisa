import Pessoa from './Pessoa';
import Gerente from './Gerente';

// questao 2 - objeto eh o objeto concreto, criado a partir da classe
const pessoa1 = new Pessoa("Pessoa 1", 99);
pessoa1.seApresentar();

const gerente = new Gerente("Gerente 1", 30, 3000.0);
gerente.seApresentar();
gerente.autenticar("admin@email.com", "123");


function listar<T extends Pessoa>(lista: T[]): void {
    console.log("====================================");
    console.log("============= LISTANDO =============");
    console.log("====================================");
    lista.forEach(p => {
        console.log(p.getNome());
    });
}

listar([pessoa1, gerente]);
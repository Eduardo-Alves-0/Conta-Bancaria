import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>()
    numero: number = 0

    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero)

        if(buscarConta !== null) {
            buscarConta.visualizar()
        }else 
            console.log(`Conta numero: ${numero} não foi encontrado`)
    }

    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta)
        console.log(`Conta de ${conta.titular} cadastrada`)
    }

    atualizar(conta: Conta): void {
        let buscarConta = this.buscarNoArray(conta.numero);

        if (buscarConta != null) {
            this.listaContas[this.listaContas.indexOf(buscarConta)] = conta
            console.log(`A conta numero: ${conta.numero} foi atualizada com sucesso`)
        } else 
            console.log(`A conta numero: ${conta.numero} não foi encontrada`)
    }

    deletar(numero: number): void {
        let buscarConta = this.buscarNoArray(numero)

        if (buscarConta != null){
            this.listaContas.splice(this.listaContas.indexOf(buscarConta), 1)
            console.log(`A conta numero: ${numero} foi apagada`)
        }else
            console.log(`A conta de numero: ${numero} não foi encontrada`)
    }

    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero)

        if (conta !== null){
            if(conta.sacar(valor) === true ){
                console.log(`O  saque na conta numero: ${numero} foi realizado com sucesso`)
            }else
                console.log(`A conta numero: ${numero} não foi encontrada`)
        }
    }

    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero)

        if(conta !== null){
            conta.depositar(valor)
            console.log(`O deposito na conta numero: ${numero} foi efetuado`)
        }else 
            console.log(`A conta numero: ${numero} não foi encontrada`)
    }

    transferir(numeroOrigigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigigem)
        let contaDestino = this.buscarNoArray(numeroDestino)

        if(contaOrigem !== null && contaDestino !== null){
            if(contaOrigem.sacar(valor) === true){
                contaDestino.depositar(valor)
                console.log(`A transferencia da conta numero ${numeroOrigigem} para conta numero: ${numeroDestino} foi efetuada `)
            }else 
                console.log(`A conta numero: ${numeroOrigigem} ou ${numeroDestino} não foram encontrada`)
        }
    }

    public gerarNumero(): number {
        return ++ this.numero
    }

    public buscarNoArray(numero: number): Conta | null {
        for(let conta of this.listaContas){
            if(conta.numero === numero)
                return conta
        }
        return null
    }
}


/*
    Eu tenho o private que é o modificador de acesso,
    isso significa que "listaContas" só pode ser acessado dentro da própria classe.

    Depois tenho o nome "listaContas", que é apenas o nome do atributo
    que vai armazenar os objetos do tipo Conta.

    Depois, Array<Conta>, o que está dentro de <> é o tipo do array,
    então quer dizer que o array só vai aceitar objetos da classe Conta
    ou de alguma classe que herde Conta.
    Ou seja, ele segue o padrão criado na classe Conta para armazenar.

    Depois vem o new, que cria uma lista vaiza, que irá guardar os objetos de conta

    Então o "new" prepara o espaço, para armazenar os objetos, 
    mas a criação das contas de fato só acontece quando chamamos new conta(...) e colocamos dentro do array



*/

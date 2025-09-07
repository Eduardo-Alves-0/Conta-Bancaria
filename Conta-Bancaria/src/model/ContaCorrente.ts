import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    private _limite: number

    constructor(
        numero: number,
        agencia: number,
        tipo: number,
        titular: string,
        saldo: number,
        limite: number
    ) {
        super(numero, agencia, tipo, titular, saldo)
        this._limite = limite
    }

    public get limite() {
        return this._limite
    }

    public set limite(limite: number) {
        this._limite = limite
    }


    public sacar(valor: number): boolean {
        if ((this.saldo + this._limite) < valor) {
            console.log('Saldo Insuficiente')
            return false
        }

        this.saldo = this.saldo - valor
        return true
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`limite ${this._limite.toFixed(2)}`)
    }
}

/*
Classe ContaCorrente:

- Herança:
    → A classe estende (extends) a classe Conta, herdando todos os atributos e métodos da classe mãe.
    → O uso de "super" no constructor serve para chamar o construtor da classe mãe, passando os parâmetros necessários (numero, agencia, tipo, titular, saldo).
    → Além disso, o constructor da classe filha também inicializa atributos exclusivos da ContaCorrente, como o "limite".

- Atributo adicional:
    _limite: number
        → Representa o limite de crédito da conta corrente (cheque especial).
        → Permite que o cliente utilize valores além do saldo disponível, até o limite estipulado pelo banco.

- Métodos:

    get limite() / set limite()
        → Acessores para consultar e alterar o valor do limite.
        → Mantêm o princípio de encapsulamento, evitando acesso direto ao atributo privado.

    sacar(valor: number): boolean
        → Sobrescreve o comportamento padrão da classe mãe.
        → A lógica de saque considera o saldo + limite como valor disponível.
            - Se o valor solicitado for maior que (saldo + limite):
                → Exibe a mensagem "Saldo Insuficiente".
                → Retorna false (saque não realizado).
            - Caso contrário:
                → Atualiza o saldo (saldo - valor).
                → Retorna true (saque realizado).
        → Essa implementação permite que o saldo fique negativo, indicando que parte do limite está sendo usado.

    visualizar(): void
        → Chama (via super.visualizar()) o método da classe mãe, exibindo os dados comuns da conta.
        → Em seguida, mostra também o valor do limite disponível, específico da ContaCorrente.
        → Exemplo de polimorfismo: o método é ampliado na classe filha para incluir informações adicionais.
*/

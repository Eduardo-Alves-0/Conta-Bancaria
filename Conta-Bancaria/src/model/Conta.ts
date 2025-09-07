export abstract class Conta {

    private _numero: number
    private _agencia: number
    private _tipo: number
    private _titular: string
    private _saldo: number

    constructor(
        numero: number,
        agencia: number,
        tipo: number,
        titular: string,
        saldo: number
    ) {
        this._numero = numero
        this._agencia = agencia
        this._tipo = tipo
        this._titular = titular
        this._saldo = saldo
    }

    public get numero() {
        return this._numero
    }

    public set numero(numero: number) {
        this._numero = numero
    }

    public get agencia() {
        return this._agencia
    }

    public set agencia(agencia: number) {
        this._agencia = agencia
    }

    public get tipo() {
        return this._tipo
    }

    public set tipo(tipo: number) {
        this._tipo = tipo
    }

    public get titular() {
        return this._titular
    }

    public set titular(titular: string) {
        this._titular = titular
    }

    public get saldo() {
        return this._saldo
    }

    public set saldo(saldo: number) {
        this._saldo = saldo
    }

    // metodo sacar 
    public sacar(valor: number): boolean {
        if (this._saldo < valor) {
            console.log('saldo insuficiente')
            return false
        }

        this._saldo = this._saldo - valor
        return true
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor
    }

    public visualizar(): void {
        let tipo: string = ''

        switch (this._tipo) {
            case 1:
                tipo = 'Conta Corrente'
                break
            case 2:
                tipo = 'Conta Poupança'
                break
        }

        console.log('\n\n*****************************************************');
        console.log('Dados da Conta:');
        console.log('*****************************************************');
        console.log('Numero da Conta: ' + this._numero);
        console.log('Agência: ' + this._agencia);
        console.log('Tipo da Conta: ' + tipo);
        console.log('Titular: ' + this._titular);
        console.log('Saldo: ' + this._saldo.toFixed(2));

    }
}

/*
Métodos da classe Conta:

sacar(valor: number): boolean
    - Recebe um valor numérico como parâmetro.
    - Verifica se o saldo atual é suficiente para realizar o saque.
        - Caso o saldo seja menor que o valor solicitado:
            → Exibe a mensagem "saldo insuficiente" no console.
            → Retorna false, indicando que a operação falhou.
        - Caso contrário:
            → Subtrai o valor do saldo da conta.
            → Retorna true, indicando que o saque foi realizado com sucesso.
    - Esse retorno boolean é importante para validar a operação em outros pontos do código.

depositar(valor: number): void
    - Recebe um valor numérico como parâmetro.
    - Soma esse valor ao saldo da conta.
    - Não possui retorno, apenas atualiza o saldo interno.

visualizar(): void
    - Exibe no console as principais informações da conta:
        → Número da conta
        → Agência
        → Tipo da conta (Corrente ou Poupança)
        → Titular
        → Saldo formatado com duas casas decimais
    - Útil para depuração ou para mostrar os dados de forma legível ao usuário.
*/

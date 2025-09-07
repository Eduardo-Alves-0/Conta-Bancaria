import InputUser, { questionInt, questionNewPassword } from "readline-sync"
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    // Instanciar metodos da classe ContaController
    let contas: ContaController = new ContaController()

    // Variáveis auxiliares
    let numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number
    let titular: string
    const tiposContas = ['Conta Corrente', 'Conta Poupanca']

    let opcao: number = 1

    do {
        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("                BANCO DO BRAZIL COM Z                ")
        console.log("                                                     ")
        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("            1 - Criar Conta                          ")
        console.log("            2 - Listar todas as Contas               ")
        console.log("            3 - Buscar Conta por Numero              ")
        console.log("            4 - Atualizar Dados da Conta             ")
        console.log("            5 - Apagar Conta                         ")
        console.log("            6 - Sacar                                ")
        console.log("            7 - Depositar                            ")
        console.log("            8 - Transferir valores entre Contas      ")
        console.log("            9 - Sair                                 ")
        console.log("                                                     ")
        console.log("*****************************************************")
        console.log("                                                     ")

        opcao = InputUser.questionInt('Insira a opção desejada: ')

        if (opcao === 9) {
            console.log('\n Banco do Brazil com Z - O seu futuro começa aqui!')
            sobre()
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log('Criar conta')

                console.log('Digite o número da agencia: ')
                agencia = InputUser.questionInt('')

                console.log('Digite o nome do titular da conta')
                titular = InputUser.question('')

                console.log('Digite o tipo da conta: ')
                tipo = InputUser.keyInSelect(tiposContas, "", { cancel: false }) + 1

                console.log('Digite o saldo da conta (R$): ')
                saldo = questionInt('')

                switch (tipo) {
                    case 1:
                        console.log('Digite o limte da conta (R$): ')
                        limite = InputUser.questionFloat('')
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break
                    case 2:
                        console.log('Digite o dia do aniversario da Conta Poupanca: ')
                        aniversario = InputUser.questionInt('')
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break
                }
                keyPress()
                break
            case 2:
                console.log('Listar todas as contas')
                contas.listarTodas() // eu chamo a instancia acima que vem de contaController
                keyPress()
                break
            case 3:
                console.log('Consultar dados da conta - por número')

                console.log('Digite o número da conta: ')
                numero = InputUser.questionInt('')
                contas.procurarPorNumero(numero

                )
                keyPress()
                break
            case 4:
                console.log('Atualizar dados da conta')

                console.log('Digite o numero da  conta: ')
                numero = InputUser.questionInt('')

                let conta = contas.buscarNoArray(numero)

                if (conta !== null) {

                    console.log('Digite o numero da agencia: ')
                    agencia = InputUser.questionInt('')

                    console.log('Digite o nome do titular da conta')
                    titular = InputUser.question('')

                    tipo = conta.tipo

                    console.log('Digite o saldo da conta (R$)')
                    saldo = InputUser.questionFloat('')

                    switch (tipo) {
                        case 1:
                            console.log('Digite o limite da conta')
                            limite = InputUser.questionInt('')
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break
                        case 2:
                            console.log('Digite o dia do aniversario da conta poupanca: ')
                            aniversario = InputUser.questionInt('')
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break
                    }
                }else{
                    console.log(`A conta numero: ${numero} não foi encontrada`)
                }
                keyPress()
                break
            case 5:
                console.log('Apagar uma conta')

                console.log('Digite o numero da conta: ')
                numero = InputUser.questionInt('')
                contas.deletar(numero)

                keyPress()
                break
            case 6:
                console.log('Saque')

                console.log('Digite o numero da conta: ')
                numero = InputUser.questionInt('')

                console.log('Digite o valor do saque (R$): ')
                valor = InputUser.questionFloat('')

                contas.sacar(numero, valor)

                keyPress()
                break
            case 7:
                console.log('Depósito')
                
                console.log('Digite o numero da conta: ')
                numero = InputUser.questionInt('')

                console.log('Digite o vlaor do deposito (R$): ')
                valor = InputUser.questionFloat('')

                contas.depositar(numero, valor)

                keyPress()
                break
            case 8:
                console.log('Transferência entre contas')
                
                console.log('Digite o numero da conta de origem: ')
                numero = InputUser.questionInt('')

                console.log('Digite o numero da conta de destino: ')
                numeroDestino = InputUser.questionInt('')

                console.log('Digite o valor do deposito (R$): ')
                valor = InputUser.questionFloat('')

                contas.transferir(numero, numeroDestino, valor)
                
                keyPress()
                break
            case 9:
                console.log('Saindo do sistema...')
                keyPress()
                break
        }
    } while (opcao !== 9)

}

export function keyPress(): void {
    InputUser.question('\nPressione ENTER para continuar...');
}

export function sobre(): void {
    console.log('\n*****************************************************');
    console.log('Projeto Desenvolvido por: Eduardo ALves');
    console.log('Eduardo - eduardoalves0881');
    console.log('https://github.com/Eduardo-Alves-0');
    console.log('*****************************************************');
}

main()
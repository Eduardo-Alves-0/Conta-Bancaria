import { Conta } from "../model/Conta";

export interface ContaRepository{
    // CRUD da conta
    procurarPorNumero(numero: number): void
    listarTodas(): void
    cadastrar(conta: Conta): void
    atualizar(conta: Conta): void
    deletar(numero: number): void

    // Métodos bancarios
    sacar(numero: number, valor: number): void
    depositar(numero: number, valor: number): void
    transferir(numeroOrigigem: number, numeroDestino: number, valor: number): void   
}

/**
 * Aqui estamos definindo apenas a ASSINATURA dos métodos.
 * É como se fosse a etiqueta da caixinha: eu digo o nome do método
 * e os parâmetros que ele precisa receber, mas ainda não digo
 * o que vai acontecer dentro dele (a implementação).
 * 
 * Exemplo:
 * - cadastrar(conta: Conta): void
 *   Nome: cadastrar
 *   Parâmetro: conta
 *   Retorno: void (não retorna nada)
 */
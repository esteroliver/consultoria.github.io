import { correntista } from "./correntista"
export class conta{
    num_conta: number
    saldo: number
    correntista: correntista
     
    constructor(conta: number, saldo:number, entidade: correntista){
        this.correntista = entidade
        this.num_conta = conta
        this.saldo = saldo
    }
    obterSaldo(){
        return this.saldo
    }
    temSaldo(){
        if (this.saldo <= 0){
            return false
        }
        else if (this.saldo > 0){
            return true
        }
        else{
            return "erro!"
        }
    }
    depositar(quantia: number){
        this.saldo += quantia
        if (this.saldo > 0 ){
            return true
        }
        else if (this.saldo <=0 ){
            return false
        }
        else{
            return "Erro!"
        }
    }
    debitar(quantia: number){
        if (this.saldo >= quantia){
            this.saldo - quantia
            return true
        }
        else if (this.saldo < quantia){
            return false
        }
        else{
            return "Erro!"
        }
    }
}
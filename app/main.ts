export class correntista{
    nome: string
    cpf: any
    dataNasc: string
    telefone: any
    mensagem: string

    constructor(n:string, c:number, d:string, t:number){
        this.nome = n
        this.cpf = c 
        this.dataNasc = d
        this.telefone = t
        this.mensagem = ''
    }
    alterarDados(name: string,cp: number,data: string,fone: number){
        this.nome = name
        this.cpf = cp
        this.dataNasc = data
        this.telefone = fone
    }
    obterDados(){
        this.mensagem = `O nome específico é: ${this.nome}.<br>
        O cpf específico é: ${this.cpf}.<br>
        A data de nascimento específica é: ${this.dataNasc}.<br>
        O telefone específico é: ${this.telefone}`
        console.log(this.mensagem)
    }

}
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
        return console.log(this.saldo)
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
let pessoa: correntista = new correntista ('',0,'',0)
let dados: conta = new conta (0,0, pessoa)
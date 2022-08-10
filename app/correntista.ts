export class correntista {
    nome: string
    cpf: any
    dataNasc: string
    telefone: any

    constructor(n:string, c:number, d:string, t:number){
        this.nome = n
        this.cpf = c 
        this.dataNasc = d
        this.telefone = t
    }
    modificarNome(name: string){
        this.nome = name
    }
    modificarCPF(cp: number){
        this.cpf = cp
    }
    modificarData(data: string){
        this.dataNasc = data
    }
    modificarTelefone(fone: number){
        this.telefone = fone
    }
    obterDados(){
        console.log(`O nome específico é: ${this.nome}.<br>
        O cpf específico é: ${this.cpf}.<br>
        A data de nascimento específica é: ${this.dataNasc}.<br>
        O telefone específico é: ${this.telefone}`)
    }

}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conta = void 0;
class conta {
    constructor(conta, saldo, entidade) {
        this.correntista = entidade;
        this.num_conta = conta;
        this.saldo = saldo;
    }
    obterSaldo() {
        return this.saldo;
    }
    temSaldo() {
        if (this.saldo <= 0) {
            return false;
        }
        else if (this.saldo > 0) {
            return true;
        }
        else {
            return "erro!";
        }
    }
    depositar(quantia) {
        this.saldo += quantia;
        if (this.saldo > 0) {
            return true;
        }
        else if (this.saldo <= 0) {
            return false;
        }
        else {
            return "Erro!";
        }
    }
    debitar(quantia) {
        if (this.saldo >= quantia) {
            this.saldo - quantia;
            return true;
        }
        else if (this.saldo < quantia) {
            return false;
        }
        else {
            return "Erro!";
        }
    }
}
exports.conta = conta;

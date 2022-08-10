"use strict";
exports.__esModule = true;
exports.conta = exports.correntista = void 0;
var correntista = /** @class */ (function () {
    function correntista(n, c, d, t) {
        this.nome = n;
        this.cpf = c;
        this.dataNasc = d;
        this.telefone = t;
    }
    correntista.prototype.alterarDados = function (name, cp, data, fone) {
        this.nome = name;
        this.cpf = cp;
        this.dataNasc = data;
        this.telefone = fone;
    };
    correntista.prototype.obterDados = function () {
        console.log("O nome espec\u00EDfico \u00E9: ".concat(this.nome, ".<br>\n        O cpf espec\u00EDfico \u00E9: ").concat(this.cpf, ".<br>\n        A data de nascimento espec\u00EDfica \u00E9: ").concat(this.dataNasc, ".<br>\n        O telefone espec\u00EDfico \u00E9: ").concat(this.telefone));
    };
    return correntista;
}());
exports.correntista = correntista;
var conta = /** @class */ (function () {
    function conta(conta, saldo, entidade) {
        this.correntista = entidade;
        this.num_conta = conta;
        this.saldo = saldo;
    }
    conta.prototype.obterSaldo = function () {
        return console.log(this.saldo);
    };
    conta.prototype.temSaldo = function () {
        if (this.saldo <= 0) {
            return false;
        }
        else if (this.saldo > 0) {
            return true;
        }
        else {
            return "erro!";
        }
    };
    conta.prototype.depositar = function (quantia) {
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
    };
    conta.prototype.debitar = function (quantia) {
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
    };
    return conta;
}());
exports.conta = conta;

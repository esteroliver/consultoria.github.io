"use strict";
var exports = {}
exports.__esModule = true;
exports.conta = exports.correntista = void 0;
var correntista = /** @class */ (function () {
    function correntista(n, c, d, t) {
        this.nome = n;
        this.cpf = c;
        this.dataNasc = d;
        this.telefone = t;
        this.mensagem = '';
    }
    correntista.prototype.alterarDados = function (name, cp, data, fone) {
        this.nome = name;
        this.cpf = cp;
        this.dataNasc = data;
        this.telefone = fone;
    };
    correntista.prototype.obterDados = function () {
        this.mensagem = "Nome: ".concat(this.nome, ".<br>\n        CPF: ").concat(this.cpf, ".<br>\n        Data de Nascimento: ").concat(this.dataNasc, ".<br>\n        Telefone: ").concat(this.telefone);
        document.getElementById('msg').innerHTML = this.mensagem;
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
        return document.getElementById("saldo").innerHTML = this.saldo;
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
        if (this.saldo >= 0) {
            this.saldo += +quantia;
            return true;
        }
        else if (this.saldo < 0) {
            return false;
        }
        else {
            return "Erro!";
        }
    };
    conta.prototype.debitar = function (quantia) {
        if (this.saldo >= 0) {
            this.saldo -= quantia;
            return true;
        }
        else if (this.saldo < 0) {
            return false;
        }
        else {
            return "Erro!";
        }
    };
    return conta;
}());
exports.conta = conta;
var pessoa = new correntista('', 0, '', 0);
var dados = new conta(0, 0, pessoa);

"use strict";
exports.__esModule = true;
exports.correntista = void 0;
var correntista = /** @class */ (function () {
    function correntista(n, c, d, t) {
        this.nome = n;
        this.cpf = c;
        this.dataNasc = d;
        this.telefone = t;
    }
    correntista.prototype.modificarNome = function (name) {
        this.nome = name;
    };
    correntista.prototype.modificarCPF = function (cp) {
        this.cpf = cp;
    };
    correntista.prototype.modificarData = function (data) {
        this.dataNasc = data;
    };
    correntista.prototype.modificarTelefone = function (fone) {
        this.telefone = fone;
    };
    correntista.prototype.obterDados = function () {
        console.log("O nome espec\u00EDfico \u00E9: ".concat(this.nome, ".<br>\n        O cpf espec\u00EDfico \u00E9: ").concat(this.cpf, ".<br>\n        A data de nascimento espec\u00EDfica \u00E9: ").concat(this.dataNasc, ".<br>\n        O telefone espec\u00EDfico \u00E9: ").concat(this.telefone));
    };
    return correntista;
}());
exports.correntista = correntista;

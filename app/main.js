"use strict";
exports, "__esModule", { value: true }
//QUESTÃO 01
const correntista_1 = require("./correntista");
let pessoa = new correntista_1.correntista("Ester", 11518913474, "17/09/2004", 96991035);
pessoa.obterDados();
pessoa.modificarNome("Maria");
pessoa.modificarCPF(10020030090);
pessoa.modificarData("20/08/2000");
pessoa.modificarTelefone(88888888);
pessoa.obterDados();
//QUESTÃO 02
const conta_1 = require("./conta");
let pessoa2 = new correntista_1.correntista("João", 20030040070, "24/09/2003", 90903030);
let entidade = new conta_1.conta(22524667, 100, pessoa2);
entidade.obterSaldo();
entidade.temSaldo();
entidade.depositar(20);
entidade.debitar(20);

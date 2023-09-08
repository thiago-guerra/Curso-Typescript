function somarParamsOpicionais(num1, num2, num3) {
    var total = num1 + num2;
    if (num3 != undefined) {
        total += num3;
    }
    return total;
}
function exemploDefault(nome) {
    if (nome === void 0) { nome = 'Thiago'; }
    return nome;
}
console.log(exemploDefault());
var resultado1 = somarParamsOpicionais(15, 20, 35);
var resultado2 = somarParamsOpicionais(15, 20);
console.log('a soma dos 3 params: ' + resultado1);
console.log("a soma dos 2 params: ".concat(resultado2));
//# sourceMappingURL=optionalParams.js.map
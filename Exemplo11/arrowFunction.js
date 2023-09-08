var exemplo1 = function (altura, largura) {
    return altura * largura;
};
var resultado = exemplo1(5, 5);
console.log('resultado normal: ' + resultado);
var exemplo2 = function (altura, largura) { return altura * largura; };
var resultadoArrow = exemplo2(5, 5);
console.log('resultado arrow: ' + resultadoArrow);
var func = function (param1) {
    return param1;
};
var func2 = function () { console.log('nada'); };
func2();
//# sourceMappingURL=arrowFunction.js.map
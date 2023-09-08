var Produto = /** @class */ (function () {
    function Produto(nome) {
        this.nome = nome;
    }
    return Produto;
}());
new Produto("Teclado");
var Teste = /** @class */ (function () {
    function Teste() {
        this.str = "Olá";
        this.str2 = "Não deu!!";
    }
    return Teste;
}());
var obj = new Teste();
console.log(obj.str);
var Carro = /** @class */ (function () {
    function Carro(preco) {
        this.preco = preco;
    }
    Carro.prototype.DescontoValorCarro = function () {
        return this.preco - (this.preco * 0.5);
    };
    Carro.prototype.InformarValorDesconto = function () {
        console.log("Valor do desconto é " + this.DescontoValorCarro());
    };
    return Carro;
}());
var car = new Carro(50);
car.InformarValorDesconto();
//# sourceMappingURL=classPrivate.js.map
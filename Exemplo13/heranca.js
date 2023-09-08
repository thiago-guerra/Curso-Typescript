// class Tamanho{
//     area: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(area: number){
//         this.area = area;
//     }
// }
// class Circulo extends Tamanho{
//     constructor (area: number){
//         super(area);
//     }
//     tamanhoTotalArea(){
//         console.log("A área total do circulo é...: "+ this.area);
//     }
// }
// let circulo = new Circulo(100);
// circulo.tamanhoTotalArea();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, email, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.idade = idade;
    }
    Pessoa.prototype.apresentaPessoa = function () {
        console.log("Seja bem-vindo(a) " + this.nome);
    };
    return Pessoa;
}());
var Estudante = /** @class */ (function (_super) {
    __extends(Estudante, _super);
    function Estudante(nome, sobrenome, email, idade, periodo, tipoGraduacao) {
        var _this = _super.call(this, nome, sobrenome, email, idade) || this;
        _this.periodo = periodo;
        _this.tipoGraduacao = tipoGraduacao;
        return _this;
    }
    Estudante.prototype.apresentaEstudante = function () {
        _super.prototype.apresentaPessoa.call(this);
        console.log("Me chamo " + this.nome + "e estou cursando " + this.tipoGraduacao + ". E estou usando email " + this.email);
    };
    return Estudante;
}(Pessoa));
var estud = new Estudante("Thiago", "Cesar", "thsilva@hotmail.com", 29, 8, "Sistema de informação");
estud.apresentaEstudante();
//# sourceMappingURL=heranca.js.map
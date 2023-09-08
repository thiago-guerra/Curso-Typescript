// class Tamanho{
//     area: number;

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



class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        public email: string ,
        private idade: number)
    {}

    apresentaPessoa(){
        console.log("Seja bem-vindo(a) " + this.nome);
    }
}

class Estudante extends Pessoa{
    constructor (
        nome: string,
        sobrenome: string,
        email: string,
        idade: number,
        private periodo: number,
        private tipoGraduacao: string)
    {
        super(nome, sobrenome, email, idade);    
    }

    apresentaEstudante(){
        super.apresentaPessoa();
        console.log("Me chamo "+ this.nome + "e estou cursando "+ this.tipoGraduacao + ". E estou usando email " + this.email);
    }
}

let estud =  new Estudante("Thiago", "Cesar", "thsilva@hotmail.com", 29, 8, "Sistema de informação");
estud.apresentaEstudante();
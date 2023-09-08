 class Produto {
    private nome: string ;

    constructor(nome: string){
        this.nome = nome;
    }
}

new Produto("Teclado");



class Teste{
    str: string = "Olá";
    private str2: string = "Não deu!!";
}

let obj = new Teste();

console.log(obj.str);

class Carro {
    private preco : number;
    
    constructor(preco : number){
        this.preco = preco;
    }

    public DescontoValorCarro(){
        return this.preco - (this.preco * 0.5);
    }

    public InformarValorDesconto(){
        console.log("Valor do desconto é "+ this.DescontoValorCarro());
    }
}


let car = new Carro(50);

car.InformarValorDesconto();
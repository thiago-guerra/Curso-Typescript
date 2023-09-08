 class Produto {
    private nome: string ;
    private preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }
}

new Produto("Teclado", 60);



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

    private DescontoValorCarro(){
        return this.preco - (this.preco * 0.5);
    }

    public InformarValorDesconto(){
        console.log("Valor do desconto é "+ this.DescontoValorCarro());
    }
}


let car = new Carro(50);

car.InformarValorDesconto();
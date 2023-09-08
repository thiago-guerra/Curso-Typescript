function somarParamsOpicionais(num1: number, num2: number, num3?: number) : number{
    let total = num1 + num2;
    
    if(num3 != undefined){
         total += num3;   
    }

    return total;

}

function exemploDefault(nome = 'Thiago') : string{
    return nome;
}

console.log(exemploDefault());

let resultado1 = somarParamsOpicionais(15,20, 35);
let resultado2 = somarParamsOpicionais(15,20);

console.log('a soma dos 3 params: '+resultado1);
console.log(`a soma dos 2 params: ${resultado2}`);
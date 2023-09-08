var exemplo1 = function (altura: number, largura: number){
    return altura * largura;
}

let resultado = exemplo1(5,5);
console.log('resultado normal: '+resultado);


var exemplo2 = (altura: number, largura: number) => altura * largura;

let resultadoArrow = exemplo2(5,5);
console.log('resultado arrow: '+ resultadoArrow);


 let func = (param1: number) => {
     return param1;
 }

 let func2 = () => { console.log('nada')};

func2();

 

 
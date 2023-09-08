function somador(num1: number, ...num2: number[]){
    let total  = num1;
    for (let key in num2) {
          total +=  num2[key];
    }
    console.log(total);
}

somador(5, 10,5);













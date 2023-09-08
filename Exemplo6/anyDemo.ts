function exemploAny(): number{
    let thiago ;
    thiago = 29;
    console.log(`Thiago tem ${thiago}`);

    thiago = 'Olá coders';
    console.log(`Thiago fala: ${thiago}`);

    let list: any[] = [1, true, 'free'];
    let list2: any[] = [5 , 6, 'nada', false];

    return list2[2];
}

console.log(exemploAny());

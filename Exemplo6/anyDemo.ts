function exemploAny(): number{
    let thiago ;
    thiago = 29;
    console.log(`Thiago tem ${thiago}`);

    thiago = 'Olá coders';
    console.log(`Thiago fala: ${thiago}`);

    let list: any[] = [1, true, 'free'];

    return list[0];
}

console.log(exemploAny());

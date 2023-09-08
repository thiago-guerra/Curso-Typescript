/**
 * 
 * 
 */

 function exemploEnum()
 {
    enum campeoesCampeonatoBrasileiro{
        Vasco ,
        Sport ,
        SaoPaulo ,
        Fluminense 
    };
    
   let titulos = campeoesCampeonatoBrasileiro.Sport;
    

    switch (titulos as campeoesCampeonatoBrasileiro) {
        case campeoesCampeonatoBrasileiro.Vasco:
            console.log('Vasco: Titulos: 4 | Temp..: 1974, 1989')
            break;
            case  campeoesCampeonatoBrasileiro.Fluminense:
                console.log('Flu: titulos: 3');
             break;
           case campeoesCampeonatoBrasileiro.SaoPaulo:
               console.log('São paulo: titulos: 2');
               break;
               case campeoesCampeonatoBrasileiro.Sport:
                console.log('Sport: Titulos: 1987, 2008'); 
               break;
        default:
            break;
    }

 }

 exemploEnum();
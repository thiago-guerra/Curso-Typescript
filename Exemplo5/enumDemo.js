/**
 *
 *
 */
function exemploEnum() {
    var campeoesCampeonatoBrasileiro;
    (function (campeoesCampeonatoBrasileiro) {
        campeoesCampeonatoBrasileiro[campeoesCampeonatoBrasileiro["Vasco"] = 0] = "Vasco";
        campeoesCampeonatoBrasileiro[campeoesCampeonatoBrasileiro["Sport"] = 1] = "Sport";
        campeoesCampeonatoBrasileiro[campeoesCampeonatoBrasileiro["SaoPaulo"] = 2] = "SaoPaulo";
        campeoesCampeonatoBrasileiro[campeoesCampeonatoBrasileiro["Fluminense"] = 3] = "Fluminense";
    })(campeoesCampeonatoBrasileiro || (campeoesCampeonatoBrasileiro = {}));
    ;
    var titulos = campeoesCampeonatoBrasileiro.Sport;
    switch (titulos) {
        case campeoesCampeonatoBrasileiro.Vasco:
            console.log('Vasco: Titulos: 4 | Temp..: 1974, 1989');
            break;
        case campeoesCampeonatoBrasileiro.Fluminense:
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
//# sourceMappingURL=enumDemo.js.map
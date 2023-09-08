interface ITelefone {
    modeloTelefone: string;
    versaoTelefone: number;
    toque(): string;
}

class TelefoneFixo implements ITelefone{
    modeloTelefone: string;
    versaoTelefone: number;
    toque(): string {
            return "Trim trim!!!";
    }
    
}

let tel = new TelefoneFixo();
console.log(tel.toque());
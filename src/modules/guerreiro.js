import { Personagem } from "./personagem.js"

export class Guerreiro extends Personagem {
    forca
    levelCombate
    resistencia
    static tipo = 'Guerreiro'

    constructor(nome, forca, levelCombate, resistencia) {
        super(nome, 'Minha força é minha maior arma.')
        this.forca = forca
        this.levelCombate = levelCombate
        this.resistencia = resistencia
    }

    obterInsignia() {
        if(this.levelCombate >= 5 && this.forca >= 5) {
            return `Mestre do Combate`
        }
        return super.obterInsignia()
    }
}
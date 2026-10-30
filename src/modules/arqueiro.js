import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    destreza

    constructor(nome, destreza) {
        super(nome,'Esse lugar é a minha última chance')
        this.destreza = destreza
    }

   obterInsignia() {
        if (this.destreza >= 5)
            return `Dominador de flechas`

        return super.obterInsignia()
    }
}

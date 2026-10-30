import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoRemi = new Mago('Remi', 4, 'raio', 4, 3)
const arqueiroLena = new Arqueiro('Lena', 7, 8)
const arqueiroMagoKemi = new ArqueiroMago('Kemi', 7, 10, 'ar', 4, 8)
const guerreiroEloy = new Guerreiro('Eloy', 4, 4, 3)

const personagens = [magoRemi, arqueiroLena, arqueiroMagoKemi, guerreiroEloy]

new PersonagemView(personagens).render()
console.log(guerreiroEloy)


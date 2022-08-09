'use strict';

function fabrica(valor) {
    let nome = valor;
    return function() {
        return nome;
    }
}

const fulano = fabrica('Fulano');
const beltrano = fabrica('Beltrano');

console.log(fulano());
console.log(beltrano());

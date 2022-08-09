'use strict';

function redutor(anterior, atual) {
    return anterior - atual;
}

const array = [ 10, 20, 30, 40, 50];

const resultado = array.reduce(redutor);

console.log(array);

console.log(resultado);

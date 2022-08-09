'use strict';

function duplicar(valor) {
    return 2 * valor;
}

const oldArray = [ 10, 20, 30, 40, 50 ];

const newArray = oldArray.map(duplicar);

console.log(oldArray);

console.log(newArray);

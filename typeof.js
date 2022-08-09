'use strict';

function imprimir(valor) {
    if (typeof valor === 'number') {
        console.log("O valor é um número");
    }
    if (typeof valor === 'string') {
        console.log("O valor é uma string");
    }
    if (typeof valor === 'boolean') {
        console.log("O valor é um booleano");
    }
}

let x = [ 10, 20, 30 ];

imprimir(x);
'use strict';

const array = [ 10, 20, 30, 40, 50 ];

function maioridade(idade) {
    return idade >= 18;
}
const resultado = array.filter(maioridade);

console.log(resultado);


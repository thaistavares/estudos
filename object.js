'use strict';

const pessoa = {
    nome: 'Fulano',
    idade: 20,
    salario: 1234.56,
    solteiro: true,
    hello: function () {
        console.log('Hello, world!');
    },
    array: [20, 30, 40]
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.salario);
console.log(pessoa.solteiro);
pessoa.hello();
console.log(pessoa.array);

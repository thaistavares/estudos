'use strict';

function fatorial(n) {
    return ( n == 0 || n == 1 ) ? 1 : n * fatorial(n - 1);
}

console.log(fatorial(5));

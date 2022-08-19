'use strict';

let size = 8;
let tabuleiro = ' ';

 for (let i=0; i<size; i++) {
    for (let j=0; j<=size; j++) {
        if ((i+j)%2==0) {
            tabuleiro = tabuleiro + ' ';
        } else {
            tabuleiro = tabuleiro + '#';
        }
    }
    tabuleiro = tabuleiro + "\n";
}

console.log(tabuleiro);
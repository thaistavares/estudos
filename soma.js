'use strict';

const somar = (a,b) => a + b;

function execute(x) {
    console.log(x(20,30));
}


execute(somar);
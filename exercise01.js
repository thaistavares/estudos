'use strict';

for( let i = 1; i <= 7; i++) {
    let linha = '';
    for ( let j = 1; j <= i; j++ ) {
        linha = linha + '#';
    }
    console.log(linha);
}

/*'use strict';

const estatica = '#######';

for( let i = 1; i <= 7; i++) {
    console.log(estatica.substring(0,i));
}
*/

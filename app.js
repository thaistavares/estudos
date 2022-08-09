'use strict';

const express = require('express');
const app = express();

app.get( '/rota', (req,res) => {
    res.send('<h1 style="color:blue;font-size:4rem;">Hello, world!</h1>');
});

app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000');
});

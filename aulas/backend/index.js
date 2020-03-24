const express = require('express');

const app = express();

/*
- Rota / Recurso
*/

/*
- Métodos HTTP:
- GET: buscar uma insformação do back-end;
- POST: Criar uma informação no back-end;
- PUT: Alterar uma informação no back-end;
- DELETE: Deletar uma informação no back-end;
*/

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Érica Sousa'
    })
});

app.listen(3333);//Porta

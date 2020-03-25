/*
- Rota / Recurso
*/

/*
- Métodos HTTP:
- GET: buscar/listar uma insformação do back-end;
- POST: Criar uma informação no back-end;
- PUT: Alterar uma informação no back-end;
- DELETE: Deletar uma informação no back-end;
*/

/*
- Tipos de Parâmetros:
- Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação);
- Route Params: Parâmetros utilizados para identificar recursos;
- Request Body: Corpo da requisição, utilizado para criar ou alterar recursos;
*/

/**
 * Driver: SELECT * FROM users;
 * Query Builder: table('users').select('*').where(), aceita qualquer bd sql;
 */

const express = require('express');

const OneController = require('./controllers/OngController');

const connection = require('./database/connection');

const routes = express.Router();

//Listagem
//routes.get('/ongs', async(request, response) =>{
  //  const ongs = await connection('ongs').select('*');

    //return response.json(ongs);
//});

//Cadastro
routes.post('/ongs', OneController.create);

module.exports = routes;
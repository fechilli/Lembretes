//import express from 'express'

const express = require('express')
const router = require('./routes/index')
const conexao = require('./databases/bd.tarefas')
const app = express();
const port = 3000;
const TarefasController = require('./controllers/tarefasController')


//router(app)
app.use(express.json()); // Permite o envio de JSON no corpo da requisição

router(app)




// app.post('/tarefas', (req, res) => {
  
//   const { data, descricao } = req.body;

//   // Query para inserir uma nova tarefa
//   const sql = `INSERT INTO tarefas (data, descricao) VALUES ('2025-02-20 09:30:00', 'teste1')`;

//   conexao.query(sql, [data, descricao], (err, results) => {
//     if (err) {
//       console.error('Erro ao inserir tarefa:', err);
//       res.status(500).send('Erro ao adicionar tarefa');
//     } else {
//       res.status(201).send('Tarefa adicionada com sucesso');
//     }
//   });
// });



// Iniciar o servidor
app.listen(port, (error) => {
  if(error){
    console.log("deu erro")
  }
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Deu certo!`);
});
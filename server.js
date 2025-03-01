//import express from 'express'

const express = require('express')
const sequelize = require('./databases/database');
const router = require('./routes/tarefasRoute')
const app = express();
const port = 3000;

//router(app)
app.use(express.json()); // Permite o envio de JSON no corpo da requisição

sequelize.sync()
  .then(() => {
    console.log('📦 Banco de dados sincronizado');
     })
  .catch(err => {
    console.error('❌ Erro ao sincronizar o banco:', err);
  });

app.use( '/api',router); // Adiciona as rotas de tarefas


// Iniciar o servidor
app.listen(port, (error) => {
  if(error){
    console.log("deu erro")
  }
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Deu certo!`);
});
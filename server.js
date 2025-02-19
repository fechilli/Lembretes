import { DatabaseMemory } from './memory_database.js';
import express from 'express'
const app = express();
const port = 3000;

const database = new DatabaseMemory();

//const now = new Date();

app.use(express.json())


// Rota inicial
app.get('/home', (req, res) => {
  const tarefas = database.list()

  console.log(tarefas)
  
  res.send(tarefas);
});





app.post('/home', (req, res) => {

  const {titulo, descricao, data} = req.body;

  
  database.create({
    titulo: titulo,
    descrição: descricao,
    data : data
  })


  
  return res.status(201).send()

})



app.put('/:id', (req, res) => {})

app.delete('/delete', (req, res) =>{})


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
const express = require('express')
const router = express.Router();
const tarefasController = require('../controllers/tarefasController')

// get post put delete para criar o crud

router.get('/tarefa', (req, res) =>{
    const listaTarefas = tarefasController.buscar()

    listaTarefas
    .then((tarefas) => res.status(200).json(tarefas))
    .catch((error) => res.status(400).json(error.mensage))
})


router.post('/tarefa1', (req, res) =>{
    const resposta = tarefasController.criar()
    res.send(resposta)
})

router.put('/tarefa/:id', (req, res) =>{
    const {id} = req.params.id
    const resposta = tarefasController.alterar(id)
    res.send(resposta)
})

router.delete('/tarefa/id', (req, res) =>{
    const {id} = req.params.id
    const resposta = tarefasController.excluir(id)
    res.send(resposta)
})

module.exports = router
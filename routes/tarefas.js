const express = require('express')
const router = express.Router();

// get post put delete para criar o crud

router.get('/tarefa', (req, res) =>{
    res.send("Testando a primeira rota")
})


router.post('/tarefa1', (req, res) =>{
    res.send("Testando a primeira rota post")
})

router.put('/tarefa/:id', (req, res) =>{
    const {id} = req.params.id
    res.send(`Testando a primeira rota put ${id}`)
})

router.delete('/tarefa/id', (req, res) =>{
    const {id} = req.params.id
    res.send(`Testando a primeira rota delete ${id}`)
})

module.exports = router
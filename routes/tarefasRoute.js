const express = require('express')
const router = express.Router();
const tarefasController = require('../controllers/tarefasController')



router.post('/tarefa', tarefasController.criarTarefa)


module.exports = router
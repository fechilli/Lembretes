const tarefasModel = require('../models/tarefasModels')

class TarefasController{
    buscar(){
        return tarefasModel.listar()
    }

    criar(){
        return "criando Tarefas........"
    }


    alterar(id){
        return "alterando Tarefas........ " + id
    }

    excluir(id){
        return "excluindo Tarefas........ " + id
    }

}

module.exports = new TarefasController();
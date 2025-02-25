class TarefasController{
    buscar(){
        return "buscando Tarefas........"
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
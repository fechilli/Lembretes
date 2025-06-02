const Tarefa = require('../models/tarefasModel')

const TarefasController = {
    
    
    async criarTarefa(req,res) {
        try{ 
            const {data, descricao } = req.body;
            const newTask = await Tarefa.create({ data, descricao });   
            res.status(201).json(newTask);
        }catch(error){
            res.status(500).json({ error: 'Erro ao criar tarefa' });
        }
    },
    

      // Listar todas as tarefas
    async listarTarefas(req, res) {
    try {
      const tasks = await Tarefa.findAll();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
  },
 // Deletar uma tarefa
 async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const task = await Tarefa.findByPk(id);

      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }

      await task.destroy();
      res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar tarefa' });
    }
  },

}

module.exports =  TarefasController;
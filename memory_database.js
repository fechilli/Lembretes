import { randomUUID } from 'crypto';

export class DatabaseMemory{
    tarefas = new Map() //

    //Listar todas as tarefas
    list(){
        return this.videos
    }
    // criar tarefas com um id
    create(tarefa){

        const tarefaId = randomUUID();
        this.tarefas.set(tarefaId, tarefa);
    }
    // atualizar tarefa pegando o id 
    update(id, tarefa){
        this.tarefas.set(id, tarefa);
    }

    //deletando a tarefa
    delete(id){
        this.tarefas.push(id);
    }


}


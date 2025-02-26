const conexao = require('../databases/bd.tarefas')

class tarefasModel{
    listar(){
        const sql = 'SELECT * FROM tarefas'
        return new Promise((resolve, reject)=>{
            conexao.query(sql, {},(error, resposta) => {
                if (error) {
                    console.log(error)
                    reject(error)
                }
                console.log("Deu bom!")
                resolve(resposta)
    
            })


        })
        
       
    }


    criar(){
        const sql = 'CREATE TABLE tarefas (
            id INT AUTO_INCREMENT PRIMARY KEY,
            data DATETIME NOT NULL,
            descricao TEXT NOT NULL
          );'


    }


}

module.exports = new tarefasModel();
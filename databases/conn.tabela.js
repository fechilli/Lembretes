// class Tabela{
//     init(conexao) {
//        this.conexao = conexao;
//        this.criarTabelaConexao()
//     }

//     criarTabelaConexao(){
//         const sql = `
//             REATE TABLE IF NOT EXISTS tarefas (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             data DATETIME NOT NULL,
//             descricao TEXT NOT NULL
//           );
        
//         `
//         this.conexao.query(sql,(error)=>{
//             if(error) {
//                 console.log("Deu erro de criar a tabela")
//                 return  
//             }
//             console.log("criada tabela")
//         })
//     }
// }
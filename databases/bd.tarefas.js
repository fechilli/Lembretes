
const mysql2 = require('mysql2');
const conexao = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',        // Substitua pelo seu usuário do MySQL
    password: '',      // Substitua pela sua senha
    database: 'tarefas'         // Banco de dados que você criou
  });

 // Conectar ao banco de dados
 conexao.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

module.exports = conexao
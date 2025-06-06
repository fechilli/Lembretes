// passo 1 criando conexão com banco de dados

require('dotenv').config(); // Para carregar variáveis de ambiente do .env

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'sua_senha_mysql', // Mude para sua senha do MySQL
    database: process.env.DB_DATABASE || 'nome_do_seu_banco', // Mude para o nome do seu banco de dados
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false // Defina como true para ver os logs SQL no console
  },
  // Você pode ter outras configurações para produção, teste, etc.
  production: {
    // ...
  }
};

const { Sequelize } = require('sequelize'); // importar sequelize

const sequelize = new Sequelize('tarefas', 'root', '', {
  host: 'localhost',
  dialect:  'mysql', // tipo do banco de dados que estamos usando
  logging: false,
}); // configuração dos parametros de conexão com banco


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    console.log('📦 👍 Banco de dados sincronizado');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize
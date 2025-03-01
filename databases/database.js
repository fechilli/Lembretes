// passo 1 criando conexão com banco de dados

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
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize
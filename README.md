### Lembretes
*Sistema de lembretes com opção de alerta*

_Caso for clonar o codigo deve seguir esses passos_

1- baixar NODE.JS caso não tenha instalado na máquina 
2- no terminal, acessar o diretório onde está salvo o programa e usar o comando "npm install" 
3- usar o comando "npm init" para iniciar o projeto node. 
4- usar comando "npm install sequelize mysql2" para instalar dependencias do banco de dados (Se estiver usando outro banco, troque mysql2 pelo driver correspondente.) 
5- usar comando "npm install --save-dev sequelize-cli" para manipular os models do banco de dados 6= usar comando "npm install nodemon" para rodar o script

# Criando Banco de dados

*Para criar um banco de dados precisa seguir esses passos*

1. Para instalar o Sequelize CLI: *npm install --save-dev sequelize-cli* (rodar no terminal)
2. Para criar um projeto vazio você precisará executar inito comando: *npx sequelize-cli init* (rodar no terminal)
3. instalar o pacote *npm install dotenv*
4. criar um arquivo na raiz do programa .env e nele configurar as variaveis de conexão com o banco de dados 
5. mudar o config.json para config.js e importar o .env e substituir os arquivos
6. criar na raiz do arquivo o arquivo .sequelixerc para informar que o arquivo de config foi alterado e mostrar onde está.
7.para criar o banco de dados certificar que servidor esteja rodando e rodar o comando no terminal *npx sequelize-cli db:create*.
8. com o banco criado criar uma migration *npx sequelize-cli migration:generate --name schema_inicial*, com isso a migration vai estar criaga na pasta e substituir por esse schema abaixo:

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tarefas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_tarefa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_limite: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      hora_limite: {
        type: Sequelize.TIME,
        allowNull: false
      },
       resp_ext: {
        type: Sequelize.STRING,
        
      },
       criticidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
       hora_limite: {
        type: Sequelize.STRING,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tarefas');
  }
};



9. rodar no terminal o comando *npx sequelize-cli db:migrate* e ira criar as tabelas no banco.
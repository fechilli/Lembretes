
# 📌 Lembretes

Sistema de lembretes com opção de alerta.

---

## ⚙️ Instalação e Execução

Se for clonar este repositório, siga os passos abaixo:

1. Baixe e instale o **[Node.js](https://nodejs.org/)**, caso ainda não tenha.
2. No terminal, acesse o diretório do projeto:
   ```bash
   cd caminho/do/projeto
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o projeto Node.js:
   ```bash
   npm init
   ```
5. Instale os pacotes necessários para o banco de dados (exemplo com MySQL):
   ```bash
   npm install sequelize mysql2
   ```
   > 🔁 Se estiver usando outro banco, substitua `mysql2` pelo driver correspondente.

6. Instale o Sequelize CLI:
   ```bash
   npm install --save-dev sequelize-cli
   ```
7. Instale o Nodemon para facilitar o desenvolvimento:
   ```bash
   npm install nodemon
   ```

---

## 🛠️ Criando o Banco de Dados

1. Instale o Sequelize CLI (caso ainda não tenha feito):
   ```bash
   npm install --save-dev sequelize-cli
   ```

2. Inicie a estrutura do projeto Sequelize:
   ```bash
   npx sequelize-cli init
   ```

3. Instale o pacote `dotenv`:
   ```bash
   npm install dotenv
   ```

4. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de conexão com o banco:

   ```env
   DB_USER=seu_usuario
   DB_PASS=sua_senha
   DB_NAME=tarefas
   DB_HOST=localhost
   DB_DIALECT=mysql
   ```

5. Renomeie o arquivo `config/config.json` para `config/config.js` e use as variáveis do `.env`. Exemplo:

   ```js
   require('dotenv').config();

   module.exports = {
     development: {
       username: process.env.DB_USER,
       password: process.env.DB_PASS,
       database: process.env.DB_NAME,
       host: process.env.DB_HOST,
       dialect: process.env.DB_DIALECT
     }
   };
   ```

6. Crie um arquivo `.sequelizerc` na raiz do projeto para informar onde estão os diretórios modificados:

   ```js
   const path = require('path');

   module.exports = {
     config: path.resolve('config', 'config.js'),
     'models-path': path.resolve('models'),
     'seeders-path': path.resolve('seeders'),
     'migrations-path': path.resolve('migrations')
   };
   ```

7. Com tudo configurado, crie o banco de dados:

   ```bash
   npx sequelize-cli db:create
   ```

---

## 🧱 Criando a Migration

1. Gere a migration:

   ```bash
   npx sequelize-cli migration:generate --name schema_inicial
   ```

2. No arquivo gerado na pasta `migrations`, substitua o conteúdo pelo schema abaixo:

   ```js
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
           type: Sequelize.STRING
         },
         criticidade: {
           type: Sequelize.STRING,
           allowNull: false
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
   ```

---

## 🚀 Executando a Migration

Após configurar corretamente o arquivo, execute:

```bash
npx sequelize-cli db:migrate
```

Isso criará as tabelas no banco de dados.

const {DataTypes} = require('sequelize');
const sequelize = require('../databases/database'); // importei a conexão com meu banco

const Tarefa = sequelize.define(
  'Tarefa', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data:{
      type: DataTypes.DATE,
      allowNull: false
    },
    data_limite:{
      type: DataTypes.DATE,
      allowNull: false
    },
    descricao:{
      type: DataTypes.STRING,
      allowNull: false

    }

},{
  tableName: 'tasks',
  timestamps: true,

})


module.exports = Tarefa
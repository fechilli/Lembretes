const routerTarefas = require('./tarefas')

module.exports=(app)=>{
    app.use(routerTarefas)
}
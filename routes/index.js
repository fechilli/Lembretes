const routerTarefas = require('./tarefasRoute')

module.exports=(app)=>{
    app.use(routerTarefas)
}
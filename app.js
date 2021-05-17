const {input} = require('./view')
const { printTable } = require('console-table-printer');

//Imp
async function app(state,update,view){
    while (true){
        const {model, currentView} = state
        const {table,title} = currentView
        console.clear()
        //show title and table
        console.log(title)
        printTable(table)
        //
        const {bill,percentage} = await input(model)
        const newModel = update(bill,percentage,model)
        state = {
            ...state,
            model : newModel,
            currentView : view(newModel),
         }

    }
    

}
module.exports = {
    app
}
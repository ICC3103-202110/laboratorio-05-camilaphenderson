const {input} = require('./view')
const { printTable } = require('console-table-printer');

//Imp
async function app(state,update,view){
    const {model, currentView} = state
    const {table,title} = currentView
    console.clear()
    //show title and table
    console.log(title)
    printTable(table)
    //
    //const {bill,percentage} = await input(model)


}
module.exports = {
    app
}
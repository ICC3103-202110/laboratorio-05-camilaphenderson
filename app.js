const {createTitle} = require('./view')

function app(state,update,view){
    console.clear()
    console.log(createTitle())

}
module.exports = {
    app
}
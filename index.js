const {initModel} = require('./model')
// const {update} = require('./update)
// const {view} = require('./view)
const {app} = require('./app')

const state = {
    model : initModel
}
app(state, true, true)

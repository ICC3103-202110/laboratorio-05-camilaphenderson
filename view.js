const figlet = require('figlet')
const chalk = require('chalk')
const { fonts } = require('figlet')

function createTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Tip Calculator',
            {
                horizontalLayout: 'full',
                verticallayout : 'universal smushing',
                font : 'Avatar',
            }
        )
    )
}

module.exports = {
    createTitle
}
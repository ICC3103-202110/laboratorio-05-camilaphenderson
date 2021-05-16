const figlet = require('figlet')
const chalk = require('chalk')
const { fonts } = require('figlet')

function createTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Tip Calculator',
            {
                horizontallayout : 'full',
                font = 'Nancyj-Fancy'
            }
        )
    )
}

module.exports = {
    createTitle
}
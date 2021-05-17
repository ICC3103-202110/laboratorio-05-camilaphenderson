const figlet = require('figlet')
const chalk = require('chalk')
const { fonts } = require('figlet')
const { printTable } = require('console-table-printer');

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

function createTable(model){
    const{bill} = model
    const{percentage} = model
    const{tip} = model
    const{total} = model
    return [
            {'Bill ': bill,'Percentage': percentage+'%','Tip':'$'+tip,'Total':'$'+total}
        ];

}

function input(model){
    const {bill} = model
    const {percentage} = model
    return inquirer.prompt([
        {
            type: 'input',
            name: 'bill',
            message: 'How much is your bill?',
            default: bill,
        },
        {
            type: 'input',
            name:'percentage',
            message: 'What percentage do you want as a tip?',
            default: percentage,
            
        },
    ])
}


module.exports = {
    createTitle
}
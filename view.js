const figlet = require('figlet')
const chalk = require('chalk')
const { fonts } = require('figlet')
const inquirer = require('inquirer')

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
    const {bill} = model
    const{percentage} = model
    const{tip} = model
    const{total} = model
    return [
            {'Bill ': bill,'Percentage': percentage+'%','Tip':'$'+tip,'Total':'$'+total}
        ];

}
//Add validate ***********************************************************************************
function input(model){
    const {bill} = model
    const {percentage} = model
    return inquirer.prompt([
        {
            type: 'input',
            name: 'bill',
            message: 'How much is your bill?',
            default: bill,
            validate: function(value){
                if(isNaN(value) === true ){
                    return `This must be a number`
                } else {
                    return true
                }
            }

        },
        {
            type: 'input',
            name:'percentage',
            message: 'What percentage do you want to give as a tip?',
            default: percentage,
            validate: function(value){
                if(value < '100' || value > '0'){
                    return true
                } else {
                    return 'Please enter a valid number, between 0 and 100'
                }   
            } 
        }
    ])
}

function view(model){
    return {
        title: createTitle(),
        table: createTable(model)
    }
}


module.exports = {
    view,
    input,
}
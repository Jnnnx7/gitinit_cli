const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer = require('./lib/inquirer');

clear();

console.log(
    chalk.yellow(
        figlet.textSync("Mandy's CLI", { horizontalLayout: 'full' })
    )
);

if (files.directoryExists('.git')) {
    console.log(chalk.red('Alread a Git repository!'));
    process.exit();
}

const run = async () => {
    const credentials = await inquirer.askGithubCredentials();
    console.log(credentials);
}

run();
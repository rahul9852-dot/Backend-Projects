#!/usr/bin/env node

const {program} = require('commander');
const CliTool = require('./index');

const cli = new CliTool();
program.version('1.0.0');

program
    .command('load')
    .description('Load the tasks from the file')
    .action(()=>{
        cli.loadTasks();
    });

program
    .command('save')
    .description('Save the tasks to the file')
    .action(()=>{
        cli.saveTasks();
    });

program
    .command('add <description>')
    .description('Add a new task')
    .action((description)=>{
        cli.addTasks({
            description,
            status: 'pending'
        });
        console.log(`Task added: ${description}`);
    });
program
    .command('update <id> <status>')
    .description('Update the status of a task')
    .action((id, status)=>{
        cli.updateTask(id, status);
    });
program
    .command('delete <id>')
    .description('Delete a task')
    .action((id)=>{
        cli.deleteTask(id);
    });

program
    .command('list')
    .description('List all tasks')
    .action(()=>{
        cli.listTasks();
    });

program
    .command('clear')
    .description('Clear all tasks')
    .action(()=>{
        cli.clearTasks();
    });





program.parse(process.argv);
    
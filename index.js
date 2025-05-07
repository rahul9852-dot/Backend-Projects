
const path = require('path');
const { writeFileSync, readFileSync , existsSync, mkdirSync } = require('fs');

class CliTool{
    constructor(){
        this.tasks = [];
        this.verifyFilePath();
        this.loadTasks();
    }

    verifyFilePath(){
        const filepath = path.join(__dirname, 'tasks.json');
        const dirPath = path.dirname(filepath);
        try{
            if(!existsSync(dirPath)){
                mkdirSync(dirPath, {recursive: true});
            }
            console.log('File path verified');
            return true;
        }catch(err){
            console.error('Error verifying file path:', err);
            return false;
        }
    }

    loadTasks(){
        const filePath = path.join(__dirname, 'tasks.json');
        try{
            const data = readFileSync(filePath, 'utf-8');
            this.tasks = JSON.parse(data);
            console.log('Tasks loaded:', this.tasks);
        }catch{
            this.tasks = [];
            this.saveTasks();
        }
    }

    saveTasks(){
        const filePath = path.join(__dirname, 'tasks.json');
        try{
            writeFileSync(filePath, JSON.stringify(this.tasks, null, 2));
            console.log('Tasks saved:', this.tasks);
        }catch(err){
            console.error('Error saving tasks:', err);
        }
    }

    addTasks(task){
        this.tasks.push({
            id: this.tasks.length + 1,
            description: task.description,
            status: task.status,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });
        this.saveTasks();
    }

    listTasks(){
        console.log('Tasks:');
        this.tasks.forEach(task => {
            console.log(`${task.id}. ${task.description} - ${task.status}`);
        });
    }

    updateTask(id, status){
        console.log('Updating task:', id, status, this.tasks);
        const correctIdx = this.tasks.findIndex((task) =>{
            return +task.id === +id;
        });
        if(correctIdx === -1){
            console.log('Task not found');
            return;
        }
        this.tasks[correctIdx].status = status;
        this.saveTasks();
        console.log(`Task ${id} marked as ${status}`);
    }

    deleteTask(id){
        const correctIdx = this.tasks.findIndex(task => +task.id === +id);
        if(correctIdx === -1){
            console.log(`Task with id ${id} not found`);
            return;
        }
        this.tasks.splice(correctIdx, 1);
        this.saveTasks();
        console.log(`Task with id ${id} deleted`);
    }
    
}

module.exports = CliTool;
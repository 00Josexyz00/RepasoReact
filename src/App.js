import React,{Component} from 'react';
import './App.css';
import tasks from './sample/tasks.json';

//componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';


//console.log(tasks);

class App extends Component{
    // tasks es el nombre que se le asigna cualquiera : el siguiente task es como lo llamamos en el import tasks
    state={
        tasks: tasks
    }

    render(){
        return <div>
            <TaskForm/>
            <Tasks tasks = {this.state.tasks}/>
        </div>
    }
}


export default App;

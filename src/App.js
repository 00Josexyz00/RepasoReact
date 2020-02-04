import React,{Component} from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';


//console.log(tasks);

class App extends Component{
    // tasks es el nombre que se le asigna cualquiera : el siguiente task es como lo llamamos en el import tasks
    state={
        tasks: tasks
    }

    render(){
        return <div>

            <Tasks tasks = {this.state.tasks}/>
        </div>
    }
}


export default App;

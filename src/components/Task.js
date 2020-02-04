import React,{Component} from "react";
import PropTypes from 'prop-types';//aydua al desarrollo

import './Task.css';

class  Task extends Component{

    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray':'black',
            textDecoration: this.props.task.done ? 'line-through':'none'
        }
    }
    //render es una funcion
    render() {

        //restructurin
        const{task}= this.props;
        //const redColor= {background: 'red'};

    //style={redColor} esto van en el div dentro del return
        return (
            <div style={this.StyleCompleted(  )}>
                {task.title} -
                {task.description} -
                {task.done} -
                {task.id}
                <input type="checkbox"/>
                <button style={btnDelete}>
                    x
                </button>
            </div>
        );
    }

}

//lanzar errores de objetos que no reciben la propiedad necesaria esto solo sirve para desarrollo
Task.propTypes={
    task: PropTypes.object.isRequired
}


const btnDelete={
    fontsize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}
export default Task;
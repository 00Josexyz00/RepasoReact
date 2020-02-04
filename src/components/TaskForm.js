import React,{Component} from "react";

export default class TaskForm extends Component{
    onSubmint= e =>{
        console.log("Enviando")
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onSubmint}>
                <input type="text" placeholder="Write a Task"/>
                <br/>
                <textarea placeholder="Write a description"/>
                <input type="submit"/>
            </form>
        )
    }
}
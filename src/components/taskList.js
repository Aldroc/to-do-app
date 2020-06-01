import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

class TaskList extends Component{
    constructor(props){
        super(props);
        this.deleteClick=this.deleteClick.bind(this);
        this.editClick=this.editClick.bind(this);
        this.editTask=this.editTask.bind(this);
        this.confirmEdit=this.confirmEdit.bind(this);
        this.state={
            inputStatus: true,
            renderComponent: true,
            currentTaskArray: window.$taskArray.slice(),
            buttonStatus: false,
            renderCheck: true,
            newTask: ''
        }
    }
    deleteClick(){
    var taskArray=this.state.currentTaskArray.slice();
    const arrayIndex=taskArray.length-1;
    window.$taskArray.splice(arrayIndex,1);
    this.setState({ renderComponent: false });
    }
    editClick(){
        this.setState({
            inputStatus: false,
            buttonStatus: true,
            renderCheck: false
        });
    }
    confirmEdit(){
        var taskArray=this.state.currentTaskArray.slice();
        const arrayIndex=taskArray.length-1;
        window.$taskArray.splice(arrayIndex,1,this.state.newTask);
        this.setState({
            inputStatus: true,
            buttonStatus: false,
            renderCheck: true
        });
        console.log(window.$taskArray);
    }
    editTask(e){
        e.preventDefault();
        this.state.newTask=e.target.value;
    }
    render(){
        if(this.state.renderComponent){
            return(
                <div>
                    <input type="text" defaultValue={this.props.taskName} onChange={this.editTask} disabled={this.state.inputStatus} />
                    <button type="button" onClick={this.deleteClick} disabled={this.state.buttonStatus}><FontAwesomeIcon icon={faTrash} /></button>
                    <button type="button" onClick={this.editClick} disabled={this.state.buttonStatus}><FontAwesomeIcon icon={faPen} /></button>
                    <button type="button" onClick={this.confirmEdit} disabled={this.state.renderCheck}><FontAwesomeIcon icon={faCheck} /></button>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}

export default TaskList;
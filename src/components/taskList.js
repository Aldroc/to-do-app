import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

class TaskList extends Component{
    constructor(props){
        super(props);
        this.deleteClick=this.deleteClick.bind(this);
        this.editClick=this.editClick.bind(this);
        this.state={
            inputStatus: true,
            renderComponent: true,
            currentTaskArray: window.$taskArray.slice()
        }
    }
    deleteClick(){
    var taskArray=this.state.currentTaskArray.slice();
    const arrayIndex=taskArray.length-1;
    window.$taskArray.splice(arrayIndex,1);
    this.setState({ renderComponent: false });
    {console.log(window.$taskArray.length)}
    }
    editClick(){
        
    }
    render(){
        if(this.state.renderComponent){
            return(
                <div>
                    <input type="text" defaultValue={this.props.taskName} disabled={this.state.inputStatus} />
                    <button type="button"><FontAwesomeIcon icon={faTrash} onClick={this.deleteClick}/></button>
                    <button type="button" onClick={this.editClick}><FontAwesomeIcon icon={faPen} /></button>
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
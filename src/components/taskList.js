import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import RenderTaskList from './renderTaskList';

class TaskList extends Component{
    constructor(props){
        super(props);
        this.deleteClick=this.deleteClick.bind(this);
        this.editClick=this.editClick.bind(this);
        this.state={
            inputStatus: true,
            renderComponent: false,
            currentTaskArray: window.$taskArray.slice()
        }
    }
    deleteClick(){
        var newTaskArray=this.state.currentTaskArray.slice();
        console.log(newTaskArray.length);
        this.setState({
            renderComponent: true
        });
    }
    editClick(){
        
    }
    render(){
        return(
            <div>
                {this.state.renderComponent ? <RenderTaskList /> : null}
                {this.state.renderComponent ? this.setState({renderComponent: false}) : null}
                <input type="text" defaultValue={this.props.taskName} disabled={this.state.inputStatus} />
                <button type="button"><FontAwesomeIcon icon={faTrash} onClick={this.deleteClick}/></button>
                <button type="button" onClick={this.editClick}><FontAwesomeIcon icon={faPen} /></button>
            </div>
        );
    }
}

export default TaskList;
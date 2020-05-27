import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

class TaskList extends Component{
    constructor(props){
        super(props);
        this.state={
            status: 'false',

        }
    }
    render(){
        return(
            <div className="container">
                <input type="text" defaultValue={this.props.taskName} disabled={this.state.status} />
                <button type="button"><FontAwesomeIcon icon={faTrash} /></button>
                <button type="button"><FontAwesomeIcon icon={faPen} /></button>
            </div>
        );
    }
}

export default TaskList;
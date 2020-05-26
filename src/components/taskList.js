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
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <input type="text" defaultValue={this.props.taskName} disabled={this.state.status} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskList;
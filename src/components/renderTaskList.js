import React, { Component } from 'react';
import TaskList from './taskList'

class RenderTaskList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var currentTaskArray=window.$taskArray.slice();
        return(
            <div>
                {currentTaskArray.map(taskItem =>(
                    <TaskList taskName={taskItem} /> 
                ))}
            </div>
        );
    }
}

export default RenderTaskList;
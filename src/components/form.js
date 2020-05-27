import React, { Component } from 'react';
import TaskList from './taskList';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
            task: [
                
            ],
            renderComponent: 'false'
        }
    }
    setTask(e){
        e.preventDefault();
        window.$currentTask=e.target.value;
    }
    handleClick(){
        var newStateArray=this.state.task.slice();
        newStateArray.push(window.$currentTask);
        this.setState({
            task: newStateArray,
            renderComponent: 'true'
        });
    }
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-4">
                        {this.state.task.map(taskItem =>(
                            this.state.renderComponent ? <TaskList taskName={taskItem} /> : null
                        ))}
                        <form>
                            <input placeholder="Enter Task" type="text" id="taskInput" onChange={this.setTask}/>
                            <button type="button" onClick={this.handleClick.bind(this)}>Submit</button>
                        </form> 
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;
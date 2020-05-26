import React, { Component } from 'react';
import TaskList from './taskList';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
            task: '',
            renderComponent: 'false'
        }
    }
    setTask(e){
        e.preventDefault();
        window.$currentTask=e.target.value;
    }
    handleClick(){
        this.setState({
            task: window.$currentTask,
            renderComponent: 'true'
        });
    }
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-4">
                        {this.state.renderComponent ? <TaskList taskName={this.state.task} /> : null}
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
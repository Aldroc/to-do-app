import React, { Component } from 'react';
import RenderTaskList from './renderTaskList';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
            renderComponent: false
        }
    }
    setTask(e){
        e.preventDefault();
        window.$currentTask=e.target.value;
    }
    handleClick(){
        var newStateArray=window.$taskArray.slice();
        newStateArray.push(window.$currentTask);
        this.setState({
            renderComponent: true
        });
        window.$taskArray=newStateArray;
    }
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-4">
                        {this.state.renderComponent ? <RenderTaskList /> : null}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-4">    
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
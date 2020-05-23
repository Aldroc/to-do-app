import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
            task: ''
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6">
                        <form>
                            <input placeholder="Enter Task" type="text" />
                        </form> 
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;
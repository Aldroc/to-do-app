import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Jumbotron>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-2">
                           <h2>Tasks</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-4">
                            <h4>You currently have "0" tasks</h4>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default Header;
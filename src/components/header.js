import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            count: window.$taskArray.length
        }
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
                </div>
            </Jumbotron>
        );
    }
}

export default Header;
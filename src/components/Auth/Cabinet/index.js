import React, {Component} from 'react';
// import classnames from 'classnames';
//import axios from 'axios';

class UserCabinet extends Component {
    state = {
        name: ''
    }
    render() {
        return (
            <div className="container">
                <div className="inline">
                    <h3>{this.props.name}</h3>
                </div>
            </div>
        );
    }
}
 
export default UserCabinet;
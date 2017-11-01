import React, { Component } from 'react';
import './Home1.css';

export default class Home1 extends Component {
    render() {
        return (
            <div>
                <a href={process.env.REACT_APP_LOGIN}><button>Sign In</button></a>
            </div>
        )
    }
}
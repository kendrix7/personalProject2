import React, { Component } from 'react';
import './Landing.css';

export default class Home1 extends Component {
    render() {
        return (
            <div>
                <div className='landing_top_container'>
                    <div className='landing_title'>
                        It's never too early to start preparing for college.
                    </div>
                    <a href={process.env.REACT_APP_LOGIN}><button className='landing_sign_in_button'>Sign In / Register</button></a>
                </div>
            </div>
        )
    }
}
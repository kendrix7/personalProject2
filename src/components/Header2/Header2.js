import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header2.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    render() {
        return (
            <header className='header2_main_container'>
                <div className='header2_content'>
                    <Link className='logo_home_button_container_link' to='/home'>
                        <div className='logo_home_button'>
                            <div className='header2_logo_button_content'>CCP</div>
                            <div className='header2_logo_text'>Custom College Prep</div>
                        </div>
                    </Link>
                    <div className='links_container'>
                        <Link className='link' to='/home'>Home</Link>
                        <Link className='link' to='/about'>About</Link>
                        <Link className='link' to='/calendar'>Calendar</Link>
                        {/* <Link className='link' to='/cart'>Cart</Link> */}
                        <Link className='link' to='/contact'>Contact</Link>
                        {/* <Link className='link' to='/profile'>Profile</Link> */}
                        <a className='link' href={process.env.REACT_APP_LOGIN}>Sign In</a>
                    </div>
                </div>
            </header>
        )
    }
}
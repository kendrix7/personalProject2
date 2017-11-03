import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MDMenu from 'react-icons/lib/md/menu.js';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <header className='header_main_container'>
                <div className='header_content'>
                    <Link to='/home'>
                        <div className='logo_home_button'>
                            <div className='header_logo_button_content'>CCP</div>
                            <div className='header_logo_text'>Custom College Prep</div>
                        </div>
                    </Link>
                    <div className='hamburger_menu' onClick={this.handleToggle}>
                        <MDMenu size={50} />
                    </div>
                </div>
                <Drawer
                    docked={false}
                    openSecondary={true}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                    containerStyle={{
                        "backgroundColor": "#0b132b"
                    }}
                >
                    <Link to='/home'>
                        <MenuItem style={{ "color": "#fdfefd" }} onClick={this.handleClose}>Home</MenuItem>
                    </Link>
                    <Link to='/about'>
                        <MenuItem style={{ "color": "#fdfefd" }} onClick={this.handleClose}>About</MenuItem>
                    </Link>
                    <Link to='/calendar'>
                        <MenuItem style={{ "color": "#fdfefd" }} onClick={this.handleClose}>Calendar</MenuItem>
                    </Link>
                    <Link to='/cart'>
                        <MenuItem style={{ "color": "#fdfefd" }} onClick={this.handleClose}>Cart</MenuItem>
                    </Link>
                    <Link to='/contact'>
                        <MenuItem style={{ "color": "#fdfefd" }} onClick={this.handleClose}>Contact</MenuItem>
                    </Link>
                    <Link to='/profile'>
                        <MenuItem style={{ "color": "#fdfefd" }} onClick={this.handleClose}>Profile</MenuItem>
                    </Link>
                    <a href={process.env.REACT_APP_LOGIN}>
                        <MenuItem style={{ "color": "#fdfefd" }} onClick={this.handleClose}>Sign In</MenuItem>
                    </a>
                </Drawer>
            </header>
        )
    }
}
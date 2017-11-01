import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            
            <header id='mainHeader' className='header'>

                <div className='header_top'>
                    <div className='container'>
                        <ul id='top_navigation' class='header_top_nav nav justify-content-end'>
                            <li className='nav-item menu-item menu-log-in'>
                                <a href={process.env.REACT_APP_LOGIN}><button>Sign In</button></a>
                            </li>
                            <li className='nav-item menu-item menu-801-867-0109'>
                                <a href='tel:+18018670109'><button>801.867.0109</button></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <nav className='header_navbar navbar'>
                    <div className='container'>
                        <button className='header_toggler navbar-toggler offcanvas-toggle js-offcanvas-has-events' type='button' data-toggle='offcanvas' data-target='#mainNavigation' aria-controls='mainNavigation' aria-expanded='false' aria-label='Toggle navigation'>

                        </button>
                    </div>
                </nav>

            </header>

        )
    }
}
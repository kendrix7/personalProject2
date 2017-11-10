import React, { Component } from 'react';
import './Footer.css';
import fb_logo from '../../assets/fb_logo.svg';
import twitter_logo from '../../assets/twitter_logo.svg';
import linkedIn_logo from '../../assets/linkedIn_logo.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer_main_container'>
                <div className='footer_logo_container'>
                    <div className='logo_box'>CCP</div>
                </div>
                <div className='telephone_container'>
                    801.867.0109
                </div>
                <div className='email_container'>
                    mark.nielsen@customcollegeprep.com
                </div>
                <div className='social_media_container'>
                    <a href='http://facebook.com'>
                        <div className='facebook'>
                            <img src={fb_logo} alt='facebook logo' />
                        </div>
                    </a>
                    <a href='http://twitter.com'>
                        <div className='twitter'>
                            <img src={twitter_logo} alt='twitter logo' />
                        </div>
                    </a>
                    <a href='http://linkedIn.com'>
                        <div className='linkedIn'>
                            <img src={linkedIn_logo} alt='linkedIn logo' />
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
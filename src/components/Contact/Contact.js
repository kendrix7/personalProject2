import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className='contact_main_container'>
                
                <div className='contact_top_container'>
                    <div className='contact_top_inner_box'>
                        <h2>CONTACT</h2>
                        <div className='contact_top_text_box'>
                            <p className='contact_days'>MONDAY - FIRDAY</p><p>6pm - 8pm MST</p>
                        </div>
                        <div className='contact_top_text_box'>
                            <p className='contact_days'>SATURDAY - SUNDAY</p><p>9am - 12pm MST</p>
                        </div>
                        <div className='contact_top_phone'>1 (801) 867-0109</div>
                        <div className='contact_top_underline'></div>
                    </div>
                </div>
                
            </div>
        )
    }
}
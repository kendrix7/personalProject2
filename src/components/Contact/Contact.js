import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentsFirstName: '',
            parentsLastName: '',
            parentsEmail: '',
            parentsPhone: '',
            studentsName: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, key) {
        this.setState({[key]: event.target.value}, () => console.log(this.state));
    }

    handleSubmit() {
        const body = {
            parentsFirstName: this.state.parentsFirstName,
            parentsLastName: this.state.parentsLastName,
            parentsEmail: this.state.parentsEmail,
            parentsPhone: this.state.parentsPhone,
            studentsName: this.state.studentsName,
            message: this.state.message
        }
        axios.post('/message/submit', body)
        alert('Thank you! Your message has been sent.')
    }

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

                <form 
                    onSubmit={this.handleSubmit}
                    className='contact_form_container'>
                    <label className='contact_form_label'>
                        Parent's First Name
                        <input 
                            type='text' 
                            value={this.state.parentsFirstName} 
                            onChange={(e) => this.handleChange(e, "parentsFirstName")}
                            className='contact_form_input_field' />
                    </label>
                    <label className='contact_form_label'>
                        Parent's Last Name
                        <input 
                            type='text' 
                            value={this.state.parentsLastName} 
                            onChange={(e) => this.handleChange(e, "parentsLastName")}
                            className='contact_form_input_field' />
                    </label>
                    <label className='contact_form_label'>
                        Parent's Email
                        <input 
                            type='text' 
                            value={this.state.parentsEmail} 
                            onChange={(e) => this.handleChange(e, "parentsEmail")}
                            className='contact_form_input_field' />
                    </label>
                    <label className='contact_form_label'>
                        Parent's Phone
                        <input 
                            type='text' 
                            value={this.state.parentsPhone} 
                            onChange={(e) => this.handleChange(e, "parentsPhone")}
                            className='contact_form_input_field' />
                    </label>
                    <label className='contact_form_label'>
                        Student's Name
                        <input 
                            type='text' 
                            value={this.state.studentName} 
                            onChange={(e) => this.handleChange(e, "studentsName")}
                            className='contact_form_input_field' />
                    </label>
                    <label className='contact_form_label'>
                        Message
                        <input 
                            type='text' 
                            value={this.state.message} 
                            onChange={(e) => this.handleChange(e, "message")}
                            className='contact_form_input_field'/>
                    </label>
                    <input 
                        type='submit' 
                        value='Send me a message!'
                        id='message_submit_button'/>
                </form>
                
            </div>
        )
    }
}
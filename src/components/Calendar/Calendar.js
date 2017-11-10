import React, { Component } from 'react';
import axios from 'axios';
import './Calendar.css';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: '',
            day: '',
            time: '',
            complete: false,
            day_results: [],
            time_results: []
        };

        this.handleMonthSelect = this.handleMonthSelect.bind(this);
        this.handleDaySelect = this.handleDaySelect.bind(this);
        this.handleTimeSelect = this.handleTimeSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMonthSelect(event) {
        this.setState({ month: event.target.value });
        axios.get(`/calendar/month/${event.target.value}`)
            .then((response) => {
                this.setState({ day_results: response.data })
                console.log(response)
            })
    }

    handleDaySelect(event) {
        this.setState({ day: event.target.value });
        axios.get(`/calendar/day/${event.target.value}/${this.state.month}`)
            .then((response) => {
                this.setState({ time_results: response.data })
                console.log(response)
            })
    }

    handleTimeSelect(event) {
        this.setState({ time: event.target.value });
        this.setState({ complete: true });
    }

    handleSubmit(event) {
        const time_id = this.state.time_results.find((obj) => {
            return obj.time === Number(this.state.time);
        })
        console.log(time_id);
        axios.post(`/calendar/submit`, {
            month: this.state.month,
            day: this.state.day,
            time: this.state.time,
            time_id: time_id.time_id
        }).then((response) => console.log(response))
        alert('Your time has been booked.')
        event.preventDefault();
    }

    render() {
        console.log(this.state)

        const day = this.state.month ? this.state.day_results.map((obj, i) => {
            return <option key={i}>{obj.day}</option>
        }) : null;

        const time = this.state.day ? this.state.time_results.map((obj, i) => {
            return <option key={i}>{obj.time}</option>
        }) : null;

        const submit_button = this.state.complete ? 
            <button onClick={this.handleSubmit}>button

            </button> :
             null;

        return (
            <div>

                <form>
                    <label>
                        <select
                            value={this.state.month}
                            onChange={this.handleMonthSelect}
                            className='calendar_select_month'>
                            <option>Month</option>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                        </select>
                    </label>
                    <label>
                        <select onChange={this.handleDaySelect}>
                            <option>Day</option>
                            {day}
                        </select>
                    </label>
                    <label>
                        <select onChange={this.handleTimeSelect}>
                            <option>Time</option>
                            {time}
                        </select>
                    </label>
                    {submit_button}
                </form>
            </div>
        )
    }
}
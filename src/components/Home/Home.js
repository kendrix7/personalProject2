import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='home_main_container'>

                <div className='home_top_container'>
                    <div className='home_top_text'>
                        <div className='home_top_text_college'>
                            College Prep.
                        </div>
                        <div className='home_top_text_smarter'>
                            Smarter.
                        </div>
                    </div>
                    <Link to='/calendar'>
                        <button className='home_top_button'>Book A Time!</button>
                    </Link>
                </div>

                <div className='home_about_container'>
                    <div className='home_about_text'>
                        <h2>About My Services</h2>
                        <p>
                            My mission is to provide accurate, relevent advice, guidance, and preparation to students and parents of students trying to prepare for college.
                        </p>
                        <p>
                            I was not prepared for college in the 21st century. Most students aren't. We are being prepared by teachers and parents who never attended college in the 21st century and who never faced the challenges of a modern student.
                        </p>
                        <p>
                            For instance, many parents believe it's possible to work your way through college they way they did themselves. That simply isn't true anymore. The average college graduate in 1985 graduated with $5,500 in loans (adjusted). Today it's over $30,000. That's almost six times as much debt. Scholarships are more important than ever.
                        </p>
                        <p>
                            The ACT or SAT are integral parts of getting a scholarship to the university of your choice. Anyone can improve their score with the right coaching. Let me show you!
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}
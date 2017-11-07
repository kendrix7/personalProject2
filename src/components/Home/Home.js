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
                            My mission is to provide accurate, relevent advice, guidance, and preparation to students preparing for college and their parents.
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

                <div className='home_pricing_container'>
                    <div className='home_pricing_inner_box'>
                        <h2 className='home_pricing_private'>PRIVATE</h2>
                        <h2 className='home_pricing_tutoring'>TUTORING</h2>
                        <p>One on one focus customized to the needs of your student. Whether it's geometry or the science section of the ACT, this is the best way to improve test scores. </p>
                        <p>Available for Test Preparation or Acadamic Subjects.</p>
                        <div className='home_pricing_filler'></div>
                        <div className='home_pricing_price_box'>
                            <div className='sixty'>$60</div>
                            <div className='perHour'>/ per hour</div>
                        </div>
                        <Link to='/calendar'><button className='home_pricing_button'>Book A Time!</button></Link>
                    </div>
                </div>

                <div className='home_pricing_container'>
                    <div className='home_pricing_inner_box'>
                        <h2 className='home_pricing_private'>SEMI-PRIVATE</h2>
                        <h2 className='home_pricing_tutoring'>TUTORING</h2>
                        <p>You student will gain the test taking skills they need in a small group of two to four students. Great value for friends taking the ACT or SAT on the same day. </p>
                        <p>Available for Test Preparation.</p>
                        <div className='home_pricing_filler'></div>
                        <div className='home_pricing_price_box'>
                            <div className='sixty'>$30</div>
                            <div className='perHour'>/ per hour</div>
                        </div>
                        <Link to='/calendar'><button className='home_pricing_button'>Book A Time!</button></Link>
                    </div>
                </div>

            </div>
        )
    }
}
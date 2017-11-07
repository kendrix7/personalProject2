import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div about_main_container>

                <div className='about_top_container'>
                    <h1 className='about_top_how'>HOW I HELP YOU GET RESULTS</h1>
                    <p className='about_top_first_p'>I have provided tutoring to hundreds of students in Math, Science, and the ACT over the last ten years. I've learned that the students and the teachers attitudes towards these subjects is most the battle.</p>
                    <p>Does your student hate math? Do you? I empathize. As a middle school student in Sandy, Utah I hated geometry and thought I wasn't good at it. It took me a long time to figure out that I loved geometry and that I had a talent for it. So what was the problem when I was younger? My teacher hated math. When I was a middle school teacher I encountered students with math anxiety every year. Let me help your student discover that math isn't scary and that anyone can do it. </p>
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

            </div>
        )
    }
}
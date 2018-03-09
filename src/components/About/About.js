import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className='about_main_container'>

                <div className='about_top_container'>
                    <h1 className='about_top_how'>HOW I HELP YOUR STUDENT GET RESULTS</h1>
                    <p className='about_top_first_p'>The ACT is a weird test. It has to standardize a set of questions to an entire country of students with different skill levels. For example, it wouldn't be "fair" to put calculus on the math section of the ACT because not every student has taken calculus in high school. To even the playing field, the ACT asks questions in intentionally strange ways. Recognizing how the ACT asks questions and having a strategy to answer those weird questions is key to getting a 36 on any section of the test.</p>
                    <p>I have scored a 36 on every section of the ACT and an 800 on both sections of the SAT. I am not a genius. There is no reason why any reasonable intelligent student couldn't do the same. It takes the desire, an understanding of the tests, and dedication to do the work. If you put in the time, with the correct direction, really focusing on improvement, your student could do it too. Even if your goal isn't a perfect score, any student can improve his or her score. You should never take the ACT or SAT only once (unlesss you scored perfectly the first time). Not only is there no downside to taking it again, but improvement is almost guaranteed with only a few tips and tricks. A couple points on the ACT's overall score could be the difference in getting a scholarship worth thousands of dollars. Let me help your student get that scholarship.</p>
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
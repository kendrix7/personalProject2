import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home1 from './components/Home1/Home1';
import Home2 from './components/Home2/Home2';
import Calendar from './components/Calendar/Calendar';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Edit from './components/Edit/Edit';

export default (
    <Switch>
        <Route path='/home2' component={Home2} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/about' component={About} />
        <Route path='/cart' component={Cart} />
        <Route path='/contact' component={Contact} />
        <Route path='/profile' component={Profile} />
        <Route path='/edit' component={Edit} />
        <Route path='/' component={Home1} exact />
    </Switch>
)
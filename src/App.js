import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header/Header';
import router from './router.js';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <MuiThemeProvider>
          <div className='entire_app'>
            <Header/>
            {router}
            <Footer/>
          </div>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default App;

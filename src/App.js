import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header/Header';
import Header2 from './components/Header2/Header2';
import router from './router.js';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    let width = window.innerWidth;

    if (width < 1024) {
      return (
        <HashRouter>
          <MuiThemeProvider>
            <div className='entire_app'>
              <Header />
              {router}
              <Footer />
            </div>
          </MuiThemeProvider>
        </HashRouter>
      );

    } else {
      return (
        <HashRouter>
          <div className='entire_app'>
            <Header2 />
            {router}
            <Footer />
          </div>
        </HashRouter>
      )
    }
  }
}

export default App;

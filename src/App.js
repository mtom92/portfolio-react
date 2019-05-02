import React , {Component} from 'react';
import './App.css';
import Header from './navigation/Header'
import Content from './navigation/Content'
import Nav from './navigation/Nav'

import {BrowserRouter as Router, Route , Link } from 'react-router-dom'

class App extends Component {
  render(){

    
    return (
      <div>
        <Header />
          <Router>
            <div>
              <Nav />
              <Content />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>                            
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>    
    )
  }
}

export default App;

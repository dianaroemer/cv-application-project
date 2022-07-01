import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import FormContainer from './Components/FormContainer';
import PreviewContainer from './Components/PreviewContainer';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="AppContainer" style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'blue', borderWidth: 10}}>
        <h2>I am App.js, my parent is AppContainer. Would you like to develop an App?</h2>
        <Navbar/>
        <div className='content' >
          <FormContainer/>
          <PreviewContainer/>
        </div>
      </div>
    )
  }

}


export default App;

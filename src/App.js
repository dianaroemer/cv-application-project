import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import FormContainer from './Components/FormContainer';
import PreviewContainer from './Components/PreviewContainer';



class App extends Component {
  constructor(props) {
    super(props);

    this.updateInputField = this.updateInputField.bind(this);

    this.state = {
      personalInformation: {
        name : '',
        title: '',
        photoURL: '',
        address: '',
        phone: '',
        email: '',
        linkedIn: '',
        gitHub: '',
        type: 'personalInformation'
      },
    

    };
  }

  updateInputField(e, targetParent, targetField) {
    // console.log(`I am updateInputField, here are my passed args`);
    // console.log(e)
    // console.log(e.target.value);
    // console.log(targetParent);
    // console.log(targetField);
    // console.log(`-------------------------------`)

    this.setState({
        // This setState works by passing around the targetParent.type and the targetField. targetParent.type is included in each userData object as a string description of each object's name, while targetField is manually set when passing the onChange function, as it is assigned to its specific field and value. There may be a way to tie a React elements value prop more literally, but this works quickly with string evaluation into a computer property name that only overrides the one value that's changing.
      [targetParent.type] : {
        ...this.state[targetParent.type],
        [targetField] : e.target.value
      }
    })
    // console.log(this.state);
  }

  render() {
    return (
      <div className="AppContainer" style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'blue', borderWidth: 10}}>
        <h2>I am App.js, my parent is AppContainer. Would you like to develop an App?</h2>
        <Navbar/>
        <div className='content' >
          <FormContainer 
            updateInputField={this.updateInputField}
            appState={this.state}/>
          <PreviewContainer appState={this.state}/>
        </div>
      </div>
    )
  }

}


export default App;

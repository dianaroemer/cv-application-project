// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import uniqid from "uniqid";
import Navbar from './Components/Navbar';
import FormContainer from './Components/FormContainer';
import PreviewContainer from './Components/PreviewContainer';



class App extends Component {
  constructor(props) {
    super(props);

    this.updateInputField = this.updateInputField.bind(this);
    this.createExperience = this.createExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);

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
      workExperience: {
        type: 'workExperience',
        workExperienceArr: [
          {
            position: '1',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            descriptionOfDuties: '',
            key: uniqid(),
            type: 'workExperience'
          }, 
          {
            position: '2',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            descriptionOfDuties: '',
            key: uniqid(),
            type: 'workExperience'
          }
        ], 
        
      },
      educationalExperience: {
        type: 'educationalExperience',
        educationalExperienceArr: [ {
          type: 'educationalExperience',
          institution: '1',
          degree: '',
          startDate: '',
          endDate:'',
          details: '',
          key: uniqid(),
        }, 
        {
        type: 'educationalExperience',
        institution: '2',
        degree: '',
        startDate: '',
        endDate:'',
        details: '',
        key: uniqid(),}
        ]
      }
    }
  }

  updateInputField(e, targetParent, targetField) {
    // console.log(`I am updateInputField, here are my passed args`);
    // console.log(e)
    // console.log(e.target.value);
    // console.log(targetParent);
    // console.log(targetField);
    // console.log(`-------------------------------`)

    if(targetParent.type === 'personalInformation') {
      this.setState({
        // This setState works by passing around the targetParent.type and the targetField. targetParent.type is included in each userData object as a string description of each parent object's name, while targetField is manually set when passing the onChange function, as it is assigned to its specific field and value. There may be a way to tie a React elements value prop more literally, but this works quickly with string evaluation into a computed property name that only overrides the one value that is being targeted.
        [targetParent.type] : {
          ...this.state[targetParent.type],
          [targetField] : e.target.value
        }
      })
    } else if(targetParent.type === 'workExperience' || targetParent.type === `educationalExperience`) {
      // This branch of setState handles modular components, like workExperience and educationalExperience. Because there can be a variable number of workExperience and EducationalExperience, the state management parses away the relevant input, targetField, and parent information to work with any given input that follows App.js's state structure.
      // console.log(targetParent, targetField, e.target.value, targetParent.type);
      this.setState({
        [targetParent.type]: {
          type: targetParent.type,
          [targetParent.type + 'Arr']: this.state[targetParent.type][targetParent.type + 'Arr'].map( element => {
            if(element === targetParent) {
              return {
                ...targetParent,
                [targetField]: e.target.value,
              }
            }
            return element;
          }),
        }
      })
    }  

    // console.log(this.state.workExperience.workExperienceArr[0]);
  }

  createExperience(e, targetType) {
    e.preventDefault();
    // console.log(`You're trying to create a new work Experience or Education Experience`);
    // console.log(targetType)

    if(targetType === 'workExperience') {
      this.setState({
        [targetType]: {
          type: targetType,
          [targetType + 'Arr']: this.state[targetType][targetType + 'Arr'].concat([{
              position: '3',
              company: '',
              location: '',
              startDate: '',
              endDate: '',
              descriptionOfDuties: '',
              key: uniqid(),
              type: 'workExperience'
            }, 
          ])
        }
      })
    } else if( targetType === 'educationalExperience') {
      // console.log('here');
      this.setState({
        [targetType]: {
          type: targetType,
          [targetType + 'Arr']: this.state[targetType][targetType + 'Arr'].concat([{
              type: 'educationalExperience',
              institution: '3',
              degree: '',
              startDate: '',
              endDate: '',
              details: '',
              key: uniqid(),
            }, 
          ])
        }
      })
    }
    // console.log(this.state.educationalExperience)
  }

  deleteExperience(e, targetElement) {
    e.preventDefault()
    // console.log(`You're trying to delete a work Experience form or Education Experience form`)
    // console.log(targetElement)
    // console.log(this.state[targetElement.type])
    // console.log(this.state[targetElement.type][targetElement.type + 'Arr'])
    // console.log(targetElement.type)
    // console.log(this.state.workExperience)
    this.setState({
      [targetElement.type]: {
        type: targetElement.type,
        [targetElement.type + 'Arr']: this.state[targetElement.type][targetElement.type + 'Arr'].filter(element => element !== targetElement),
      }
    })
  }

  render() {
    return (
      <div className="AppContainer" style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'blue', borderWidth: 10}}>
        <h2>I am App.js, my parent is AppContainer. Would you like to develop an App?</h2>
        <Navbar/>
        <div className='content' >
          <FormContainer 
            updateInputField={this.updateInputField}
            createExperience={this.createExperience}
            deleteExperience={this.deleteExperience}
            appState={this.state}/>
          <PreviewContainer appState={this.state}/>
        </div>
      </div>
    )
  }

}


export default App;

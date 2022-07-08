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
    this.setSampleState = this.setSampleState.bind(this);
    this.toggleSkillEdit = this.toggleSkillEdit.bind(this);

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
        workExperienceArr: [{
          position: 'Stormtrooper, 2nd Battalion',
          company: '',
          location: '',
          startDate: '',
          endDate: '',
          descriptionOfDuties: '',
          key: uniqid(),
          type: 'workExperience'
          }, 
        ], 
        
      },
      skillArr: [
        {skill: 'TESTFOOBARSKILL', key: uniqid(), type: 'skill', edit: true},
      ],
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
        ]
      }
    }
  }

  updateInputField(e, targetParent, targetField) {
    e.preventDefault()
    console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
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
    } else if (targetParent.type === 'skill') {
      // console.log('Editing a skill value');
      this.setState({
        skillArr: this.state.skillArr.map(element => {
          if(element === targetField){
            return {
              ...targetField,
              skill: e.target.value,
            }
          } else {
            return element;
          }
        })
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
              position: 'Sample',
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
              institution: '',
              degree: '',
              startDate: '',
              endDate: '',
              details: '',
              key: uniqid(),
            }, 
          ])
        }
      })
    } else if(targetType === 'skill') {
      // console.log('here');
      this.setState({
        skillArr: this.state.skillArr.concat({
          type: 'skill',
          key: uniqid(),
          skill: 'I AM A NEW SKILL, FEAR ME',
          edit: false,
        })
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

    // This if statement is my second attempt at re-writing variable skill elements, instead of containing the array inside an object, I'm just keeping the array as the state property itself, without a shell object that only contains type. 
    if(targetElement.type === 'skill'){
      this.setState({
        skillArr: this.state.skillArr.filter(element => element !== targetElement)
      })
    } else { // This else statement is used for deleting elements in the format of workExperience and educationExperience
      this.setState({
        [targetElement.type]: {
          type: targetElement.type,
          [targetElement.type + 'Arr']: this.state[targetElement.type][targetElement.type + 'Arr'].filter(element => element !== targetElement),
        }
      })
    }

  }

  setSampleState(e) {
    e.preventDefault();
    this.setState({
      personalInformation: {
        name : 'Dominic "D" Roemer',
        title: 'Front-end Developer',
        photoURL: '',
        address: '9337 Stargaze Ave, San Diego, CA',
        phone: 'XXX-XXX-9407',
        email: 'dominicroemer@gmail.com',
        linkedIn: 'linkedin.com/in/dominicroemer',
        gitHub: 'github.com/dominicroemer',
        type: 'personalInformation'
      },
      workExperience: {
        type: 'workExperience',
        workExperienceArr: [
          { position: 'Front-end Developer',
            company: 'Self Employed',
            location: 'San Diego, California',
            startDate: '2021-05',
            endDate: 'Present',
            descriptionOfDuties: 'Entirely self-taught from web resources (TheOdinProject && StackOverflow). Established strong fundamental Javascript knowledge for easy integration into existing work-flows',
            key: uniqid(),
            type: 'workExperience'
          }, {
            position: 'Executive Producer',
            company: 'The Esports Channel',
            location: 'Miami, Florida',
            startDate: '2019-04',
            endDate: '2019-08',
            descriptionOfDuties: 'Acted as on-air talent, writer, editor, graphics, and more for esports startup. Used extensive knowledge of broadcast to level-up existing broadcast from a once weekly broadcast to a daily show',
            key: uniqid(),
            type: 'workExperience'
          }, {
            position: 'Esports Commentator',
            company: 'Riot Games',
            location: 'Los Angeles, USA  &&  Sydney, AUS  &&  Shanghai, CN',
            startDate: '2015-01',
            endDate: '2018-12',
            descriptionOfDuties: 'On-air commentator for LCS, LPL, and Collegiate competitive esports broadcasts. Required in depth knowledge of game, mechanics, players, competitive narrative, and broadcast fundamentals, to be communicated in on-the-fly dictation',
            key: uniqid(),
            type: 'workExperience'
          },
        ], 
        
      }, 
      skillArr: [
        {skill: 'Javascript, HTML, CSS', key: uniqid(), type: 'skill', edit: false},
    

      ],
      educationalExperience: {
        type: 'educationalExperience',
        educationalExperienceArr: [ {
          type: 'educationalExperience',
          institution: 'University of California at San Diego',
          degree: 'Computer Science, B.S.',
          startDate: '2010-09',
          endDate:'2014-12',
          details: 'Studied Bioenginering for 1.5 years, Comp Sci for 2 years. Left before graduating to pursue esports commentary with Riot Games in late 2014.',
          key: uniqid(),
        }, 
        ]
      }
    });
  }

  toggleSkillEdit(e, targetSkill) {
    e.preventDefault();

    this.setState({
      skillArr: this.state.skillArr.map(element => {
        if(element===targetSkill){
          return {...targetSkill,
          edit: !targetSkill.edit}
        } else {
          return element;
        }
      })
    })
  };

  render() {
    return (
      <div className="AppContainer" style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'blue', borderWidth: 10}}>
        {/* <h2>I am App.js, my parent is AppContainer. Would you like to develop an App?</h2> */}
        <Navbar/>
        <div className='content' >
          <FormContainer 
            updateInputField={this.updateInputField}
            createExperience={this.createExperience}
            deleteExperience={this.deleteExperience}
            setSampleState={this.setSampleState}
            toggleSkillEdit={this.toggleSkillEdit}
            appState={this.state}/>
          <PreviewContainer appState={this.state} className='previewContainer'/>
        </div>
      </div>
    )
  }

}


export default App;

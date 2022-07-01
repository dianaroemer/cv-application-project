import React, { Component } from 'react'

class WorkExperienceForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='workExperienceField' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'navy', borderWidth: 10}}>
                <h3>I am workExperienceForm.js. I take all of the work experience fields and keep them together! I am one wrapper field with an add button, and an interating subcomponent for variable numbers of workExperienceField</h3>
                <WorkExperienceSlot style={{borderStyle: 'dashed', borderRadius: 2, borderColor: 'maroon', borderWidth: 10}}/>
                <p></p>
                <WorkExperienceSlot style={{borderStyle: 'dashed', borderRadius: 2, borderColor: 'maroon', borderWidth: 10}}/>
            
            <p></p>
            <button type="submit" onClick={e => e.preventDefault()}>Add More Work Experience</button>
            <p></p>
        </div>
        )
    }
}

class WorkExperienceSlot extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className='workExperienceSlot' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'magenta', borderWidth: 10}}>
                <p>I am an individual WorkExperienceSlot. There can be several or none of me, and are determined variably by state management in app!</p>
                <div className='positionFieldContainer'>
                    Position: <input className="inputField" type="text" placeholder='Stormtrooper, 2nd Battalion'></input>
                </div>
                <div className='companyFieldContainer'>
                    Company: <input className="inputField" type="text" placeholder='The Empire, LLC'>
                    </input>
                </div>
                <div className='locationFieldContainer'>
                    Location: <input className="inputField" type="text" placeholder='Star, Death, The'></input>
                </div>
                <div className='startDateFieldContainer'>
                    Start Date: <input className="inputField" type="month" value='2015-01'></input>
                </div>
                <div className='endDateFieldContainer'>
                    Start Date: <input className="inputField" type="month" value='2019-01'></input>
                </div>

                <div className='descriptionFieldContainer'>
                    Description of Duties: <textarea className='inputField' placeholder='Kept workspace free of filth Rebel scum, organized weekly Stormtrooper Socials'></textarea>
                </div>

                <button type="button"> Delete this Entry </button>
                <p></p>
            </form>
        )
    }

}

export default WorkExperienceForm;

/* 
--- Work Experience(VARIABLE, ADD AND DELETE THESE FORM FIELDS) ---
Position:
Company:
City:
Start Date:
End Date:? (maybe set this is a duration sort of thing?)
Short description:
*/
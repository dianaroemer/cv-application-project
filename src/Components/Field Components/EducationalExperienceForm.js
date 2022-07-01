import React, { Component } from 'react'

class EducationalExperienceForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='educationExperienceField' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'brown', borderWidth: 10}}>
                <h3>I am EducationalExperienceForm.js. I take all of the educational experience fields and keep them together! I am one wrapper field with an add button, and an interating subcomponent for variable numbers of educationExperienceField</h3>

                <EducationExperienceSlot style={{borderStyle: 'dashed', borderRadius: 2, borderColor: 'maroon', borderWidth: 10}}/>
                <EducationExperienceSlot style={{borderStyle: 'dashed', borderRadius: 2, borderColor: 'maroon', borderWidth: 10}}/>
            
            <p></p>
            <button type="submit" onClick={e => e.preventDefault()}>Add More Educational Experience</button>
            <p></p>
        </div>
        )
    }
}

class EducationExperienceSlot extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className='educationExperienceSlot' style={{borderStyle: 'dotted', borderRadius: 2, borderColor: 'aqua', borderWidth: 10}}>
                <p>I am an individual EducationExperienceSlot. There can be several or none of me, and are determined variably by state management in app!</p>


                <div className='institutionFieldContainer'>
                    Institution: <input className="inputField" type="text" placeholder='Hogwarts School of Witchcraft and Wizardry'></input>
                </div>
                <div className='degreeFieldContainer'>
                    Degree: <input className="inputField" type="text" placeholder='Master of The Dark Arts'>
                    </input>
                </div>
                <div className='startDateFieldContainer'>
                    Start Date: <input className="inputField" type="month" value='2015-01'></input>
                </div>
                <div className='endDateFieldContainer'>
                    End Date: <input className="inputField" type="month" value='2019-01'></input>
                </div>

                <div className='detailsFieldContainer'>
                    Additional Details: <textarea className='inputField' placeholder='First Hufflepuff to graduate in The Dark Arts'></textarea>
                </div>
                <button type="button"> Delete this Entry </button>
                <p></p>
            </form>
        )
    }

}

export default EducationalExperienceForm;




/*
--- Education (VARIABLE, ADD AND DELETE THESE FORM FIELDS) ---
Institution:
Degree: (Or degree progress)
Subject:
Start Date:
End Date: ?(again, looking at duration to replace these two dates)
*/
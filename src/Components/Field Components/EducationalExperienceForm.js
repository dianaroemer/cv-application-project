import React, { Component } from 'react'

class EducationalExperienceForm extends Component {
    // constructor(props) {
        // super(props);
    // }

    render() {

        const {educationalExperienceArr, updateInputField, createExperience, deleteExperience, elementType} = this.props;
        let rows =[];

        educationalExperienceArr.forEach(element => {
            // console.log(updateInputField);
            rows.push(
                <EducationalExperienceSlot 
                    educationalExperience={element}
                    key={element.key}
                    updateInputField={updateInputField}
                    deleteExperience={deleteExperience}/>
            )
        });

        return (
            <div className='educationExperienceField' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'brown', borderWidth: 10}}>
                <h3>Educational Experience</h3>

                {/* <EducationalExperienceSlot style={{borderStyle: 'dashed', borderRadius: 2, borderColor: 'maroon', borderWidth: 10}}/> */}
                {/* <EducationalExperienceSlot style={{borderStyle: 'dashed', borderRadius: 2, borderColor: 'maroon', borderWidth: 10}}/> */}
                {rows}
            
            <p></p>
            <button type="submit" onClick={e => createExperience(e,elementType)} id='educationAddButton'>Add Educational Experience</button>
            <p></p>
        </div>
        )
    }
}

class EducationalExperienceSlot extends Component {

    // constructor(props) {
        // super(props);
    // }

    render() {

        const {educationalExperience, updateInputField, deleteExperience} = this.props;

        return (
            <form className='educationExperienceSlot' style={{borderStyle: 'dashed', borderRadius: 2, borderColor: 'black', borderWidth: 3}}>

                <div className='institutionFieldContainer'>
                    Institution: <input className="inputField" type="text" placeholder='Hogwarts School of Witchcraft and Wizardry' onChange={e => updateInputField(e, educationalExperience, 'institution')} value={educationalExperience.institution}></input>
                </div>
                <div className='degreeFieldContainer'>
                    Degree: <input className="inputField" type="text" placeholder='Master of The Dark Arts' onChange={e => updateInputField(e, educationalExperience, 'degree')} value={educationalExperience.degree}>
                    </input>
                </div>
                <div className='startDateFieldContainer'>
                    Start Date: <input className="inputField" type="month"   onChange={e => updateInputField(e, educationalExperience, 'startDate')} value={educationalExperience.startDate}></input>
                </div>
                <div className='endDateFieldContainer'>
                    End Date: <input className="inputField" type="month"  onChange={e => updateInputField(e, educationalExperience, 'endDate')} value={educationalExperience.endDate}></input>
                </div>

                <div className='detailsFieldContainer'>
                    Additional Details: <textarea className='inputField' placeholder='First Hufflepuff to graduate in The Dark Arts' onChange={e => updateInputField(e, educationalExperience, 'details')} value={educationalExperience.details}></textarea>
                </div>
                <button type="button" onClick={e => deleteExperience(e, educationalExperience)}> Delete this Entry </button>
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
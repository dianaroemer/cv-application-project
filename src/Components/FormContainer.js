import React, { Component } from 'react'
// import FormElement from './FormElement';
import PersonalInformationForm from './Field Components/PersonalInformationForm';
import WorkExperienceForm from './Field Components/WorkExperienceForm'
import EducationalExperienceForm from './Field Components/EducationalExperienceForm';


class FormContainer extends Component {
    // constructor(props) {
        // super(props);
    // }

    render() {
        const { updateInputField, appState, createExperience, deleteExperience, setSampleState } = this.props;


        return (
            <div className='FormContainer' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'green', borderWidth: 10}}>
                <h3>I am FormContainer.js. I contain forms. Let's put something together</h3>
                <button type="submit" onClick={setSampleState} className='sampleStateButton'>Generate Sample CV</button>
                <PersonalInformationForm 
                    updateInputField={updateInputField}
                    personalInformation={appState.personalInformation}/>
                <WorkExperienceForm workExperienceArr={appState.workExperience.workExperienceArr}
                    elementType={appState.workExperience.type}
                    updateInputField={updateInputField}
                    createExperience={createExperience}
                    deleteExperience={deleteExperience}/>
                <EducationalExperienceForm
                    educationalExperienceArr={appState.educationalExperience.educationalExperienceArr}
                    elementType={appState.educationalExperience.type}
                    updateInputField={updateInputField}
                    createExperience={createExperience}
                    deleteExperience={deleteExperience}/>

                    {/* <FormElement/> */}
                {/* <FormElement/> */}
            </div>
        )
    }
}

export default FormContainer;
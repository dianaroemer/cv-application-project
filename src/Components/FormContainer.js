import React, { Component } from 'react'
import FormElement from './FormElement';
import PreviewContainer from './PreviewContainer';
import PersonalInformationForm from './Field Components/PersonalInformationForm';


class FormContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='FormContainer' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'green', borderWidth: 10}}>
                <h3>I am FormContainer.js. I contain forms. Let's put something together</h3>
                <PersonalInformationForm/>
                <FormElement/>
                <FormElement/>
                <p>-----------------</p>
                <PreviewContainer />
            </div>
        )
    }
}

export default FormContainer;
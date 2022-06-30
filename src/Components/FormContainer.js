import React, { Component } from 'react'
import FormElement from './FormElement';

class FormContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='FormContainer' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'green', borderWidth: 5}}>
                <h3>I am FormContainer.js. I contain forms. Let's put something together</h3>
                <FormElement/>
                <FormElement/>
            </div>
        )
    }
}

export default FormContainer;
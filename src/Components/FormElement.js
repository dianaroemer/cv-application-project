import React, { Component } from 'react'
import './Styling/FormElementStyle.css'

class FormElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <form className='formElement' style={{borderStyle: 'dotted', borderRadius: 2, borderWidth: 10}}>
                <h4>I am FormElement.js. I contain an individual Form. </h4>
                <input className="inputField" type="text" placeholder='Stuff goes here'></input>
                <p></p>
                <input className="inputField" type="text" placeholder='I am a second input field'></input>
                <p></p>
                <button type="submit" onClick={e => e.preventDefault()}>Button</button>
                <p></p>
            </form>
        )
    }
}

export default FormElement;

/*

--- Personal Information ---
First Name: 
Last Name:
Title:
Photo?:
Address:
Phone Number:
Email:
LinkedIn:
Github:
Description/Short Bio:

--- Work Experience(VARIABLE, ADD AND DELETE THESE FORM FIELDS) ---
Position:
Company:
City:
Start Date:
End Date:? (maybe set this is a duration sort of thing?)
Short description:

--- Education (VARIABLE, ADD AND DELETE THESE FORM FIELDS) ---
Institution:
Degree: (Or degree progress)
Subject:
Start Date:
End Date: ?(again, looking at duration to replace these two dates)

--- Skills ---
Slap some skills in here: 

Generate PDF
Load Example
Reset



*/
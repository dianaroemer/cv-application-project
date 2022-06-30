import React, { Component } from 'react'
import './Styling/FormElementStyle.css'

class FormElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <form className='formElement' style={{borderStyle: 'solid', borderRadius: 2, borderWidth: 5}}>
                <h4>I am Element.js. I contain an individual Form. </h4>
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
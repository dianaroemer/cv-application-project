import React, { Component } from 'react'

class PersonalInformationForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='personalInformationForm' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'purple', borderWidth: 10}}>
                <h3>I am personalInformationForm.js. I take all of the personal information fields and keep them in one place!</h3>
                <div className='nameFieldContainer'>
                    Name: <input className="inputField" type="text" placeholder='Ferris Bueller'></input>
                </div>
                <div className='titleFieldContainer'>
                    Title: <input className="inputField" type="text" placeholder='Front-end Developer'>
                    </input>
                </div>
                <div className='photoFieldContainer'>
                    Photo URL: <input className="inputField" type="url" placeholder='ttps://giphy.com/embed/BzyTuYCmvSORqs1ABM'></input>
                    <button type="button">Get Photo</button>
                </div>
                <div className='addressFieldContainer'>
                    Address: <input className="inputField" type="text" placeholder='137 Trench Run, Death Star'></input>
                </div>
                <div className='phoneFieldContainer'>
                    Phone: <input className="inputField" type="tel" placeholder='123-456-1337'></input>
                </div>
                <div className='emailFieldContainer'>
                    Email: <input className="inputField" type="tel" placeholder='developer_who_says_NI@email.com'></input>
                </div>
                <div className='linkedInFieldContainer'>
                    LinkedIn: <input className="inputField" type="url" placeholder='linkedin.com/McClane-John'></input>
                </div>
                <div className='gitHubFieldContainer'>
                    GitHub: <input className="inputField" type="url" placeholder='github.com/'></input>
                </div>



                <p></p>
                {/* <button type="submit" onClick={e => e.preventDefault()}>Submit</button> */}
                <p></p>
            </div>
        )
    }
}

export default PersonalInformationForm;

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


*/

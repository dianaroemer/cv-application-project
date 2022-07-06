import React, { Component } from 'react'

class PreviewContainer extends Component {
    // constructor(props){
        // super(props);
    // }

    render() {

        const { appState } = this.props;

        const personalInformation = appState.personalInformation;
        const workExperienceArr = appState.workExperience.workExperienceArr;
        const educationalExperienceArr = appState.educationalExperience.educationalExperienceArr;

        let workRows = [];
        workExperienceArr.forEach(element => {
            workRows.push(
                <div className='previewWorkSlot' key={element.key}>
                    <text className='previewWorkPosition'>{element.position.toUpperCase()}</text> {element.startDate ? " || " : ''} {element.startDate} {element.endDate ? "to" : ''} {element.endDate} 
                    {/* <div className='previewWorkDates'> */}
                    {/* </div> */}
                    <div className='previewWorkCompany'>
                        {element.company}{element.location ? "||" : ''}{element.location}</div>
                    <div className='previewWorkDetails'>{element.descriptionOfDuties}</div> {'\n'}

                </div>
            )
        })

        let educationalRows = [];
        educationalExperienceArr.forEach(element => {
            educationalRows.push(
                <div className='previewEducationalExperienceSlot' key={element.key}>
                    <text>Institution: {element.institution}</text> {'\n'}
                    <text>Degree: {element.degree}</text> {'\n'}
                    <text>Start Date: {element.startDate}</text> {'\n'}
                    <text>End Date: {element.endDate}</text> {'\n'}
                    <text>Details: {element.details}</text> {'\n'}
                    {'\n'}
                </div>
            )

        })

        return (

            <div className='previewContainer' style={{borderStyle: 'solid', borderRadius: 3, borderWidth: 1, borderColor: 'lightgrey', whiteSpace: 'pre-wrap'}}>

                {/* <h3>I am PreviewContainer.js. Eventually, I will show the output of state from App.js.</h3> */}
                <div className='previewPersonal'>
                    {/* Name: {personalInformation.name} {'\n'}
                    Title: {personalInformation.title} {'\n'}
                    Photo URL: {personalInformation.photoURL} {'\n'}
                    Address: {personalInformation.address} {'\n'}
                    Phone #: {personalInformation.phone} {'\n'}
                    Email: {personalInformation.email} {'\n'}
                    LinkedIn: {personalInformation.linkedIn} {'\n'}
                    GitHub: {personalInformation.gitHub} {'\n'} */}
                    <div className='previewPersonalName'>
                        {personalInformation.name}
                    </div>
                    <div className='previewPersonalTitle'>
                        {personalInformation.title}
                    </div>
                    <div className='previewPersonalAddress'>
                        {personalInformation.address}
                    </div>
                    <div className='previewPersonalPhoneEmail'>
                        {personalInformation.email ? <a href={"mailto:" + personalInformation.email}> {personalInformation.email} </a> : ''}
                        
                        {personalInformation.phone ? ' || ' : ''} 
                        {personalInformation.phone}
                    </div>
                    <div className='previewPersonalLinks'>
                        <a href={personalInformation.linkedIn}>{personalInformation.linkedIn}</a>
                         {personalInformation.gitHub ? '  ||  ' : ''}
                         <a href={personalInformation.gitHub}>{personalInformation.gitHub}</a>
                    </div>
                    <div className='previewPersonalDivider'>- - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </div>

                </div>
                {/* <div className='previewWorkExperienceContainer'>
                    {'\n'} ----- Work Experience ----- 
                    {'\n'}
                    {workRows}
                </div> */}
                {workRows[0] ? (<div className='previewWorkContainer'>
                    <div className='previewWorkHeaderText'>
                        Work Experience
                    </div>
                    {workRows}
                </div>) : ''}
                <div className='previewEducationalExperienceContainer'>
                    {'\n'} ---- Educational Experience ---- 
                    {'\n'}
                    {educationalRows}
                </div>
            </div>

        )
    }
}

export default PreviewContainer;
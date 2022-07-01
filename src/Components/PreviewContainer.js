import React, { Component } from 'react'

class PreviewContainer extends Component {
    // constructor(props){
        // super(props);
    // }

    render() {

        const { appState } = this.props;

        const personalInformation = appState.personalInformation;
        const workExperienceArr = appState.workExperience.workExperienceArr;

        let workRows = [];

        workExperienceArr.map(element => {
            workRows.push(
                <div className='previewWorkExperienceSlot' key={element.key}>
                    <text>Position: {element.position}</text> {'\n'}
                    <text>Company: {element.company}</text> {'\n'}
                    <text>Location: {element.location}</text> {'\n'}
                    <text>Start Date: {element.startDate}</text> {'\n'}
                    <text>End Date: {element.endDate}</text> {'\n'}
                    <text>Description of Duties: {element.descriptionOfDuties}</text> {'\n'}
                    {'\n'}
                </div>
            )
        })

        return (

            <div className='previewContainer' style={{borderStyle: 'solid', borderRadius: 2, borderWidth: 10, borderColor: 'red', whiteSpace: 'pre-wrap'}}>

                <h3>I am PreviewContainer.js. Eventually, I will show the output of state from App.js.</h3>
                <div className='previewPersonal'>
                    Name: {personalInformation.name} {'\n'}
                    Title: {personalInformation.title} {'\n'}
                    Photo URL: {personalInformation.photoURL} {'\n'}
                    Address: {personalInformation.address} {'\n'}
                    Phone #: {personalInformation.phone} {'\n'}
                    Email: {personalInformation.email} {'\n'}
                    LinkedIn: {personalInformation.linkedIn} {'\n'}
                    GitHub: {personalInformation.gitHub} {'\n'}
                </div>
                <div className='previewWorkExperienceContainer'>
                    {'\n'} ----- Work Experience ----- 
                    {'\n'}
                    {workRows}
                </div>
                <div className='previewEducationalExperienceContainer'>
                    {'\n'} ---- Educational Experience ---- 
                    {'\n'}
                </div>
            </div>

        )
    }
}

export default PreviewContainer;
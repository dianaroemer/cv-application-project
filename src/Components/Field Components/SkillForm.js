import React, { Component } from 'react'

class SkillForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {skillArr, createExperience, deleteExperience} = this.props;

        const skillRows = [];

        skillArr.forEach(element => {
            skillRows.push(
                <SkillSlot skill={element}
                deleteExperience={deleteExperience}/>
            )
        })
        

        return (
            <div className='SkillForm' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'red', borderWidth: 10}}>
                <h3>I am SkillForm.js. I hold an array, containing a variable number of skillObjects, each of which contain an individual skill, a unique key, and an identifying type</h3>
                {skillRows}
                
            
            <p></p>
            <button type="submit" onClick={e => createExperience(e, 'skill')}>Add Another Skill</button>
            <p></p>
        </div>
        )
    }
}

class SkillSlot extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { skill, deleteExperience } = this.props;

        return (
            <form className='skillForm'>
                I am an individiaul Skill Slot. My value is
                <div>{skill.skill} and my type is {skill.type}</div>
                <button type='submit' onClick={e=> e.preventDefault()}>Edit</button>
                <button type='submit' onClick={e=> deleteExperience(e, skill)}>Delete</button>
            </form>
        )
    }

}

export default SkillForm;

/* 
--- Work Experience(VARIABLE, ADD AND DELETE THESE FORM FIELDS) ---
Position:
Company:
City:
Start Date:
End Date:? (maybe set this is a duration sort of thing?)
Short description:
*/
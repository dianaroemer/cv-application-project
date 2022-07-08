import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faCircleCheck } from '@fortawesome/free-solid-svg-icons'



class SkillForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {skillArr, updateInputField, createExperience, deleteExperience, toggleSkillEdit } = this.props;

        const skillRows = [];

        skillArr.forEach(element => {
            skillRows.push(
                <SkillSlot skill={element}
                updateInputField={updateInputField}
                toggleSkillEdit={toggleSkillEdit}
                deleteExperience={deleteExperience}
                key={element.key}/>
            )
        })
        

        return (
            <div className='SkillForm' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'red', borderWidth: 10}}>
                <div className='skillsHeaderText'>Skills</div>
                {skillRows}
                
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

        const { skill, updateInputField, toggleSkillEdit, deleteExperience } = this.props;

        if(skill.edit) {
            return (
                <form className='skillEditForm'>
                    <input type="text" className="inputField" placeholder="Shooting womp rats in Beggar's Canyon"  
                        onChange={e => updateInputField(e, skill, skill)} 
                        onKeyDown={e=> {
                            e.preventDefault()
                            if(e.key === "Enter"){
                                toggleSkillEdit(e, skill);
                            }
                        }}
                        value={skill.skill}></input>

                    <FontAwesomeIcon icon={faCircleCheck} onClick={(e) => toggleSkillEdit(e, skill)}/>
                    <FontAwesomeIcon icon={faTrash} onClick={e=> deleteExperience(e, skill)} />

                </form>
            );
        }

        return (
            <form className='skillForm'>
                {skill.skill} |
                <FontAwesomeIcon icon={faPenToSquare} onClick={(e) => toggleSkillEdit(e, skill)}/>
                <FontAwesomeIcon icon={faTrash} onClick={e=> deleteExperience(e, skill)} />

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
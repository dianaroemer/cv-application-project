import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faCircleCheck } from '@fortawesome/free-solid-svg-icons'



class SkillForm extends Component {

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
            <div className='skillForm' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'red', borderWidth: 10}}>
                <h3 className='skillsHeaderText'>Skills</h3>
                {skillRows}
                
            <button type="submit" onClick={e => createExperience(e, 'skill')} id='skillAddButton'>Add Skills</button>
            <p></p>
        </div>
        )
    }
}

class SkillSlot extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {

        const { skill, updateInputField, toggleSkillEdit, deleteExperience } = this.props;

        if(skill.edit) {
            return (
                <form className='skillEditForm'>
                    <input type="text" className="inputField" placeholder="Shooting womp rats in Beggar's Canyon"  
                        onChange={e => updateInputField(e, skill, skill)} 
                        onKeyDown={e=> {
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
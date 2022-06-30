import React, { Component } from 'react'

class PreviewContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (

            <div className='previewContainer' style={{borderStyle: 'solid', borderRadius: 2, borderWidth: 10, borderColor: 'red'}}>

                <h3>I am PreviewContainer.js. Eventually, I will show the output of state from App.js.</h3>

            </div>

        )
    }
}

export default PreviewContainer;
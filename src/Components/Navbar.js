import React, { Component } from 'react'

class Navbar extends Component {
    // constructor(props) {
        // super(props);
    // }

    render() {

        return (
            <div className='navbarContainer' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'orange', borderWidth: 10}}>
                <h3>I am Navbar.js. Build me.</h3>
            </div>
        )
    }
}

export default Navbar;
import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://194.1.238.49:3000" className="navbar-brand">Domain Monitor App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent

import React, { Component } from 'react'
import DomainService from '../services/DomainService'

class ViewDomainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        DomainService.getDomainById(this.state.id).then( res => {
            this.setState({domain: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Domain Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Domain Url: </label>
                            <div> { this.state.domain.domainUrl }</div>
                        </div>
                        <div className = "row">
                            <label> Domain Note: </label>
                            <div> { this.state.domain.domainNote }</div>
                        </div>                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDomainComponent

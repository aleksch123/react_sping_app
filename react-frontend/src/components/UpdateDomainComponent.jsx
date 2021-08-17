import React, { Component } from 'react'
import DomainService from '../services/DomainService';

class UpdateDomainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            domainUrl: '',
            domainNote: ''
        }
        this.changeDomainUrlHandler = this.changeDomainUrlHandler.bind(this);
        this.changeDomainNoteHandler = this.changeDomainNoteHandler.bind(this);
        this.updateDomain = this.updateDomain.bind(this);
    }

    componentDidMount(){
        DomainService.getDomainById(this.state.id).then( (res) =>{
            let domain = res.data;
            this.setState({domainUrl: domain.domainUrl,
                domainNote: domain.domainNote
            });
        });
    }

    updateDomain = (e) => {
        e.preventDefault();
        let domain = {domainUrl: this.state.domainUrl, domainNote: this.state.domainNote};
        console.log('domain => ' + JSON.stringify(domain));
        console.log('id => ' + JSON.stringify(this.state.id));
        DomainService.updateDomain(domain, this.state.id).then( res => {
            this.props.history.push('/domains');
        });
    }
    
    changeDomainUrlHandler= (event) => {
        this.setState({domainUrl: event.target.value});
    }

    changeDomainNoteHandler= (event) => {
        this.setState({domainNote: event.target.value});
    }


    cancel(){
        this.props.history.push('/domains');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Domain</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Domain Url: </label>
                                            <input placeholder="Domain Url" name="domainUrl" className="form-control"
                                                value={this.state.domainUrl} onChange={this.changeDomainUrlHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Domain Note: </label>
                                            <input placeholder="Domain Note" name="domainNote" className="form-control"
                                                value={this.state.domainNote} onChange={this.changeDomainNoteHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateDomain}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateDomainComponent

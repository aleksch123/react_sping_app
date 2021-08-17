import React, { Component } from 'react'
import EmployeeService from '../services/DomainService';

class CreateDomainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            domainUrl: '',
            domainNote: ''

        }
        this.changeDomainUrlHandler = this.changeDomainUrlHandler.bind(this);
        this.changeDomainNoteHandler = this.changeDomainNoteHandler.bind(this);
        this.saveOrUpdateDomain = this.saveOrUpdateDomain.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            DomainService.getDomainById(this.state.id).then( (res) =>{
                let domain = res.data;
                this.setState({domainUrl: domain.domainUrl,
                    domainNote: domain.domainNote
                });
            });
        }        
    }
    saveOrUpdateDomain = (e) => {
        e.preventDefault();
        let domain = {domainUrl: this.state.domainUrl, domainNote: this.state.domainNote};
        console.log('domain => ' + JSON.stringify(domain));

        // step 5
        if(this.state.id === '_add'){
            DomainService.createDomain(domain).then(res =>{
                this.props.history.push('/domains');
            });
        }else{
            DomainService.updateDomain(domain, this.state.id).then( res => {
                this.props.history.push('/domains');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Domain</h3>
        }else{
            return <h3 className="text-center">Update Domain</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="Domain Url" name="domainUrl" className="form-control"
                                                value={this.state.domainUrl} onChange={this.changeDomainUrlHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Domain Note" name="domainNote" className="form-control"
                                                value={this.state.domainNote} onChange={this.changeDomainNoteHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDomain}>Save</button>
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

export default CreateDomainComponent

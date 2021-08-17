import React, { Component } from 'react'
import DomainService from '../services/DomainService'

class ListDomainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                domains: []
        }
        this.addDomain = this.addDomain.bind(this);
        this.editDomain = this.editDomain.bind(this);
        this.deleteDomain = this.deleteDomain.bind(this);
    }

    deleteDomain(id){
        DomainService.deleteDomain(id).then( res => {
            this.setState({domains: this.state.domains.filter(domain => domain.id !== id)});
        });
    }
    viewDomain(id){
        this.props.history.push(`/view-domain/${id}`);
    }
    editDomain(id){
        this.props.history.push(`/add-domain/${id}`);
    }

    componentDidMount(){
        DomainService.getDomains().then((res) => {
            this.setState({ domains: res.data});
        });
    }

    addDomain(){
        this.props.history.push('/add-domain/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Domains List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDomain}> Add Domain</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Domain Url</th>
                                    <th> Domain Note</th>                                    
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.domains.map(
                                        domain => 
                                        <tr key = {domain.id}>
                                             <td> { domain.domainUrl} </td>   
                                             <td> {domain.domainNote}</td>
                                             <td>
                                                 <button onClick={ () => this.editDomain(domain.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDomain(domain.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDomain(domain.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListDomainComponent;
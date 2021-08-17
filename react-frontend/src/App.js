import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListDomainComponent from './components/ListDomainComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateDomainComponent from './components/CreateDomainComponent';
import UpdateDomainComponent from './components/UpdateDomainComponent';
import ViewDomainComponent from './components/ViewDomainComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListDomainComponent}></Route>
                          <Route path = "/domains" component = {ListDomainComponent}></Route>
                          <Route path = "/add-domain/:id" component = {CreateDomainComponent}></Route>
                          <Route path = "/view-domain/:id" component = {ViewDomainComponent}></Route>
                          {/* <Route path = "/update-domain/:id" component = {UpdateDomainComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;

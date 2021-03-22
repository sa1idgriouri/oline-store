
import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Compenents/Slide/Home";
import Prodact from "./Compenents/Prodact/Prodact";
import Contact from "./Compenents/Contact/Contact";
import Cart from "./Compenents/Cart/cart"
import DetailsProduit from "./Compenents/Prodact/DetailsProduit"


import store from './Compenents/Store/Store'
import { Provider } from 'react-redux'



import IconShopping from "./Compenents/ICONShopping/IconShopping"


class App extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
 
    <Router>
      <MDBNavbar color="special-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Hopping Store</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/prodact">Prodact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
            
        
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <IconShopping />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

     


      <Route exact path='/' component={Home} />
        <div className="container">
        <Route exact path='/prodact' component={Prodact} />
       <Route exact path="/contact" component={Contact} />
       <Route exact path="/cart" component={Cart} />
       <Route exact path="/details/:id" component={DetailsProduit} />
        </div>
      
    </Router> 

    
        

  
    );
  }
}

function AppCompment()
{
  return <Provider store={store}>
    <App  />
  </Provider>
}

export default AppCompment;

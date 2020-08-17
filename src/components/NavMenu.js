import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarText
} from 'reactstrap';
import logo from './../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import './../css/NavMenu.css'
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import { clearCurrentUser } from '../redux/actions/authActions';
const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
const handleSignout=()=>{
  firebase.auth().signOut();
  clearCurrentUser()
}
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand to="/"><img alt="logo" src={logo} style={{width:"50px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar style={{justifySelf:"center"}}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>         
            <NavItem>
              <NavLink to="/latest">Latest Shows</NavLink>
            </NavItem>         
          </Nav>

          {!props.userDetail
          ?<NavLink to="/login" style={{color: "#ffff0090"}}>Hi Guest!</NavLink>
          :
          (
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
            Hi {JSON.parse(localStorage.getItem('user')).displayName}!
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
              <NavLink to="/login">Profile</NavLink>
              </DropdownItem>
              <DropdownItem>
              <NavLink to="/watch">Watched</NavLink>
              </DropdownItem>
              <DropdownItem>
              <NavLink to="/subcribed">Subscribed</NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
              <NavbarText onClick={handleSignout}>Sign Out</NavbarText>
              </DropdownItem>
            </DropdownMenu> 
          </UncontrolledDropdown>)}
        </Collapse>
      </Navbar>
    </div>
  );
}
const mapsStatesToProps=(storeState)=>{
  return {userDetail:storeState.authState.user}
}
export default connect(mapsStatesToProps, {clearCurrentUser})(NavMenu)

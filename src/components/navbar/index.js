import React, { Component } from 'react'
import { Button, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'
import { Mod_SignUp } from '../modals/m_signup'
import { Mod_Login } from '../modals/m_login'
import Menu from './menu';

import { Mod_Post } from '../modals/publicar'
import { Mod_EdPerfil } from '../modals/EditPerfil'




export default class Navbar_P extends Component {

    constructor(props) {
        super(props)
        this.state = {
            identity: false,
            status: false,
            //type: TYPESHOW,
            data: []
        };
    }

    render() {

        let identity = this.state.identity;

        return (
            <div>
                <Navbar
                    style={{ backgroundColor: "#111111" }}
                    dark
                    expand="lg"
                    fixed=""
                    full

                >
                    <NavbarBrand href="/">
                        ARTSTRADE
                    </NavbarBrand>

                    <Input
                        className='me-2 '
                        bsSize="sm"
                        type="search"
                        placeholder=''

                    />
                    <Mod_SignUp/>

                    <Mod_Login/>


                    

                    <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
            style={{color: "white"}}
          >
            Joseph Mancuso
          </DropdownToggle>
          <DropdownMenu right  style={{ backgroundColor: "#0B0B0B", border: "none" }}>
            <DropdownItem style={{ color: "white"}} >
             <a className='ms-1' href="/profile" style={{ color: "white", textDecoration: "none"}}> PROFILE</a>
            </DropdownItem>
            <DropdownItem >
            <Mod_Post/>
            </DropdownItem>
            <DropdownItem>
            <Mod_EdPerfil/>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem style={{ color: "gray"}} >
              LOGOUT
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

                </Navbar>
                <Menu></Menu>
            </div>
        )
    }
}


/*
export default class Navbar_P extends Component {
    render() {
        return (
            <div>
                <Navbar
                    color="dark"
                    dark
                    expand="md"
                    fixed=""
                    full
                >
                    <NavbarBrand href="/">
                        ARTSTRADE
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="/components/">
                                    Components
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle
                                    caret
                                    nav
                                >
                                    Options
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <Link to={"/signup"}>
                            <Button_C color={"primary"} text={"Signup"}/>
                        </Link>
                        <Link to={"/login"}>
                            <Button_C color={"primary"} text={"Login"}/>
                        </Link>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

*/
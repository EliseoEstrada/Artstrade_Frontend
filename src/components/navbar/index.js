import React, { Component } from 'react'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'
import { Button_C } from '../buttons'
import { Link} from 'react-router-dom';





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
                                <DropdownMenu right>
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
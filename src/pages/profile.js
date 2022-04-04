import React, { Component } from 'react'
import { Button, Card, CardText, CardTitle, Col, Container, Nav, Navbar, NavItem, NavLink, Row } from 'reactstrap';
import Navbar_P from '../components/navbar';
import Footer from '../components/footer/footer';
import PostsList from '../components/posts/postsList';

import avatar from '../assets/img/avatar.png'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: 'posts'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ventana) {
        this.setState({ val: ventana });
        console.log(this.state.val)
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Navbar_P />

                <Card
                    body
                    className="text-center"
                >
                    <div className='text-center mt-5'>
                        <img className='rounded-circle' height="150px" width="150px" src={avatar} />
                    </div>

                    <CardTitle tag="h2">
                        Joseph Mancuso
                    </CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus felis et libero scelerisque.
                    </CardText>
                    <Row>
                        <Col xs={6} className="text-end">
                            <p >FOLLOWS</p>
                            <p className='fw-bold'>12M</p>
                        </Col>
                        <Col xs={6} className="text-start">
                            <p >REVIEWS</p>
                            <p className='fw-bold'>2M</p>
                        </Col>
                    </Row>
                </Card>
                <Navbar
                    color="dark"
                    dark
                    expand="md"
                >

                    <Nav
                        className="ms-auto me-auto"
                        navbar
                    >

                        <NavItem>
                            <NavLink onClick={() => this.handleChange('posts')} className='fw-bold'>
                                ALL
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" className='fw-bold'>
                                SKETCH
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" className='fw-bold'>
                                CONCEPT
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" className='fw-bold'>
                                BLOG
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.handleChange('form')} className='fw-bold'>
                                CONTACT
                            </NavLink>
                        </NavItem>

                    </Nav>

                </Navbar>

                {
                    this.state.val === 'posts' ? (
                        <div className="mt-5 mb-5">
                            <PostsList />
                        </div>
                    ) : (
                        <div>
                            <h2>Formulario</h2>
                        </div>
                    )
                }

                <Footer />
            </div>

        )
    }
}


export default Profile
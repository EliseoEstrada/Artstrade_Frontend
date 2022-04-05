import React, { Component } from 'react'
import { Button, Card, CardHeader, CardText, CardTitle, Col, Container, Nav, Navbar, NavItem, NavLink, Row } from 'reactstrap';
import Navbar_P from '../components/navbar';
import Footer from '../components/footer/footer';
import PostsList from '../components/posts/postsList';

import avatar from '../assets/img/avatar.png'

import FormContact from '../components/forms/formContact';

import Option from '../components/menuProfile';
import Blog from '../components/blog';


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            section: 'posts'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ventana) {
        this.setState({ section: ventana });
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

        let section = this.state.section;

        return (
            <div>
                <Navbar_P />

                <Card
                    body
                    className="text-center"
                    style={{ backgroundColor: "#1C1C1C", color: "lightgray" }}
                >
                    <div className='text-center mt-5'>
                        <img className='rounded-circle' height="150px" width="150px" src={avatar} />
                    </div>

                    <CardHeader>
                        <h3>Joseph Mancuso</h3>
                                                
                    </CardHeader>
                    <CardTitle tag="h2">
                        DIGITAL ILUSTRATOR / 2D ILUSTRATOR
                    </CardTitle>
                    <CardText>
                    Me dedico al mundo del 2d y de la ilustracion desde hace muchos años, espero que mis ilustraciones les gusten.
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
                    style={{ backgroundColor: "#0D0D0D" }} 
                    dark
                    expand="md"
                >

                    <Nav
                        className="ms-auto me-auto"
                        navbar
                    >

                        <NavItem className='d-flex align-items-center'>
                            <Option onClick={() => this.handleChange('posts')}>ALL</Option>
                        </NavItem>
                        <NavItem className='d-flex align-items-center'>
                            <Option onClick={() => this.handleChange('sketch')}>SKETCH</Option>
                        </NavItem>
                        <NavItem className='d-flex align-items-center'>
                            <Option onClick={() => this.handleChange('concept')}>CONCEPT</Option>
                        </NavItem>
                        <NavItem className='d-flex align-items-center'>
                            <Option onClick={() => this.handleChange('blog')}>BLOG</Option>
                        </NavItem>
                        <NavItem className='d-flex align-items-center'>
                            <Option onClick={() => this.handleChange('form')}>CONTACT</Option>

                        </NavItem>

                    </Nav>

                </Navbar>

<div style={{ backgroundColor: "#1C1C1C" }} >
                {
                    section === 'posts' ? (
                        <div >
                            <h2 style={{ color:"gray"}}>ALL</h2>
                            <PostsList />
                        </div>
                    ) : section === 'sketch'? (
                        <div >
                            <h2 style={{ color:"gray"}}>SKETCH</h2>
                            <PostsList/>
                        </div>
                    ) : section === 'concept'? (
                        <div >
                            <h2 style={{ color:"gray"}}>CONCEPT</h2>
                            <PostsList/>
                        </div>
                    ) : section === 'form'? (
                        <div style={{ backgroundColor: "#1C1C1C", color:"gray" }}>
                            <FormContact/>
                        </div>
                    ) : section === 'blog'? (
                        <div style={{ backgroundColor: "#1C1C1C", color:"gray" }}>
                            <Blog/>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
</div>
                <Footer />
            </div>

        )
    }
}


export default Profile
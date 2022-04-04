
import React, { Component } from 'react'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Button_W } from '../components/buttons/button_w'

import { Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
        <div >
        <Container>
            <Row>
                <Col md={4} />
                <Col md={4} className="" style={{background: "#f1f7fc"}} >
                    
                    <Form>
                        <FormGroup>
                            <Input 
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email">
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                id="examplePass"
                                name="password"
                                placeholder="Password"
                                type="email">
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Button_W color={"dark"} text={"Log in"} />
                        </FormGroup>
                        <FormGroup>
                            <Link to={"/signup"}>
                                <Label className='text-center'>Sign up</Label>
                            </Link>
                        </FormGroup>
                    </Form>

                </Col>
                <Col md={4} />
            </Row>
        </Container>
        </div>
        )
    }
}

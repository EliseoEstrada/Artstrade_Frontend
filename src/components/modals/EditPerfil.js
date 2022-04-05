import React, { Component } from 'react'
import { Button, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

import Button_C from '../buttons/button'
import { Link } from 'react-router-dom';

export class Mod_EdPerfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button style={{ backgroundColor: "#0B0B0B", hover: "white", border: "none" }} size="sm" onClick={this.toggle}>{this.props.buttonLabel} EDIT PROFILE </Button>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}> PROFILE</ModalHeader>
                    <ModalBody  >
                        <Row>
                        <Form>
                            <Col>

                            <FormGroup>
                            <Label for="exampleText">
                            UserName
                            </Label>
                            <Input
                            id="exampleText"
                            name="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                            Email
                            </Label>
                            <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="with a placeholder"
                            type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                            Password
                            </Label>
                            <Input
                            id="examplePassword"
                            name="password"
                            placeholder="password placeholder"
                            type="password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                            Description
                            </Label>
                            <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleFile">
                            Profile Image
                            </Label>
                            <Input
                            id="exampleFile"
                            name="file"
                            type="file"
                            />
                            <FormText>
                           
                            </FormText>
                        </FormGroup>

                        <h5>ACTIVATE YOUR WORK PROFILE</h5>
                        <FormGroup>
                            <Label for="exampleJobP">
                            Work profile
                            </Label>
                            <Input
                            id="exampleJobP"
                            name="switch"
                            type="switch"
                            className='ms-2'
                            />
                            <FormText>
                            
                            </FormText>
                        </FormGroup>
              
                        <FormGroup>
                            <Label for="exampleVT">
                            Vocational Training
                            </Label>
                            <Input
                            id="exampleVT"
                            name="textarea"
                            type="textarea"
                            />
                            <FormText>
                            
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleStudies">
                            Select your studies
                            </Label>
                            <Input
                            id="exampleStudies"
                            name="selectSt"
                            type="select"
                            />
                            <FormText>
                            
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleWA">
                            Select your work areas
                            </Label>
                            <Input
                            id="exampleWA"
                            name="select"
                            type="select"
                            />
                            <FormText>
                            
                            </FormText>
                        </FormGroup>


                        <FormGroup>
                            <Label for="examplePR">
                            Enter your price range
                            </Label>
                            <Input
                            id="examplePR1"
                            name="number1"
                            type="number"
                            />
                            <p> a </p>
                               <Input
                            id="examplePR2"
                            name="number2"
                            type="number"
                            />
                            <FormText>
                            
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampletel">
                            Enter your phone number
                            </Label>
                            <Input
                            id="examplePR1"
                            name="telnumber"
                            type="number"
                            />
                          
                            <FormText>
                            
                            </FormText>
                        </FormGroup>

                            </Col>
                            <Col>
                            
                            </Col>
                     
 
                        </Form>
                            
                        </Row>
                       </ModalBody>
                    <ModalFooter>
                    <Link 
                        to={'/profile'} 
                        style={{width: '100%'}}>
                        
                        <Button_C 
                            onClick={this.toggle}
                            bgColor="rgb(11, 11, 11);"
                        >
                            EDIT PROFILE
                        </Button_C>
                    </Link>
                       
                        
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
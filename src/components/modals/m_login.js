import React, { Component } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import Button_C from '../buttons/button'
import { Link } from 'react-router-dom';

export class Mod_Login extends React.Component {
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
                <Button style={{ backgroundColor: "#0B0B0B", border: "none" }} size="sm" onClick={this.toggle}>{this.props.buttonLabel} LOGIN </Button>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}> LOGIN</ModalHeader>
                    <ModalBody  >
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail"   >
                                    Agraga tus datos para iniciar sesion
                                </Label>

                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="E-MAIL"
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
                                    placeholder="PASSWORD"
                                    type="password"
                                />
                            </FormGroup>

 
                        </Form> </ModalBody>
                    <ModalFooter>
                    <Link 
                        to={'/profile'} 
                        style={{width: '100%'}}>
                        
                        <Button_C 
                            onClick={this.toggle}
                            bgColor="rgb(11, 11, 11);"
                        >
                            LOGIN
                        </Button_C>
                    </Link>
                        <Button_C 
                            onClick={this.toggle}
                            bgColor="#393939;"
                        >
                            CANCEL
                        </Button_C>
                        
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
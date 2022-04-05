import React, { Component } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import Button_C from '../buttons/button'
import { Link } from 'react-router-dom';

export class Mod_Post extends React.Component {
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
                <Button style={{ backgroundColor: "#0B0B0B", border: "none" }} size="sm" onClick={this.toggle}>{this.props.buttonLabel} CREATE POST </Button>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}> POST</ModalHeader>
                    <ModalBody  >
                        <Form>
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
                            File
                            </Label>
                            <Input
                            id="exampleFile"
                            name="file"
                            type="file"
                            />
                            <FormText>
                            
                            </FormText>
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
                            POST
                        </Button_C>
                    </Link>
                       
                        
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
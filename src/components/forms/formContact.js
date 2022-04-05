import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
class FormContact extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return (
            <div>
                <Row >
                    <Col className='mt-2'>
                        <h2>Information</h2>
                    </Col>
                    <Col className='mt-2'>
                        <h2>Contact Form</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className='p-5'>
                        <Table style={{ color: "white" }} >

                            <tbody>
                                <tr>
                                    <th scope="row">

                                    </th>
                                    <td>
                                        UNAM - Universidad Nacional Autónoma de México / FAD - Facultad de Artes y Diseño UNAM.
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">

                                    </th>
                                    <td>
                                        He trabajado en muchos lugares, estuve en anima estudios como concept artist durante 10 años, despues entre a cartoon network como storyboard artist y llevo 5 años ahi.
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">

                                    </th>
                                    <td>
                                        085 - 301 90 77
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">

                                    </th>
                                    <td>
                                        infoJosephMancusoArt@gmail.com
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <h3>  Work profile: Open</h3>
                        <Form className='p-5'>
                            <Row form>
                                <Col >
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="E-mail"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row form>
                                <Col >
                                    <FormGroup>
                                        <Label for="exampleAsunto">
                                            Subject
                                        </Label>
                                        <Input
                                            id="exampleAsunto"
                                            name="asunto"
                                            placeholder="Asunto"
                                            type="textarea"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col >
                                    <FormGroup>
                                        <Label for="exampleDesc">
                                            Description
                                        </Label>
                                        <Input
                                            id="exampleDesc"
                                            name="descripcion"
                                            placeholder="Descripcion"
                                            type="textarea"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button style={{
                                backgroundColor: "#0D0D0D", border: "none", color: "lightgray"
                            }}
                            >
                                SEND
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            someKey: 'otherValue'
        });
    }
}

export default FormContact;

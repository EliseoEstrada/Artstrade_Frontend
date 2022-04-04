import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'


export default class Footer extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#0F0F0F" }}>

                <Container>


                    <Row >
                        <Col

                            xs="12"
                            className="mt-5 mb-4"
                            style={{ color: "white" }}
                        >
                            ARTSTRADE
                        </Col>
                    </Row>

     

                    <Row >
                        <Col

                            xs="12"
                            className="mb-5 mt-4"
                            style={{ color: "gray" }}
                        >
                            © 2022 Copyright: artstrade.com
                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
}



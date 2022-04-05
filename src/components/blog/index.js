import React from 'react';

import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Input,  Row } from 'reactstrap';

import Coments from '../coments/coments';

class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return (
            <div>
                <Row  >
                    <Col className='mt-2'>

                        <h2>BLOG</h2>
                    </Col>
                </Row>
                <Row>
                    <Col
                        sm="8"
                        className='p-5'
                    >
                        <Row>
                            <Col>
                                <div>
                                    <Card style={{ backgroundColor: "#1C1C1C", border: "none", color: "lightgray" }}>
                                        <CardHeader>


                                        </CardHeader>
                                        <CardBody>

                                            <CardTitle tag="h5">
                                                Create a post.
                                            </CardTitle>
                                            <Input
                                                bsSize=""
                                                type="textarea"
                                            />
                                            <CardText>

                                            </CardText>
                                            <Button style={{ backgroundColor: "#0D0D0D", border: "none", color: "lightgray" }}
                                            >
                                                POST
                                            </Button>
                                        </CardBody>
                                        <CardFooter>

                                        </CardFooter>
                                    </Card>

                                </div>
                            </Col>


                        </Row>

                        <Row>
                            <Col>
                                <div>
                                    <Card style={{ backgroundColor: "#1C1C1C", border: "none", color: "lightgray" }}>
                                        <CardHeader>
                                            <h3>POSTS</h3>

                                        </CardHeader>
                                        <CardBody>

                                            <CardTitle tag="h5">
                                                Ilustracion con "lineart"?
                                            </CardTitle>

                                            <CardText>
                                                Me gustaria empezar a hacer debate sobre si la ilustracion debe llevar lineart o no, ustedes diganme amigos, escriban en los comentarios aver que pasa.
                                            </CardText>
                                            <Button style={{ backgroundColor: "#4BFFF7", border: "none", color: "lightgray" }}
                                            >
                                                LIKE
                                            </Button>
                                            <Button style={{ backgroundColor: "#FF4B4B", border: "none", color: "lightgray" }} className="ms-2"
                                            >
                                                COMMENT
                                            </Button>
                                        </CardBody>
                                        <CardFooter>

                                        </CardFooter>
                                    </Card>
                                </div>
                            </Col>

                            <Row>
                                <Col style={{ backgroundColor: "#171717", border: "none", color: "lightgray" }}>
                                    <Coments></Coments>
                                </Col>
                            </Row>

                        </Row>


                        <Row>
                            <Col>
                                <div>
                                    <Card style={{ backgroundColor: "#1C1C1C", border: "none", color: "lightgray" }}>
                                        <CardHeader>


                                        </CardHeader>
                                        <CardBody>

                                            <CardTitle tag="h5">
                                                Ilustracion con "lineart"?
                                            </CardTitle>

                                            <CardText>
                                                Me gustaria empezar a hacer debate sobre si la ilustracion debe llevar lineart o no, ustedes diganme amigos, escriban en los comentarios aver que pasa.
                                            </CardText>
                                            <Button style={{ backgroundColor: "#4BFFF7", border: "none", color: "lightgray" }}
                                            >
                                                LIKE
                                            </Button>
                                            <Button style={{ backgroundColor: "#FF4B4B", border: "none", color: "lightgray" }} className="ms-2"
                                            >
                                                COMMENT
                                            </Button>
                                        </CardBody>
                                        <CardFooter>

                                        </CardFooter>
                                    </Card>
                                </div>
                            </Col>

                            <Row>
                                <Col style={{ backgroundColor: "#171717", border: "none", color: "lightgray" }} >
                                    <Coments></Coments>
                                    <Coments></Coments>
                                </Col>
                            </Row>

                        </Row>
                    </Col>
                    <Col
                                sm="4"
                                className='p-5'
                                >
                                     <h3>HIGHLIGHTED COMMENTS</h3>

                                     <Row>
                                        <Col>
                                        
                                        <div>
                                            <Card  style={{ backgroundColor: "#1C1C1C", border:"none", color:"lightgray"}}>
                                                <CardHeader>
                                               
                                                
                                                </CardHeader>
                                                <CardBody>
                                            
                                                <CardTitle tag="h5">
                                                Post a comment.
                                                </CardTitle>
                                              
                                                <CardText>
                                                Help the community by leaving a comment about what you thought about working with Joseph Mancuso.
                                                </CardText>

                                                <Input
                                                    bsSize=""
                                                    type="textarea"
                                                />
                                                <Button style={{ backgroundColor: "#0D0D0D", border:"none", color:"lightgray" }} className="mt-2"
                                                >
                                                POST
                                                </Button>
                                                </CardBody>
                                                <CardFooter>
                                                
                                                </CardFooter>
                                            </Card>
                                        
                                            </div>
                                        </Col>

                                     </Row>


                                     <Row style={{ backgroundColor: "#171717", border:"none", color:"lightgray"}}>
                                        <Col>
                                        <Coments></Coments>
                                        </Col>

                                     </Row>
                                     <Row style={{ backgroundColor: "#171717", border:"none", color:"lightgray"}}>
                                        <Col>
                                        <Coments></Coments>
                                        </Col>

                                     </Row>
                              
                              

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

export default Blog;

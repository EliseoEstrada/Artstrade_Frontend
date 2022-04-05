import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'



export default class Coments extends Component {
    render() {
        return (
            <div>
               <Row>
                   <Col
                   sm="4"
                   className='mt-3'
                   >
                     <img
                        src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-5.jpg"
                        className="img-fluid rounded-circle"
                        height="100px" width="100px"
                        alt="..."
                    />
                     
                   </Col>
                   <Col
                    sm="8"
                    className='text-start'
                   >
                       <Row>
                            <Col>
                            <p className='mt-3' style={{ color: "darkgray" }} >Rio Berath</p>
                            </Col>
                          
                       </Row>
                        <Row>
                        <Col >
                            <p className='mt-3' style={{ color: "darkgray" }} >Muy buen dibujo hermano! Saludos desde Mexico!.</p>
                            </Col>
                        </Row>
                   </Col>
                  
               </Row>
             
            </div>
        )
    }
}
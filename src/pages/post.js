import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Footer from '../components/footer/footer';
import Navbar_P from '../components/navbar';

import avatar from '../assets/img/avatar.png'
import Coments from '../components/coments/coments';


class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "#0D0D0D"}}>
        <Navbar_P />


<Container fluid>
        <Row className='mt-5'>
          <Col
            className=""
            sm="8"
            xs="6"
            style={{ backgroundColor: "#141414" }}
          >
            <img
              src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-5.jpg"
              className="img-fluid mt-2"
              alt="..."

            />


          </Col>
          <Col
            className=""
            sm="4"
            style={{ backgroundColor: "#212121" }}
          >

            <div className='mt-5' >
              <Row>
                <Col
                  sm="4"
                  xs="6"
                >
                  <img className='rounded-circle' height="140px" width="140px" src={avatar} />
                </Col>
                <Col
                  sm="8"
                  xs="6"
                  className='text-start pe-2'

                >

                  <h1 className='mt-3' style={{ color: "lightgray" }}>Joseph Hans</h1>
                  <p className='mt-3' style={{ color: "lightgray" }}>Hola chicos, espero que les guste estas nuevas ilustraciones que realice en PS. Apoyenme con un me gusta si les gusta mi trabajo</p>

                </Col>

              </Row>
              <Row>
                <Col className='text-end'>

                  <div className='mt-5'>

                    <Button
                      style={{ backgroundColor: "#4BFFF7", color: "white" }}

                    >
                      LIKE
                    </Button>
                    <Button
                      style={{ backgroundColor: "#FFE14B", color: "white" }}

                    >
                      FAVORITES
                    </Button>

                    <Button
                      style={{ backgroundColor: "#FF4B4B", color: "white" }}

                    >
                      SHARE
                    </Button>
                  </div>
                </Col>

              </Row>
              <Row>
                <Col
                  style={{ backgroundColor: "#292929" }}
                  className='mt-1'
                >
                  <h1 style={{ color: "#9C9C9C" }}>COMMENTS</h1>
                </Col>
                <Col
                  style={{ backgroundColor: "#292929" }}
                  className='mt-1' >

                </Col>
              </Row>
              <Row>
                <Col
                  style={{ backgroundColor: "#393939", color: "white" }}
                >


                  <Coments></Coments>

                  <Coments></Coments>


                </Col>

              </Row>
            </div>
          </Col>
        </Row>
        </Container>

        <Footer></Footer>

      </div>

    )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Post;

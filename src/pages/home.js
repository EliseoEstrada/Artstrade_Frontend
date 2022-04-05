import React, { Component } from 'react'

import { CardGroup, Col, Row } from 'reactstrap';
import Navbar_P from '../components/navbar';

import Footer from '../components/footer/footer';
import Carrousel from '../components/carrousel';

import PostsList from '../components/posts/postsList';
import CardArtistsList from '../components/cards/cardArtistsList'
import CardArtistsList2 from '../components/cards/cardArtistsList2';
import banner from '../assets/img/banner.png'
import banner2 from '../assets/img/banner2.png'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //id: "",
            status: false,
            //type: TYPESHOW,
            data: []
        };
    }

    //Se ejecuta antes del montaje
    componentWillMount() {
        //si se puede operaciones con el state

        //No se puede acceder al document
        //no se puede llamar a las apis
    }

    //Se ejecuta despues del montaje
    componentDidMount() {
        //Peticion api
/*
        fetch("hhtp://localhost:3000/api/v1/posts/").then(
            (response) =>
            response.json().then((respJSON) => {

                if(respJSON.success){
                    const {title} = respJSON.data;

                    this.setState({
                        status: true,
                        data: {title}
                    });
                }

            }),
            (error) => console.log("Error en la aplicacion", error)
        );
        */
    }

    //Se ejecuta cuando los props cambian
    componentWillReceiveProps(nextProps) {

    }

    //condicion para saber si se vuelve a renderear o actualizar un componente
    shouldComponentUpdate(nextProps, nextState) {

    }

    //Antes de la actualizacion
    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {
        //Modificar
    }

    componentWillUnmount() {

    }

    render() {

        let status = this.state.status

        return (
            <div style={{ backgroundColor: "#0E0E0E" }}>
                <Navbar_P></Navbar_P>

                <Carrousel/>

                <h1 className='text-white mt-3 mb-3'>POPULAR POSTS</h1>
                <CardArtistsList/>


                <h1 className='text-white mt-3 mb-3'>NEW POSTS</h1>
                <PostsList/>

                <div className='text-center mt-5' style={{ backgroundColor: "#0C0C0C" }}>
                        <img className='' height="10%" width="80%" src={banner} />
                    </div>
               

                <h1 className='text-white mt-3 mb-3'>POPULAR ARTISTS</h1>
                <CardArtistsList/>


                <h1 className='text-white mt-3 mb-3'>POPULAR COMISION ARTISTS</h1>

                <Row className='mb-5'>
                    <Col xs={12}>
                        <CardArtistsList2/>
                    </Col>
                </Row>


                <h1 className='mt-3 mb-3' style={{ color: "lightgray" }}>POSTS</h1>
                <PostsList/>

                <div className='text-center mt-5' style={{ backgroundColor: "#0C0C0C" }}>
                        <img className='' height="10%" width="80%" src={banner2} />
                </div>

                <Footer></Footer>

            </div>
        )
    }
}

Home.propTypes = {

}

export default Home
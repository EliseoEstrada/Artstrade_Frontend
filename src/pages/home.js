import React, { Component } from 'react'

import { CardGroup, Col, Row } from 'reactstrap';
import Navbar_P from '../components/navbar';

import Footer from '../components/footer/footer';
import Carrousel from '../components/carrousel';

import PostsList from '../components/posts/postsList';
import CardArtistsList from '../components/cards/cardArtistsList'
import CardArtistsList2 from '../components/cards/cardArtistsList2';


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

                <h1 className='text-white mt-3 mb-3'>Artistas populares</h1>
                <CardArtistsList/>


                <h1 className='text-white mt-3 mb-3'>Posts</h1>
                <PostsList/>

                <h1 className='text-white mt-3 mb-3'>post populares</h1>
                <CardArtistsList/>


                <h1 className='text-white mt-3 mb-3'>Artistas de comisiones populares</h1>

                <Row className='mb-5'>
                    <Col xs={12}>
                        <CardArtistsList2/>
                    </Col>
                </Row>

                <PostsList/>

                <Footer></Footer>

            </div>
        )
    }
}

Home.propTypes = {

}

export default Home
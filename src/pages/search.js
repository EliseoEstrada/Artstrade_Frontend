import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import Footer from '../components/footer/footer';
import Navbar_P from '../components/navbar';

import CardArtistsList from '../components/cards/cardArtistsList';
import CardArtistsList2 from '../components/cards/cardArtistsList2';
import banner from '../assets/img/banner.png'
import banner2 from '../assets/img/banner2.png'
import PostsList from '../components/posts/postsList';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return (
            <div style={{ backgroundColor: "#0C0C0C" }}>
                <Navbar_P></Navbar_P>


                <h1 className='mt-3 mb-3' style={{ color: "lightgray" }}> "BUSQUEDA" POPULAR POST</h1>
                <CardArtistsList />

                <h1 className='mt-3 mb-3' style={{ color: "lightgray" }}> "BUSQUEDA" POPULAR COMISION ARTISTS</h1>
                <Row className='mb-5'>
                    <Col xs={12}>
                        <CardArtistsList2 />
                    </Col>
                </Row>

                <div className='text-center mt-5' style={{ backgroundColor: "#0C0C0C" }}>
                    <img className='' height="10%" width="80%" src={banner} />
                </div>

                <h1 className='mt-3 mb-3' style={{ color: "lightgray" }}> "BUSQUEDA" POPULAR ARTISTS</h1>
                <CardArtistsList />

                <h1 className='mt-3 mb-3' style={{ color: "lightgray" }}> "BUSQUEDA" POSTS</h1>
                <PostsList />

                <div className='text-center mt-5' style={{ backgroundColor: "#0C0C0C" }}>
                    <img className='' height="10%" width="80%" src={banner2} />
                </div>

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

export default Search;

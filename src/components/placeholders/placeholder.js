import React from 'react';
import { CardImg, Col, Row } from 'reactstrap';
import image from '../../assets/img/gif-placeholder.gif'

const Placeholder = () => {
    return (
        <CardImg
            style={{
                padding: "20px",
                borderRadius: "50px",

            }}
            src={image}
        >

        </CardImg>
    )
}

export default Placeholder;
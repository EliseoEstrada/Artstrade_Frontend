import React, { Component } from 'react'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default class CardUser2 extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {

        let username = this.props.username;
        let category = this.props.category;
        let description = this.props.description;

        return (
            <Card style={{ backgroundColor: "#0F0F0F" }}>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/270"
                    className='rounded-pill w-50 p-2 mx-auto'
                    top
                    width="50%"

                />
                <CardBody>
                    <CardTitle tag="h5" style={{ color: "lightgray" }}>
                        {username}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {category}
                    </CardSubtitle>
                    <CardText>
                        {description}
                    </CardText>
                    <Button style={{ backgroundColor: "#1C1C1C", border: "#1C1C1C", color: "lightgray" }} >
                        Ver Perfil
                    </Button>
                </CardBody>
            </Card>
        )
    }
}

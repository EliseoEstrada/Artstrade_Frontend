import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, } from 'reactstrap'

export default class CardUser extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card inverse style={{border: 'none', backgroundColor: "#0E0E0E"  }}>
                <a href="/post">
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/270"
                    width="100%"
                    height="80%"
                    className='p-2'

                />
                <CardImgOverlay >
                    <CardTitle tag="h5" style={{ backgroundColor: "#0B0B0B", opacity: ".8", color:"white", textDecoration: "none"}} >
                        {this.props.user}
                    </CardTitle>
                    <CardText>

                    </CardText>
                    <CardText>
                        <small className="text-muted">

                        </small>
                    </CardText>
                </CardImgOverlay>
                </a>
            </Card>
        )
    }
}

import React, { Component } from 'react'
import { Button } from 'reactstrap';

export class Button_C extends Component {
    render() {
        return (
            <div className="me-3">
                <Button

                    color={this.props.color}

                >
                    {this.props.text}
                </Button>
            </div>
        )
    }
}

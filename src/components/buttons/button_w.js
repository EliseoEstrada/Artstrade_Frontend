import React, { Component } from 'react'
import { Button } from 'reactstrap';

export class Button_W extends Component {
    render() {
        return (
            <div >
                <Button
                    className="w-100"
                    color={this.props.color}

                >
                    {this.props.text}
                </Button>
            </div>
        )
    }
}
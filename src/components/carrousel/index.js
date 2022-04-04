import React, { Component } from 'react'
import { UncontrolledCarousel } from 'reactstrap';

class Carrousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false,
            data: []
        };
    }

    componentWillMount() {
        this.state.data = [
            {
                altText: 'ILUSTRATION',
                caption: 'ILUSTRATION',
                key: 1,
                src: 'https://picsum.photos/id/123/1200/600',

            },
            {
                altText: '3D ART',
                caption: '3D ART',
                key: 2,
                src: 'https://picsum.photos/id/456/1200/600',

            },
            {
                altText: '2D ART',
                caption: '2D ART',
                key: 3,
                src: 'https://picsum.photos/id/678/1200/600',

            },
            {
                altText: 'SKETCHS',
                caption: 'SKETCHS',
                key: 4,
                src: 'https://picsum.photos/id/678/1200/600',

            },
            {
                altText: 'CONCEPT',
                caption: 'CONCEPT',
                key: 5,
                src: 'https://picsum.photos/id/678/1200/600',

            }
        ];
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <UncontrolledCarousel
                items={this.state.data}
            />
        )
    }
}



export default Carrousel




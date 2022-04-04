import React, { Component } from 'react'

import placeholder from '../../assets/img/gif-placeholder.gif'


class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //id: "",
            status: true,
            data: []
        };
    }

    componentWillMount() {

    }

    componentDidMount() {


 
    }

    render() {

        let status = this.state.status;

        let width = this.props.width;
        let href = "/post";

        return (

            <div >

                { status === true ? (
                        <a href={href}>
                            <img
                                src="https://picsum.photos/318/270"
                                className="img-fluid"
                                width={width}
                            />
                        </a>
                ) : (
                    <img
                        src={placeholder}
                        className="img-fluid"
                        width={width}
                    />
                )
                }
            </div>

        )
    }
}


export default Post
import React from 'react';
import StackGrid from "react-stack-grid";

import Post from './post'

class PostsList extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue',
      data: []
    };
  }

  render() {
    return (
        <StackGrid columnWidth={300} >
            {this.state.data.map((pos, index) => (
                <Post key={index} width={pos.width}></Post>
            ))}
        </StackGrid>
    )
  }

  componentDidMount() {

    this.state.data = [
        {width:"80%"},
        {width:"100%"},
        {width:"80%"},
        {width:"100%"},
        {width:"80%"},
        {width:"100%"},
        {width:"80%"},
        {width:"100%"},
        {width:"80%"},
        {width:"100%"},
        {width:"80%"},
        {width:"100%"},
    ]

    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default PostsList;

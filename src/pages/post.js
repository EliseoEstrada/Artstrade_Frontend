import React from 'react';
import Navbar_P from '../components/navbar';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
        <div>
            <Navbar_P/>
            <h1>VENTANA DE POST</h1>
        </div>

    )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Post;

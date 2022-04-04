import React from 'react';
import CardUser from './cardUser';
import Placeholder from '../placeholders/placeholderArtists';
import { CardGroup } from 'reactstrap';

class CardArtistsList extends React.Component {
  constructor() {
    super();
    this.state = {
        status: false,
        data: []
    };
  }

  render() {
    return (
      <div>
      {
        this.state.status === true? (
          <CardGroup>
              {this.state.data.map((user, index) => (
                  <CardUser key={index} user={user.user}/>
              ))}
          </CardGroup>
        ) : (
          <Placeholder text="Cargando usuarios..."/>
        )
      }
      </div>
    )
  }

  componentDidMount() {
    this.setState({
        data: [
            {user:"Neithan Jalfs"},
            {user:"Darian Fixx"},
            {user:"Ian Da Hua"},
            {user:"Michael Jills"},
            {user:"Eddy Jackson"}
        ]
    });

    setTimeout(() => {
        this.setState({
            status: true
        })
    }, 3000)

    this.forceUpdate()
  }
}

export default CardArtistsList;

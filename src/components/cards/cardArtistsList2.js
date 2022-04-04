import React from 'react';
import CardUser2 from './cardUser2';
import Placeholder from '../placeholders/placeholderArtists';
import { CardGroup } from 'reactstrap';

class CardArtistsList2 extends React.Component {
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
                    this.state.status === true ? (
                        <CardGroup>
                            {this.state.data.map((user, index) => (
                                <CardUser2 
                                    key={index}
                                    username={user.username}
                                    category={user.category}
                                    description={user.description}
                                />
                            ))}
                        </CardGroup>
                    ) : (
                        <Placeholder text="Cargando usuarios..." />
                    )
                }
            </div>
        )
    }

  componentDidMount() {
    this.setState({
        data: [
            {
                username:"Neithan Jalfs", 
                category: "ILUSTRADOR DIGITAL", 
                description: "He sido ilustrador digital desde hace mucho tiempo y ahora me dedico al arte de forma profesional."
            },
            {
                username:"Ryan Nethard", 
                category: "Animador 3D", 
                description: "Me dedico a la animacion 3D de forma profesional. Si necesitan algo, no duden en contactarme."
            },
            {
                username:"Noah Bready", 
                category: "Concept Artist", 
                description: "Me dedico al concept desde hace 10 años y he trabajado en muchos lugares que me han ayudado a progresar como dibujante."
            },
            {
                username:"Lian Miks", 
                category: "Modelador 3D", 
                description: "Hacer renders de calidad es mi prioridad, te aseguro que si trabajas conmigo, no te arrepentiras."
            },
            {
                username:"Mau Natz", 
                category: "StoryBoard Artist", 
                description: "Me dedico al storyboard desde hace 25 años, mi experiencia puede ayudarte a hacer que tu proyecto renazca y sea mucho mas vistozo para las personas."
            },
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

export default CardArtistsList2;

import mohamed from './mohamed.jpg'; 

import './App.css';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    person: {
      fullName: 'mohamed amine jaber',
      bio: 'full stack js in gomycode', 
      imgSrc: mohamed, 
      profession: 'full stack js',
    },
    show: false, 
    intervalId: null, 
    mountedTime: null,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);

    this.setState({ intervalId, mountedTime: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div>

        <Button onClick={this.toggleShow}>
          {
            show ? 'Masquer le profil' : 'Afficher le profil'}
        </Button>
        {show && (
          <Card style={{ width: '18rem', marginTop: '20px' }}>
            <Card.Img variant="top" src={imgSrc} alt={fullName} />
            <Card.Body>
              <Card.Title>{fullName}</Card.Title>
              <Card.Text>{bio}</Card.Text>
              <Card.Text>{profession}</Card.Text>
            </Card.Body>
          </Card>
        )}
        <p>Heure de montage : {mountedTime && mountedTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
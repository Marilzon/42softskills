import React from 'react';
import { Link } from 'react-router-dom';

import darkJpg from '../../assets/images/dark1.jpg';
import falaDevPng from '../../assets/images/faladev.png';

import { Container, Image } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <p>we are soft skills society</p>

        <figure>
          <Image src={darkJpg} alt="hackingIcon" />
          <Image src={falaDevPng} alt="falaDev" />
        </figure>

        <Link to="/rocketinvasion">
          Após a invasão de hackers no servidor da RocketSeat, dados sobre a
          nova era de soft skills secretas foram expostas!
        </Link>
      </Container>
    </>
  );
};

export default Home;

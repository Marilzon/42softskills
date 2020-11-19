import React from 'react';
import { Link } from 'react-router-dom';

import hackingIcon from '../../assets/hacking-icon-26.jpg';
import falaDev from '../../assets/faladev.png';

import { Container, ImageContainer, Image } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <h1>soft skills society</h1>

        <ImageContainer>
          <Image src={hackingIcon} alt="hackingIcon" />
          <Image src={falaDev} alt="falaDev" />
        </ImageContainer>

        <Link to="/rocketinvasion">
          Após a invasão do servidor da RocketSeat dados sobre a soft skills
          secretas deles foram vazados!
        </Link>
      </Container>
    </>
  );
};

export default Home;

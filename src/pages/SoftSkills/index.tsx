import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Credits: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Credits</h1>
      </Container>

      <Link to="/">Voltar</Link>
    </>
  );
};

export default Credits;

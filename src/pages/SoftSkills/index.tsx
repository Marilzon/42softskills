import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const SoftSkills: React.FC = () => {
  return (
    <>
      <Container>
        <Link to="/">Voltar</Link>
        <code>./bin/logs/decrypted/!</code>
      </Container>
    </>
  );
};

export default SoftSkills;

import React from 'react';
import { Link } from 'react-router-dom';

import api from '../../data/softSkills.json';

import { Container, Content, VideoContainer, IframeContainer } from './styles';

const SoftSkills: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <h3>./bin/rocketlogs/decrypted/</h3>
          <Link to="/">VOLTAR</Link>
          <ul>
            {api.map((data: { id: number; description: string }) => {
              return <li key={data.id}>{data.description}</li>;
            })}
          </ul>
        </Content>

        <VideoContainer>
          <h3>./bin/rocketvideos/decrypted/</h3>

          <IframeContainer>
            <p>Detalhando alguns revelados acima </p>
            <iframe
              title="video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qrB94YucxFw"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </IframeContainer>
        </VideoContainer>
      </Container>
    </>
  );
};

export default SoftSkills;

import React from 'react';
import { Link } from 'react-router-dom';

import api from '../../data/softSkills.json';

import { Container, Content, VideoContainer, IframeContainer } from './styles';

const SoftSkills: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Link to="/">VOLTAR</Link>
          <h3>./bin/rocketlogs/soft-skills/decrypted/*</h3>

          <ul>
            {api.map((data: { id: number; description: string }) => {
              return <li key={data.id}>{data.description}</li>;
            })}
          </ul>
        </Content>

        <VideoContainer>
          <h3>./bin/rocketvideos/soft-skill/decrypted/*</h3>

          <IframeContainer>
            <p>Detalhando algumas skills reveladas acima:</p>
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

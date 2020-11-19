import styled from 'styled-components';
import { tint } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  flex-flow: column;

  align-items: center;
  place-content: center;

  a {
    text-align: center;
    padding: 18px;
    text-decoration: none;

    background-color: #2b403e;
    color: #1c8c0b;
    transition: 0.6s;

    &:hover {
      background: ${tint(0.25, '#00f')};
    }
  }
`;

export const ImageContainer = styled.div`
  margin-top: 5%;
  max-height: 600px;
`;

export const Image = styled.img`
  width: 360px;
`;

export const Text = styled.p``;

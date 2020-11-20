import styled from 'styled-components';
import { tint } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  flex-flow: column;

  align-items: center;
  justify-content: center;

  figure {
    display: flex;
    align-items: center;
    flex-flow: wrap;
    justify-content: center;

    img {
      margin: 0 5px;
    }
  }

  a {
    text-align: center;
    padding: 18px;
    text-decoration: none;

    background-color: #2b403e;
    color: #1c8c0b;
    transition: 0.6s;

    &:hover {
      background: ${tint(0.25, '#004')};
    }
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  transition: 0.6s;

  &:hover {
    filter: grayscale(90%);
  }
`;

export const Text = styled.p``;

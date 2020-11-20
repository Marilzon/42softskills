import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 10px;
`;

export const Content = styled.div`
  flex: 1;
  h3 {
    background-color: #99b4bf;
    color: #0d0d0d;

    padding: 4px;
    margin: 2px;
  }

  ul li {
    color: #1c8c0b;
    margin: 10px 0 0 20px;
    list-style: none;
    transition: 0.6s;

    &:hover {
      text-decoration: underline;
    }
  }

  a {
    color: #f2ede4;
    text-align: center;
  }
`;

export const VideoContainer = styled.div`
  h3 {
    background-color: #99b4bf;
    color: #0d0d0d;

    padding: 4px;
    margin: 2px;
  }
`;

export const IframeContainer = styled.div`
  text-align: center;

  p {
    background-color: #0d0d0d;
  }
`;

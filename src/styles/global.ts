import { createGlobalStyle } from 'styled-components';

import kaurJPG from '../assets/images/background.jpg';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 body {
  -webkit-font-smoothing: antialiased;
  background: #0d0d0d url(${kaurJPG}) no-repeat;
  background-attachment: fixed;
  background-size: cover;

  color: #f2ede4;

  a {
    color: #f2ede4;
    margin-right: 18px;
  }
 }

 body, button {
  font: 16px Fira Code, monospace;
 }

 #root {
  margin: 0 auto;
 }

 button {
  cursor: pointer;
 }
`;

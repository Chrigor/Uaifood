import { createGlobalStyle } from "styled-components";
import Background from '../Assets/Images/bg.jpg';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border:0;
    outline:0;
    font-family: 'Poppins', sans-serif;
  }
  body {
    position:relative;
    background-image: url(${Background});
    background-position:center;
    background-size:cover;
  }
  
  :root {
    --black:#333;
    --green:#39b54a;
    --gray-light:#A5A5A5;
    --white: #fff;
    --placeholder:#767676;
    --datalist-text:#484848;
    --border: #ddd;
  }
`;
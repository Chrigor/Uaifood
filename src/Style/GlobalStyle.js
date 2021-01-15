import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  html, body, #root {
    height: 100%;
    width:100%;
  }

  *, button, input {
    border:0;
    outline:0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    position:relative;
    font-size: calc(1em + 1vw);
  }

  ul {
      list-style: none;
      padding: 0;
      margin: 0;
  }
  
  :root {
    --black:#333;
    --green:#39b54a;
    --gray-light:#A5A5A5;
    --white: #fff;
    --placeholder:#767676;
    --datalist-text:#484848;
    --border: #ddd;
    --background-list-restaurant: #FAFAFA;
    --brackground-loading: rgba(50,50,50,0.5);
    --brackground-filters: rgba(50,50,50,1);
    --border-light: #eee;
  }
`;
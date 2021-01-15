import styled from 'styled-components';
import Background from '../../Assets/Images/bg.jpg';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  height: 350px;
  width: 400px;

  cursor:pointer;
  
  box-shadow: 0 0 3px var(--gray-light);

  > div {
    height:50%;
  }

  .content {
    display:flex;
    flex-direction:column;
    justify-content:space-around;

    padding: 8px;

    h1 {
      font-size:20pt;
      font-family: 'Open Sans', sans-serif;
      font-weight:600;
      color:var(--black);
    }

    h3 {
      font-size:18pt;
      font-family: 'Open Sans', sans-serif;
      font-weight:400;
      color:var(--gray-light);
    }

    span {
      padding-top:8px;
      font-size:14pt;
      color:var(--green);
    }

    .content-buttons {  

      > button {
        cursor:pointer;
        margin-right:8px;
      }

      width: 100%;

      .button-highlight{
        padding:4px 8px;
        background: var(--green);
        font-size:18pt;
        font-family: 'Open Sans', sans-serif;
        font-weight:600;
        color:var(--white);
      }

      .button-outlight {
        padding:4px 8px;
        font-size:18pt;
        font-family: 'Open Sans', sans-serif;
        font-weight:400;
        color:var(--datalist-text);
      }
    }
  }

  @media(max-width: 800px) { 
        justify-self:center;
    }
`;

export const Cover = styled.div`
  background-image: url(${(props) => props.photo.length ? props.photo : Background});

  background-position:center;
  background-size:cover;
`

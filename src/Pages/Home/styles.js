import styled from 'styled-components';
import Background from '../../Assets/Images/bg.jpg';

export const Container = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    background-image: url(${Background});
    background-position:center;
    background-size:cover;
    
    width:100%;
    min-height:100%;

    &::after {
        content:'';
        width:8px;
        height:8px;
    }

    > header {
        padding: 24px 16px;

        > img {
            margin-top: 16px;
        }
    }
   
`;

export const ContainerMiddlew = styled.div`
        width: 100%;
        max-width:1200px;

        transform: translateY(-50%);
        
        > h1 {      
            color: var(--white);
            font-family: 'Open Sans', sans-serif;
            font-weight: 800;
            font-size:2em;
        }   

    
    @media(max-width: 800px) {
        transform: translateY(0%);

        h1 {
            text-align: center;
        }
    }
`

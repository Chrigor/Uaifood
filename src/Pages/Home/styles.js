import styled from 'styled-components';

export const Container = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    width:100%;
    height:100%;

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

        > h1 {
            color: var(--white);
            font-family: 'Open Sans', sans-serif;
            font-weight: 800;
            font-size:60pt;
        }   
`

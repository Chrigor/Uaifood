import styled from 'styled-components';

export const Container = styled.div`
    grid-area:"CI";
    padding: 8px;

    height:100%;

    display:flex;
    flex-direction:column;

    > h1 {
        font-size:24pt;
        font-family: 'Open Sans', sans-serif;
        font-weight:400;
        color:var(--black);
    }

    > span {
        font-size: 12pt;
        margin: 12px 0px;
    }

    .grid {
        margin-top: 16px;
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap:18px;
    }

    > button {
        cursor:pointer;
        margin-top: 16px;
        font-size: 18pt;
        width: 100%;
        padding: 8px;

        text-align:center;
        background: var(--green);
        color:var(--white);

        transition:all 0.3s;

        &:hover {
            opacity:0.85;
        }
    }

    @media(max-width: 800px) { 
        > h1 {
            text-align:center;
            margin-bottom:16px;
        }

        .grid {
            width: 100%;

            margin: 8px auto;
            grid-template-columns: 1fr;
        }
    }
`;

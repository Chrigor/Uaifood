import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;

    .container-content {
        margin:0 auto;
        width: 100%;
        max-width:1600px;

        display:grid;
        
        grid-template-columns: 290px auto; 
        grid-template-rows: 90vh auto;
        grid-template-areas:
            "CF CI"
            "CF CI";
        grid-column-gap:16px;
    }

    @media(max-width: 800px) {
        .container-content {
            margin-top:32px;
            grid-template-columns:  auto; 
            grid-template-rows: auto;
            grid-template-areas:
                "CI";
        }
    }
    
`;

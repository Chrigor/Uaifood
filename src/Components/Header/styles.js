import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10vh;

    padding: 8px;

    background: var(--white);

    border-bottom:1px solid var(--border);

    margin-bottom: 8px;

    .container-header {

        display:flex;
        align-items:center;

        margin:0 auto;

        width: 100%;
        max-width:1600px;

        > img {
            width:100%;
            height: 100%;

            max-height:52px;
            max-width:132px;

            margin-right:80px;

            transform: translateY(20%);
        }
    }

    @media(max-width: 800px) {

        border:none;
        
        margin:16px 0px 0px 0px;
        height:auto;

        .container-header {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;

            margin:16px auto;

            > img {
                margin:0;
            }
        }
    }   

`;

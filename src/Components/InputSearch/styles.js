import styled from 'styled-components';

export const Container = styled.div`
     display:flex;
            justify-content:space-between;
            align-items:center;

            margin-top:16px;

            .containerInput {
                position:relative;
                width:100%;

                i {
                    color:var(--placeholder);
                    position:absolute;
                
                    top:50%;
                    left:10px;

                    transform: translateY(-50%);

                    font-size:24pt;
                }
                
                input {
                    width:100%;
                    padding: 8px 8px 8px 48px;
                    font-size:24pt;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 400;
                    color:var(--placeholder);
                }              
            }

            > button {
                cursor:pointer;

                font-size:24pt;
                font-weight:600;

                margin-left: 24px;
                width: 320px;
                padding: 8px;

                background:var(--green);
                color:var(--white);

                box-sizing: content-box;
                text-transform: uppercase;
            }
`;

export const ContainerSuggestion = styled.div`
    top:50px;
    left:0;
    background: var(--white);
    position:absolute;
    width: 100%;
    padding: 8px 16px;

    .text {
        font-family: 'Open Sans', sans-serif;
        text-align:left;
        font-weight:400;
    }

    > button {
        cursor:pointer;

        width:100%;
        padding:8px 4px;

        border-top:1px solid var(--border);
        background:transparent;

        display:flex;
        flex-direction:column;
        justify-content:flex-start;

        > h1 {
            font-size: 24pt;
            color:var(--datalist-text);
        }

        > span {
            width:100%;
            font-size:14pt;
            color:var(--placeholder);
        }
    }
`


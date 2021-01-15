import styled from 'styled-components';

export const Container = styled.div`
            display:flex;
            justify-content:space-between;
            align-items:center;

            margin-top:16px;
            width: 100%;

            margin-bottom:8px;

            .containerInput {
                position:relative;
                width:100%;

                border: 1px solid var(--border);

                i {
                    color:var(--placeholder);
                    position:absolute;
                
                    top:50%;
                    left:10px;

                    transform: translateY(-50%);

                    font-size:${props => props.fontSize}pt;
                }
                
                input {
                    width:100%;
                    padding: 8px 8px 8px 48px;
                    font-size:${props => props.fontSize}pt;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 400;
                    color:var(--placeholder);
                }              
            }

            > button {
                cursor:pointer;

                font-size:${props => props.fontSize}pt;
                font-weight:600;

                margin-left: 24px;

                width:${props => props.fontSize == 16 ? 200 : 320}px;
                padding: 8px;

                background:var(--green);
                color:var(--white);

                box-sizing: content-box;
                text-transform: uppercase;

                transition:all 0.3s;

                &:hover {
                    opacity:0.85;
                }
            }


              
        @media(max-width: 800px) {
            padding: 8px;
            flex-direction:column;

            > button {
                margin-top: 16px;

                width:150px;
            }
        }
`;

export const ContainerSuggestion = styled.div`
    display:${(props) => props.display};
    top: ${props => props.fontSize === 16 ? 40 : 50};
    left:0;
    background: var(--white);
    position:absolute;
    width: 100%;
    padding: 8px 16px;

    border:${props => props.fontSize === 16 ? '1px solid var(--border-light)' : 'none'};

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
            font-size:${props => props.fontSize}pt;
            color:var(--datalist-text);
        }

        > span {
            width:100%;
            font-size:${window.location.pathname.includes('list-restaurant') ? 8 : 14}pt;
            color:var(--placeholder);
        }
    }
`


import styled from 'styled-components';

export const Container = styled.div`
    grid-area:"CF";
    border:1px solid var(--border);

    height:100%;

    display:flex;
    flex-direction:column;

    box-shadow: 0 0 3px var(--gray-light);

    .container-mobile {
        display:none;        
    }


        .close-filter-modal {
            display:none;
            cursor:pointer;
            border:none;
            background:transparent;
            transition:all 0.3s;

            i {
                font-size: 3.5em;
                color: var(--green);
            }
        }

        .close-filter-modal:hover, .button-filter:hover{
            opacity:0.5;
        }
    
    
    .container-filter {
        padding: 24px 24px 8px 24px;

        > h1 {
            color: var(--gray-light);
            font-size:18pt;
            font-family: 'Open Sans', sans-serif;
            font-weight:400;
            margin-bottom:12px;
        }

        ul  {
            margin-top: 8px;
            margin-left:8px;
        }

        ul > li {
            display:flex;
            align-items:center;
            margin-bottom: 8px;
        }

        ul > li > label, i {
            font-size:18pt;
        }

        ul > li > input {
            min-width: 20px;
            min-height: 20px;
        }

        ul > li > label{
            margin-left: 16px;
            color:var(--datalist-text);
            font-family: 'Open Sans', sans-serif;
            font-weight:400;
        }

        ul > li > i{
            border:1px solid var(--datalist-text);
            background: transparent;
        }

    
    }


    @media(max-width: 800px) {
        border:none;
        box-shadow: 0px 0px 0px red;

        .container-filters-active {
            display:flex!important;
            z-index:1;
        }

        .container-filters {
            position:fixed;

            display:none;
            flex-direction:column;

            justify-content:center;
            align-items:center;

            padding: 20px;

            width: 100%;
            height:100%;

            top:0;
            left:0;

            padding-top:16px;
            
            background: var(--brackground-filters);

          

            transition: all 0.4s;
            
            .container-filter {
                display:flex;
                flex-direction:column;
                flex:1;
                /* height: 100%; */
                width: 100%;
                overflow-y:auto;

                > h1 {
                    color: var(--white);
                    font-size:1em;
                }

                ul > li > label{
                    margin-left: 1em;
                    color:var(--white);
                    font-family: 'Open Sans', sans-serif;
                    font-weight:400;
                    font-size:1em;
                }
            }

            .close-filter-modal {
                display:block;
                align-self:flex-end;
                margin-right:16px;
            }
        }


        .container-mobile {
            display:flex;
            width: 100%;
            justify-content:flex-end;

            margin-bottom: 8px;
            padding: 0px 16px;

            > button {
                cursor:pointer;
                padding:8px;
                border:0;
                background: transparent;

                > i {
                    font-size: 3em;
                    color:var(--green);
                }
            }
        }
    }
`;

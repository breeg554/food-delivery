import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 10px; // 1rem = 10px 
    }
    body,button{
        font-family: 'Montserrat', sans-serif;
    }
    button:focus,
    input:focus,
    select:focus {
        outline: none;
    }
    body.user-is-tabbing *:focus {
        outline: 3px solid red !important; 
    }
    body.user-is-tabbing a:focus {
        background-color: #fdb827; 
    }
    ${({ theme }) => theme.mediaQ.xl} {
        button{
            cursor: pointer;
        }
    }
`;

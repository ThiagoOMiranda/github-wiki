import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
    }

    body {
        height: 100%;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        background: rgb(81,94,123);
        background: linear-gradient(0deg, rgba(81,94,123,1) 0%, rgba(0,28,64,1) 100%);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    @media (max-width: 768px) {
        * {
            font-size: 14px;
        }
    }
`;

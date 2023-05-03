import styled from 'styled-components/macro';

export const StyledHome = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.layoutBg};

    .left-section {
        width: 20%;
        border-radius: 0px 36px 36px 0px;
        background: ${(props) => props.theme.navbg};
        padding: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media screen and (max-width: 1200px) {
            padding: 45px 25px;
            width: 25%;
        }

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .right-section {
        padding: 45px 0;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media screen and (max-width: 768px) {
            width: 100%;
            padding: 0 0 20px 0;
        }
    }

    .chats-container {
        overflow: auto;
        padding: 0 50px;

        @media screen and (max-width: 1200px) {
            padding: 0 30px;
        }
        @media screen and (max-width: 768px) {
            height: 80%;
            position: absolute;
            top: 80px;
        }
        @media screen and (max-width: 580px) {
            padding: 0 15px;
        }
    }

    .searchbar-container {
        padding: 0 50px;

        @media screen and (max-width: 1200px) {
            padding: 0 30px;
        }

        @media screen and (max-width: 768px) {
            position: fixed;
            bottom: 10px;
        }
        @media screen and (max-width: 580px) {
            width: calc(100vw - 30px);
            padding: 0 15px;
        }
    }
`;

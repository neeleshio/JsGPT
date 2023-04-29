import styled from 'styled-components';

export const StyledHome = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.layoutBg};

    .home__left-container {
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

    .home__right-container {
        padding: 45px 0;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media screen and (max-width: 768px) {
            width: 100%;
            padding: 30px 0 20px 0;
        }

        @media screen and (max-width: 580px) {
            width: 100%;
            padding: 30px 0 20px 0;
        }
    }
`;

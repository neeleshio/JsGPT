import styled from 'styled-components/macro';

export const StyledSearchBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    input {
        background: ${(props) => props.theme.inputBg};
        border-radius: 12px 0 0 12px;
        height: 60px;
        border-width: 0px;
        width: 100%;
        font-size: 16px;
        padding: 0 0 0 30px;
        outline: none;
        z-index: 1;
        box-shadow: rgb(22 23 24 / 6%) 0px 10px 38px -10px, rgb(22 23 24 / 2%) 0px 10px 20px -15px;

        @media screen and (max-width: 768px) {
            height: 50px;
        }
    }
`;

export const StyledSendButton = styled.button`
    background: #10a37f;
    border-radius: 0px 12px 12px 0px;
    width: 80px;
    height: 60px;
    border-width: 0px;
    cursor: pointer;

    svg {
        width: 20px;
        margin-top: 6px;
    }

    @media screen and (max-width: 768px) {
        height: 50px;
    }
`;

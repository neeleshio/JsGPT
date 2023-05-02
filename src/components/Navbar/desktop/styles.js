import styled from 'styled-components/macro';

export const StyledNavbar = styled.div`
    padding: 30px 25px;

    button {
        display: flex;
        align-items: center;
        padding: 15px 0;
        cursor: pointer;
        background: transparent;
        border: none;

        svg {
            width: 22px;
            height: 22px;
        }

        span {
            padding-left: 16px;
            font-size: 14px;
            color: ${(props) => props.theme.primary};
        }
    }

    @media screen and (max-width: 992px) {
        padding: 30px 10px;
    }
`;

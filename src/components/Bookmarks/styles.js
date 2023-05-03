import styled from 'styled-components/macro';

export const StyledBookmark = styled.div`
    background: ${(props) => props.theme.bookmarksBg};
    border-radius: 20px;
    padding: 30px 25px;
    height: 50%;
    font-size: 14px;

    .bookmark__wrapper {
        cursor: pointer;
    }

    hr {
        display: block;
        margin: 14px 0;
    }
`;

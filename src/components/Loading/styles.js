import styled from 'styled-components';

export const StyledLoading = styled.div`
    display: inline-flex;
    align-items: center;
    color: #ffffff;
    margin-left: 20px;
    margin-bottom: 20px;
    background: #262626;
    border-radius: 6px;
    padding: 0 10px;
    font-size: 12px;

    span {
        margin-right: 10px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 0;
    }
`;

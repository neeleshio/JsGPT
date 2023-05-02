import React from 'react';
import { StyledLoading } from './styles';
import { ThreeDots } from 'react-loader-spinner';

function Loading() {
    return (
        <StyledLoading>
            <span>Thinking</span>
            <ThreeDots
                height="30"
                width="30"
                radius="9"
                color="#10a37f"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </StyledLoading>
    );
}

export default Loading;

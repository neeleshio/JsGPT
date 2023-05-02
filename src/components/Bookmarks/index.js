import React from 'react';
import { StyledBookmark } from './styles';

function Bookmarks({ data, onClick }) {
    return (
        <StyledBookmark>
            {data.map((el) => (
                <div className="bookmark__wrapper" onClick={() => onClick(el)}>
                    <span>{el}</span>
                    <hr />
                </div>
            ))}
        </StyledBookmark>
    );
}

export default Bookmarks;

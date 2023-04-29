import React, { forwardRef } from 'react';
import Send from '../Svg/Send';
import { StyledSearchBox } from './styles';

function SearchBox({ handleFetch, setInputQuestion, inputRef }) {
    return (
        <StyledSearchBox>
            {/* <span className="shadow"></span> */}
            <input
                type="text"
                placeholder="Ask a question..."
                onChange={(e) => setInputQuestion(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleFetch(e)}
                ref={inputRef}
            />
            <button onClick={handleFetch}>
                <Send />
            </button>
        </StyledSearchBox>
    );
}

export default forwardRef(SearchBox);

import React from 'react';
import { StyledQuestionBubble } from './styles';

function QuestionBubble({ el, idx }) {
    return (
        <StyledQuestionBubble key={idx}>
            <div className="bubble__text">{el.ques}</div>
            <div className="bubble__avatar">
                <span>
                    <img src="/man-avatar.webp" />
                </span>
            </div>
        </StyledQuestionBubble>
    );
}

export default QuestionBubble;

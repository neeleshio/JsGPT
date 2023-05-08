import React from 'react';
import { StyledAnswerBubble } from './styles';
import GptLogo from '../Svg/GptLogo';
import Copy from '../Svg/Copy';
import Bookmark from '../Svg/Bookmark';

function AnswerBubble({ el, idx, handleCopyAnswer, handleBookmark }) {
    return (
        <StyledAnswerBubble>
            <div className="bubble__avatar">
                <span>
                    <GptLogo />
                </span>
            </div>
            <div className="bubble__text" style={{ paddingBottom: (idx === 0 || el.error) && 20 }}>
                <div>{el.ans}</div>
                {el.bookmarked !== undefined && !el.error && (
                    <div className="bubble__toolbar">
                        <button className="copy__btn" onClick={() => handleCopyAnswer(el.ans)}>
                            <Copy />
                        </button>
                        <button
                            className="bookmark__btn"
                            onClick={() => handleBookmark(el.ques, idx)}>
                            <Bookmark
                                fill={el.bookmarked ? '#10A37F' : ''}
                                stroke={el.bookmarked ? '#10A37F' : '#939393'}
                            />
                        </button>
                    </div>
                )}
            </div>
        </StyledAnswerBubble>
    );
}

export default AnswerBubble;

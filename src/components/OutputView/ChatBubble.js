import React from 'react';
import { useSelector } from 'react-redux';
import Bookmark from '../Svg/Bookmark';
import Copy from '../Svg/Copy';
import GptLogo from '../Svg/GptLogo';
import Loading from './Loading';
import { StyledChatBubble } from './styles';

function ChatBubble({ data, loading, handleBookmark, handleCopyAnswer }) {
    return (
        <div>
            {data.map((el, idx) => (
                <>
                    {el.ques && (
                        <StyledChatBubble key={idx}>
                            <div className="bubble__text">{el.ques}</div>
                            <div className="bubble__avatar">
                                <span>
                                    <img src="/man-avatar-6299539-5187871.webp" />
                                </span>
                            </div>
                        </StyledChatBubble>
                    )}
                    {el.ans && (
                        <StyledChatBubble bubble={'answer'}>
                            <div className="bubble__avatar">
                                <span>
                                    <GptLogo />
                                </span>
                            </div>
                            <div
                                className="bubble__text"
                                style={{ paddingBottom: idx === 0 && 20 }}>
                                <div>{el.ans}</div>
                                {el.bookmarked !== undefined && (
                                    <div className="bubble__toolbar">
                                        <button onClick={() => handleCopyAnswer(el.ans)}>
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
                        </StyledChatBubble>
                    )}
                </>
            ))}
            {loading && <Loading />}
        </div>
    );
}

export default ChatBubble;

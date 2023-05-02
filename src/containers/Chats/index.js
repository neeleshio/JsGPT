import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnswerBubble from '../../components/ChatBubble/answer';
import QuestionBubble from '../../components/ChatBubble/question';
import Loading from '../../components/Loading';
import { handleInputQuery, resetBookmarks, setBookmarks } from '../../redux/queryReducer';

function Chats() {
    const { data, thinking, bookmarks } = useSelector((store) => store.queryReducer);
    const dispatch = useDispatch();

    const handleBookmark = (item, id) => {
        const obj = [...data];

        if (obj[id]['bookmarked']) {
            obj[id] = {
                ...data[id],
                bookmarked: false
            };
            const removeBookmark = bookmarks.filter((el) => el !== item);
            dispatch(resetBookmarks(removeBookmark));
        } else {
            obj[id] = {
                ...data[id],
                bookmarked: true
            };
            dispatch(setBookmarks(item));
        }

        dispatch(handleInputQuery(obj));
    };

    const handleCopyAnswer = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <div>
            {data.map((el, idx) => (
                <>
                    {el.ques && <QuestionBubble el={el} idx={idx} />}
                    {el.ans && (
                        <AnswerBubble
                            handleBookmark={handleBookmark}
                            handleCopyAnswer={handleCopyAnswer}
                            el={el}
                            idx={idx}
                        />
                    )}
                </>
            ))}
            {thinking && <Loading />}
        </div>
    );
}

export default Chats;

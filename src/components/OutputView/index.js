import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatsContainer from '../../containers/Chats';
import {
    handleInputQuery,
    setBookmarks,
    setThinking,
    resetBookmarks
} from '../../redux/queryReducer';
import { INITIAL_DATA_STATE } from '../constants';
import SearchBox from '../SearchBox';
import ChatBubble from './ChatBubble';
import MobileBtns from './MobileBtns';
import MobileNav from './MobileNav';
import { StyledOutputView } from './styles';

function OutputView() {
    const dispatch = useDispatch();
    const { data, thinking, bookmarks } = useSelector((store) => store.queryReducer);
    const { darkTheme } = useSelector((store) => store.themeReducer);
    const [inputQuestion, setInputQuestion] = useState('');
    const [resp, setResp] = useState(null);
    const inputRef = useRef(null);
    const chatEndRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setThinking(false));
            dispatch(handleInputQuery([INITIAL_DATA_STATE]));
        }, 1000);
    }, []);

    useEffect(() => {
        if (resp) handleData();
    }, [resp]);

    useEffect(() => {
        if (inputQuestion) {
            chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [thinking]);

    const handleData = () => {
        dispatch(setThinking(false));
        const obj = [...data];

        obj[obj.length - 1] = {
            ...data[obj.length - 1],
            ques: inputQuestion,
            ans: resp.text,
            error: '',
            bookmarked: false
        };

        dispatch(handleInputQuery(obj));
    };

    const handleFetch = async () => {
        inputRef.current.value = '';
        dispatch(setThinking(true));

        const obj = [...data];

        obj.push({
            ques: inputQuestion,
            ans: '',
            error: ''
        });

        dispatch(handleInputQuery(obj));

        try {
            const response = await fetch(`http://localhost:5601/query?text=${inputQuestion}`);
            const data = await response.json();
            setResp(data);
        } catch (error) {
            setResp(error);
        }
    };

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
        <StyledOutputView>
            <div className="outputview__top">
                <MobileNav />
                <ChatsContainer />
                <div ref={chatEndRef}></div>
            </div>
            <div className="outputview__bottom">
                {/* <MobileBtns darkTheme={darkTheme} /> */}
                <SearchBox
                    handleFetch={handleFetch}
                    setInputQuestion={setInputQuestion}
                    inputRef={inputRef}
                />
            </div>
        </StyledOutputView>
    );
}

export default OutputView;

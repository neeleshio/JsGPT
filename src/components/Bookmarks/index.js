import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputQuery, setThinking } from '../../redux/queryReducer';
import { StyledBookmark } from './styles';

function Bookmarks() {
    const { data, bookmarks } = useSelector((store) => store.queryReducer);
    const dispatch = useDispatch();
    const [resp, setResp] = useState(null);

    const handleSelectBookmark = (bookmark) => {
        const obj = [...data];
        obj.push({
            ques: bookmark,
            ans: '',
            error: ''
        });

        dispatch(handleInputQuery(obj));
        dispatch(setThinking(true));

        handleFetch(bookmark);
    };

    useEffect(() => {
        if (resp) handleData();
    }, [resp]);

    const handleData = () => {
        dispatch(setThinking(false));

        const obj = [...data];

        obj[obj.length - 1] = {
            ...data[obj.length - 1],
            ans: resp.text,
            error: '',
            bookmarked: false
        };

        dispatch(handleInputQuery(obj));
    };

    const handleFetch = async (bookmark) => {
        try {
            const response = await fetch(`http://localhost:5601/query?text=${bookmark}`);
            const data = await response.json();
            setResp(data);
        } catch (error) {
            setResp(error);
        }
    };

    return (
        <StyledBookmark>
            {bookmarks.map((el) => (
                <div className="bookmark__wrapper" onClick={() => handleSelectBookmark(el)}>
                    <span>{el}</span>
                    <hr />
                </div>
            ))}
        </StyledBookmark>
    );
}

export default Bookmarks;

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bookmarks from '../../components/Bookmarks';
import {
    handleHamburgerMenu,
    handleInputQuery,
    handleShowBookmarks,
    setThinking
} from '../../redux/queryReducer';

function Bookmark() {
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
        dispatch(handleShowBookmarks(false));
        dispatch(handleHamburgerMenu(false));

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
            error: resp.error,
            bookmarked: false
        };

        dispatch(handleInputQuery(obj));
    };

    const handleFetch = async (bookmark) => {
        try {
            const response = await fetch(`${process.env.API_ENDPOINT}/query?text=${bookmark}`);
            const data = await response.json();
            setResp(data);
        } catch (error) {
            setTimeout(() => {
                setResp({
                    text: 'Something went wrong. Pls try again.',
                    error: true
                });
            }, 1000);
        }
    };

    return (
        <>
            <Bookmarks onClick={handleSelectBookmark} data={bookmarks} />
        </>
    );
}

export default Bookmark;

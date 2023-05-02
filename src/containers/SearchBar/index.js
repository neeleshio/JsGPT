import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_DATA_STATE } from '../../components/constants';
import SearchBox from '../../components/SearchBox';
import { handleInputQuery, setThinking } from '../../redux/queryReducer';

function SearchBar() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const [inputQuestion, setInputQuestion] = useState('');
    const [resp, setResp] = useState(null);
    const { data } = useSelector((store) => store.queryReducer);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setThinking(false));
            dispatch(handleInputQuery([INITIAL_DATA_STATE]));
        }, 1000);
    }, []);

    useEffect(() => {
        if (resp) handleData();
    }, [resp]);

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

    return (
        <>
            <SearchBox onClick={handleFetch} onChange={setInputQuestion} inputRef={inputRef} />
        </>
    );
}

export default SearchBar;

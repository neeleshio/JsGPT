import { createSlice } from '@reduxjs/toolkit';
import { BOOKMARKS } from '../components/constants';

const initialState = {
    data: [
        {
            ques: '',
            ans: '',
            error: ''
        }
    ],
    inputQuestion: '',
    thinking: true,
    bookmarks: BOOKMARKS,
    showHamburgerMenu: false,
    showBookmarks: false
};

const queryReducer = createSlice({
    name: 'query',
    initialState,
    reducers: {
        handleInputQuery(state, { payload }) {
            state.data = payload;
        },
        setInputQuestion(state, { payload }) {
            state.inputQuestion = payload;
        },
        setThinking(state, { payload }) {
            state.thinking = payload;
        },
        setBookmarks(state, { payload }) {
            const arr = [...state.bookmarks];
            arr.push(payload);
            state.bookmarks = arr;
        },
        resetBookmarks(state, { payload }) {
            state.bookmarks = payload;
        },
        handleHamburgerMenu(state) {
            state.showHamburgerMenu = !state.showHamburgerMenu;
        },
        handleShowBookmarks(state, { payload }) {
            state.showBookmarks = payload;
        }
    }
});

export const {
    handleInputQuery,
    setInputQuestion,
    setThinking,
    setBookmarks,
    resetBookmarks,
    handleHamburgerMenu,
    handleShowBookmarks
} = queryReducer.actions;

export default queryReducer.reducer;

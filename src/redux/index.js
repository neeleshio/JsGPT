import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeReducer';
import queryReducer from './queryReducer';

const store = configureStore({
    reducer: {
        themeReducer,
        queryReducer
    }
});

export default store;

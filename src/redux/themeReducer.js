import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkTheme: true
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        handleToggleTheme(state) {
            state.darkTheme = !state.darkTheme;
        }
    }
});

export const { handleToggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

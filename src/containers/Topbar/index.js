import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_DATA_STATE, nav_items } from '../../components/constants';
import MobileNav from '../../components/Navbar/mobile';
import {
    handleHamburgerMenu,
    handleInputQuery,
    handleShowBookmarks,
    setThinking
} from '../../redux/queryReducer';
import { handleToggleTheme } from '../../redux/themeReducer';

function Topbar() {
    const dispatch = useDispatch();
    const { showHamburgerMenu, showBookmarks } = useSelector((store) => store.queryReducer);
    const { darkTheme } = useSelector((store) => store.themeReducer);

    const handleOnClick = (title) => {
        dispatch(handleHamburgerMenu());
        switch (title) {
            case 'Login':
                break;
            case 'Clear Conversation':
                dispatch(setThinking(true));
                dispatch(handleInputQuery([]));
                setTimeout(() => {
                    dispatch(handleInputQuery([INITIAL_DATA_STATE]));
                    dispatch(setThinking(false));
                }, 500);
                break;
            case 'Dark Mode':
                dispatch(handleToggleTheme());
                break;
            case 'Light Mode':
                dispatch(handleToggleTheme());
                break;
            case 'Bookmarks':
                dispatch(handleShowBookmarks(true));
                break;
            default:
                break;
        }
    };

    return (
        <>
            <MobileNav
                showMenu={showHamburgerMenu}
                data={nav_items}
                handleHamburger={handleHamburgerMenu}
                onClick={handleOnClick}
                dispatch={dispatch}
                showBookmarks={showBookmarks}
                darkTheme={darkTheme}
            />
        </>
    );
}

export default Topbar;

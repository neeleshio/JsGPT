import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { INITIAL_DATA_STATE, nav_items } from '../../components/constants';
import MobileNav from '../../components/Navbar/mobile';
import { handleInputQuery, setThinking } from '../../redux/queryReducer';
import { handleToggleTheme } from '../../redux/themeReducer';

function Topbar() {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const handleHamburger = () => {
        setShowMenu((prev) => !prev);
    };

    const handleOnClick = (title) => {
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
            default:
                break;
        }
    };

    return (
        <>
            <MobileNav
                showMenu={showMenu}
                data={nav_items}
                handleHamburger={handleHamburger}
                onClick={handleOnClick}
            />
        </>
    );
}

export default Topbar;

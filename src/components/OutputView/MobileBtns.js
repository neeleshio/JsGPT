import React, { useState } from 'react';
import { INITIAL_DATA_STATE, nav_items } from '../constants';
import Bookmark from '../Svg/Bookmark';
import Hamburger from '../Svg/Hamburger';
import { darkThemeColors, lightThemeColors } from '../Tools/theme';
import { StyledMobileBtns } from './styles';
import { useDispatch } from 'react-redux';
import { handleInputQuery, setThinking } from '../../redux/queryReducer';
import { handleToggleTheme } from '../../redux/themeReducer';
import GptLogo from '../Svg/GptLogo';

function MobileBtns({ darkTheme }) {
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
        <StyledMobileBtns>
            <div className={showMenu ? 'mobilebtns__menu show-menu' : 'mobilebtns__menu'}>
                {nav_items({
                    fill: lightThemeColors.primary
                }).map((el) => (
                    <div onClick={() => handleOnClick(el.title)}>
                        {el.icon}
                        <span>{el.title === 'Clear Conversation' ? 'Clear' : el.title}</span>
                    </div>
                ))}
                <div className="mobilebtns__menu__bookmark">
                    <Bookmark stroke={'#000000'} />
                    <span>Bookmarks</span>
                </div>
            </div>
            <button onClick={handleHamburger}>
                <Hamburger stroke={'#ffffff'} />
            </button>
        </StyledMobileBtns>
    );
}

export default MobileBtns;

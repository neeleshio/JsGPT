import React from 'react';
import { StyledNavbar } from './styles';
import { INITIAL_DATA_STATE, nav_items, WELCOME_MSG } from '../constants';
import { darkThemeColors, lightThemeColors } from '../Tools/theme';
import { handleToggleTheme } from '../../redux/themeReducer';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputQuery, setThinking } from '../../redux/queryReducer';

function Navbar() {
    const dispatch = useDispatch();
    const { darkTheme } = useSelector((store) => store.themeReducer);

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
        <StyledNavbar>
            {nav_items({
                fill: darkTheme ? darkThemeColors.primary : lightThemeColors.primary
            }).map((el, idx) => (
                <button
                    onClick={() => handleOnClick(el.title)}
                    title={el.title === 'Login' && 'Feature not available yet!'}>
                    {el.icon}
                    <span>{el.title}</span>
                </button>
            ))}
        </StyledNavbar>
    );
}

export default Navbar;

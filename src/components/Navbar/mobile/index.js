import React from 'react';
import Bookmark from '../../../containers/Bookmark';
import Github from '../../Svg/Github';
import GptLogo from '../../Svg/GptLogo';
import Hamburger from '../../Svg/Hamburger';
import Menu from './menu';
import { StyledMobileNav } from './styles';

function MobileNav({
    showMenu,
    data,
    onClick,
    handleHamburger,
    dispatch,
    showBookmarks,
    darkTheme
}) {
    return (
        <>
            <StyledMobileNav>
                <div className="mobilenav__container">
                    <GptLogo />
                    <span className="logo-text">
                        JsGPT<span className="version">v1.3</span>
                    </span>
                </div>
                <div className="mobilenav__social__container">
                    <a
                        className="mobilenav__social"
                        href="https://github.com/neeleshio/JsGPT"
                        target="_blank"
                        rel="noreferrer">
                        <Github />
                    </a>
                    <button onClick={() => dispatch(handleHamburger())}>
                        <Hamburger stroke={'#ffffff'} />
                    </button>
                </div>
                <Menu showMenu={showMenu} data={data} onClick={onClick} darkTheme={darkTheme} />
                <div
                    className={
                        showBookmarks ? 'mobile-bookmark show-bookmarks' : 'mobile-bookmark'
                    }>
                    <Bookmark />
                </div>
            </StyledMobileNav>
        </>
    );
}

export default MobileNav;

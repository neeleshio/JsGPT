import React from 'react';
import Github from '../Svg/Github';
import GptLogo from '../Svg/GptLogo';
import Hamburger from '../Svg/Hamburger';
import { StyledMobileNav } from './styles';

function MobileNav() {
    return (
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
                <button>
                    <Hamburger stroke={'#ffffff'} />
                </button>
            </div>
        </StyledMobileNav>
    );
}

export default MobileNav;

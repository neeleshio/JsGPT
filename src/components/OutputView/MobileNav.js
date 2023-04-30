import React from 'react';
import Github from '../Svg/Github';
import GptLogo from '../Svg/GptLogo';
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
            <a
                className="mobilenav__social"
                href="https://github.com/neeleshio/JsGPT"
                target="_blank"
                rel="noreferrer">
                <Github />
            </a>
        </StyledMobileNav>
    );
}

export default MobileNav;

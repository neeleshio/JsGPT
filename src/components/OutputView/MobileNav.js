import React from 'react';
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
        </StyledMobileNav>
    );
}

export default MobileNav;

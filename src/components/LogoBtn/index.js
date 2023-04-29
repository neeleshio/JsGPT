import React from 'react';
import GptLogo from '../Svg/GptLogo';
import { StyledLogoBtn } from './styles';

function LogoBtn() {
    return (
        <StyledLogoBtn>
            <GptLogo />
            <span>JsGPT</span>
            <span className="version">v1.3</span>
        </StyledLogoBtn>
    );
}

export default LogoBtn;

import React from 'react';
import { StyledNavbar } from './styles';

function Navbar({ onClick, data, fill, darkTheme }) {
    return (
        <StyledNavbar>
            {data({ fill, darkTheme }).map((el) => (
                <button
                    onClick={() => onClick(el.title)}
                    title={el.title === 'Login' && 'Feature not available yet!'}>
                    {el.icon}
                    <span>{el.title}</span>
                </button>
            ))}
        </StyledNavbar>
    );
}

export default Navbar;

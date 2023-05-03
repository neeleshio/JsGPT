import React from 'react';
import Bookmark from '../../Svg/Bookmark';
import { StyledMobileMenu } from './styles';

function Menu({ showMenu, data, onClick }) {
    return (
        <StyledMobileMenu className={showMenu ? 'show-menu' : ''}>
            <div className="mobilebtns__menu">
                {data({ fill: '#000000' }).map((el) => (
                    <div onClick={() => onClick(el.title)}>
                        {el.icon}
                        <span>{el.title === 'Clear Conversation' ? 'Clear' : el.title}</span>
                    </div>
                ))}
                <div className="mobilebtns__menu__bookmark" onClick={() => onClick('Bookmarks')}>
                    <Bookmark stroke={'#000000'} />
                    <span>Bookmarks</span>
                </div>
            </div>
        </StyledMobileMenu>
    );
}

export default Menu;

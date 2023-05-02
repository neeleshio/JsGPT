import React from 'react';
import Chats from '../../containers/Chats';
import LeftBar from '../../containers/LeftBar';
import SearchBar from '../../containers/SearchBar';
import Topbar from '../../containers/Topbar';
import { StyledHome, LeftContainer, RightContainer } from './styles';

function Home() {
    return (
        <StyledHome>
            <LeftContainer>
                <LeftBar />
            </LeftContainer>
            <RightContainer>
                <Topbar />
                <Chats />
                <SearchBar />
            </RightContainer>
        </StyledHome>
    );
}

export default Home;

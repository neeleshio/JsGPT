import React from 'react';
import Chats from '../../containers/Chats';
import LeftBar from '../../containers/LeftBar';
import SearchBar from '../../containers/SearchBar';
import Topbar from '../../containers/Topbar';
import { StyledHome } from './styles';

function Home() {
    return (
        <StyledHome>
            <section className="left-section">
                <LeftBar />
            </section>
            <section className="right-section">
                <Topbar />
                <div className="chats-container">
                    <Chats />
                </div>
                <div className="searchbar-container">
                    <SearchBar />
                </div>
            </section>
        </StyledHome>
    );
}

export default Home;

import React from 'react';
import Bookmarks from '../../components/Bookmarks';
import LogoBtn from '../../components/LogoBtn';
import Navbar from '../../components/Navbar';
import OutputView from '../../components/OutputView';
import SearchBox from '../../components/SearchBox';
import { StyledHome } from './styles';

function Home() {
    return (
        <StyledHome>
            <div className="home__left-container">
                <Bookmarks />
                <Navbar />
                <LogoBtn />
            </div>
            <div className="home__right-container">
                <OutputView />
            </div>
        </StyledHome>
    );
}

export default Home;

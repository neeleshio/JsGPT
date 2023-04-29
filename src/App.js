import './App.css';
import Home from './containers/Home';
import { ThemeProvider } from 'styled-components';
import { darkThemeColors, lightThemeColors } from './components/Tools/theme';
import { useSelector } from 'react-redux';

function App() {
    const { darkTheme } = useSelector((state) => state.themeReducer);

    return (
        <div className="app">
            <ThemeProvider theme={darkTheme ? darkThemeColors : lightThemeColors}>
                <Home />
            </ThemeProvider>
        </div>
    );
}

export default App;

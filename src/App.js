import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import { useState } from 'react';
import SearchParams from "./SearchParams";
import Details from './Detail';
import ThemeContext from './ThemeContext';


const App = () => {
    const themeHook = useState('Peru');
    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
            <div>
                <header>
                    <Link to="/">Adoupt Me!</Link>
                </header>
                <Router>
                    <SearchParams path="/" />
                    <Details path ="/details/:id" />
                </Router>
                </div>
                </ThemeContext.Provider>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));


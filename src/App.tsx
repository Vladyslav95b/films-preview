import React from 'react';
import Header from './view/components/Header';

import Contacts from './view/components/Contacts';
import Features from './view/components/Feature';

import './assets/scss/bootstrap-grid.scss';
import Comments from './view/components/Comments';

function App() {
    return (
        <>
            <Header />
            <Contacts />
            <Features />
            <Comments />
        </>
    );
}

export default App;

import React from 'react';
import Navbar from './nav';
import SingleCountry from './singleCountry';


function MainComp() {
    return (
        <div className="App">
            <Navbar />
            <SingleCountry />
        </div>
    );
}

export default MainComp;
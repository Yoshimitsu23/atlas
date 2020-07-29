import React, { useEffect } from 'react';
import { getApi } from '../services/apiService';


function SingleCountry() {

    useEffect(() => {
        let url = "https://restcountries.eu/rest/v2/all";
        getApi(url)
            .then(data => {
                console.log(data);
            })
    });




    return (
        <div className="App">

        </div>
    );
}

export default SingleCountry;
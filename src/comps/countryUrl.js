import React, { useState, useEffect } from 'react';
import { getApi } from '../services/apiService';
import { Link } from 'react-router-dom'
function CountryUrl(props) {

    let [ country, setCountry ] = useState(null);
    let [ notFound, setNotFound ] = useState(false);

    useEffect(() => {

        if (props.match.url.includes("country")) {
            let currentC = props.match.url.split('/');
            console.log(currentC[ 2 ]);

            let url = `https://restcountries.eu/rest/v2/name/${currentC[ 2 ]}?fullText=true`
            getApi(url)
                .then(data => {
                    if (data.status === 404) return setNotFound(true);
                    getApi('https://restcountries.eu/rest/v2/all').then(all => {
                        let borders = all.filter(item => data[ 0 ].borders.includes(item.alpha3Code));
                        borders.map(item => {
                            let index = data[ 0 ].borders.indexOf(item.alpha3Code);
                            data[ 0 ].borders[ index ] = item.name;
                        })
                        setCountry(data[ 0 ])
                    })
                })
        }
        if (props.match.url.includes("code")) {
            let currentC = props.match.url.split('/');

            let url = `https://restcountries.eu/rest/v2/alpha/${currentC[ 2 ]}`
            getApi(url)
                .then(data => {
                    if (data.status === 404) return setNotFound(true);
                    getApi('https://restcountries.eu/rest/v2/all').then(all => {
                        let borders = all.filter(item => data.borders.includes(item.alpha3Code));
                        borders.map(item => {
                            let index = data.borders.indexOf(item.alpha3Code);
                            data.borders[ index ] = item.name;
                        })
                        setCountry(data)
                    })
                })
        }

    }, [ props.match.url ])

    return (
        <div>
            {notFound ?

                <h1>not found</h1> : country ?
                    <div className="d-flex">
                        <div className="col-lg-6">
                            <img src={country.flag} className="w-50" />
                        </div>
                        {country.borders.map((item, i) => <Link to={`/country/${item}`} key={i}>{item}</Link>)}
                    </div>
                    :
                    <h1>loading</h1>

            }
        </div>
    );
}

export default CountryUrl;
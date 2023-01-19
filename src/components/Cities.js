import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cities = () => {

    const [data, setData] = useState([])

    // se joue uniquement quand le composant est créé
    useEffect(() => {
        axios.get("https://geo.api.gouv.fr/communes").then((result) => {
            setData(result.data);
        })
    }, [])

    console.log(data);

    return (
        <div className='cities'>
            <ul>
                {
                    data.map((city, index) =>
                        // clé pour que la card soit unique dans la liste
                        <Card key={index} type="city" city={city} />
                    )
                }
            </ul>
        </div>
    );
};

export default Cities;
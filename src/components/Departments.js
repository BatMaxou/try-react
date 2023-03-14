import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Departments = () => {

    const [data, setData] = useState([])

    // se joue uniquement quand le composant est créé
    useEffect(() => {
        axios.get("https://geo.api.gouv.fr/departements").then((result) => {
            setData(result.data);
        })
    }, [])

    return (
        // <div className='cities'>
        <tbody>
            {
                data.map((ville, index) =>
                    // clé pour que la card soit unique dans la liste
                    <Card key={index} type="departments" city={ville} />
                )
            }
        </tbody>
        // </div>
    );
};

export default Departments;
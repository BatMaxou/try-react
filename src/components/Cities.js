import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cities = (props) => {
    /*
    *
    * Il reste 2 3 trucs à faire pour l'affichage
    * 
    */

    function sorted(data, options) {
        if ('ASC' === options['sort']) {
            // le .sort set la data automatiquement
            data.sort(
                (c1, c2) =>
                    (c1[options['column']] > c2[options['column']] ? 1 : (c1[options['column']] < c2[options['column']]) ? -1 : 0)
            )

        } else if ('DESC' === options['sort']) {
            data.sort(
                (c1, c2) =>
                    (c1[options['column']] < c2[options['column']] ? 1 : (c1[options['column']] > c2[options['column']]) ? -1 : 0)
            )
        }
    }

    const [data, setData] = useState([])

    // se joue uniquement quand le composant est créé
    useEffect(() => {
        axios.get(`https://geo.api.gouv.fr/departements/${props.id}/communes`).then((result) => {
            setData(result.data)
        })
    }, [])

    // on balaye le tableau en recuperant la clé puis sa valeur
    for (const [column, state] of Object.entries(props.sort)) {
        if (null !== state) {
            sorted(data, { 'column': column, 'sort': state })
        }
    }

    return (
        <tbody>
            {
                data.map((ville, index) =>
                    // clé pour que la card soit unique dans la liste
                    <Card key={index} type="city" city={ville} />
                )
            }
        </tbody>
    );
};

export default Cities;
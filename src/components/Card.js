import React from 'react';

// destructuration de country en { country } pour avoir directement accès à l'objet
const Card = (props) => {
    if (props.type === "country") {
        return (
            <li className="card">
                <img src={props.country.flags.svg} alt={"drapeau de : " + props.country.translations.fra.common} />
                <div className='infos'>
                    <h2>{props.country.translations.fra.common}</h2>
                    <h4>{props.country.capital}</h4>
                    {/* toLocaleString() permet de séparer les milliers */}
                    <p>Pop. {props.country.population.toLocaleString()}</p>
                </div>
            </li>
        );
    }
    else if (props.type === "departments") {
        return (
            <tr>
                <td>{props.city.code}</td>
                <td>{props.city.nom}</td>
                <td><a href={`/departments/${props.city.code}`}>voir plus</a></td>
            </tr>
        );
    }
    else if (props.type === "city") {
        return (
            <tr>
                <td>{props.city.codesPostaux[0]}</td>
                <td>{props.city.nom}</td>
                <td>{props.city.population}</td>
            </tr>
        );
    }
};

export default Card;
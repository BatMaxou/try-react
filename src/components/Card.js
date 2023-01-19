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
    else if (props.type === "city") {
        return (
            <li className="card">
                <div className='infos'>
                </div>
            </li>
        );
    }
};

export default Card;
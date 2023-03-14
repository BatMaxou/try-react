import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(36)
    const [selectedRadio, setSelectedRadio] = useState("World")
    const radios = ['Africa', 'North America', 'South America', 'Asia', 'Europe', 'Oceania', "World"]

    // se joue uniquement quand le composant est créé
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((result) => {
            setData(result.data);
        })
    }, [])

    const display = data
        .filter((country) => country.continents[0] === selectedRadio || selectedRadio === "World")

    // Trouver une alternative avec que des useState
    // Création de var et const pour éviter de 'set' une state et que la valeur de la state mette du temps à se mettre à jour => affichage plus rapide que la maj et donc l'ancienne valeur est affichée
    const maxRangeValue = display.length
    let displayRangeValue

    if (maxRangeValue < rangeValue) {
        displayRangeValue = maxRangeValue
    }
    else {
        displayRangeValue = rangeValue
    }

    return (
        <div className='countries'>
            <ul className="radio-container">
                <li>
                    <input type="range" id="range" min="1" max={maxRangeValue} value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                    <label htmlFor="range">{displayRangeValue}</label>
                </li>
                {radios.map((continent) => (
                    <li key={continent}>
                        {/* default checked à modifier avec une structure if (cela fonctionne pour l'instant car World est le dernier input radio) */}
                        <input type="radio" name="continentRadio" id={continent} defaultChecked
                            onClick={(e) => {
                                setSelectedRadio(e.target.id)
                            }} />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            <ul>
                {
                    display
                        .slice(0, rangeValue)
                        .map((country, index) =>
                            // clé pour que la card soit unique dans la liste
                            <Card key={index} type="country" country={country} />
                        )
                }
            </ul>
        </div>
    );
};

export default Countries;
import React from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import Cities from '../components/Cities';

const CitiesSearcher = () => {
    return (
        <div className='cities'>
            <Logo />
            <Navbar />
            <h1>En Travaux</h1>
            <img src="construction.png" alt="construction" />

            <Cities />

            <div>
                <table>
                    <th>Ville</th>
                    <th>Département</th>
                </table>
            </div>
        </div>
    );
};

export default CitiesSearcher;
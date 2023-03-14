import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div id="not-found">
            <h2>404</h2>
            <NavLink to="/">
                <p>Retourner en lieu sûr</p>
            </NavLink>
        </div>
    );
};

export default NotFound;
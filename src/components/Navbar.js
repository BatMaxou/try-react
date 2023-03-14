import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navigation">
            <ul>
                {/* si le lien correspond à la page alors on lui met la classe active sinon, on met rien */}
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/departments" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>En travaux</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;
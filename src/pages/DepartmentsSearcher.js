import React from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import Departments from '../components/Departments';

const DepartmentsSearcher = () => {
    return (
        <div className='cities'>
            <Logo />
            <Navbar />

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Numéro</th>
                            <th>Département</th>
                        </tr>
                    </thead>
                    <Departments />
                </table>
            </div>
        </div>
    );
};

export default DepartmentsSearcher;
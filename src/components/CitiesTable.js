import React, { useState } from 'react';
import Cities from './Cities';

const CitiesTable = (props) => {

    function sortChoice(columnClicked) {
        for (const [column, state] of Object.entries(sort)) {
            if (columnClicked === column) {
                if ('ASC' === state) {
                    sort[column] = 'DESC'
                } else {
                    sort[column] = 'ASC'
                }
            } else {
                sort[column] = null
            }
        }
        setSort({ ...sort })
    }

    const [sort, setSort] = useState({ 'codesPostaux': 'ASC', 'nom': null, 'population': null })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => { sortChoice('codesPostaux') }}>Code postal</th>
                        <th onClick={() => { sortChoice('nom') }}>Ville</th>
                        <th onClick={() => { sortChoice('population') }}>Population</th>
                    </tr>
                </thead>
                <Cities id={props.id} sort={sort} />
            </table>
        </div>
    )
}

export default CitiesTable

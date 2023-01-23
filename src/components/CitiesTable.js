import React, { useState } from 'react';
import { useEffect } from 'react';
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

    const [sort, setSort] = useState({ 'PC': 'ASC', 'City': null, 'Pop': null })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => { sortChoice('PC') }}>Code postal</th>
                        <th onClick={() => { sortChoice('City') }}>Ville</th>
                        <th onClick={() => { sortChoice('Pop') }}>Population</th>
                    </tr>
                </thead>
                <Cities id={props.id} sort={sort} />
            </table>
        </div>
    )
}

export default CitiesTable

import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error" >
            <p>No such page exists</p>
            <NavLink to="/">Back home</NavLink>
        </div>
    )
}

export default Error;

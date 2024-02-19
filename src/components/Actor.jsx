import React, { useState, useEffect } from 'react';
import useActorID from '../hooks/useActorID';

const Actor = ({ actorUrl }) => {
   const actor=useActorID(actorUrl)

    if (!actor) {
        return <li>No hay actores disponibles</li>;
    }

    return (
        <div>
            <p>{actor.name}</p>
            <img src={actor.image} alt={actor.name} />
        </div>
    );
}

export default Actor;

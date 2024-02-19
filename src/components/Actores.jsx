import React from 'react';

import useActors from '../hooks/useActors';

const Actores = () => {
    const actores = useActors();

    return (
        <div className='container'>
            <header>
                <h1>Actores:</h1>
            </header>
            <main>
                {actores.map(actor => (
                    <div key={actor.id}>
                        <p>{actor.name}</p>
                        <img src={actor.image}></img>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Actores;

import React from 'react';
import useCapituloID from '../hooks/useCapituloID';
import Actor from './Actor';

const ActoresCapitulos = () => {
    const episodio = useCapituloID();

    if (!episodio) {
        return <div>No hay episodios disponibles</div>;
    }

    return (
        <div>
            <h4>Actores del capitulo:</h4>
            <ul>
                {episodio.map(actorURL => (
                    <Actor key={actorURL} actorUrl={actorURL} />
                ))}
            </ul>
        </div>
    );
}

export default ActoresCapitulos;

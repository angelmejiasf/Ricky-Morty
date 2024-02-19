import React from 'react';
import { Link, Outlet } from "react-router-dom";

import useCapitulos from '../hooks/useCapitulos';


const Capitulos = () => {
    const capitulos=useCapitulos();
    
    return (
        <div>
            <header>
                <h1>Capitulos:</h1>
            </header>
            <main>
                {capitulos.map(capitulo => (
                    <div key={capitulo.id}>
                        <Link to={`actoresCapitulos/${capitulo.id}`} key={capitulo.id}>
                            <p>{capitulo.name}</p>
                        </Link>
                    </div>
                ))}
                <Outlet />
            </main>

        </div>
    );
}

export default Capitulos;

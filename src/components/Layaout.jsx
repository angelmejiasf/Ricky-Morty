import React from 'react';

import { Link, Outlet } from "react-router-dom";

const Layaout = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/capitulos">Capitulos</Link>
                <Link to="/actores">Actor</Link>
                

            </nav>
            

            <head>
                
                


            </head>



            <main>
            
                
                <Outlet />
            </main>


        </div>
    );
}

export default Layaout;

import { useState, useEffect } from "react";

import getActors from "../services/getActors";

function useActors() {
    const [actores, setActores] = useState([]);



    const datos = async () => {
        const actor = await getActors();
        setActores(actor.results);

    };
    useEffect(() => {
        datos();
    }, []);

    return actores;
}

export default useActors;
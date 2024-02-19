import { useState, useEffect } from "react";

import getCapitulos from "../services/getCapitulos";

function useCapitulos() {
    const [capitulos, setCapitulos] = useState([]);



    const datos = async () => {
        const capitulos = await getCapitulos();
        setCapitulos(capitulos.results);

    };

    
    useEffect(() => {
        datos();
    }, []);


    return capitulos;
}

export default useCapitulos;
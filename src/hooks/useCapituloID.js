import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import getCapitulosID from "../services/getCapitulosID";

function usecapituloID() {

    const [episodio, setEpisodio] = useState(null);
    const { id } = useParams();


    const datos = async () => {
        const episodio = await getCapitulosID(id);
        setEpisodio(episodio.characters)


    }
    useEffect(() => {
        datos();
    }, [id]);

    return episodio;


}

export default usecapituloID;
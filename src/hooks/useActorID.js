import { useState, useEffect } from "react";
import getActorID from "../services/getActorID";

function useActorID(actorURL) {
    const [actor, setActor] = useState(null);

    const fetchData = async () => {

        const actorData = await getActorID(actorURL);
        setActor(actorData);

    };

    useEffect(() => {


        fetchData();
    }, [actorURL]);

    return actor;
}

export default useActorID;

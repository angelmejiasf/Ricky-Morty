const getActorID = async (actorUrl) => {
    const results = await fetch(actorUrl);
    const actorData = await results.json();
    return actorData;
}

export default getActorID;

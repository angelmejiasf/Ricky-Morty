const getActors = async () => {

    const results = await fetch(`https://rickandmortyapi.com/api/character`);
    const actores = await results.json();
    return actores;



}

export default getActors;
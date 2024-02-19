const getCapitulosID = async (id) => {
    const results = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    const capitulo = await results.json();

    return capitulo;

}

export default getCapitulosID;


const getCapitulos= async ()=>{
    const results= await fetch("https://rickandmortyapi.com/api/episode");
    const capitulos= await results.json();

    return capitulos;

}

export default getCapitulos;
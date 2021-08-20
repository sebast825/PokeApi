// devuelve las caracteristicas del pokemon
const input = document.getElementById('input');


//recibe el valor del input y busca el valor que coincide
const searchPokemon=event=>{
    event.preventDefault();
    var valor = input.value;
    console.log(valor);
    
    const url = `https://pokeapi.co/api/v2/pokemon/${valor.toLowerCase()}` ;

    async function prom(){
        const rsta = await fetch(url);
        const data = await rsta.json();
        console.log(data);

        pokemonData(data);
        pokemonType(data);
    };
    prom();
};

//trae los datos del pokemon
const pokemonData= (data) =>{
    const {stats} = data;
    stats.forEach(a => {
        console.log(a.base_stat,a.stat.name);
    });    
};

//trae el tipo de pokemon
const pokemonType=(data)=>{
    const {types}=data
    types.forEach(a=>{
        console.log(a.type.name)
    })
}
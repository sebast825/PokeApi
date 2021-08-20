const input = document.getElementById('input');



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

const pokemonData= (data) =>{
    const {stats} = data;
    stats.forEach(a => {
        console.log(a.base_stat,a.stat.name);
    });    
};


const pokemonType=(data)=>{
    const {types}=data
    types.forEach(a=>{
        console.log(a.type.name)
    })
}
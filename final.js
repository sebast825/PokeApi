const input = document.getElementById('input');
const lista = document.getElementById('lista');
const pokeLista = document.getElementById('pokeLista');

const datosContenedor = document.getElementById('error');
const divImg = document.getElementById('divImg');
const nameDiv = document.getElementById('name');
const img = document.getElementById('img');
const numId = document.getElementById('numId');
const dataDiv = document.getElementById('data');
const stats = document.getElementById('stats');

//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// es para la busqueda recomendada
let pokeNames = [];

//pasa por todos los pokemones y devuelve  pokeName data.results
const filtro=  async ()=>{
    const url = `https://pokeapi.co/api/v2/pokemon-form/?offset=20&limit=1118`;

    const rsta = await fetch(url);
    const data = await rsta.json();
     //return atr(data.results,elemento)
    return pokeName(data.results);

}

//almacena todos los nombres en pokeNames

const pokeName = data=>{

    data.forEach(element => {
        
        pokeNames.push(element.name) ;
    });    
}

//busca en pokeNames las coincidencias con el input y las devuelve
const coincide = (elemento)=>{ 
    
    let matches = pokeNames.filter(dat=>{
        const regex = new RegExp(`^${elemento}`, 'gi');                
        return dat.match(regex);        
    });
    if (elemento==''){
        matches = [];
        //el de arriba limpia el js su el busador esta bacio 
        
    }
    outputHtml(matches);
};

//escrbe en el html
const outputHtml = matches =>{
    
        const html = matches.map(
            match =>           
            `<option  value="${match}"> ${match}  </option>`          
        )
   
     pokeLista.innerHTML=html    
};

input.addEventListener('input',()=>{
    coincide(input.value);     
});

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//recibe el valor del input y busca el valor que coincide
const searchPokemon=event=>{
    //lista limpia la lista recomendada
    pokeLista.innerHTML='';
    
    event.preventDefault();
    var valor = input.value;
    
    console.log(valor);
    
    const url = `https://pokeapi.co/api/v2/pokemon/${valor.toLowerCase()}` ;
    
    async function prom(){
        
        try{  
        
            const rsta = await fetch(url);
            const data = await rsta.json();
            console.log(data);
            const {types} = data
            pokemonData(data);
            pokemonType(types);
            imgColor(types);
            }
    catch{
        
        window.alert( `No pudimos encontrar tu pokemon, en caso de que tenga un "-" en su nombre. Prueba ingresar la primera parte del nombre`)
    }
    };
    prom();
};

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
    
};

//bakcground color de la img
const imgColor =types=>{

    const colorOne = typeColors[types[0].type.name];
    //primero pregunta si tiene un segundo typo, si no tiene utiliza el default
    const colorTwo = types[1] ? typeColors[types[1].type.name]: typeColors.default;
    divImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%) `;
    //le da el tamaño al fondo
    divImg.style.backgroundSize = ` 5px 5px `;
}

//trae el tipo de pokemon y su color 
const pokemonType = types => {
    stats.innerHTML=''
    types.forEach(type=>{
        const tipito = document.createElement('div');
        tipito.style.color = typeColors[type.type.name]
        tipito.innerHTML = type.type.name
        stats.appendChild(tipito)
    })
   
}

//trae los datos del pokemon
const pokemonData= (data) =>{    
    const {stats} = data;
    numId.textContent= `N° ${data.id} `
    dataDiv.innerHTML='';
    stats.forEach(a => {
        
        const pokeSta = document.createElement('div');
        const pokeNombre = document.createElement('div');
        const pokePunto = document.createElement('div');

        nameDiv.innerHTML = data.name.toUpperCase();
        img.setAttribute('src', data.sprites.front_default)

        pokeNombre.innerHTML = a.base_stat;
        pokePunto.innerHTML = a.stat.name;
        
        pokeSta.appendChild(pokePunto);
        pokeSta.appendChild(pokeNombre);
        
        dataDiv.appendChild(pokeSta); 
    });    
};


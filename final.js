const input = document.getElementById('input');
const lista = document.getElementById('lista');
const pokeLista = document.getElementById('pokeLista');

const nameDiv = document.getElementById('name');
const img = document.getElementById('img');
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
const atr = (elemento)=>{ 
    
    let matches = pokeNames.filter(dat=>{
        const regex = new RegExp(`^${elemento}`, 'gi');                
        return dat.match(regex);        
    });
    if (elemento==''){
        matches = [];
        //el de arriba limpia el js su el busador esta bacio y el de abajo el html
        lista.innerHTML='';
    }
    outputHtml(matches);
};

//escrbe en el html
const outputHtml = matches =>{
    
        const html = matches.map(
            match =>
            // console.log(match)
           
            // const option = document.createElement('option');
            // option.innerHTML=match
            // return option
            
        
             `<option  value="${match}"> ${match}  </option>`
            // `
            // <div class = "card card-body mb-1">
            //     <h4>${match} </h4>
               
            // </div>
            // `
        )
    // sin el join aparecen muy separados entre renglones 
    //  .join('');
     pokeLista.innerHTML=html
        
    // lista.innerHTML= html;
    // pokeLista.appendChild(html)
};

input.addEventListener('input',()=>{
    atr(input.value);
    
   
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
    console.log(data.species.name)
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

//trae el tipo de pokemon
const pokemonType=(data)=>{
    const {types}=data;
    stats.innerHTML=''
    types.forEach(a=>{

        const pokeTypes = document.createElement('div');
        pokeTypes.textContent = a.type.name;
        stats.appendChild(pokeTypes);
        console.log(a.type.name);        
    });
};
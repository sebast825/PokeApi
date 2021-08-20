// es para la busqueda recomendada
const inpu = document.getElementById('input');
const datos = document.getElementById('datos');


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
        datos.innerHTML='';
    }
    outputHtml(matches);
};

//escrbe en el html
const outputHtml = matches =>{
    
        const html = matches.map(
            match =>`
            <div class = "card card-body mb-1">
                <h4>${match} </h4>
               
            </div>
            `
        )
    // sin el join aparecen muy separados entre renglones 
    .join('');
    datos.innerHTML= html
};

inpu.addEventListener('input',()=>{
    atr(input.value);
});


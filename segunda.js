const inpu = document.getElementById('input');
const datos = document.getElementById('datos');

let pokeNames = [];
//pasa por todos los pokemones y devuelve  pokeName data.results
const filtro=  async elemento=>{
    
        
    const url = `https://pokeapi.co/api/v2/pokemon-form/?offset=20&limit=1117`;

    
    const rsta = await fetch(url);
    const data = await rsta.json();
    
     //return atr(data.results,elemento)
     return pokeName(data.results)

}

//almacena todos los nombres en pokeNames
filtro('u')
const pokeName = data=>{
    
    data.forEach(element => {
        pokeNames.push(element.name)
    });
    
}
//busca en pokeNames las coincidencias con el input y las devuelve
const atr = (elemento)=>{ 
    let matches = pokeNames.filter(dat=>{
        const regex = new RegExp(`^${elemento}`, 'gi');
        console.log(elemento)
        
            return dat.match(regex);
        
    })
    if (elemento==''){
        matches = [];
        //el de arriba limpia el js su el busador esta bacio y el de abajo el html
        datos.innerHTML='';
    }
    outputHtml(matches);
};

const outputHtml = matches =>{
    if(matches.length > 0){
        const html = matches.map(
            match =>`
            <div class = "card card-body mb-1">
                <h4>${match} </h4>
               
            </div>
            `
        )
    .join('');
    datos.innerHTML= html

    }
   
};

inpu.addEventListener('input',()=>{
    atr(input.value)
})


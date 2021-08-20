const input = document.getElementById('input');

const searchPokemon=(event)=>{
    event.preventDefault();
    console.log(input.value)
    const c = input.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${c.toLowerCase()}`;

    async function ja(){
        const rsta = await fetch(url);
        const data = await rsta.json();
        console.log(data);

        const {stats,types} = data;
        pokeStats(stats);
        pokeTypes(types)
    }
    ja()
}


const pokeStats= stats=>{
    stats.forEach(element => {
        console.log(element.base_stat, element.stat.name)
    });
}

const pokeTypes = types=>{
    types.forEach(element=>{
        console.log(element.type.name)
    })
}







const filtro=  async elemento=>{
    console.log(elemento)
    // var matches = name.filter(a =>{
   
    // const regEx = new RegExp(`^${elemento}`,'gi');
    //     return(a.name.match(regEx));
    // });
    
    const url = `https://pokeapi.co/api/v2/pokemon/`;

    
    const rsta = await fetch(url);
    const data = await rsta.json();
    const {forms}= data
    
    
    
    
//     data.forEach(name, ()=>{
//    console.log(name)})
    // await data.map(results=>{
    //     const {name} = results;
    //     console.log(name)
    // })
    // const {name} = data;
    // console.log(data);

    
    // await a.filter(c,()=>{
    //     const regEx = new RegExp(`^${elemento}`,'gi'); 
    //     return mapiado( c.name.match(regEx));

    // })   ;

    }
    

const atr = data=>{
    data.map(
        console.log('a')
    )
}


input.addEventListener('input',()=>{
    filtro(input.value)
})


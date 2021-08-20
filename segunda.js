const inpu = document.getElementById('input');
const datos = document.getElementById('datos');

let pokeNames = [];

const filtro=  async elemento=>{
    console.log(elemento)
        
    const url = `https://pokeapi.co/api/v2/pokemon-form/?offset=20&limit=1117`;

    
    const rsta = await fetch(url);
    const data = await rsta.json();
    
     return atr(data.results,elemento)
    // return otrasPags(data)

}
// filtro()
// const almacenarNombres = data =>{
//     data.forEach(e=>{
//         pokeNames.push(e)
//     })
// }

const atr = (data,elemento)=>{
    

    let matches = data.filter(dat=>{
        const regex = new RegExp(`^${elemento}`, 'gi');
        console.log(elemento)
        return dat.name.match(regex);
    })
    // data.forEach(dat => {
        
    //     console.log(dat.name,elemento);
// });
    // if (matches>=5){
        console.log(matches)
    // }
    
};


// const asd = (dat,elemento)=>{
//     dat.filter(d=>{
//         const regex = new RegExp(`^${elemento}`, 'gi');
//         return d.match(regex)
//     })    
// }






inpu.addEventListener('input',()=>{
    filtro(input.value)
})


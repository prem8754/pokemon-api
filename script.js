document.querySelector(`search`).addEventListener(`click`,getPokenmon);
function capitalizeFirstletter(string){
    return string.charAt(0).toUpper()+string.slice(1);
}


function lowerCaseName(string){
    return string.tolowerCase();
}


function getpokemon(e){
    const name=document.querySelector("#pokemonName").ariaValueMax;
    const pokemonName=lowerCaseName(string)
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
   .then(response.json())
   .then((data)=>{
     document.querySelector(".pokemonBox").innerHTML=`
     <div> 
         <img src="${data.sprites.others["offical-artwork"].front_default}" 
         alt="${capitalizeFirstletter(data.name)}"
     </div>
     <div class="pokemonInfo"> 
      <h1>${capitalizeFirstletter(data.name)}</h1>
      <p>weight:${data.weight}</p>
      </div>
      `;
 console.log(data);

   })
   .catch((err)=>{
       console.log("pokemon not found")
   });
}

getpokemon();
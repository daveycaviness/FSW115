// "https://pokeapi.co/api/v2/pokemon"

async function myFile() {
    try{
        const newConst = [] 
        const nameUrl = await axios.get("https://pokeapi.co/api/v2/pokemon/") 
        const result = await nameUrl
        for (i = 0; i < 3; i++) {
            newConst.push(axios.get(result.data.results[i].url))
        }
        Promise.all(newConst)
            .then(res => {
                    for (i = 0; i < res.length; i++) {
                        var myMain = document.querySelector("#pokeResults")
                        var pokeName = document.createElement("h2")
                        var pokeSprites = document.createElement("img")
                        
                        pokeName.textContent = res[i].data.name
                        pokeSprites.src = res[i].data.sprites.front_default
                        
                        myMain.appendChild(pokeName)
                        
                    
                        for (index = 0; index < res[i].data.abilities.length; index++){
                            var pokeAbilities = document.createElement("h3")
                            
                            pokeAbilities.textContent = res[i].data.abilities[index].ability.name
                            
                            myMain.appendChild(pokeAbilities)
                        }
                        
                        myMain.appendChild(pokeSprites)
                    }      
                
            })
            .catch(err => console.log(err))
    }    
    catch(err){
        console.log(err)
    }
        
}
myFile()  

  
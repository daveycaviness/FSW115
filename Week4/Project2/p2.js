//Pokemon Control
if(document.body.id == "pokePage"){
    document.querySelector("#submit").addEventListener("click", () => {
        if(document.querySelector("#myMain").childElementCount == 0){
            let loading = true;
            if(loading == true){
                document.querySelector("#submit").innerHTML = "Loading...Please wait";
            }
            axios.get("https://api.pokemontcg.io/v2/cards")
            .then(result => {
                result.data.data.forEach(function(element, index){
                    
                    var entryDiv = document.createElement("div")
                    var pokeName = document.createElement("h2")
                    var pokeImg = document.createElement("img")
                    
                    pokeName.textContent = result.data.data[index].name
                    pokeImg.setAttribute("src", result.data.data[index].images.small)
                    document.querySelector("#myMain").appendChild(entryDiv)
                    entryDiv.appendChild(pokeName)
                    entryDiv.appendChild(pokeImg)
                    
                })
                loading = false;
                if(loading == false){
                    document.querySelector("#submit").innerHTML = "Lets Go!";
                }
            })
            .catch(err => console.log(err))
        }
    })
}

 // Digimon Control
if (document.body.id == "digiPage"){
    document.querySelector("#digiSubmit").addEventListener("click", () => {
        if (document.querySelector("#digiMain").childElementCount == 0){
            axios.get("https://digimoncard.io/api-public/search.php?n=Agumon")
                .then(result =>{
                    result.data.forEach(function(element, index){

                        var entryDiv = document.createElement("div")
                        var digiName = document.createElement("h2")
                        var digiImg = document.createElement("img")

                        digiName.textContent = result.data[index].name
                        digiImg.setAttribute("src", result.data[index].image_url)
                        document.querySelector("#digiMain").appendChild(entryDiv)
                        entryDiv.appendChild(digiName)
                        entryDiv.appendChild(digiImg)   
                    })
                })
                .catch(err => console.log(err))
        }
    })
}




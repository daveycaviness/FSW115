let flexHeader = document.createElement("div")
document.body.appendChild(flexHeader);

let header = document.createElement("h1");
header.textContent = "Pokemon Characters!";
flexHeader.appendChild(header);

const xhr = new XMLHttpRequest();

xhr.open ("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhr.send();

xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200)
    {
        let apiData = JSON.parse(xhr.responseText)
        displayData(apiData.results);
    }
    else if(xhr.readyState == 4 && xhr.status !== 200)
    {
        let failed = document.createElement("h2");
        failed.textContent = "Sorry! API failed to load.";
        document.body.appendChild(failed);
    }
}

function displayData(data) {
    data.forEach(function(e, i) {
        let newEntry = document.createElement("h2");
        newEntry.textContent = data[i].name;
        document.body.appendChild(newEntry);

        let newList = document.createElement("ul");
        document.body.appendChild(newList);

        const xml = new XMLHttpRequest();
        xml.open ("GET",`https://pokeapi.co/api/v2/pokemon/${i+1}`, true);
        xml.send();

        xml.onreadystatechange = function(){
            if (xml.readyState == 4 && xml.status == 200)
            {
                let apiDetails = JSON.parse(xml.responseText)
                displayDetails(apiDetails.abilities);
            }
            else if(xml.readyState == 4 && xml.status !== 200)
            {
                let failed = document.createElement("li");
                failed.textContent = "Sorry! API Failed to load."
                newList.appendChild(failed);
            }
        }

        function displayDetails(data){
            data.forEach(function(e, i){
                let newListEntry = document.createElement("li");
                newListEntry.textContent = data[i].ability.name;
                newList.appendChild(newListEntry);
            })
        }
    });


}

//HML HTTP REQUEST STATE CHANGES

// //1 = sending
// //2 = reading
// //3 = reading
// //4 = retrieving


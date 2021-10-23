axios.get("http://api.bryanuniversity.edu/Davey/list/")
    .then(result =>{
        result.data.forEach(function(element, index){
            var myTask = document.createElement("h2")
            var myDesc = document.createElement("h3")
            myTask.textContent = result.data[index].name
            myDesc.textContent = result.data[index].description

            if(result.data[index].isComplete == true){
                myTask.setAttribute("style", "text-decoration: line-through")
                myDesc.setAttribute("style", "text-decoration: line-through")
            }

            document.body.appendChild(myTask)
            document.body.appendChild(myDesc)
        })
    })
    .catch(err => console.log(err))
    
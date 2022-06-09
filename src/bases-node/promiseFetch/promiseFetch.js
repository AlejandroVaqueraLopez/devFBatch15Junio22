'use strict'

const URL = "https://pokeapi.co/api/v2/";

const fetchData = (URL) => {
    return new Promise((resolve,reject)=>{
        fetch(URL)
            .then(response => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((err)=>{
                reject(err);
            });
    })
}

fetchData(URL)
    .then((response)=>{
        console.log(`This is an inside link of reponse, we get into this now => ${response.pokemon}`)
        fetchData(response.pokemon).then((data)=>{
            console.log(data)
        })
        .catch(err=>{
            console.error(err);
        });
    })
    .catch((err)=>{
        console.error(err);
    })


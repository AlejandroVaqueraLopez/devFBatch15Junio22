const axios = require("axios");
const URL = "http://localhost:5100/pokemons";

//post
axios({
	method:"POST",
	url:URL,
	data:{
		name:"newPokemon",
		power:"NewPower"
	}
})
	.then((response)=>{
		console.log(response.data);
	})
	.catch((err)=>{
		console.error(err);
	});

//put
axios({
	method:"PUT",
	url:URL,
	data:{
		id:1,
		name:"newPokemon",
		power:"NewPower"
	}
})
	.then((response)=>{
		console.log(response.data);
	})
	.catch((err)=>{
		console.error(err);
	});

//delete
axios({
	method:"DELETE",
	url:URL,
	data:{
		id:3
	}
})
	.then((response)=>{
		console.log(response.data);
	})
	.catch((err)=>{
		console.error(err);
	});


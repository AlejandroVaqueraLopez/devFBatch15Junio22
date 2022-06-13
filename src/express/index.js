const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
const axios = require("axios");
const pokeList = require("./fakeData.json");

/*
const cors = require("cors");

app.options("*",cors());
app.use(cors());
app.all("*",(req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers",
	"X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
	next();
});
*/

/* from a real API
let pokeList = "";

//geting the list of pokemons
const getPokeList = async () => {
	const data = await axios({
		method:"GET",
		url:"https://pokeapi.co/api/v2/pokemon/"
	})
	
	return data.data;
}
*/

app.use(bodyParser.json());

app.get("/",(req,res)=>{
	res.send("first page");
});

/*
//get without params
app.get("/pokemons",async (req,res)=>{
	//const data = await getPokeList();
	res.send(pokeList);
});
*/

//get with params
app.get("/pokemons/:id",async (req,res)=>{
	const filteredById = pokeList.find((item)=>{
		if(String(item.id) === req.params.id){
			return item;
		}
	});
	res.send([filteredById]);//send the filtered element
});

//get with query params (name=....)
app.get("/pokemons",async (req,res)=>{
	const {name} = req.query;

	console.log(name)
	const filteredByName = pokeList.find((item)=>{
		if(item.name === name){
			return item;
		}
	});

	res.send([filteredByName]);//send the filtered element
});

//post new object
app.post("/pokemons",async (req,res)=>{
	//const data = await getPokeList();
	const newObj = {
		id:(pokeList.length + 1),
		name: req.body.name,
		power: req.body.power
	}
	pokeList.push(newObj);
	res.send(pokeList);
});

//edit a new object
app.put("/pokemons",async (req,res)=>{
	//searchs for the object sended and edit its values
	pokeList.find((item)=>{
		if(item.id == req.body.id){
			item.name = "Edited";
			item.power = "Edited";
		}
	});

	res.send(pokeList);
});

//delete an object
app.delete("/pokemons",async (req,res)=>{
	//searchs for the object sended and edit its values
	console.log("element deleted = ",req.body.id);
	pokeList.splice([req.body.id - 1], 1);

	res.send(pokeList);
});

app.listen(5100,()=>console.log("ready on http://localhost:5100"));

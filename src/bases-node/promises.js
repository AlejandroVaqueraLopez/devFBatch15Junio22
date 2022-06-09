const Promesa = new Promise((resolve,reject) => {
	if(1>3){
		resolve("good");
	}else{
		reject("bad");
	}
});

Promesa
	.then((response)=>{
		console.log(response);
	})
	.catch((error)=>{
		console.error(error);
	});

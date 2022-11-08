fetch("https://jsonplaceholder.typicode.com/users")//it will return a promise so we need to carry on a then and a call back of response 
.then((response)=>response.json())//it will return a promise now 
.then((data)=>{
    for(let i in data){
        document.write(`${data[i].name} <br>`);
    }
})
.catch((error)=>document.write("error found"));



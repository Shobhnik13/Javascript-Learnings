async function test(){
// const x=await fetch('data.json');
// const y=await x.json();
// return y;
return (await fetch('data.json')).json();
}
test().then((res)=>{
console.log(res);
}).catch((error)=>{
console.log(error);
})
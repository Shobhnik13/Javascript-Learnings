var mymap=new Map();

mymap.set(0,"abcd");
mymap.set(1,"def");
mymap.set(2,"cd");;
mymap.set(3,"jkl");
mymap.set(4,"bhj");;
mymap.set(5,"xyz");

console.log(mymap);
for(let i of mymap.keys()){
    console.log(`key is ${i}`);
}
for(let j of mymap.values()){
    console.log(`value is ${j}`);
}
for(let [i,j] of mymap){
    console.log(`key is ${i} and value is ${j}`);
}
console.log(mymap.get(0));
console.log(mymap.has(0));
//giving spcae bw 2 strings
let str1='world';
let str2=' hello';
console.log(str2+' '+str1);
//concat strings
let demo='hello world'+' by shobhnik'
demo=demo.concat(str2);// concat in demo means attach str2 to demo string and updte it in demo   denmo=demo.concat(str1/str2)
console.log(demo);
//functions of string
console.log(demo.length)
console.log(demo.toUpperCase());
console.log(demo.toLowerCase())
console.log(demo);//this wi;l be same as previous and will not be changed by using upper lower case
console.log(demo[0]);//0 based indexing
console.log(demo.indexOf('world'));//will return the index romn where world is starting in demo string
//demo.indexOf('any string of demo');
console.log(demo.lastIndexOf('l'))
console.log(demo.endsWith(str2));//it will check that demo string ends with str2 or not
//demo.endswith(str2);
console.log(demo.includes('abc'));//false
console.log(demo.substring(0,3));//0 1 2 ->0 to n-1
console.log(demo.substring(-4));//will return full string in negative nos
console.log(demo.slice(-4));//will return last ke 4 ie ello
// slice and substring are identical just differ in -ve nos 
console.log(demo.replace('hello','hey'));
//replacs hell0 by hey(only applicabe to 1st occurences) 

let temp='abcd';
let temp1='xyz';
let tem='hello ${name}';
let myvar=34;
console.log(myvar,(typeof myvar))
//converting
myvar=String(34);// myvar=Strinh(no)  S should be capital
console.log(myvar,(typeof myvar))
let boolvar=String(true);
console.log(boolvar,(typeof boolvar))
let arr=String([1,2,3,4,5]);
//arr length means how many elements=5
//str length means ki kitne char h=9
console.log(arr,(typeof arr))
console.log(arr.length);
//another way to convert (i.toString())     in cpp its to_string(root)
 let i=8;
 console.log(i.toString(), (typeof i));


 //converting to num
 let str=Number('6767');
 console.log(str,(typeof str));
 let booleanvar=Number(true);
console.log(booleanvar,(typeof booleanvar))
//another
let abc=parseFloat('45.90876');
//parsefloat will be converting the abc string to exact numeric value same as string but number will convert to value without point ie 45 

console.log(abc.toFixed(20),(typeof abc))
//to fixed ==> abc.tofixed(value)  will help to put the numbers after decimal of the assigned value-CAN BE USED IN ECCOMERCE PRICE SECTION


//
//extracting all the links containing string named js
let string='js';
let a=document.links;
//created a array from all the links named a and before printing that we have to put a if condition to check ki if element .href.includesstring is yes then print element.href
Array.from(a).forEach(function(element){
    if(element.href.includes(string)){
        console.log(element.href)
    }
});
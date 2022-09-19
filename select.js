let element=document.getElementById('firstchild');
// element=element.parentNode
element.style.color='red';
element.innerText='abcd';
element.innerHTML='<b>abcd</b>'
// console.log(element.innerHTML);
let sel=document.querySelector('#firstchild');
sel=document.querySelector('.child');
sel=document.querySelector('h1');
sel=document.querySelector('div');
sel.style.color='green';
console.log(sel)

let ele=document.getElementsByClassName('child')
console.log(ele);
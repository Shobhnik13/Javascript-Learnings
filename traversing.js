let cont=document.querySelector('.container');
// console.log(cont.childNodes)
// console.log(cont.children)
cont=document.querySelector('.container')
let nodeName=cont.childNodes[2].nodeName;
let nodeType=cont.childNodes[1].nodeType; 
console.log(nodeType);

/*1.element
2.attribute
3.text nodeName
8.comment
9.document10.doctype*/
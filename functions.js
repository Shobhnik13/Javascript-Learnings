const myname=function(n){//function myname(n){}
   let ans=`hey my name is ${n}`;
return ans;
}
let n='shobhnik';
let val=myname(n);
console.log(val);

const obj= {
   name:'shobhnik',
   college:function(){
      return "mait";
   }
}
console.log(obj.college());
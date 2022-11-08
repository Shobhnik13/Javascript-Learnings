var User=function(name,count){
this.name=name;
this.count=count;
};
var hey=new User('shobhnik',2);
console.log(hey);
var hey1=new User('dakshloda',3);
console.log(hey1);
//when we use a variable named user 
//when we use this in arguements 
//we must use new at the time of calling like [new user('shobhnik',2);]
//we SHOULD NOT use functionname(arg) instead of use new at the time of using this in function so that new will create a copy of the user vala function for every new user
// console.log(globalThis.Math.random());

// "use strict"
// function greet(){
//     console.log(this);
// }
// greet();
// a=10;
// console.log(a);

// const obj={
//     name:"rohit",
//     age:20,
//     greet:function(){
//         console.log(this.name);
//     }
// }
// obj.greet();

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let a = new person("Rohit",20);
console.log(a.name);